import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav style={{
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(119, 93, 71, 0.1)',
      boxShadow: '0 4px 20px rgba(119, 93, 71, 0.08)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '80px'
        }}>
          {/* Logo/Brand */}
          <div style={{ flexShrink: 0 }}>
            <a href="/" style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{
                fontSize: '1.75rem',
                fontWeight: '300',
                color: '#775D47',
                letterSpacing: '1px'
              }}>
                Illuminance
              </span>
              <span style={{
                fontSize: '1.25rem',
                fontWeight: '400',
                color: '#8B7355',
                letterSpacing: '0.5px'
              }}>
                Esthetics
              </span>
            </a>
          </div>
          
          {/* Navigation Links */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px'
          }}>
            <a 
              href="/dashboard" 
              style={{
                color: '#775D47',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '400',
                transition: 'all 0.3s ease',
                padding: '8px 0',
                borderBottom: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#8B7355';
                e.currentTarget.style.borderBottomColor = '#8B7355';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#775D47';
                e.currentTarget.style.borderBottomColor = 'transparent';
              }}
            >
              Professor
            </a>
            <a 
              href="/about" 
              style={{
                color: '#775D47',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '400',
                transition: 'all 0.3s ease',
                padding: '8px 0',
                borderBottom: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#8B7355';
                e.currentTarget.style.borderBottomColor = '#8B7355';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#775D47';
                e.currentTarget.style.borderBottomColor = 'transparent';
              }}
            >
              About
            </a>
            <a 
              href="/features" 
              style={{
                color: '#775D47',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '400',
                transition: 'all 0.3s ease',
                padding: '8px 0',
                borderBottom: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#8B7355';
                e.currentTarget.style.borderBottomColor = '#8B7355';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#775D47';
                e.currentTarget.style.borderBottomColor = 'transparent';
              }}
            >
              Services
            </a>
            <a 
              href="/courses" 
              style={{
                color: '#775D47',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '400',
                transition: 'all 0.3s ease',
                padding: '8px 0',
                borderBottom: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#8B7355';
                e.currentTarget.style.borderBottomColor = '#8B7355';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#775D47';
                e.currentTarget.style.borderBottomColor = 'transparent';
              }}
            >
              Courses
            </a>
            <a 
              href="/contact" 
              style={{
                color: '#775D47',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '400',
                transition: 'all 0.3s ease',
                padding: '8px 0',
                borderBottom: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#8B7355';
                e.currentTarget.style.borderBottomColor = '#8B7355';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#775D47';
                e.currentTarget.style.borderBottomColor = 'transparent';
              }}
            >
              Contact
            </a>
            
            {/* Auth Buttons */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginLeft: '16px'
            }}>
              <a 
                href="/login" 
                style={{
                  color: '#775D47',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '400',
                  transition: 'all 0.3s ease',
                  padding: '8px 16px',
                  borderRadius: '8px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#8B7355';
                  e.currentTarget.style.backgroundColor = 'rgba(119, 93, 71, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#775D47';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Sign In
              </a>
              <a 
                href="/signup" 
                style={{
                  background: '#775D47',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '500',
                  padding: '12px 24px',
                  borderRadius: '25px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(119, 93, 71, 0.2)',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#8B7355';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(119, 93, 71, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#775D47';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(119, 93, 71, 0.2)';
                }}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;