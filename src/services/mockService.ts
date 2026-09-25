import type { CultureKey } from '../types/transcript'

interface MockResult {
  transcreated_text: string
  emotion_tag: string
  pronunciation_hint: string
  rationale: string
  confidence: 'high' | 'medium' | 'low'
}

/**
 * Rich culturally-specific mock responses for demo mode.
 * Organized by target culture key with realistic adaptations.
 */
const MOCK_POOLS: Record<string, MockResult[]> = {
  'hi-IN': [
    {
      transcreated_text: 'यार, ये तो बिल्कुल पागलपन है — मुझे यकीन ही नहीं हो रहा कि ये हो रहा है।',
      emotion_tag: 'excited',
      pronunciation_hint: '\"यार\" — yaar (दोस्त के लिए), \"पागलपन\" — paa-gal-pan',
      rationale: 'Informal Hindi exclamation matching the casual disbelief of the source. \"यार\" mirrors the camaraderie of casual address.',
      confidence: 'high',
    },
    {
      transcreated_text: 'देखो, मैं समझता हूँ — कभी-कभी जो करना पड़े वो करना पड़ता है।',
      emotion_tag: 'warm familiarity',
      pronunciation_hint: 'Conversational Hindi, natural cadence on \"करना पड़ता है\"',
      rationale: 'Hindi fatalistic acceptance phrase, culturally resonant for resigned pragmatism.',
      confidence: 'high',
    },
    {
      transcreated_text: 'सच में? मुझे नहीं पता था कि चीज़ें इतनी उलझ सकती हैं।',
      emotion_tag: 'melancholic',
      pronunciation_hint: '\"सच में\" — sach mein, with slight pause for dramatic effect',
      rationale: '\"सच में?\" is a natural Hindi opener for genuine surprise and vulnerability.',
      confidence: 'medium',
    },
    {
      transcreated_text: 'ठीक है, बात ये है — किसी ने ये आते हुए नहीं देखा था।',
      emotion_tag: 'tense',
      pronunciation_hint: 'Quick delivery, emphasis on \"किसी ने नहीं\"',
      rationale: 'Direct Hindi narrative pivot phrase, matching the dramatic storytelling beat.',
      confidence: 'high',
    },
    {
      transcreated_text: 'यार, झूठ नहीं बोलूंगा — ये पूरी situation बहुत बड़ा गड़बड़झाला है।',
      emotion_tag: 'confrontational',
      pronunciation_hint: 'Drop voice on \"गड़बड़झाला\", exasperated tone',
      rationale: '\"झूठ नहीं बोलूंगा\" (won\'t lie) mirrors American blunt honesty; \"गड़बड़झाला\" captures messy chaos vividly.',
      confidence: 'high',
    },
    {
      transcreated_text: 'रुको एक सेकंड — सच में? अभी?',
      emotion_tag: 'excited',
      pronunciation_hint: 'Rising pitch on \"सच में\", incredulous delivery',
      rationale: '\"रुको\" (hold up) and the repeated disbelief structure mirrors informal Hindi shock response.',
      confidence: 'high',
    },
  ],
  'en-US': [
    {
      transcreated_text: "Man, this is absolutely wild — I can't believe this is happening.",
      emotion_tag: 'excited',
      pronunciation_hint: 'Stress on "wild" and "happening"',
      rationale: 'The Hindi casual exclamation was adapted to American casual register. "Wild" captures the informal disbelief common in US speech.',
      confidence: 'high',
    },
    {
      transcreated_text: "Look, I get it — sometimes you just gotta do what you gotta do.",
      emotion_tag: 'warm familiarity',
      pronunciation_hint: 'Slight drawl on "gotta", conversational pace',
      rationale: 'The source used a Hindi fatalistic idiom. The American equivalent carries the same resigned acceptance.',
      confidence: 'high',
    },
    {
      transcreated_text: "Honestly? I had no idea things could get this complicated.",
      emotion_tag: 'melancholic',
      pronunciation_hint: 'Slight pause after "Honestly?" for dramatic beat',
      rationale: '"Honestly?" as a conversation opener is a natural American way to express genuine surprise with vulnerability.',
      confidence: 'medium',
    },
    {
      transcreated_text: "Okay, so here's the thing — nobody saw this coming.",
      emotion_tag: 'tense',
      pronunciation_hint: 'Quick delivery, emphasis on "nobody"',
      rationale: '"Here\'s the thing" is a quintessential American storytelling pivot phrase signaling a reveal.',
      confidence: 'high',
    },
    {
      transcreated_text: "Dude, I'm not even gonna lie — this whole situation is a mess.",
      emotion_tag: 'confrontational',
      pronunciation_hint: 'Drop voice slightly on "mess", exasperated tone',
      rationale: '"Not gonna lie" is a distinctly American hedging phrase used for blunt honesty, matching the source\'s directness.',
      confidence: 'high',
    },
    {
      transcreated_text: "Wait, hold up — are you serious right now?",
      emotion_tag: 'excited',
      pronunciation_hint: 'Rising pitch on "serious", incredulous delivery',
      rationale: '"Hold up" and "are you serious right now" are natural American expressions of disbelief used in casual confrontation.',
      confidence: 'high',
    },
    {
      transcreated_text: "I'll be honest, I didn't see any of this coming.",
      emotion_tag: 'melancholic',
      pronunciation_hint: 'Measured, reflective pace, soft landing on "coming"',
      rationale: 'A composed American expression of being caught off guard, replacing the Hindi source\'s more animated phrasing with understated sincerity.',
      confidence: 'medium',
    },
    {
      transcreated_text: "Let's just say things didn't exactly go according to plan.",
      emotion_tag: 'dry irony',
      pronunciation_hint: 'Flat, wry delivery — slight smile implied in "exactly"',
      rationale: 'American deadpan understatement to express a failed plan, mirroring the source\'s ironic resignation.',
      confidence: 'high',
    },
  ],
  'en-GB': [
    {
      transcreated_text: "Right, this is rather a lot to take in, isn't it?",
      emotion_tag: 'dry irony',
      pronunciation_hint: 'Slight rise on "isn\'t it?" — typical British tag question',
      rationale: 'British understatement replaced the source\'s hyperbole. "Rather a lot to take in" carries the same meaning with classic British reserve and implied irony.',
      confidence: 'high',
    },
    {
      transcreated_text: "Brilliant. Absolutely brilliant. I cannot believe this.",
      emotion_tag: 'dry irony',
      pronunciation_hint: 'Flat delivery on both "brilliant"s — sarcastic British register',
      rationale: 'The source expressed frustration. British sarcasm using "brilliant" is the most culturally authentic equivalent, widely understood without explanation.',
      confidence: 'high',
    },
  ],
  'ja-JP': [
    {
      transcreated_text: 'しょうがない… これが運命というものか。',
      emotion_tag: 'melancholic',
      pronunciation_hint: '"Shouganai" — sho-ga-na-i (4 syllables, descending pitch)',
      rationale: 'The concept of "shoganai" (it cannot be helped) deeply resonates with the Japanese cultural concept of accepting fate. This replaces a direct Hindi resignation phrase with a culturally embedded equivalent.',
      confidence: 'high',
    },
    {
      transcreated_text: 'すごいな… 本当にすごい。',
      emotion_tag: 'reverent',
      pronunciation_hint: '"Sugoi na" — emphasis on second "sugoi" with soft trailing note',
      rationale: '"Sugoi" in its doubled form expresses genuine awe in informal Japanese speech. The trailing "na" adds a personal, reflective quality matching the source\'s tone.',
      confidence: 'high',
    },
  ],
  'es-MX': [
    {
      transcreated_text: '¡No manches, esto sí está de locos!',
      emotion_tag: 'excited',
      pronunciation_hint: '"No manches" — no MAN-ches, exclamatory',
      rationale: '"No manches" is Mexico\'s preferred strong exclamation of disbelief (softer than the full vulgarity). It perfectly matches the informal surprise of the source line.',
      confidence: 'high',
    },
    {
      transcreated_text: 'Pues ni modo, así es la vida.',
      emotion_tag: 'warm familiarity',
      pronunciation_hint: 'Relaxed, resigned tone. "Ni modo" — nee MO-do',
      rationale: '"Ni modo" is a deeply Mexican expression of resigned acceptance with warmth, nearly identical in cultural weight to the Hindi fatalistic phrase in the source.',
      confidence: 'high',
    },
  ],
  'pt-BR': [
    {
      transcreated_text: 'Cara, não acredito que isso tá acontecendo de verdade.',
      emotion_tag: 'excited',
      pronunciation_hint: '"Cara" is a casual address — "KAH-ra", informal register',
      rationale: '"Cara" (buddy/dude) in Brazilian Portuguese mirrors the casual address register of "yaar" in Hindi. "De verdade" (for real) amplifies the disbelief naturally.',
      confidence: 'high',
    },
  ],
  'ko-KR': [
    {
      transcreated_text: '아, 진짜로? 이게 말이 돼?',
      emotion_tag: 'confrontational',
      pronunciation_hint: '"Jinjalyo" — jin-JA-ryo, rising intonation for disbelief',
      rationale: '"진짜로?" (for real?) is the Korean casual disbelief marker. The added rhetorical "이게 말이 돼?" (does this even make sense?) heightens the dramatic weight.',
      confidence: 'medium',
    },
  ],
  'fr-FR': [
    {
      transcreated_text: "Franchement, c'est n'importe quoi tout ça.",
      emotion_tag: 'dry irony',
      pronunciation_hint: '"C\'est n\'importe quoi" — say nim-PORT-kwah, light contempt',
      rationale: '"C\'est n\'importe quoi" is the quintessential French expression of exasperated dismissal.',
      confidence: 'high',
    },
    {
      transcreated_text: "Bon, allez — on y va, c'est le moment ou jamais.",
      emotion_tag: 'excited',
      pronunciation_hint: '"Allez" — ah-LAY, energetic call to action',
      rationale: '"Allez" is the classic French rallying cry — captures team energy and urgency without direct translation.',
      confidence: 'high',
    },
    {
      transcreated_text: "Honnêtement ? Je n'avais pas vu venir un truc pareil.",
      emotion_tag: 'melancholic',
      pronunciation_hint: 'Slight pause after "Honnêtement ?" for dramatic beat',
      rationale: '"Honnêtement ?" as a French opener conveys genuine candid surprise, matching the source register.',
      confidence: 'medium',
    },
    {
      transcreated_text: "Écoutez, parfois il faut faire avec les moyens du bord.",
      emotion_tag: 'warm familiarity',
      pronunciation_hint: '"Moyens du bord" — mwah-YEN dyoo BOR, pragmatic tone',
      rationale: '"Moyens du bord" is the quintessential French phrase for making do with available resources — a direct cultural match for pragmatic workarounds.',
      confidence: 'high',
    },
    {
      transcreated_text: "Attendez, attendez — vous êtes sérieux là ?",
      emotion_tag: 'confrontational',
      pronunciation_hint: 'Rising pitch on "sérieux", incredulous delivery',
      rationale: 'Double "attendez" mirrors the "hold up" structure in informal French speech, signalling disbelief.',
      confidence: 'high',
    },
    {
      transcreated_text: "Bon sang, la situation est complètement incontrôlable.",
      emotion_tag: 'tense',
      pronunciation_hint: '"Bon sang" — bohn SAHN, exclamatory opener',
      rationale: '"Bon sang" is a mild but vivid French exclamation of exasperation — far more natural than a literal translation.',
      confidence: 'high',
    },
  ],
}

