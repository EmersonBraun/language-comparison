import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import styles from './SideBySide.module.css';

interface CodePanel {
  name: string;
  lang: string;
  code: string;
}

interface ContentPanel {
  name: string;
  content: React.ReactNode;
}

interface SideBySideCodeProps {
  type: 'code';
  left: CodePanel | undefined;
  right: CodePanel | undefined;
}

interface SideBySideContentProps {
  type: 'content';
  left: ContentPanel | undefined;
  right: ContentPanel | undefined;
}

type SideBySideProps = SideBySideCodeProps | SideBySideContentProps;

export default function SideBySide(props: SideBySideProps): JSX.Element {
  const { type, left, right } = props;

  const renderPanel = (panel: CodePanel | ContentPanel | undefined, side: 'left' | 'right') => {
    if (!panel) {
      return (
        <div className={styles.column}>
          <div className={styles.header}>Select a language</div>
          <div className={styles.empty}>No language selected</div>
        </div>
      );
    }

    return (
      <div className={styles.column}>
        <div className={styles.header}>{panel.name}</div>
        {type === 'code' ? (
          <CodeBlock language={(panel as CodePanel).lang}>
            {(panel as CodePanel).code}
          </CodeBlock>
        ) : (
          <div className={styles.content}>
            {(panel as ContentPanel).content}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={styles.grid}>
      {renderPanel(left, 'left')}
      {renderPanel(right, 'right')}
    </div>
  );
}
