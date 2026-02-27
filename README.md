# Breakpoint Indicator

A visual indicator component for React that displays the current media query breakpoint during development.

## Features

- 🎯 Shows current breakpoint (xs, sm, md, lg, xl, 2xl)
- 🔒 Automatically hidden in production
- 🎨 Uses Tailwind CSS-style breakpoints
- 💪 Zero configuration needed
- ⚡ Lightweight and performant

## Installation

```bash
npm install -D breakpoint-indicator
# or
yarn add -D breakpoint-indicator
```

## Usage

Import and add the component to your React application:

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

### TypeScript

The package ships with built-in type declarations — no additional `@types/*` package is needed. It works out of the box in `.tsx` files:

```tsx
import { BreakpointIndicator } from 'breakpoint-indicator';

const App: React.FC = () => (
  <div>
    <BreakpointIndicator />
  </div>
);
```

The indicator will automatically appear in the bottom-left corner of your screen during development and will not render in production builds.

## Breakpoints

The component uses the following breakpoint values (matching Tailwind CSS):

| Breakpoint | Min Width |
| ---------- | --------- |
| xs         | 0px       |
| sm         | 640px     |
| md         | 768px     |
| lg         | 1024px    |
| xl         | 1280px    |
| 2xl        | 1536px    |

## Development

Build the project:

```bash
# Development build
npm run build:dev

# Production build
npm run build
```

## License

MIT © Joy Poddar