const DEV_MOCK_MAP: Record<string, Record<string, MockResult>> = {
  race: {
    'hi-IN': {
      transcreated_text: 'डेवलपर्स, इस रिलीज़ में आख़िरकार हमने ऑथ पाइपलाइन की उस भयंकर बग को पूरी तरह ठीक कर दिया!',
      emotion_tag: 'excited',
      pronunciation_hint: 'Stress on "रिलीज़" and "ठीक"',
      rationale: 'Preserved core tech terms (release, auth pipeline) while expressing casual engineering triumph authentically in Hindi.',
      confidence: 'high',
    },
    'es-MX': {
      transcreated_text: '¡Qué tal devs! En esta entrega por fin liquidamos esa molesta condición de carrera en el pipeline de autenticación.',
      emotion_tag: 'excited',
      pronunciation_hint: 'Upbeat delivery on "por fin liquidamos"',
      rationale: 'Mexican engineering register using "liquidamos" to convey eliminating a persistent bug.',
      confidence: 'high',
    },
    'ja-JP': {
      transcreated_text: '開発者の皆さん、今回のリリースで認証パイプラインの厄介なレースコンディションをついに完全解消しました！',
      emotion_tag: 'excited',
      pronunciation_hint: 'Natural corporate engineering greeting with confident finish on "完全解消"',
      rationale: 'Polite Japanese developer announcement standard, keeping "レースコンディション" as the industry katakana term.',
      confidence: 'high',
    },
    'en-GB': {
      transcreated_text: 'Right team, in this release we have finally sorted out that dreadful race condition in the auth pipeline.',
      emotion_tag: 'warm familiarity',
      pronunciation_hint: 'Crisp British opening "Right team", smooth cadence',
      rationale: 'British developer understatement ("sorted out that dreadful race condition") matches UK tech team culture.',
      confidence: 'high',
    },
    'fr-FR': {
      transcreated_text: "Voilà l'équipe — dans cette version on a enfin réglé cette satanée condition de course dans le pipeline d'auth.",
      emotion_tag: 'excited',
      pronunciation_hint: '"Satanée" — sah-tah-NAY, mild French expletive for emphasis',
      rationale: '"Satanée" is a characteristically French way to express lingering frustration with a stubborn bug without being vulgar.',
      confidence: 'high',
    },
  },
  workarounds: {
    'hi-IN': {
      transcreated_text: 'अब कोई कामचलाऊ जुगाड़ या उलझा हुआ कोड नहीं — हमने पूरे एसिंक स्टेट मशीन को दोबारा दुरुस्त कर दिया है।',
      emotion_tag: 'warm familiarity',
      pronunciation_hint: 'Conversational emphasis on "दुरुस्त"',
      rationale: '"कामचलाऊ जुगाड़" perfectly translates "hacky workarounds", establishing an authentic Indian tech workplace tone.',
      confidence: 'high',
    },
    'es-MX': {
      transcreated_text: 'Se acabaron las mexicanadas y el código espagueti: refactorizamos por completo la máquina de estados asíncrona.',
      emotion_tag: 'dry irony',
      pronunciation_hint: 'Casual emphasis on "código espagueti"',
      rationale: 'Mexican developer slang for makeshift workarounds while maintaining precise CS nomenclature.',
      confidence: 'high',
    },
    'ja-JP': {
      transcreated_text: 'その場しのぎのパッチやスパゲッティコードはもう不要です。非同期ステートマシンを根本からリファクタリングしました。',
      emotion_tag: 'reverent',
      pronunciation_hint: 'Clear technical articulation of "ステートマシン"',
      rationale: 'Professional Japanese engineering tone balancing "その場しのぎ" (makeshift) with clean architecture terminology.',
      confidence: 'high',
    },
    'en-GB': {
      transcreated_text: 'No more dodgy bodge jobs or messy spaghetti code — we gave the entire async state machine a proper overhaul.',
      emotion_tag: 'dry irony',
      pronunciation_hint: 'Typical UK colloquialisms: "dodgy bodge jobs", "proper overhaul"',
      rationale: '"Bodge jobs" is the exact British colloquial equivalent for fragile temporary workarounds.',
      confidence: 'high',
    },
    'fr-FR': {
      transcreated_text: 'Fini le code spaghetti et les rustines à la va-vite — on a entièrement refondu la machine d\'état asynchrone.',
      emotion_tag: 'dry irony',
      pronunciation_hint: '"Rustines à la va-vite" — rüs-TEEN ah lah vah-VEET, wry tone',
      rationale: '"Rustines" (patches/bandaids) and "à la va-vite" (hastily) are authentic French dev slang for quick-and-dirty workarounds.',
      confidence: 'high',
    },
  },
  reload: {
    'hi-IN': {
      transcreated_text: 'बस npm run dev चलाएं और हॉट मॉड्यूल रीलोड बिना किसी झंझट के मक्खन की तरह काम करेगा!',
      emotion_tag: 'playful',
      pronunciation_hint: 'Enthusiastic tone on "मक्खन की तरह" (smooth like butter)',
      rationale: '"मक्खन की तरह" naturally adapts "like a charm" to convey seamless developer experience.',
      confidence: 'high',
    },
    'es-MX': {
      transcreated_text: 'Solo ejecuten npm run dev y el reemplazo en caliente funcionará de lujo desde el primer segundo.',
      emotion_tag: 'excited',
      pronunciation_hint: 'Friendly Mexican tech register on "de lujo"',
      rationale: '"De lujo" is classic Mexican colloquial praise for smooth technical execution.',
      confidence: 'high',
    },
    'ja-JP': {
      transcreated_text: 'npm run dev を実行するだけで、ホットリロードが初期設定のままでも魔法のように軽快に動作します。',
      emotion_tag: 'excited',
      pronunciation_hint: 'Smooth pacing with loanword clarity',
      rationale: 'Accurately captures modern DX (Developer Experience) enthusiasm in standard Japanese dev documentation.',
      confidence: 'high',
    },
    'en-GB': {
      transcreated_text: 'Just run npm run dev and the hot module reloading will work brilliant straight out of the tin.',
      emotion_tag: 'excited',
      pronunciation_hint: 'British idiom "straight out of the tin"',
      rationale: '"Straight out of the tin" provides a quintessentially British equivalent for zero-config onboarding.',
      confidence: 'high',
    },
    'fr-FR': {
      transcreated_text: 'Lancez juste npm run dev et le remplacement à chaud fonctionne direct, sans rien configurer — du travail de maître.',
      emotion_tag: 'excited',
      pronunciation_hint: '"Du travail de maître" — dü trah-VAY duh MAY-truh, proud delivery',
      rationale: '"Du travail de maître" (masterwork) is a French expression of impressed admiration for something that works flawlessly out of the box.',
      confidence: 'high',
    },
  },
  prod: {
    'hi-IN': {
      transcreated_text: 'अगर एपीआई टोकन में कोई भी अड़चन आए, तो सीधे प्रोडक्शन पर कोड भेजने से पहले हमारे डिस्कोर्ड पर संपर्क करें।',
      emotion_tag: 'tense',
      pronunciation_hint: 'Cautious advisory tone on "सीधे प्रोडक्शन"',
      rationale: 'Preserved critical DevOps safeguard while providing warm community guidance in Hindi.',
      confidence: 'high',
    },
    'es-MX': {
      transcreated_text: 'Si tienen cualquier bronca con los tokens de la API, mándenos mensaje en Discord antes de mandar a prod.',
      emotion_tag: 'warm familiarity',
      pronunciation_hint: 'Colloquial "cualquier bronca" delivered smoothly',
      rationale: '"Tener bronca" is authentic Mexican slang for encountering an issue or hurdle.',
      confidence: 'high',
    },
    'ja-JP': {
      transcreated_text: 'APIトークンで何らかの不具合が発生した場合は、本番環境へプッシュする前にDiscordでご連絡ください。',
      emotion_tag: 'tense',
      pronunciation_hint: 'Polite caution on "本番環境へプッシュする前に"',
      rationale: 'Appropriate Japanese enterprise precaution separating staging from production ("本番環境").',
      confidence: 'high',
    },
    'en-GB': {
      transcreated_text: 'If you run into any bother with the API tokens, give us a shout on Discord before pushing to production.',
      emotion_tag: 'warm familiarity',
      pronunciation_hint: 'Friendly colloquial British "give us a shout"',
      rationale: '"Give us a shout" and "any bother" maintain helpful DevRel tone for UK engineering teams.',
      confidence: 'high',
    },
    'fr-FR': {
      transcreated_text: 'Si vous avez un souci avec les tokens API, faites signe sur Discord avant de balancer ça en prod.',
      emotion_tag: 'warm familiarity',
      pronunciation_hint: '"Faites signe" — fet SEEN-yuh, informal call for contact',
      rationale: '"Faites signe" (give a sign/wave) and "balancer en prod" (throw to prod) are authentic French DevOps register idioms.',
      confidence: 'high',
    },
  },
}

