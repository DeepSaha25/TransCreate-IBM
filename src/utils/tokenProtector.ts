/**
 * tokenProtector.ts
 * Technical Token Protection Pipeline
 *
 * Before sending to the LLM, extract all technical tokens and replace
 * them with opaque sentinels (e.g. TK0). After the LLM returns, rehydrate
 * the sentinels back to the original values.
 */

export interface ProtectionResult {
  sanitised: string
  tokenMap: Map<string, string>
  count: number
}

const PATTERNS: RegExp[] = [
  /```[\s\S]*?```/g,
  /`[^`]+`/g,
  /<[A-Z][A-Za-z0-9.]+\s*\/?>/g,
  /<\/?[a-z][a-z0-9]*(?:\s+[^>]*)?\s*\/?>/g,
  /\{\{?[\w.\s|?:]+\}?\}/g,
  /%[\d.]*[sdifebcxo]/g,
  /\$\{[\w_]+\}|\$[A-Z_]{2,}/g,
  /https?:\/\/[^\s"'<>]+/g,
  /(?:^|\s)(npm|npx|yarn|pnpm|git|docker|kubectl|cargo|pip|python|node)\s+[^\n",.;?!]*/gm,
  /(?:\.{1,2}\/|\/|[A-Z]:\\)[\w\\/.\-]+\.\w{1,6}/g,
  /v?\d+\.\d+\.\d+(?:[-+][\w.]+)?/g,
]

export function protect(text: string): ProtectionResult {
  const tokenMap = new Map<string, string>()
  let counter = 0
  let sanitised = text

  for (const pattern of PATTERNS) {
    pattern.lastIndex = 0
    sanitised = sanitised.replace(pattern, (match) => {
      const trimmed = match.trim()
      if (trimmed.length < 2) return match
      const sentinel = `__TK${counter}__`
      tokenMap.set(sentinel, trimmed)
      counter++
      const leadingSpace = match.startsWith(' ') ? ' ' : ''
      return `${leadingSpace}${sentinel}`
    })
  }

  return { sanitised, tokenMap, count: counter }
}

export function rehydrate(text: string, tokenMap: Map<string, string>): string {
  let result = text
  for (const [sentinel, original] of tokenMap) {
    result = result.split(sentinel).join(original)
  }
  return result
}

export function tokenSurvivalRate(llmOutput: string, tokenMap: Map<string, string>): number {
  if (tokenMap.size === 0) return 1.0
  let survived = 0
  for (const sentinel of tokenMap.keys()) {
    if (llmOutput.includes(sentinel)) survived++
  }
  return survived / tokenMap.size
}
