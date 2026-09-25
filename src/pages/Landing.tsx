import { Link } from 'react-router-dom'
import { Code2, Video, GitPullRequest } from 'lucide-react'
import Navbar from '../components/shared/Navbar'
import { GLSLHills } from '../components/shared/GLSLHills'
import MultiOrbitSemiCircle from '../components/shared/MultiOrbitSemiCircle'
import FeaturesCards from '../components/shared/FeaturesCards'
import HowItWorksCards from '../components/shared/HowItWorksCards'
import { Footer } from '../components/layout/Footer'
import { OpenStudioButton } from '../components/shared/OpenStudioButton'
import './Landing.css'

const BROKEN_EXAMPLE = [
  { time: '00:00:01,000 → 00:00:04,500', text: '"Alright devs, we crushed that nasty race condition in the auth pipeline."' },
  { time: '00:00:05,000 → 00:00:08,800', text: '"No more hacky workarounds or spaghetti code — we refactored the async state machine."' },
  { time: '00:00:09,200 → 00:00:13,000', text: '"Just run npm run dev and the hot reload will work out of the box like magic!"' },
]

const GOOD_EXAMPLE = [
  { time: '00:00:01,000 → 00:00:04,500', text: '"डेवलपर्स, हमने ऑथ पाइपलाइन की उस बग को पूरी तरह ठीक कर दिया!" [excited]', note: 'Race condition & auth pipeline preserved; triumph naturalized to Hindi tech register' },
  { time: '00:00:05,000 → 00:00:08,800', text: '"अब कोई कामचलाऊ जुगाड़ नहीं — पूरे स्टेट मशीन को दुरुस्त किया।" [warm familiarity]', note: 'hacky workaround → कामचलाऊ जुगाड़ (natural Indian tech workplace idiom)' },
  { time: '00:00:09,200 → 00:00:13,000', text: '"बस npm run dev चलाएं और रीलोड मक्खन की तरह चलेगा!" [playful]', note: 'works like magic → मक्खन की तरह (smooth developer experience)' },
]

const TARGET_USERS = [
  {
    id: '01',
    role: 'Frontend & Full-Stack Dev',
    icon: <Code2 size={24} />,
    tagline: 'Ship localized apps without broken syntax.',
    pain: 'Translating i18n JSON and video walkthroughs with generic translators corrupts variable interpolations, truncates button labels, and breaks UI layout.',
    gains: ['Preserves code & {variables}', 'Word count drift analytics', 'Export-ready .srt and .json', '20 regional tech locales'],
    metric: '10x',
    metricLabel: 'faster i18n release cycles',
  },
  {
    id: '02',
    role: 'DevRel & Tech Evangelist',
    icon: <Video size={24} />,
    tagline: 'SDK demos that resonate globally.',
    pain: 'Technical walkthroughs, keynote demos, and onboarding tutorials sound robotic when translated literally, confusing international developers.',
    gains: ['Delivery hints & emotion tags', 'Phonetic pronunciation guide', 'Culture-specific coding idioms', 'Voice actor ready notes'],
    metric: '90%',
    metricLabel: 'reduction in tutorial dubbing rework',
  },
  {
    id: '03',
    role: 'Release & Localization Lead',
    icon: <GitPullRequest size={24} />,
    tagline: 'Automate cultural QA before production.',
    pain: 'Accidental cultural faux pas or offensive colloquialisms slip through PRs, causing reputational damage in overseas software markets.',
    gains: ['Automated cultural risk scanner', 'Multi-culture parallel compare', 'Technical glossary extraction', 'Seamless pre-release auditing'],
    metric: '0',
    metricLabel: 'cultural regressions in production',
  },
]

const STATS = [
  { value: '10x', label: 'Faster localization release cycles' },
  { value: '$0', label: 'Cost to run on IBM Granite & Bob free tier' },
  { value: '20', label: 'Global tech ecosystems supported' },
]

