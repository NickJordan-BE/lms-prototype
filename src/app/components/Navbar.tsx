'use client';

import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [progress, setProgress] = useState(0);

  // Simulate progress update for demo purposes
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => Math.min(prev + 10, 100));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <h2 className={styles.brand}>Skilled LMS</h2>
        <div className={styles.navProgress}>
        </div>
      </div>
    </nav>
  );
};