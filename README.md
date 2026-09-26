# TransCreate — Autonomous Cultural Localization Studio for Developer Videos

> **Global developer releases that feel native. Code preserved. Culture adapted. Zero rework.**
>
> *IBM Bob 2.0 Hackathon — Developer Workflow Challenge | September 25–27, 2026 | $12,000 Prize Pool*

[![Live Demo](https://img.shields.io/badge/Live%20Demo-transcreate--ibm.vercel.app-success?style=flat-square&logo=vercel)](https://transcreate-ibm.vercel.app/)
[![Demo Video](https://img.shields.io/badge/Demo%20Video-YouTube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=-KjR6KmUScw)
[![IBM Bob 2.0](https://img.shields.io/badge/AI%20Dev%20Partner-IBM%20Bob%202.0-blue?style=flat-square)](https://bob.ibm.com)
[![IBM Granite](https://img.shields.io/badge/Model-IBM%20Granite%203.1%208B-orange?style=flat-square)](https://huggingface.co/ibm-granite/granite-3.1-8b-instruct)
[![React 19](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8.1-646cff?style=flat-square&logo=vite)](https://vitejs.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

---

## Live Application

| Resource | Link |
|---|---|
| **Live Demo** | https://transcreate-ibm.vercel.app/ |
| **Studio (main feature)** | https://transcreate-ibm.vercel.app/studio |
| **Demo Video (Product + Bob)** | https://www.youtube.com/watch?v=-KjR6KmUScw |
| **Public Repository** | https://github.com/DeepSaha25/TransCreate-IBM |
| **Hackathon** | IBM Bob 2.0 Hackathon — lablab.ai |

---

## Table of Contents

1. [Problem Statement](#the-developer-workflow-problem)
2. [Solution: TransCreate](#the-solution-transcreate)
3. [Key Features](#key-features)
4. [IBM Bob 2.0 — Usage & Sessions](#ibm-bob-20--usage--sessions)
5. [Architecture & Tech Stack](#architecture--tech-stack)
6. [AI Pipeline Deep Dive](#ai-pipeline-deep-dive)
7. [How to Run Locally](#how-to-run-locally)
8. [Sample Files](#sample-files)
9. [Project Structure](#project-structure)
10. [License](#license)

---

## The Developer Workflow Problem

When engineering, DevRel, and product teams prepare a global software release, localizing video assets is one of the highest-friction bottlenecks in the developer lifecycle:

| Problem | Impact |
|---|---|
| **Broken Code & Placeholders** | Standard MT tools corrupt `{userName}`, `npm run dev`, `$HOME` — causing runtime crashes and broken UIs |
| **Robotic Technical Media** | Literally-translated developer walkthroughs sound unnatural, leading to up to 90% re-recording rework |
| **Zero Pre-Release Cultural Linting** | No CI tooling exists to catch cultural taboos, offensive idioms, or slang blunders before production |
| **Massive Release Delays** | Third-party localization agencies add weeks and cost $5,000–$20,000 per release cycle |

---

## The Solution: TransCreate

**TransCreate** is an autonomous media localization studio designed specifically for developers. Instead of literal translation, it performs **cultural transcreation** — adapting the *technical and emotional intent* of developer scripts and subtitle files across 20 global cultures, while making token corruption **architecturally impossible**.

---

## Key Features

### Token Protection Pipeline
Before any text reaches the LLM, a 12-pattern regex engine extracts technical tokens — CLI commands, `{variable}` interpolations, file paths, version strings, URLs — replacing them with opaque `__TK0__` sentinels. After generation, tokens are rehydrated. The LLM *never sees* actual token content.

### Quality Estimation Engine
Without a reference translation, quality is estimated using four statistical signals:
- **Length Ratio** (30%) — prevents UI truncation
- **Token Survival Rate** (40%) — confirms code tokens survived intact
- **Vocabulary Richness / TTR** (15%) — measures linguistic variety
- **Shannon Character Entropy** (15%) — detects gibberish or repetition

Each line receives a score (0–100) and letter grade (A–F).

### IndexedDB Translation Memory
Every successful transcreation is cached in the browser's IndexedDB using an FNV-1a 32-bit hash key of `(source_text | source_culture | target_culture)`. Cache hits return instantly — zero API calls, zero latency.

### Cultural Risk Scanner
Scans every adapted line for cultural sensitivity, categorizing as:
- **Critical** — Likely to offend or confuse
- **Caution** — May require review
- **Safe** — Culturally appropriate

### Multi-Culture Parallel Comparison
Compare a single developer line across 20 target cultures simultaneously — Japanese, Hindi, French, German, Brazilian Portuguese, Swahili, and more.

### Cultural Glossary Generator
Extracts technical and cultural terms from your entire script and generates a full adaptation table across all target cultures.

### Web Speech API TTS Preview
Audition every transcreated line with native browser TTS, matched to the target culture's voice profile.

### SRT & JSON Export
One-click export to production-ready `.srt` subtitle files and `.json` glossaries.

---

## IBM Bob 2.0 — Usage & Sessions

> IBM Bob 2.0 was the co-architect of TransCreate — not a peripheral tool. It reduced debugging and architecture review time by an estimated **70%** during the 48-hour hackathon window.

### Session Overview

| # | Session Title | Bob Mode | Files Involved | Outcome |
|---|---|---|---|---|
| 1 | Repository Architecture & Context Mapping | Chat / Context | All files | Full repo structure and data flow mapped |
| 2 | Cultural Risk Scanner Pipeline Audit | Parallel Tasks | `langchainService.ts`, `AnalyticsView.tsx` | Zero bugs confirmed, chart data pipeline verified |
| 3 | SRT Parser & Document Understanding | Document Mode | `fileParser.ts`, `dev-release-demo.srt` | Millisecond timestamp parsing confirmed |
| 4 | End-to-End Data Flow Trace | Chat / Context | `tokenProtector.ts`, `translationMemory.ts`, `qualityEstimator.ts`, `langchainService.ts` | 4-stage pipeline verified with exact line numbers |

---

### Session 1 — Repository Architecture & Context Mapping

**Mode:** Chat / Context Mode

**Prompt submitted to IBM Bob 2.0:**
> *"Examine the TransCreate repository. Trace the complete data flow for a single subtitle line being processed through all services and components."*

**What Bob produced:**
- Mapped the full repository structure across all 50+ source files
- Identified all 5 AI functions in `langchainService.ts` and their Zod schemas
- Confirmed the Map-based state architecture and concurrency throttling strategy
- Verified that `transcript.ts` types flow correctly through all components

**Screenshot evidence:**

![IBM Bob Session 1 — Repository Architecture](Bob%20screnshots/session%201.png)

---

### Session 2 — Cultural Risk Scanner Pipeline Audit

**Mode:** Parallel Tasks Mode

**Prompt submitted to IBM Bob 2.0:**
> *"Run a parallel task to inspect `scanCulturalRisks()` in `langchainService.ts` and its visualization in `AnalyticsView.tsx`. Confirm risk levels flow correctly to Chart.js bar charts."*

**What Bob produced:**
- Verified the Zod enum `z.enum(['critical', 'caution', 'safe'])` correctly guards all LLM output
- Confirmed the Chart.js label/data/color index alignment is lossless
- Identified and validated the render guard preventing an all-zero chart before any scan runs
- **Verdict: No bugs found.**

**Screenshot evidence:**

![IBM Bob Session 2 — Cultural Risk Scanner Audit](Bob%20screnshots/session2.png)

![IBM Bob Session 2a — Chart.js Pipeline Detail](Bob%20screnshots/session2a.png)

---

### Session 3 — SRT Parser & Document Understanding

**Mode:** Document / Code Mode

**Prompt submitted to IBM Bob 2.0:**
> *"Inspect `samples/dev-release-demo.srt` and `src/utils/fileParser.ts`. Verify millisecond timestamp preservation, sequence index parsing, and multi-line dialogue joining."*

**What Bob produced:**
- Traced `parseSrt()` step-by-step with exact line numbers
- Confirmed comma-millisecond format (`00:00:01,000`) passes through untouched
- Confirmed multi-line dialogue joining via `parts.slice(2).join(' ')`
- Identified HTML tag stripping as an intentional correct design tradeoff for LLM input cleanliness

**Screenshot evidence:**

![IBM Bob Session 3 — SRT Parser Document Mode](Bob%20screnshots/session%203.png)

---

### Session 4 — End-to-End Data Flow Trace

**Mode:** Chat / Context Mode

**Prompt submitted to IBM Bob 2.0:**
> *"Trace 'run npm run dev and check {apiKey}' through all 4 pipeline stages: Token Protector → Translation Memory → Granite LLM → Quality Estimator. Cite exact line numbers."*

**What Bob produced — 4-Stage Trace:**

```
parseSrt()           ScriptLine { id, index, startTime, endTime, text }
     ↓
protect(text)        sanitised = "run __TK1__"
                     tokenMap  = { __TK0__: "{apiKey}", __TK1__: "npm run dev and check __TK0__" }
     ↓
tmGet(text,src,tgt)  FNV-1a hash → IndexedDB lookup
                     HIT  → return cached result instantly
                     MISS → call Granite with sanitised text ↓
     ↓
Granite LLM          Receives sanitised text, returns JSON with __TKn__ sentinels intact
     ↓
rehydrate(output)    __TK1__ → "npm run dev..." restored
     ↓
estimateQuality()    score = 0.30 + 0.40 + 0.135 + 0.132 = 0.967 → grade: A (Excellent)
     ↓
tmSet(...)           Writes result to IndexedDB for future cache hits
     ↓
onLineComplete()     TranscreatedLine { qeScore: 97, qeGrade: 'A', tmCacheHit, tokenSurvivalRate }
```

**Screenshot evidence:**

![IBM Bob Session 4 — End-to-End Data Flow Trace (s5)](Bob%20screnshots/s5.png)

![IBM Bob Session 4 — Quality Estimator Signal Breakdown (s6)](Bob%20screnshots/s6.png)

![IBM Bob Session 4 — FNV-1a Translation Memory Trace (s7)](Bob%20screnshots/s7.png)

![IBM Bob Session 4 — Token Protector Sentinel Verification (s8)](Bob%20screnshots/s8.png)

---

### Session 4 Detail — Full End-to-End Screenshot

![IBM Bob Session 4 Full — Pipeline Architecture Verified](Bob%20screnshots/session%204.png)

---

## Architecture & Tech Stack

```
   ┌──────────────────────────────────────────────────────┐
   │              Developer Transcript / .SRT             │
   └────────────────────────┬─────────────────────────────┘
                            │
                            ▼
   ┌──────────────────────────────────────────────────────┐
   │         Token Protection Pipeline                    │
   │   12-regex engine → __TK0__ sentinels                │
   └────────────────────────┬─────────────────────────────┘
                            │
                            ▼
   ┌──────────────────────────────────────────────────────┐
   │     IndexedDB Translation Memory (FNV-1a cache)      │
   │   HIT → instant return  |  MISS → call Granite       │
   └────────────────────────┬─────────────────────────────┘
                            │
                            ▼
   ┌──────────────────────────────────────────────────────┐
   │      IBM Granite 3.1 8B via HuggingFace Router       │
   │   LangChain PromptTemplate + Zod Schema Guard        │
   └────────────────────────┬─────────────────────────────┘
                            │
                            ▼
   ┌──────────────────────────────────────────────────────┐
   │        Quality Estimation Engine                     │
   │   Length Ratio + Token Survival + TTR + Entropy      │
   └────────────────────────┬─────────────────────────────┘
                            │
                            ▼
   ┌──────────────────────────────────────────────────────┐
   │              TransCreate Studio UI                   │
   │  ┌─────────────┐ ┌──────────────┐ ┌──────────────┐  │
   │  │  LineCards  │ │ Culture Grid │ │ Risk Analytics│  │
   │  └─────────────┘ └──────────────┘ └──────────────┘  │
   └────────────────────────┬─────────────────────────────┘
                            │
                            ▼
   ┌──────────────────────────────────────────────────────┐
   │    Export .SRT + Cultural Glossary .MD               │
   └──────────────────────────────────────────────────────┘
```

### Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript 6 + Vite 8 |
| Routing | React Router v7 |
| Styling | Vanilla CSS with Design Tokens (Dark Cinema & Warm Gold palette) |
| 3D / Visual | Three.js with custom GLSL Perlin noise shaders (`GLSLHills.tsx`) |
| AI Orchestration | `@langchain/core` (PromptTemplate + StructuredOutputParser) + Zod |
| LLM | IBM Granite 3.1 8B Instruct via Hugging Face Inference API |
| TTS | Web Speech API wrapped in `useSpeech.ts` |
| Charts | Chart.js + `react-chartjs-2` (Line, Doughnut, Bar) |
| Caching | IndexedDB via custom `translationMemory.ts` (FNV-1a hash keys) |
| Linting | Oxlint |
| Deployment | Vercel (CDN, SPA routing rewrites) |

---

## AI Pipeline Deep Dive

### Token Protection (`src/utils/tokenProtector.ts`)
```typescript
// Before LLM call
const { sanitised, tokenMap } = protect("run npm run dev and check {apiKey}")
// sanitised = "run __TK1__"
// tokenMap  = { __TK0__: "{apiKey}", __TK1__: "npm run dev and check __TK0__" }

// After LLM response
const result = rehydrate(llmOutput, tokenMap)
// All tokens restored exactly
```

### Translation Memory (`src/services/translationMemory.ts`)
```typescript
// Cache key = FNV-1a hash of "source_text|source_culture|target_culture"
const key = fnv1a("run npm run dev|en-US|fr-FR") // → "3f8a1c2b"
const cached = await tmGet(line.text, "en-US", "fr-FR") // null on miss
await tmSet(line.text, "en-US", "fr-FR", result)        // stores on success
```

### Quality Estimation (`src/utils/qualityEstimator.ts`)
```
Signal            Weight   Ideal Range
Length Ratio       30%     0.4 – 1.5× source length
Token Survival     40%     1.0 = all sentinels survived intact
Vocab Richness     15%     Type-Token Ratio (unique/total words)
Char Entropy       15%     Normalised Shannon entropy
                  ────
Final score 0–100, Grade A–F
```

---

## How to Run Locally

### Prerequisites
- Node.js 18+
- npm 9+

### 1. Clone & Install
```bash
git clone https://github.com/DeepSaha25/TransCreate-IBM.git
cd TransCreate-IBM
npm install
```

### 2. Configure Environment (Optional — App works fully in Demo Mode)
```bash
cp .env.example .env
```
Edit `.env`:
```env
VITE_HF_API_KEY=hf_your_token_here
VITE_HF_MODEL=ibm-granite/granite-3.1-8b-instruct
```
> If no API key is provided, the app runs on the built-in **mock fallback engine** with rich pre-crafted responses across all supported cultures.

### 3. Start Dev Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build for Production
```bash
npm run build
```

---

## Quick Demo Walkthrough

1. Open the **Studio** at `/studio`
2. Click **Load Developer Demo** inside the upload zone (loads `samples/ibm-bob-hackathon-demo.srt`)
3. Select **English (US)** → **French (France)** as the target culture
4. Click **Scan Cultural Risks** — see lines classified as Safe / Caution / Critical
5. Click **Transcreate All** — watch lines adapt with cultural rationale, QE scores, and token survival rates
6. Click the **speaker icon** on any card to audition TTS pronunciation
7. Switch to the **Compare** tab to see the same line across 6 cultures simultaneously
8. Open **Analytics** to view the QE Score Timeline, Risk Distribution, and Cache Hit Rate charts
9. Click **Export .SRT** to download the production-ready subtitle file

---

## Sample Files

| File | Description |
|---|---|
| `samples/dev-release-demo.srt` | 4-line developer release announcement (English) |
| `samples/ibm-bob-hackathon-demo.srt` | 3-line demo script for English → French walkthrough |
| `samples/hindi-dev-walkthrough.srt` | Hindi developer walkthrough script |
| `samples/hindi-demo.srt` | Short Hindi demo |
| `samples/english-slang.txt` | English developer slang test phrases |

---

## Project Structure

```
TransCreate-IBM/
├── src/
│   ├── pages/
│   │   ├── Landing.tsx           ← Home page with 3D GLSL hero
│   │   ├── Studio.tsx            ← Main workspace (core feature)
│   │   └── About.tsx             ← About & hackathon context
│   ├── components/
│   │   ├── layout/
│   │   │   └── Footer.tsx
│   │   ├── shared/
│   │   │   ├── GLSLHills.tsx     ← Three.js Perlin noise background
│   │   │   ├── Navbar.tsx
│   │   │   ├── FeaturesCards.tsx
│   │   │   └── MultiOrbitSemiCircle.tsx
│   │   └── studio/
│   │       ├── LineCard.tsx      ← Per-line transcreation card
│   │       ├── UploadZone.tsx    ← Drag-and-drop SRT upload
│   │       ├── AnalyticsView.tsx ← Chart.js dashboards
│   │       ├── CompareView.tsx   ← Multi-culture comparison grid
│   │       ├── GlossaryView.tsx  ← Cultural glossary table
│   │       └── RationaleDrawer.tsx
│   ├── services/
│   │   ├── langchainService.ts  ← All AI functions (IBM Granite 3.1)
│   │   ├── mockService.ts       ← Offline demo fallback engine
│   │   └── translationMemory.ts ← IndexedDB cache (FNV-1a)
│   ├── utils/
│   │   ├── tokenProtector.ts    ← 12-pattern token sentinel engine
│   │   ├── qualityEstimator.ts  ← 4-signal QE scoring
│   │   ├── fileParser.ts        ← SRT parser
│   │   └── exportFile.ts        ← SRT/JSON export
│   ├── hooks/
│   │   └── useSpeech.ts         ← Web Speech API TTS hook
│   └── types/
│       └── transcript.ts        ← Shared data models
├── samples/                     ← Demo SRT files
├── Bob screnshots/              ← IBM Bob 2.0 task session screenshots
│   ├── session 1.png            ← Session 1: Repo architecture
│   ├── session2.png             ← Session 2: Risk scanner audit
│   ├── session2a.png            ← Session 2: Chart.js pipeline
│   ├── session 3.png            ← Session 3: SRT parser trace
│   ├── session 4.png            ← Session 4: Full pipeline trace
│   ├── s5.png                   ← Session 4: QE signal breakdown
│   ├── s6.png                   ← Session 4: Token survival trace
│   ├── s7.png                   ← Session 4: FNV-1a cache trace
│   └── s8.png                   ← Session 4: Sentinel verification
├── BOB_SESSIONS.md              ← Full IBM Bob session documentation
├── HACKATHON_SUBMISSION.md      ← Complete submission kit
├── vercel.json                  ← Vercel SPA deployment config
├── .bobignore                   ← Protects secrets from Bob
└── .env.example                 ← Environment variable template
```

---

## Hackathon Submission

| Field | Value |
|---|---|
| **Hackathon** | IBM Bob 2.0 Hackathon — lablab.ai |
| **Challenge Track** | Developer Workflow |
| **Team** | Deep Saha (Solo) |
| **Submission Date** | September 26, 2026 |
| **Live Demo** | https://transcreate-ibm.vercel.app/ |
| **Demo Video** | https://www.youtube.com/watch?v=-KjR6KmUScw |
| **Repository** | https://github.com/DeepSaha25/TransCreate-IBM |
| **IBM Bob Evidence** | `Bob screnshots/` directory + `BOB_SESSIONS.md` |

---

## License

MIT License — compliant with IBM Bob 2.0 Hackathon and lablab.ai terms.

*Built solo by **Deep Saha** for the IBM Bob 2.0 Hackathon, September 2026.*