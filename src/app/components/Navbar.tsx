import React from 'react';

const Navbar: React.FC = () => {
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
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-gray-900">Brand</span>
          </div>
          
          {/* Navigation Links */}
          <div className="flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </a>
            <a href="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
              About
            </a>
            <a href="/services" className="text-gray-700 hover:text-gray-900 transition-colors">
              Services
            </a>
            <a href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </div>
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

export default Navbar;