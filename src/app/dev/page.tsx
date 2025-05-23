'use client';

import { useState, useEffect } from 'react';
import styles from './dev.module.css';

interface FeatureFlag {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
}

export default function DevPage() {
  const [flags, setFlags] = useState<FeatureFlag[]>([
    {
      id: 'complete_section_on_view',
      name: 'Complete Section on View',
      description: 'Automatically mark sections as complete when viewed',
      enabled: false
    },
    {
      id: 'dark_mode',
      name: 'Dark Mode',
      description: 'Enable dark mode for all users (EXAMPLE, DOES NOTHING)',
      enabled: false
    },
    {
      id: 'beta_features',
      name: 'Beta Features',
      description: 'Enable experimental features (EXAMPLE, DOES NOTHING)',
      enabled: false
    }
  ]);

  useEffect(() => {
    // Load saved flags from localStorage
    const savedFlags = localStorage.getItem('featureFlags');
    if (savedFlags) {
      setFlags(JSON.parse(savedFlags));
    }
  }, []);

  const toggleFlag = (flagId: string) => {
    setFlags(prevFlags => {
      const newFlags = prevFlags.map(flag => 
        flag.id === flagId ? { ...flag, enabled: !flag.enabled } : flag
      );
      // Save to localStorage
      localStorage.setItem('featureFlags', JSON.stringify(newFlags));
      return newFlags;
    });
  };

  const clearFeatureFlags = () => {
    localStorage.removeItem('featureFlags');
    setFlags(prevFlags => prevFlags.map(flag => ({ ...flag, enabled: false })));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Dev Tools</h1>
        <button onClick={clearFeatureFlags} className={styles.clearButton}>
          Clear Local Storage
        </button>
      </div>
      <div className={styles.flagsContainer}>
        {flags.map(flag => (
          <div key={flag.id} className={styles.flagCard}>
            <div className={styles.flagHeader}>
              <h2>{flag.name}</h2>
              <label className={styles.switch}>
                <input
                  type="checkbox"
                  checked={flag.enabled}
                  onChange={() => toggleFlag(flag.id)}
                />
                <span className={styles.slider}></span>
              </label>
            </div>
            <p>{flag.description}</p>
            <div className={styles.flagId}>ID: {flag.id}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 