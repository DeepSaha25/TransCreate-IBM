import Navbar from '../components/shared/Navbar'
import './About.css'

export default function About() {
  return (
    <div className="about">
      <Navbar />
      <div className="container about__content">
        <span className="section-label">IBM Bob 2.0 Hackathon · September 2026</span>
        <h1 className="about__title">About TransCreate</h1>

        <section className="about-section">
          <h2>The Developer Workflow Problem</h2>
          <p>
            When software engineering, DevRel, and product teams build for global audiences, localization is a major release bottleneck.
            Translating developer onboarding walkthroughs, product keynote demos, documentation, and i18n subtitle files typically takes weeks and costs thousands of dollars.
          </p>
          <p>
            Standard translation tools (like basic Google Translate) produce literal, robotic translations that corrupt technical terms,
            mangle code variables (e.g. <code>&#123;token&#125;</code>, <code>CLI flags</code>), and miss cultural nuances completely. A colloquial explanation of a
            "race condition workaround" becomes unintelligible or misleading when translated word-for-word into Japanese or Spanish.
          </p>
        </section>

        <div className="divider" />

        <section className="about-section">
          <h2>The Solution: Autonomous Developer Transcreation</h2>
          <p>
            <strong>TransCreate</strong> transforms the developer localization and release pipeline into an autonomous, culturally intelligent workflow.
            Instead of word-for-word translation, it localizes <em>developer intent</em>: preserving technical integrity and code placeholders while adapting idioms, tone, and humor to resonate natively with regional engineering communities.
          </p>
          <p>
            Built with <strong>IBM Bob 2.0</strong> as our full-context AI development partner and powered by <strong>IBM Granite</strong>, TransCreate audits dialogue for cultural translation risks, tags lines with voice delivery directions for voice-overs, and exports production-ready <code>.srt</code> assets in seconds.
          </p>
        </section>

        <div className="divider" />

        <section className="about-section">
          <h2>Technical Architecture</h2>
          <div className="about-arch">
            <div className="arch-block">
              <span className="arch-block__label">01 — Ingestion</span>
              <p>Developers upload <code>.srt</code>, <code>.vtt</code>, or raw <code>.txt</code> walkthrough transcripts. The parser extracts timestamps, sequence indices, and dialogue lines.</p>
            </div>
            <div className="arch-block">
              <span className="arch-block__label">02 — LangChain Orchestration</span>
              <p>A rolling 2-line context window preserves conversational flow across dialogue beats. A <code>PromptTemplate</code> enforces technical term preservation and cultural adaptation, verified by a Zod schema.</p>
            </div>
            <div className="arch-block">
              <span className="arch-block__label">03 — IBM Granite 3.1 & Bob 2.0</span>
              <p>Inference runs on <code>ibm-granite/granite-3.1-8b-instruct</code>, orchestrated through IBM Bob 2.0 developer agent workflows to manage code reviews and parallel pipeline tasks.</p>
            </div>
            <div className="arch-block">
              <span className="arch-block__label">04 — Structured Metadata</span>
              <p>Every line returns culturally native text, actor emotion delivery notes, phonetic pronunciation hints, risk levels (Critical, Caution, Safe), and rationale.</p>
            </div>
            <div className="arch-block">
              <span className="arch-block__label">05 — Production Export</span>
              <p>Generates industry-standard <code>.srt</code> and markdown cultural glossaries ready for immediate deployment in video pipelines or release packages.</p>
            </div>
          </div>
        </section>

        <div className="divider" />

        <section className="about-section">
          <h2>Technologies Used</h2>
          <div className="about-tech-grid">
            {[
              ['IBM Bob 2.0', 'AI development partner utilized with repository context, Agent mode, and parallel task workflows'],
              ['IBM Granite 3.1 8B Instruct', 'Primary open-weights LLM tuned for multi-cultural dialogue adaptation and code awareness'],
              ['LangChain.js (@langchain/core)', 'Prompt orchestration and StructuredOutputParser with Zod schema validation'],
              ['Zod', 'Schema definition and runtime validation for AI responses'],
              ['React 19 + TypeScript', 'Type-safe modern UI architecture with dark-mode design tokens'],
              ['Three.js + GLSL', 'Custom GPU vertex displacement shader for immersive landing visuals'],
              ['Chart.js', 'Real-time emotional arc visualization and developer cost/time savings metrics'],
              ['Web Speech API', 'Browser-native TTS for voice-over pronunciation preview across 20 locales'],
            ].map(([tech, desc]) => (
              <div className="about-tech-row" key={tech}>
                <code className="about-tech-row__name">{tech}</code>
                <span className="about-tech-row__desc">{desc}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
