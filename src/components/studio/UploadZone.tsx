import { useRef, useState } from 'react'
import { Upload } from 'lucide-react'
import './UploadZone.css'

interface Props {
  onFileUpload: (file: File) => void
}

const ACCEPTED = ['.srt', '.vtt', '.txt']

export default function UploadZone({ onFileUpload }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleFile = (file: File) => onFileUpload(file)

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }

  return (
    <div className="upload-wrap">
      <div
        className={`upload-zone ${isDragging ? 'upload-zone--drag' : ''}`}
        onClick={() => inputRef.current?.click()}
        onDragOver={e => { e.preventDefault(); setIsDragging(true) }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={onDrop}
        role="button"
        tabIndex={0}
        id="upload-zone"
        aria-label="Upload subtitle or script file"
        onKeyDown={e => e.key === 'Enter' && inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".srt,.vtt,.txt"
          onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f) }}
          style={{ display: 'none' }}
          aria-hidden="true"
        />

        <div className="upload-zone__icon">
          <Upload size={22} strokeWidth={1.5} />
        </div>

        <div className="upload-zone__text">
          <p className="upload-zone__heading">Drop your file here</p>
          <p className="upload-zone__sub">Supports {ACCEPTED.join(', ')} — or click to browse</p>
        </div>

        <div className="upload-zone__formats">
          {ACCEPTED.map(f => (
            <span key={f} className="upload-format">{f}</span>
          ))}
        </div>
      </div>

      <div className="upload-sample-buttons" style={{ display: 'flex', gap: '8px', marginTop: '12px', justifyContent: 'center' }}>
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={(e) => {
            e.stopPropagation();
            const devSample = `1\n00:00:01,000 --> 00:00:04,500\nAlright devs, in this release we finally crushed that nasty race condition in the auth pipeline!\n\n2\n00:00:05,000 --> 00:00:08,800\nNo more hacky workarounds or spaghetti code — we completely refactored the async state machine.\n\n3\n00:00:09,200 --> 00:00:13,000\nJust run npm run dev and the hot module replacement will work out of the box like a charm.\n\n4\n00:00:13,500 --> 00:00:17,800\nIf you hit any snag with the API tokens, ping us on Discord before pushing straight to prod.`;
            const file = new File([devSample], 'dev-release-demo.srt', { type: 'text/plain' });
            handleFile(file);
          }}
          style={{ fontSize: '11px', padding: '6px 12px' }}
        >
          ⚡ Load Developer Demo (.srt)
        </button>
        <button
          type="button"
          className="btn btn-ghost btn-sm"
          onClick={(e) => {
            e.stopPropagation();
            const hindiSample = `1\n00:00:12,000 --> 00:00:14,500\nEk dum mast scene hai yaar.\n\n2\n00:00:16,200 --> 00:00:19,000\nBhai, yeh toh bahut bada jugaad hai!\n\n3\n00:00:21,500 --> 00:00:24,000\nArrey, seedhi baat, no bakwaas!\n\n4\n00:00:26,100 --> 00:00:29,500\nChalo, dekhte hain aage kya hota hai.`;
            const file = new File([hindiSample], 'hindi-demo.srt', { type: 'text/plain' });
            handleFile(file);
          }}
          style={{ fontSize: '11px', padding: '6px 12px' }}
        >
          🎬 Load Film Demo (.srt)
        </button>
      </div>

      <p className="upload-note">
        No file? Click a sample above or paste raw dialog as a <code>.txt</code> — one line per subtitle.
      </p>
    </div>
  )
}
