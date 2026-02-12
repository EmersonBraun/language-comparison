import { useEffect, useRef, useState, useCallback } from 'react';
import { useLocation } from '@docusaurus/router';

export type ViewMode = 'single' | 'compare';

interface UseLanguageTabsOptions {
  languageNames: string[];
}

interface UseLanguageTabsReturn {
  mode: ViewMode;
  language: string;
  left: string;
  right: string;
  setMode: (mode: ViewMode) => void;
  setLeft: (lang: string) => void;
  setRight: (lang: string) => void;
  getDefaultValue: () => string;
}

function getParams(): URLSearchParams {
  if (typeof window === 'undefined') return new URLSearchParams();
  return new URLSearchParams(window.location.search);
}

function replaceURL(params: URLSearchParams, pathname: string, hash: string) {
  const scrollY = window.scrollY;
  const qs = params.toString();
  const newUrl = qs ? `${pathname}${hash}?${qs}` : `${pathname}${hash}`;
  window.history.replaceState({ ...window.history.state, scrollY }, '', newUrl);
  window.scrollTo(0, scrollY);
}

export default function useLanguageTabs({ languageNames }: UseLanguageTabsOptions): UseLanguageTabsReturn {
  const location = useLocation();
  const isUpdatingRef = useRef(false);

  // Read initial values from query params
  const initParams = getParams();
  const initMode = (initParams.get('mode') === 'compare' ? 'compare' : 'single') as ViewMode;
  const initLang = initParams.get('language');
  const initLeft = initParams.get('left');
  const initRight = initParams.get('right');

  const safeLanguage = (val: string | null, fallbackIdx = 0): string => {
    if (val && languageNames.includes(val)) return val;
    return languageNames[fallbackIdx] || '';
  };

  const [mode, setModeState] = useState<ViewMode>(initMode);
  const [left, setLeftState] = useState<string>(safeLanguage(initLeft, 0));
  const [right, setRightState] = useState<string>(safeLanguage(initRight, 1));
  const [language, setLanguageState] = useState<string>(safeLanguage(initLang, 0));

  // Build and push URL for current state
  const pushURL = useCallback((m: ViewMode, lang: string, l: string, r: string) => {
    const params = new URLSearchParams();
    if (m === 'compare') {
      params.set('mode', 'compare');
      params.set('left', l);
      params.set('right', r);
    } else {
      params.set('language', lang);
    }
    replaceURL(params, location.pathname, location.hash || '');
  }, [location.pathname, location.hash]);

  const setMode = useCallback((m: ViewMode) => {
    setModeState(m);
    if (m === 'compare') {
      // Default left to current language, right to next different one
      const l = language || languageNames[0];
      const r = right !== l ? right : (languageNames.find(n => n !== l) || languageNames[1] || l);
      setLeftState(l);
      setRightState(r);
      pushURL('compare', l, l, r);
    } else {
      // Switch back to single, keep left as active language
      setLanguageState(left || languageNames[0]);
      pushURL('single', left || languageNames[0], left, right);
    }
  }, [language, left, right, languageNames, pushURL]);

  const setLeft = useCallback((l: string) => {
    setLeftState(l);
    pushURL('compare', language, l, right);
  }, [language, right, pushURL]);

  const setRight = useCallback((r: string) => {
    setRightState(r);
    pushURL('compare', language, left, r);
  }, [language, left, pushURL]);

  const getDefaultValue = (): string => {
    return language;
  };

  // Sync language state for single mode (tab clicks / storage)
  useEffect(() => {
    if (mode !== 'single') return;

    const updateURL = (lang: string) => {
      if (isUpdatingRef.current) return;
      setLanguageState(lang);
      const params = new URLSearchParams();
      params.set('language', lang);
      replaceURL(params, location.pathname, location.hash || '');
    };

    const getActiveTabFromStorage = (): string | null => {
      try {
        const stored = localStorage.getItem('docusaurus.tab.language-tabs');
        if (stored && languageNames.includes(stored)) return stored;
      } catch { /* ignore */ }
      return null;
    };

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'docusaurus.tab.language-tabs' && e.newValue) {
        if (languageNames.includes(e.newValue)) updateURL(e.newValue);
      }
    };

    const handleTabClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      let tabButton = target.closest('button[role="tab"]') as HTMLElement | null;
      if (!tabButton) {
        const parent = target.parentElement;
        if (parent && parent.getAttribute('role') === 'tab') tabButton = parent;
      }
      if (tabButton) {
        const groupId = tabButton.closest('[data-group-id]')?.getAttribute('data-group-id');
        if (groupId === 'language-tabs') {
          const value = tabButton.getAttribute('data-value') || tabButton.getAttribute('value') || tabButton.textContent?.trim();
          if (value && languageNames.includes(value)) {
            setTimeout(() => updateURL(value), 50);
          }
        }
      }
    };

    let lastActiveValue = '';
    const observer = new MutationObserver(() => {
      const storedValue = getActiveTabFromStorage();
      if (storedValue && storedValue !== lastActiveValue) {
        lastActiveValue = storedValue;
        updateURL(storedValue);
        return;
      }
      const activeTab = document.querySelector(
        '[data-group-id="language-tabs"] button[role="tab"][aria-selected="true"], ' +
        '[data-group-id="language-tabs"] button.tabs__item--active',
      ) as HTMLElement | null;
      if (activeTab) {
        const value = activeTab.getAttribute('data-value') || activeTab.getAttribute('value') || activeTab.textContent?.trim();
        if (value && value !== lastActiveValue && languageNames.includes(value)) {
          lastActiveValue = value;
          updateURL(value);
        }
      }
    });

    const startObserving = () => {
      const tabContainer = document.querySelector('[data-group-id="language-tabs"]');
      if (tabContainer) {
        observer.observe(tabContainer, { attributes: true, subtree: true, attributeFilter: ['aria-selected', 'class'] });
      }
    };

    const storedValue = getActiveTabFromStorage();
    if (storedValue) {
      lastActiveValue = storedValue;
      updateURL(storedValue);
    }
    startObserving();

    const bodyObserver = new MutationObserver(() => {
      if (document.querySelector('[data-group-id="language-tabs"]')) {
        startObserving();
        bodyObserver.disconnect();
      }
    });
    bodyObserver.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('storage', handleStorageChange);
    document.addEventListener('click', handleTabClick, true);

    return () => {
      observer.disconnect();
      bodyObserver.disconnect();
      window.removeEventListener('storage', handleStorageChange);
      document.removeEventListener('click', handleTabClick, true);
    };
  }, [mode, location, languageNames]);

  // Sync tab clicks with query param in single mode
  useEffect(() => {
    if (mode !== 'single') return;
    const params = getParams();
    const langFromQuery = params.get('language');
    if (langFromQuery && languageNames.includes(langFromQuery)) {
      isUpdatingRef.current = true;
      setLanguageState(langFromQuery);
      const tabButton = document.querySelector(
        `[data-group-id="language-tabs"] button[data-value="${langFromQuery}"]`,
      ) as HTMLElement | null;
      if (tabButton && !tabButton.classList.contains('tabs__item--active')) {
        tabButton.click();
      }
      setTimeout(() => { isUpdatingRef.current = false; }, 100);
    }
  }, [mode, location.search, languageNames]);

  // Sync compare state from URL on navigation
  useEffect(() => {
    const params = getParams();
    const urlMode = params.get('mode') === 'compare' ? 'compare' : 'single';
    if (urlMode === 'compare') {
      setModeState('compare');
      setLeftState(safeLanguage(params.get('left'), 0));
      setRightState(safeLanguage(params.get('right'), 1));
    } else {
      setModeState('single');
      const lang = safeLanguage(params.get('language'), 0);
      setLanguageState(lang);
    }
  }, [location.search]);

  return { mode, language, left, right, setMode, setLeft, setRight, getDefaultValue };
}
