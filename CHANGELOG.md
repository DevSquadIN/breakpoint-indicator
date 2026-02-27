# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

---

## [1.0.0] - 2026-02-27

### Added

- `BreakpointIndicator` React component that displays the active CSS breakpoint
  in a fixed overlay pill during development
- Support for six Tailwind-style breakpoints: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`
- Optional `position` prop to pin the indicator to any corner:
  `bottom-left` (default), `bottom-right`, `top-left`, `top-right`
- TypeScript support — full type declarations shipped in `dist/index.d.ts`
- Dual ESM (`dist/index.js`) and CJS (`dist/index.cjs`) build outputs
- CSS Modules scoping — zero risk of class name collisions with host app styles
- `aria-hidden="true"` on the overlay container — screen reader safe
- `process.env.NODE_ENV` replaced at build time — indicator never renders
  in production bundles even without a bundler
- ESLint + Prettier configuration for consistent code style
- Vitest + React Testing Library unit test suite (5 tests)
- GitHub Actions CI pipeline — typecheck, lint, test, and build jobs run on
  every push and pull request to `main`

### Security

- `process.env.NODE_ENV` guard prevents the component rendering in production,
  ensuring zero UI or bundle overhead for end users

---

[Unreleased]: https://github.com/DevSquadIN/breakpoint-indicator/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/DevSquadIN/breakpoint-indicator/releases/tag/v1.0.0
