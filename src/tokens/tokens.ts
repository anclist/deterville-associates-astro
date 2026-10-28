/**
 * Design tokens — single source of truth.
 *
 * Two tiers:
 *   1. `primitive` — raw values (the palette, the scale). Never referenced by components.
 *   2. `semantic`  — intent-named aliases that components consume (`--color-action`, not `--navy-700`).
 *
 * Shares its structure, type and spacing with the Deterville Law Office site so the two firms read
 * as siblings; only the palette differs.
 *
 * `toCss()` flattens both tiers into custom properties on :root; the styleguide reads the
 * same objects to render swatches, so documentation can't drift from what ships.
 */

export const primitive = {
  color: {
    // Brand navy, anchored on the logo's #1A1746
    'navy-50': '#F4F4F9',
    'navy-100': '#E6E5F0',
    'navy-200': '#C9C7DC',
    'navy-400': '#6A6795',
    'navy-600': '#2E2A6A',
    'navy-700': '#221E5A',
    'navy-800': '#1A1746',
    'navy-900': '#110F30',
    // Saint Lucia flag blue, from the logo's scales and swords. Decorative only: rules, markers, focus.
    'flag-500': '#00AFEC',
    'flag-600': '#0090C4',
    // The national flag's own colours, used only by the Flag atom
    'flag-sky': '#66CCFF',
    'flag-gold': '#FCD116',
    'flag-black': '#000000',
    // Neutrals, cooled a touch toward the navy
    'ink-900': '#1A1A24',
    'ink-700': '#3A3A48',
    'ink-500': '#62627A',
    'ink-300': '#B0B0C0',
    'ink-100': '#E6E6EE',
    'paper': '#FFFFFF',
    // Feedback
    'green-700': '#1F6B47',
    'green-50': '#EAF5EF',
    'red-700': '#A3231C',
    'red-50': '#FBEFEE',
  },
  font: {
    serif: "'Playfair Display', Georgia, 'Times New Roman', serif",
    sans: "'Public Sans', system-ui, -apple-system, 'Segoe UI', sans-serif",
  },
  // Modular scale, ratio 1.25 (major third) from 1.0625rem body; step 4 is fluid for page titles
  size: {
    '-2': '0.75rem',
    '-1': '0.875rem',
    '0': '1.0625rem',
    '1': '1.3125rem',
    '2': '1.625rem',
    '3': '2.0625rem',
    '4': 'clamp(2.5rem, 1.6rem + 3.6vw, 4rem)',
  },
  // 4px base grid
  space: {
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.5rem',
    '6': '2rem',
    '7': '3rem',
    '8': '4rem',
    '9': '6rem',
    '10': '8rem',
  },
  // One radius: just enough to take the edge off buttons, inputs and photographs
  radius: {
    sm: '4px',
  },
} as const;

const c = (name: keyof typeof primitive.color) => `var(--${name})`;

export const semantic = {
  color: {
    'surface': c('paper'),
    'surface-tint': c('navy-50'),
    'surface-inverse': c('navy-900'),
    'text': c('ink-900'),
    'text-muted': c('ink-500'),
    'text-inverse': c('paper'),
    'text-inverse-muted': c('navy-200'),
    'heading': c('navy-800'),
    'action': c('navy-700'),
    'action-hover': c('navy-800'),
    'action-text': c('paper'),
    'accent': c('flag-600'),
    'border': c('ink-100'),
    'border-strong': c('ink-300'),
    'border-hover': c('ink-500'),
    'placeholder': c('ink-300'),
    'focus': c('flag-600'),
    'selection': c('navy-100'),
    'success': c('green-700'),
    'success-surface': c('green-50'),
    'error': c('red-700'),
    'error-surface': c('red-50'),
  },
  font: {
    'heading': 'var(--font-serif)',
    'body': 'var(--font-sans)',
  },
  leading: {
    tight: '1.1',
    snug: '1.3',
    body: '1.6',
  },
  measure: {
    prose: '66ch',
    narrow: '48ch',
  },
  layout: {
    'container': '76rem',
    'gutter': 'clamp(1rem, 4vw, 2.5rem)',
    // Vertical rhythm between sections: 3.5rem on phones up to 6rem on wide screens
    'section': 'clamp(3.5rem, 2.25rem + 5vw, 6rem)',
  },
  shadow: {
    raised: '0 1px 2px rgb(17 15 48 / 0.06), 0 8px 24px -12px rgb(17 15 48 / 0.18)',
  },
  motion: {
    fast: '120ms',
    base: '220ms',
    ease: 'cubic-bezier(0.2, 0.7, 0.2, 1)',
  },
} as const;

/** Flatten tokens into a `:root { … }` block. */
export function toCss(): string {
  const lines: string[] = [];
  for (const [k, v] of Object.entries(primitive.color)) lines.push(`--${k}: ${v};`);
  for (const [k, v] of Object.entries(primitive.font)) lines.push(`--font-${k}: ${v};`);
  for (const [k, v] of Object.entries(primitive.size)) lines.push(`--size-${k}: ${v};`);
  for (const [k, v] of Object.entries(primitive.space)) lines.push(`--space-${k}: ${v};`);
  for (const [k, v] of Object.entries(primitive.radius)) lines.push(`--radius-${k}: ${v};`);
  for (const [group, values] of Object.entries(semantic)) {
    for (const [k, v] of Object.entries(values)) lines.push(`--${group}-${k}: ${v};`);
  }
  return `:root{${lines.join('')}}`;
}
