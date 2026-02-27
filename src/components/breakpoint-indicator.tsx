import type { CSSProperties } from 'react';
import styles from '../styles.module.css';

export interface BreakpointIndicatorProps {
  /** Corner to pin the indicator to. Defaults to 'bottom-left'. */
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
}

type Position = Required<BreakpointIndicatorProps>['position'];

const positionStyles: Record<Position, CSSProperties> = {
  'bottom-left': {
    bottom: '0.25rem',
    left: '0.25rem',
    top: 'auto',
    right: 'auto',
  },
  'bottom-right': {
    bottom: '0.25rem',
    right: '0.25rem',
    top: 'auto',
    left: 'auto',
  },
  'top-left': {
    top: '0.25rem',
    left: '0.25rem',
    bottom: 'auto',
    right: 'auto',
  },
  'top-right': {
    top: '0.25rem',
    right: '0.25rem',
    bottom: 'auto',
    left: 'auto',
  },
};

const BreakpointIndicator = ({
  position = 'bottom-left',
}: BreakpointIndicatorProps) => {
  if (process.env.NODE_ENV === 'production') return null;

  return (
    <div
      className={styles.indicator}
      style={positionStyles[position]}
      aria-hidden="true"
    >
      <div className={styles.xs}>xs</div>
      <div className={styles.sm}>sm</div>
      <div className={styles.md}>md</div>
      <div className={styles.lg}>lg</div>
      <div className={styles.xl}>xl</div>
      <div className={styles._2xl}>2xl</div>
    </div>
  );
};

export default BreakpointIndicator;
