import { render, screen } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import BreakpointIndicator from './breakpoint-indicator';

afterEach(() => {
  // Reset NODE_ENV after each test that overrides it
  (process.env as { NODE_ENV: string }).NODE_ENV = 'test';
});

describe('BreakpointIndicator', () => {
  it('renders nothing in production', () => {
    (process.env as { NODE_ENV: string }).NODE_ENV = 'production';
    const { container } = render(<BreakpointIndicator />);
    expect(container.firstChild).toBeNull();
  });

  it('renders all 6 breakpoint labels in development', () => {
    (process.env as { NODE_ENV: string }).NODE_ENV = 'development';
    render(<BreakpointIndicator />);
    expect(screen.getByText('xs')).toBeInTheDocument();
    expect(screen.getByText('sm')).toBeInTheDocument();
    expect(screen.getByText('md')).toBeInTheDocument();
    expect(screen.getByText('lg')).toBeInTheDocument();
    expect(screen.getByText('xl')).toBeInTheDocument();
    expect(screen.getByText('2xl')).toBeInTheDocument();
  });

  it('has aria-hidden="true" on the container', () => {
    (process.env as { NODE_ENV: string }).NODE_ENV = 'development';
    const { container } = render(<BreakpointIndicator />);
    expect(container.firstChild).toHaveAttribute('aria-hidden', 'true');
  });

  it('applies bottom-left positioning by default', () => {
    (process.env as { NODE_ENV: string }).NODE_ENV = 'development';
    const { container } = render(<BreakpointIndicator />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.bottom).toBe('0.25rem');
    expect(el.style.left).toBe('0.25rem');
  });

  it('applies top-right positioning when position="top-right"', () => {
    (process.env as { NODE_ENV: string }).NODE_ENV = 'development';
    const { container } = render(<BreakpointIndicator position="top-right" />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.top).toBe('0.25rem');
    expect(el.style.right).toBe('0.25rem');
  });
});
