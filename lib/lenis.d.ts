import type Lenis from 'lenis'

/*
 * The Lenis instance created in <SmoothScroll> is stashed on window so the
 * header's nav clicks can reuse it (scrollTo) instead of falling back to
 * native scrolling. This gives both files a typed reference — no more `as any`.
 */
declare global {
  interface Window {
    __lenis?: Lenis
  }
}

export {}