const FALLBACK: MockResult = {
  transcreated_text: 'This moment carries a weight that words alone can barely hold.',
  emotion_tag: 'melancholic',
  pronunciation_hint: 'Slow, deliberate delivery with pause before "hold"',
  rationale: 'The source line\'s emotional core was preserved while adapting the phrasing to feel natural in the target register.',
  confidence: 'medium',
}

export function getMockTranscreation(
  originalText: string,
  _sourceCulture: CultureKey,
  targetCulture: CultureKey
): MockResult {
  const lower = originalText.toLowerCase()

  // Match developer/software workflows
  if (lower.includes('race condition') || lower.includes('crushed') || lower.includes('pipeline')) {
    const match = DEV_MOCK_MAP.race[targetCulture]
    if (match) return match
  } else if (lower.includes('spaghetti') || lower.includes('workaround') || lower.includes('refactor')) {
    const match = DEV_MOCK_MAP.workarounds[targetCulture]
    if (match) return match
  } else if (lower.includes('npm') || lower.includes('reload') || lower.includes('dev')) {
    const match = DEV_MOCK_MAP.reload[targetCulture]
    if (match) return match
  } else if (lower.includes('prod') || lower.includes('token') || lower.includes('discord')) {
    const match = DEV_MOCK_MAP.prod[targetCulture]
    if (match) return match
  }

  const pool = MOCK_POOLS[targetCulture]
  if (!pool || pool.length === 0) return FALLBACK
  
  // Deterministic selection based on original text
  let hash = 0
  for (let i = 0; i < originalText.length; i++) {
    hash = originalText.charCodeAt(i) + ((hash << 5) - hash)
  }
  const index = Math.abs(hash) % pool.length
  
  return pool[index]
}
