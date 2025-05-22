'use client';

import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { useRouter } from 'next/navigation';

interface NavbarProps {
  showGetStarted?: boolean;
  isLoggedIn?: boolean;
  onGetStarted?: () => void;
  onLogin?: () => void;
  onLogout?: () => void;
}

export const Navbar = ({
  showGetStarted = false,
  isLoggedIn = false,
  onGetStarted,
  onLogin,
  onLogout,
}: NavbarProps) => {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  // Simulate progress update for demo purposes
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => Math.min(prev + 10, 100));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const handleLogin = () => {
    router.push('/login');
    if (onLogin) onLogin();
  }

  const handleSignUp = () => {
    router.push('/signup');
    if (onGetStarted) onGetStarted();
  }

  const handleLogOut = () => {
    router.push('/');
    if (onLogout) onLogout();
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <h2 className={styles.brand}>Skilled LMS</h2>
        <div className={styles.navProgress}>
        </div>
        <div className={styles.buttonGroup}>
          {showGetStarted && (
            <button className={styles.getStartedBtn} onClick={handleSignUp}>
              Get Started
            </button>
          )}
          {isLoggedIn ? (
            <button className={styles.logoutBtn} onClick={handleLogOut}>
              Log out
            </button>
          ) : (
            <button className={styles.loginBtn} onClick={handleLogin}>
              Log in
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};