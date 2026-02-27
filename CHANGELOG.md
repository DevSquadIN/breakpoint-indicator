# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 2.0.0 (2026-02-27)


### Fixed

* build failure ([760af08](https://github.com/DevSquadIN/breakpoint-indicator/commit/760af089ebf2cc3180deba4a9856589df01ef0d7))


### Added

* add ts support ([2bd0e91](https://github.com/DevSquadIN/breakpoint-indicator/commit/2bd0e91ffc7d32f273c49864f360df3f43191c19))
* breakpoint indicator and rollup config ([c2cb3b0](https://github.com/DevSquadIN/breakpoint-indicator/commit/c2cb3b0ed9c835829caf67930c26bb1b6e601bab))
* migrate to TypeScript with dual CJS/ESM output and type declarations ([9aa6ae4](https://github.com/DevSquadIN/breakpoint-indicator/commit/9aa6ae40a859af074549debf0e82b790c72566f5))


### Changed

* add ESLint flat config and Prettier ([4223316](https://github.com/DevSquadIN/breakpoint-indicator/commit/42233169a0a7973923d0222195d76f74aead8972))
* add standard-version, .versionrc.json, and CHANGELOG.md ([59cfb28](https://github.com/DevSquadIN/breakpoint-indicator/commit/59cfb2886529ec8fade83d4c3f3d55bca2a7d623))
* tighten [package.json](http://_vscodecontentref_/0) with exports map, files, metadata, and engines ([227fca6](https://github.com/DevSquadIN/breakpoint-indicator/commit/227fca67cfa471c64504a88c23fc2ea4b3eacd9e))

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
