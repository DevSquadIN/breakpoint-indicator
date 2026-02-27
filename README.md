# Breakpoint Indicator

A visual indicator component for React that displays the current active CSS breakpoint during development. Automatically hidden in production — zero overhead for end users.

## Features

- 🎯 Shows current breakpoint (`xs`, `sm`, `md`, `lg`, `xl`, `2xl`)
- 🔒 Automatically hidden in production (replaced at build time — not runtime)
- 🎨 Tailwind CSS-style breakpoints
- 💪 TypeScript-first — type declarations shipped in the package
- 📦 Dual ESM + CJS output — works with Vite, Next.js, Jest, and plain Node
- 🎛️ Configurable corner position via `position` prop
- ♿ Screen reader safe (`aria-hidden="true"`)
- 🔒 CSS Modules scoping — zero class name collisions with host app styles
- ⚡ Lightweight and tree-shakeable (`sideEffects: false`)

---

## Installation

```bash
npm install -D breakpoint-indicator
# or
yarn add -D breakpoint-indicator
```

> **Peer dependencies:** Requires `react` and `react-dom` `^16.8.0 || ^17 || ^18 || ^19`.

---

## Usage

### Basic

```jsx
import { BreakpointIndicator } from 'breakpoint-indicator';

function App() {
  return (
    <div>
      <BreakpointIndicator />
      {/* Your app content */}
    </div>
  );
}
```

The indicator renders as a fixed pill in the **bottom-left corner** during development and renders nothing in production.

### TypeScript

No additional `@types/*` package needed — type declarations are shipped in `dist/index.d.ts`:

```tsx
import { BreakpointIndicator } from 'breakpoint-indicator';

const App: React.FC = () => (
  <div>
    <BreakpointIndicator position="bottom-right" />
  </div>
);
```

---

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `position` | `'bottom-left' \| 'bottom-right' \| 'top-left' \| 'top-right'` | `'bottom-left'` | Corner to pin the indicator to |

---

## Breakpoints

Matches [Tailwind CSS](https://tailwindcss.com/docs/responsive-design) breakpoints:

| Breakpoint | Min Width |
|---|---|
| `xs` | `0px` |
| `sm` | `640px` |
| `md` | `768px` |
| `lg` | `1024px` |
| `xl` | `1280px` |
| `2xl` | `1536px` |

---

## How production guard works

`process.env.NODE_ENV` is replaced at **build time** via `@rollup/plugin-replace` — not at runtime. This means the indicator code is completely eliminated from production bundles even when used without a bundler.

---

## Migration Guide

### v1 → v2

**Breaking changes:**

- **CSS class names are now scoped via CSS Modules.** If you were overriding `.container`, `.sm`, `.lg`, etc. in your own stylesheet, those overrides will no longer work. The class names are now hashed at build time.
- **`main` entry point changed.** `dist/index.js` (ESM) is now `dist/index.cjs` (CJS). Update any direct `dist/` imports accordingly. Named imports from `'breakpoint-indicator'` are unaffected.

---

## Development

```bash
# Install dependencies
npm install

# Type check
npm run typecheck

# Lint
npm run lint

# Format
npm run format

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Development build
npm run build:dev

# Production build
npm run build
```

---

## Release

This package uses [standard-version](https://github.com/conventional-changelog/standard-version) and [Conventional Commits](https://www.conventionalcommits.org) for automated changelog generation and versioning.

```bash
# Preview the next release
npm run release:dry

# Cut a release (auto-detects bump from commit history)
npm run release

# Or explicitly:
npm run release:patch   # 1.0.0 → 1.0.1
npm run release:minor   # 1.0.0 → 1.1.0
npm run release:major   # 1.0.0 → 2.0.0

# Push commits and tag → triggers CI publish to npm
git push --follow-tags origin main
```

Commit messages should follow the Conventional Commits format:

```bash
git commit -m "feat: add custom color prop"
git commit -m "fix: indicator flickers on resize"
git commit -m "chore: update dependencies"
```

---

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for the full release history.

---

## License

MIT © [Joy Poddar](https://github.com/DevSquadIN)