export default function Landing() {
  return (
    <div className="landing">
      <Navbar />

      {/* ── Hero ── */}
      <section className="hero hero--fullscreen">
        <GLSLHills />
        <div className="hero__overlay" />

        <div className="hero__stage hero__stage--split">

          {/* ── LEFT ── */}
          <div className="hero__copy">
            <span className="hero__eyebrow">IBM Bob 2.0 · Developer Workflow AI</span>

            <h1 className="hero__headline">
              Software<br />
              releases that<br />
              feel <span className="gradient-text">native.</span>
            </h1>

            <p className="hero__sub">
              Autonomous i18n & Media Localization.<br />Not literal translation.
            </p>

            <div className="hero__ctas">
              <Link to="/studio" id="hero-cta-primary" style={{ textDecoration: 'none' }}>
                <OpenStudioButton text="Open Studio — free" />
              </Link>
              <a href="#how-it-works" className="btn btn-ghost btn-lg" id="hero-cta-secondary">
                How it works
              </a>
            </div>

            <div className="stat-row">
              {STATS.map(s => (
                <div key={s.label} className="stat-block">
                  <span className="stat-block__value">{s.value}</span>
                  <span className="stat-block__label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Terminal card ── */}
          <div className="hero__visual" aria-hidden="true">
            <div className="tc-preview">
              <div className="tc-preview__chrome">
                <span className="tc-dot tc-dot--red" /><span className="tc-dot tc-dot--yellow" /><span className="tc-dot tc-dot--green" />
                <span className="tc-preview__chrome-label">transcreate · live output</span>
                <span className="tc-pulse" style={{ marginLeft: 'auto' }} />
              </div>

              <div className="tc-preview__body">
                <div className="tc-source-row">
                  <span className="tc-lang">EN</span>
                  <div className="tc-row__content">
                    <p className="tc-source__text">"Crushed that nasty race condition in the auth pipeline."</p>
                  </div>
                </div>

                <div className="tc-outputs">
                  <div className="tc-row tc-row--1">
                    <span className="tc-lang tc-lang--out">ES</span>
                    <div className="tc-row__content">
                      <p className="tc-row__text">"¡Liquidamos esa molesta condición de carrera en el pipeline!"</p>
                      <span className="tc-row__tag">entusiasmado · Latino Dev</span>
                    </div>
                  </div>
                  <div className="tc-row tc-row--2">
                    <span className="tc-lang tc-lang--out">HI</span>
                    <div className="tc-row__content">
                      <p className="tc-row__text">"डेवलपर्स, ऑथ पाइपलाइन की उस भयंकर बग को दुरुस्त कर दिया!"</p>
                      <span className="tc-row__tag">उत्साहित · India Dev</span>
                    </div>
                  </div>
                  <div className="tc-row tc-row--3">
                    <span className="tc-lang tc-lang--out">JA</span>
                    <div className="tc-row__content">
                      <p className="tc-row__text">"認証パイプラインの厄介なレースコンディションを完全解消！"</p>
                      <span className="tc-row__tag">自信 · Japan Dev</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="divider" />

      {/* ── Problem / Proof Section ── */}
      <section className="proof-section">
        <div className="container">
          <span className="section-label">The Problem</span>
          <h2 className="proof-section__headline">
            Literal translation breaks technical meaning and cultural nuance
          </h2>
          <p className="proof-section__sub">
            This is the same three-line product walkthrough & engineering script — localized across languages. Generic machine translation breaks technical metaphors, while TransCreate preserves code accuracy and natural delivery.
          </p>

          <div className="proof-grid">
            {/* Bad example */}
            <div className="proof-card proof-card--bad">
              <div className="proof-card__header">
                <h3 className="proof-card__title">Google Translate</h3>
                <span className="proof-card__subtitle">Literal Machine Translation</span>
              </div>
              <div className="proof-lines">
                {BROKEN_EXAMPLE.map((line, i) => (
                  <div className="proof-line" key={i}>
                    <span className="proof-line__time">{line.time}</span>
                    <span className="proof-line__text proof-line__text--bad">{line.text}</span>
                  </div>
                ))}
              </div>
              <p className="proof-card__verdict">Awkward mechanical phrasing. Corrupts technical idioms. Alienates global developers.</p>
            </div>

            {/* Good example */}
            <div className="proof-card proof-card--good">
              <div className="proof-card__glow" />
              <div className="proof-card__header">
                <h3 className="proof-card__title proof-card__title--gold">TransCreate AI</h3>
                <span className="proof-card__subtitle">Powered by IBM Bob 2.0 & Granite 3.1</span>
              </div>
              <div className="proof-lines">
                {GOOD_EXAMPLE.map((line, i) => (
                  <div className="proof-line" key={i}>
                    <span className="proof-line__time">{line.time}</span>
                    <span className="proof-line__text proof-line__text--good">{line.text}</span>
                    <span className="proof-line__note">{line.note}</span>
                  </div>
                ))}
              </div>
              <p className="proof-card__verdict">Sounds authentic to regional engineering teams while preserving every technical variable.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <FeaturesCards />

      <div className="divider" />

      {/* ── How it works ── */}
      <HowItWorksCards />

      <div className="divider" />

      {/* ── Who is it for ── */}
      <section className="users-section" id="who-its-for">
        <div className="container">
          <span className="section-label">Who it's for</span>
          <h2 className="users-section__headline">Built for every creative in the pipeline</h2>
          <p className="users-section__sub">From the filmmaker who shot the footage to the voice director who records the dub — TransCreate fits every stage of the multilingual production workflow.</p>

          <div className="users-grid">
            {TARGET_USERS.map(user => (
              <div className="user-card" key={user.id}>
                <div className="user-card__glow" />
                
                <div className="user-card__header">
                  <div className="user-card__icon-wrapper">
                    <span className="user-card__icon">{user.icon}</span>
                  </div>
                  <div className="user-card__header-text">
                    <span className="user-card__id">{user.id}</span>
                    <h3 className="user-card__role">{user.role}</h3>
                    <p className="user-card__tagline">{user.tagline}</p>
                  </div>
                </div>

                <div className="user-card__body">
                  <div className="user-card__pain-section">
                    <div className="user-card__pain-tag">Current state</div>
                    <p className="user-card__pain">{user.pain}</p>
                  </div>

                  <div className="user-card__gains-section">
                    <div className="user-card__gains-tag">With TransCreate</div>
                    <ul className="user-card__gains">
                      {user.gains.map((g, i) => (
                        <li key={i} className="user-card__gain">
                          <svg className="user-card__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          {g}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="user-card__footer">
                  <span className="user-card__metric-value">{user.metric}</span>
                  <span className="user-card__metric-label">{user.metricLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── Built With ── */}
      <MultiOrbitSemiCircle />

      {/* ── Footer ── */}
      <Footer />
    </div>
  )
}
