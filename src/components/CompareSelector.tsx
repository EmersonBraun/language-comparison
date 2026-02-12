import React from 'react';
import type { ViewMode } from '../hooks/useLanguageTabs';
import styles from './CompareSelector.module.css';

interface CompareSelectorProps {
  languages: string[];
  mode: ViewMode;
  left: string;
  right: string;
  onModeChange: (mode: ViewMode) => void;
  onLeftChange: (lang: string) => void;
  onRightChange: (lang: string) => void;
}

export default function CompareSelector({
  languages,
  mode,
  left,
  right,
  onModeChange,
  onLeftChange,
  onRightChange,
}: CompareSelectorProps): JSX.Element {
  return (
    <div className={styles.selectorBar}>
      <div className={styles.toggle}>
        <button
          className={`${styles.toggleBtn} ${mode === 'single' ? styles.active : ''}`}
          onClick={() => onModeChange('single')}
          title="View one language at a time"
        >
          Single
        </button>
        <button
          className={`${styles.toggleBtn} ${mode === 'compare' ? styles.active : ''}`}
          onClick={() => onModeChange('compare')}
          title="Compare two languages side by side"
        >
          Compare
        </button>
      </div>

      {mode === 'compare' && (
        <div className={styles.dropdowns}>
          <select
            className={styles.select}
            value={left}
            onChange={(e) => onLeftChange(e.target.value)}
            aria-label="Left language"
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
          <span className={styles.vs}>vs</span>
          <select
            className={styles.select}
            value={right}
            onChange={(e) => onRightChange(e.target.value)}
            aria-label="Right language"
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
