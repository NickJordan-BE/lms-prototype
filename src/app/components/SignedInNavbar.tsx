'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const SignedInNavbar = () => {
  const router = useRouter();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleProfileClick = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const handleProfileMenuClose = () => {
    setShowProfileMenu(false);
  };

  const handleNavigation = (route: string) => {
    setShowProfileMenu(false);
    router.push(route);
  };

  const handleSignOut = () => {
    setShowProfileMenu(false);
    // Add your sign out logic here (e.g., clear auth tokens, etc.)
    console.log('Signing out...');
    // For now, just redirect to login or home page
    router.push('/login');
  };

  return (
    <>
      <nav className="bg-white sticky top-0 z-50 h-15 flex items-center px-8">
        <div className="w-full mx-auto flex justify-between items-center">
          <button 
            onClick={() => router.push('/')}
            className="text-slate-800 text-xl font-semibold m-0 tracking-tight bg-transparent border-none cursor-pointer hover:text-slate-600 transition-colors duration-200"
          >
            Skilled LMS
          </button>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => router.push('/mylearning')}
              className="bg-blue-600 hover:bg-blue-700 text-white border-none px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition-all duration-200 whitespace-nowrap hover:-translate-y-px"
            >
              My Learning
            </button>
            <div className="relative flex items-center">
              <button 
                className="flex items-center gap-2 bg-transparent border border-slate-200 hover:border-slate-300 rounded-lg px-3 py-1.5 cursor-pointer transition-all duration-200 text-slate-600 text-sm hover:bg-slate-50"
                onClick={handleProfileClick}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center text-white font-semibold text-sm">
                  <span className="select-none">U</span>
                </div>
                <span className="font-medium text-slate-800">User</span>
                <span className="text-xs text-slate-500 transition-transform duration-200">▼</span>
              </button>
              {showProfileMenu && (
                <div className="absolute top-full right-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-xl min-w-56 z-50 animate-in fade-in-0 zoom-in-95 duration-150">
                  <div className="p-4 border-b border-slate-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center text-white font-semibold">
                      U
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-800 text-sm mb-0.5">User Name</div>
                      <div className="text-slate-500 text-xs">user@example.com</div>
                    </div>
                  </div>
                  <div className="h-px bg-slate-100 my-2"></div>
                  <ul className="list-none p-2 m-0">
                    <li className="p-0">
                      <button 
                        onClick={() => handleNavigation('/profile')}
                        className="w-full text-left block px-4 py-3 text-slate-600 text-sm transition-all duration-200 hover:bg-slate-50 hover:text-slate-800 rounded-md border-none bg-transparent cursor-pointer"
                      >
                        My Profile
                      </button>
                    </li>
                    <li className="p-0">
                      <button 
                        onClick={() => handleNavigation('/settings')}
                        className="w-full text-left block px-4 py-3 text-slate-600 text-sm transition-all duration-200 hover:bg-slate-50 hover:text-slate-800 rounded-md border-none bg-transparent cursor-pointer"
                      >
                        Settings
                      </button>
                    </li>
                    <li className="p-0">
                      <button 
                        onClick={() => handleNavigation('/certificates')}
                        className="w-full text-left block px-4 py-3 text-slate-600 text-sm transition-all duration-200 hover:bg-slate-50 hover:text-slate-800 rounded-md border-none bg-transparent cursor-pointer"
                      >
                        My Certificates
                      </button>
                    </li>
                    <li className="p-0">
                      <button 
                        onClick={() => handleNavigation('/help')}
                        className="w-full text-left block px-4 py-3 text-slate-600 text-sm transition-all duration-200 hover:bg-slate-50 hover:text-slate-800 rounded-md border-none bg-transparent cursor-pointer"
                      >
                        Help & Support
                      </button>
                    </li>
                    <li className="p-0">
                      <button 
                        onClick={handleSignOut}
                        className="w-full text-left block px-4 py-3 text-slate-600 text-sm transition-all duration-200 hover:bg-slate-50 hover:text-slate-800 rounded-md border-none bg-transparent cursor-pointer"
                      >
                        Sign Out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay to close profile menu when clicking outside */}
      {showProfileMenu && (
        <div 
          className="fixed inset-0 z-40 bg-transparent"
          onClick={handleProfileMenuClose}
        />
      )}
    </>
  );
};