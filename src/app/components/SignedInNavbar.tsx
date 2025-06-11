'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Julius_Sans_One, Inter } from 'next/font/google';

const julius = Julius_Sans_One({ subsets: ['latin'], weight: '400' });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] });

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
      <nav style={{
        background: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(119, 93, 71, 0.08)',
        boxShadow: '0 2px 12px rgba(119, 93, 71, 0.04)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 32px',
        fontFamily: inter.style.fontFamily
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <button 
            onClick={() => router.push('/')}
            style={{
              color: '#775D47',
              fontSize: '1.5rem',
              fontWeight: '400',
              fontFamily: julius.style.fontFamily,
              letterSpacing: '0.5px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: '8px 0'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#8B7355';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#775D47';
            }}
          >
            Illuminance Learning
          </button>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <button 
              onClick={() => router.push('/mylearning')}
              style={{
                background: '#775D47',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '500',
                fontFamily: inter.style.fontFamily,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#8B7355';
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(119, 93, 71, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#775D47';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              My Learning
            </button>
            
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <button 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'transparent',
                  border: '1px solid rgba(119, 93, 71, 0.15)',
                  borderRadius: '10px',
                  padding: '8px 12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  color: '#775D47',
                  fontSize: '14px',
                  fontFamily: inter.style.fontFamily
                }}
                onClick={handleProfileClick}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(119, 93, 71, 0.25)';
                  e.currentTarget.style.background = 'rgba(119, 93, 71, 0.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(119, 93, 71, 0.15)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #775D47 0%, #8B7355 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '14px',
                  fontFamily: inter.style.fontFamily
                }}>
                  U
                </div>
                <span style={{ fontWeight: '500', color: '#775D47', fontFamily: inter.style.fontFamily }}>User</span>
                <span style={{
                  fontSize: '10px',
                  color: '#8B7355',
                  transition: 'transform 0.3s ease',
                  transform: showProfileMenu ? 'rotate(180deg)' : 'rotate(0deg)'
                }}>
                  ▼
                </span>
              </button>
              
              {showProfileMenu && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  marginTop: '8px',
                  background: 'rgba(255, 255, 255, 0.98)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(119, 93, 71, 0.1)',
                  borderRadius: '12px',
                  boxShadow: '0 12px 32px rgba(119, 93, 71, 0.15)',
                  minWidth: '220px',
                  zIndex: 50,
                  animation: 'fadeIn 0.2s ease-out',
                  fontFamily: inter.style.fontFamily
                }}>
                  <div style={{
                    padding: '16px',
                    borderBottom: '1px solid rgba(119, 93, 71, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #775D47 0%, #8B7355 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: '600',
                      fontFamily: inter.style.fontFamily
                    }}>
                      U
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontWeight: '600',
                        color: '#775D47',
                        fontSize: '14px',
                        marginBottom: '2px',
                        fontFamily: inter.style.fontFamily
                      }}>
                        User Name
                      </div>
                      <div style={{
                        color: '#8B7355',
                        fontSize: '12px',
                        fontFamily: inter.style.fontFamily
                      }}>
                        user@example.com
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ padding: '8px 0' }}>
                    {[
                      { label: 'My Profile', route: '/profile' },
                      { label: 'Settings', route: '/settings' },
                      { label: 'My Certificates', route: '/certificates' },
                      { label: 'Help & Support', route: '/help' }
                    ].map((item) => (
                      <button 
                        key={item.route}
                        onClick={() => handleNavigation(item.route)}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          display: 'block',
                          padding: '12px 16px',
                          color: '#775D47',
                          fontSize: '14px',
                          fontWeight: '400',
                          fontFamily: inter.style.fontFamily,
                          transition: 'all 0.3s ease',
                          borderRadius: '6px',
                          margin: '2px 8px',
                          border: 'none',
                          background: 'transparent',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(119, 93, 71, 0.05)';
                          e.currentTarget.style.color = '#8B7355';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '#775D47';
                        }}
                      >
                        {item.label}
                      </button>
                    ))}
                    
                    <div style={{
                      height: '1px',
                      background: 'rgba(119, 93, 71, 0.08)',
                      margin: '8px 16px'
                    }}></div>
                    
                    <button 
                      onClick={handleSignOut}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        display: 'block',
                        padding: '12px 16px',
                        color: '#DC2626',
                        fontSize: '14px',
                        fontWeight: '400',
                        fontFamily: inter.style.fontFamily,
                        transition: 'all 0.3s ease',
                        borderRadius: '6px',
                        margin: '2px 8px',
                        border: 'none',
                        background: 'transparent',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(220, 38, 38, 0.05)';
                        e.currentTarget.style.color = '#EF4444';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#DC2626';
                      }}
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay to close profile menu when clicking outside */}
      {showProfileMenu && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 40,
            background: 'transparent'
          }}
          onClick={handleProfileMenuClose}
        />
      )}
      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
};