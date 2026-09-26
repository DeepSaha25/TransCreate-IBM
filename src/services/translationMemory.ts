/**
 * translationMemory.ts
 * IndexedDB-backed Translation Memory (TM)
 *
 * Caches transcreation results keyed by FNV-1a hash of (text + sourceCulture + targetCulture).
 * On a cache hit, the API is skipped entirely — zero latency, zero cost.
 *
 * Uses raw IndexedDB (no deps) so the bundle stays lean.
 */

const DB_NAME = 'transcreate-tm'
const STORE_NAME = 'entries'
const DB_VERSION = 2 // bumped to purge stale wrong-language cache

/** FNV-1a 32-bit hash — fast, deterministic, no collisions on short strings */
function fnv1a(str: string): string {
  let h = 0x811c9dc5
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 0x01000193) >>> 0
  }
  return h.toString(16).padStart(8, '0')
}

function cacheKey(text: string, src: string, tgt: string): string {
  return fnv1a(`${src}|${tgt}|${text}`)
}

let dbPromise: Promise<IDBDatabase> | null = null

function openDB(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise
  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION)
    req.onupgradeneeded = () => {
      req.result.createObjectStore(STORE_NAME)
    }
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
  return dbPromise
}

export interface TMEntry {
  transcreated_text: string
  emotion_tag: string
  pronunciation_hint: string
  rationale: string
  confidence: string
}

export async function tmGet(text: string, src: string, tgt: string): Promise<TMEntry | null> {
  try {
    const db = await openDB()
    const key = cacheKey(text, src, tgt)
    return await new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly')
      const req = tx.objectStore(STORE_NAME).get(key)
      req.onsuccess = () => resolve(req.result ?? null)
      req.onerror = () => resolve(null)
    })
  } catch {
    return null
  }
}

export async function tmSet(text: string, src: string, tgt: string, entry: TMEntry): Promise<void> {
  try {
    const db = await openDB()
    const key = cacheKey(text, src, tgt)
    await new Promise<void>((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readwrite')
      tx.objectStore(STORE_NAME).put(entry, key)
      tx.oncomplete = () => resolve()
      tx.onerror = () => resolve()
    })
  } catch {
    // non-fatal — TM write failure should not block processing
  }
}

export async function tmSize(): Promise<number> {
  try {
    const db = await openDB()
    return await new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly')
      const req = tx.objectStore(STORE_NAME).count()
      req.onsuccess = () => resolve(req.result)
      req.onerror = () => resolve(0)
    })
  } catch {
    return 0
  }
}

export async function tmClear(): Promise<void> {
  try {
    const db = await openDB()
    await new Promise<void>((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readwrite')
      tx.objectStore(STORE_NAME).clear()
      tx.oncomplete = () => resolve()
      tx.onerror = () => resolve()
    })
  } catch {}
}
