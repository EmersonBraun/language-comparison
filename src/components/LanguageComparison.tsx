import React, { useEffect, useRef } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import { useLocation, useHistory } from '@docusaurus/router';
import styles from './LanguageComparison.module.css';

interface LanguageTab {
  name: string;
  lang: string;
  code: string;
}

interface LanguageComparisonProps {
  languages: LanguageTab[];
  title?: string;
}

function getLanguageFromQuery(): string | null {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  return params.get('language');
}

export default function LanguageComparison({
  languages,
  title,
}: LanguageComparisonProps): JSX.Element {
  const location = useLocation();
  const history = useHistory();
  const containerRef = useRef<HTMLDivElement>(null);
  const isUpdatingRef = useRef(false);
  
  // Get initial language from query param or use first language
  const getDefaultValue = (): string => {
    const langFromQuery = getLanguageFromQuery();
    if (langFromQuery && languages.some(l => l.name === langFromQuery)) {
      return langFromQuery;
    }
    return languages[0]?.name || '';
  };

  // Update URL when tab changes
  useEffect(() => {
    const updateURL = (language: string) => {
      if (isUpdatingRef.current) return;
      
      // Save current scroll position
      const scrollY = window.scrollY;
      
      // Create fresh search params to avoid duplicates
      const searchParams = new URLSearchParams();
      searchParams.set('language', language);
      
      // Preserve other query params (if any) except 'language'
      const currentParams = new URLSearchParams(location.search);
      currentParams.forEach((value, key) => {
        if (key !== 'language') {
          searchParams.set(key, value);
        }
      });
      
      const hash = location.hash || '';
      const queryString = searchParams.toString();
      const newUrl = queryString 
        ? `${location.pathname}${hash}?${queryString}`
        : `${location.pathname}${hash}`;
      
      // Use replaceState directly to avoid scroll
      window.history.replaceState(
        { ...window.history.state, scrollY },
        '',
        newUrl
      );
      
      // Restore scroll position immediately
      window.scrollTo(0, scrollY);
    };

    // Check localStorage for tab state (Docusaurus stores it there)
    const getActiveTabFromStorage = (): string | null => {
      try {
        const key = `docusaurus.tab.language-tabs`;
        const stored = localStorage.getItem(key);
        if (stored && languages.some(l => l.name === stored)) {
          return stored;
        }
      } catch (e) {
        // Ignore localStorage errors
      }
      return null;
    };

    // Listen for storage events (when localStorage changes)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'docusaurus.tab.language-tabs' && e.newValue) {
        if (languages.some(l => l.name === e.newValue)) {
          updateURL(e.newValue);
        }
      }
    };

    // Listen for clicks on tab buttons
    const handleTabClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      let tabButton = target.closest('button[role="tab"]') as HTMLElement;
      
      if (!tabButton) {
        const parent = target.parentElement;
        if (parent && parent.getAttribute('role') === 'tab') {
          tabButton = parent as HTMLElement;
        }
      }
      
      if (tabButton) {
        const groupId = tabButton.closest('[data-group-id]')?.getAttribute('data-group-id');
        if (groupId === 'language-tabs') {
          const value = tabButton.getAttribute('data-value') || 
                       tabButton.getAttribute('value') ||
                       tabButton.textContent?.trim();
          
          if (value && languages.some(l => l.name === value)) {
            setTimeout(() => {
              updateURL(value);
            }, 50);
          }
        }
      }
    };

    // Check for active tab changes periodically
    let lastActiveValue = '';
    const checkActiveTab = () => {
      // First check localStorage
      const storedValue = getActiveTabFromStorage();
      if (storedValue && storedValue !== lastActiveValue) {
        lastActiveValue = storedValue;
        updateURL(storedValue);
        return;
      }

      // Fallback: check DOM
      const activeTab = document.querySelector(
        '[data-group-id="language-tabs"] button[role="tab"][aria-selected="true"], [data-group-id="language-tabs"] button.tabs__item--active, [data-group-id="language-tabs"] .tabs__item--active'
      ) as HTMLElement;
      
      if (activeTab) {
        const value = activeTab.getAttribute('data-value') || 
                     activeTab.getAttribute('value') ||
                     activeTab.textContent?.trim();
        
        if (value && value !== lastActiveValue && languages.some(l => l.name === value)) {
          lastActiveValue = value;
          updateURL(value);
        }
      }
    };

    // Check immediately and then periodically
    checkActiveTab();
    const intervalId = setInterval(checkActiveTab, 150);

    window.addEventListener('storage', handleStorageChange);
    document.addEventListener('click', handleTabClick, true);
    
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('storage', handleStorageChange);
      document.removeEventListener('click', handleTabClick, true);
    };
  }, [location, history, languages]);

  // Sync with query param on mount and when query changes
  useEffect(() => {
    const langFromQuery = getLanguageFromQuery();
    if (langFromQuery && languages.some(l => l.name === langFromQuery)) {
      isUpdatingRef.current = true;
      
      // Find and click the corresponding tab button
      const tabButton = document.querySelector(
        `[data-group-id="language-tabs"] button[data-value="${langFromQuery}"]`
      ) as HTMLElement;
      
      if (tabButton && !tabButton.classList.contains('tabs__item--active')) {
        tabButton.click();
      }
      
      setTimeout(() => {
        isUpdatingRef.current = false;
      }, 100);
    }
  }, [location.search, languages]);

  return (
    <div ref={containerRef} className={styles.comparisonContainer}>
      {title && <h3 className={styles.comparisonTitle}>{title}</h3>}
      <Tabs
        groupId="language-tabs"
        defaultValue={getDefaultValue()}
      >
        {languages.map((lang, index) => (
          <TabItem key={index} value={lang.name} label={lang.name}>
            <CodeBlock language={lang.lang}>{lang.code}</CodeBlock>
          </TabItem>
        ))}
      </Tabs>
    </div>
  );
}

