/*
 * Single source of truth for the intro loader timing. The Hero name and the
 * SiteHeader currently hard-coded their own `introExitDelay`, which drifted
 * out of sync with the loader as soon as the quote or the typing speed
 * changed. Everything here is derived from the same quote + constants the
 * loader uses, so editing one keeps the whole sequence in sync.
 */

export const quote = 'I never quite realized... how beautiful this world is.'
export const author = 'A2, NieR: Automata'
export const introText = `"${quote}"\n- ${author}`

/* Per-character typing delay range (ms) — matches the loader's random feel. */
export const TYPING_MIN = 26
export const TYPING_MAX = 46

/* Initial delay before the first character, same as the loader. */
const INITIAL_DELAY = 60

/* Pauses after special characters — mirrors the loader's typeNextCharacter. */
function charDelay(ch: string, nextTwo: string): number {
  if (ch === '\n') return 200
  if (nextTwo === '...') return 150
  if (ch === '.') return 90
  if (ch === ',') return 60
  return 0
}

/* Post-typing staging: fade the text, lighten the screen, then reveal. */
export const EXIT_FADE_DELAY = 1800
export const EXIT_LIGHT_DELAY = 2100
export const EXIT_HIDE_DELAY = 2900

/* How long a full intro takes for a given per-character delay (ms). */
function typingDuration(delay: number): number {
  let total = INITIAL_DELAY
  for (let i = 0; i < introText.length; i++) {
    total += delay + charDelay(introText[i], introText.slice(i, i + 3))
  }
  return total
}

/*
 * Delay (seconds) before the Hero/Header fade in. Uses the slowest possible
 * typing + the full hide delay so the page NEVER reveals before the loader is
 * gone, no matter how the random per-character timing lands. This is what
 * guarantees the two animations can't overlap or leave a broken gap.
 */
export const introExitDelay = (typingDuration(TYPING_MAX) + EXIT_HIDE_DELAY) / 1000
