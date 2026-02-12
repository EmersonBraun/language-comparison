import React, { useMemo, useRef } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useLanguageTabs from '../hooks/useLanguageTabs';
import CompareSelector from './CompareSelector';
import SideBySide from './SideBySide';
import styles from './LanguageComparison.module.css';

interface LanguageOverviewTab {
  name: string;
  content: React.ReactNode;
}

interface LanguageOverviewProps {
  languages: LanguageOverviewTab[];
  title?: string;
}

export default function LanguageOverview({
  languages,
  title,
}: LanguageOverviewProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const languageNames = useMemo(() => languages.map((l) => l.name), [languages]);
  const { mode, left, right, setMode, setLeft, setRight, getDefaultValue } =
    useLanguageTabs({ languageNames });

  return (
    <div ref={containerRef} className={styles.comparisonContainer}>
      {title && <h3 className={styles.comparisonTitle}>{title}</h3>}
      <CompareSelector
        languages={languageNames}
        mode={mode}
        left={left}
        right={right}
        onModeChange={setMode}
        onLeftChange={setLeft}
        onRightChange={setRight}
      />
      {mode === 'compare' ? (
        <SideBySide
          type="content"
          left={languages.find((l) => l.name === left)}
          right={languages.find((l) => l.name === right)}
        />
      ) : (
        <Tabs groupId="language-tabs" defaultValue={getDefaultValue()}>
          {languages.map((lang, index) => (
            <TabItem key={index} value={lang.name} label={lang.name}>
              <div className={styles.markdownContent}>{lang.content}</div>
            </TabItem>
          ))}
        </Tabs>
      )}
    </div>
  );
}
