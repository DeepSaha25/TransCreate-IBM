# TransCreate — Autonomous i18n & Media Localization Workflow for Developers

> **Global software releases that feel native. Code preserved. Culture adapted. Zero rework.**
> 
> *Built for the IBM Bob 2.0 Hackathon — Developer Workflow Challenge (September 25–27, 2026)*

[![IBM Bob 2.0](https://img.shields.io/badge/AI%20Dev%20Partner-IBM%20Bob%202.0-blue?style=flat-square)](https://bob.ibm.com)
[![IBM Granite](https://img.shields.io/badge/Model-IBM%20Granite%203.1-orange?style=flat-square)](https://huggingface.co/ibm-granite/granite-3.1-8b-instruct)
[![React 19](https://img.shields.io/badge/React-19-61dafb?style=flat-square)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178c6?style=flat-square)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8.1-646cff?style=flat-square)](https://vitejs.dev)

---

## ⚡ The Developer Workflow Problem

When engineering, DevRel, and product teams prepare a global software release, localizing application assets is one of the highest-friction bottlenecks:
1. **Broken Code & Placeholders:** Standard machine translation (e.g. Google Translate) corrupts variable interpolations (`{userName}`, `%s`, `<code>`), breaks CLI flags, and truncates UI buttons.
2. **Robotic Technical Media:** Onboarding walkthroughs, developer keynotes, and SDK tutorial videos sound robotic and confusing when translated literally, leading to 90% re-recording rework.
3. **Zero Pre-Release Cultural Linting:** Developers have CI linters for syntax and security, but no automated tooling to catch cultural taboos, offensive slang, or idiom blunders before pushing to production.
4. **Massive Release Delays:** Coordinating across localization agencies takes weeks and costs upwards of $5,000 to $20,000 per release cycle.

---

## 🚀 The Solution: TransCreate

**TransCreate** is an autonomous i18n and media localization studio for developers. Instead of literal translation, it performs **cultural transcreation** — translating the *technical and emotional intent* while preserving strict code syntax.

- 🛡️ **Code & Variable Preservation:** Automatically guards CLI commands, technical terms, and string placeholders while adapting colloquial speech.
- 🚦 **Cultural Risk Scanner:** Lints scripts and i18n transcripts for cultural translation risks (*Critical*, *Caution*, *Safe*) before deployment.
- 🎭 **Theatrical Emotion Delivery Tags:** Annotates every line with actor direction (`dry irony`, `warm familiarity`, `confrontational`) and phonetic pronunciation guides for localized voice-overs.
- 🌐 **Multi-Culture Parallel Comparison:** Compares lines across 20 global tech ecosystems simultaneously (US, UK, Japan, Brazil, Germany, Mexico, India, etc.).
- 📊 **Developer Velocity Analytics:** Real-time Chart.js telemetry showing emotional arc, word count drift (preventing UI truncation), and estimated cost/time savings.
- 💾 **Instant Subtitle & Glossary Export:** Exports ready-to-use `.SRT` subtitle tracks and markdown developer glossaries.

---

## 🤖 Built with IBM Bob 2.0

TransCreate was engineered from concept to deployment using **IBM Bob 2.0** as our full-context AI development partner:
- **Full Repository Context:** Bob 2.0 analyzed the end-to-end repository structure, maintaining seamless type synchronization between `transcript.ts`, `langchainService.ts`, and the React UI.
- **Agent Mode & Subagents:** Leveraged Bob 2.0's autonomous Agent mode to execute parallel tasks — auditing cultural risk parsing, refactoring the speech synthesis hook, and validating fallback services.
- **Prompt Architecture Tuning:** Tuned structured outputs with `@langchain/core` and Zod specifically for `ibm-granite/granite-3.1-8b-instruct`.
- **Credential Protection:** Safeguarded sensitive secrets using `.bobignore` to comply with IBM cloud security protocols.

---

## 🛠️ Architecture & Tech Stack

```
   ┌────────────────────────────────────────────────────────┐
   │              Developer Transcript / .SRT               │
   └───────────────────────────┬────────────────────────────┘
                               │
                               ▼
   ┌────────────────────────────────────────────────────────┐
   │           LangChain.js Rolling Context Engine          │
   │       • 2-Line Rolling Window   • Zod Schema Guard     │
   └───────────────────────────┬────────────────────────────┘
                               │
                               ▼
   ┌────────────────────────────────────────────────────────┐
   │       IBM Bob 2.0 Partner + IBM Granite 3.1 8B         │
   │     • Technical Term Retention  • Cultural Adaptation  │
   └───────────────────────────┬────────────────────────────┘
                               │
                               ▼
   ┌────────────────────────────────────────────────────────┐
   │                  TransCreate Studio                    │
   │  ┌──────────────┐ ┌──────────────┐ ┌────────────────┐  │
   │  │ Dual Editor  │ │ Compare Grid │ │ Risk Analytics │  │
   │  └──────────────┘ └──────────────┘ └────────────────┘  │
   └───────────────────────────┬────────────────────────────┘
                               │
                               ▼
   ┌────────────────────────────────────────────────────────┐
   │     Export Production .SRT + Cultural Glossary .MD     │
   └────────────────────────────────────────────────────────┘
```

- **Frontend:** React 19, TypeScript 6, Vite 8, React Router v7
- **Styling:** Vanilla CSS with Design Tokens (Dark Cinema & Warm Gold)
- **3D Graphics:** Three.js with custom GLSL Perlin noise vertex/fragment shaders
- **AI Orchestration:** LangChain (`@langchain/core`), Zod validation
- **AI Dev Partner & LLM:** IBM Bob 2.0, IBM Granite 3.1 8B Instruct
- **Voice Synthesis:** Web Speech API TTS with culture-specific voice matching
- **Data Visualization:** Chart.js + `react-chartjs-2`
- **Linting:** Oxlint

---

## 🏃 How to Run Locally

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/your-username/transcreate.git
cd transcreate
npm install
```

### 2. Configure Environment (Optional for Demo Mode)
The application features a built-in offline demo engine with rich mock responses. To connect live IBM Granite inference:
```bash
cp .env.example .env
```
Add your Hugging Face API key in `.env`:
```env
VITE_HF_API_KEY=hf_your_token_here
VITE_HF_MODEL=ibm-granite/granite-3.1-8b-instruct
```

### 3. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

---

## 🧪 Quick Test: Developer Release Script

1. Navigate to the **Studio** (`/studio`).
2. Click **⚡ Load Developer Demo (.srt)** inside the upload zone (or load `samples/dev-release-demo.srt`).
3. Click **Risk Scan** to audit lines for cultural translation risk.
4. Click **Transcreate All** to localize into Japanese, Spanish, Hindi, or British English.
5. Click the speaker icon to audition the pronunciation with browser TTS.
6. Click **Export .SRT** to download the finalized subtitle file.

---

## 📄 License
MIT License — compliant with IBM Hackathon & lablab.ai terms.

*Created by Deep Saha for the IBM Bob 2.0 Hackathon (September 2026)*
