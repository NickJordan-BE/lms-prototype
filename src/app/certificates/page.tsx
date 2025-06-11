'use client'

import React, { useState } from 'react';
import { Calendar, Download, Eye, Award, User, CheckCircle, Share2 } from 'lucide-react';

interface Certificate {
  id: string;
  courseTitle: string;
  studentName: string;
  instructorName: string;
  completionDate: string;
  issueDate: string;
  certificateNumber: string;
  category: string;
  duration: string;
  instructorSignature: string;
  skills: string[];
}

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      id: '1',
      courseTitle: 'UI/UX Design Fundamentals',
      studentName: 'Alex Johnson',
      instructorName: 'Marcus Johnson',
      completionDate: 'April 22, 2025',
      issueDate: 'April 23, 2025',
      certificateNumber: 'CERT-UXUI-2025-001247',
      category: 'Design',
      duration: '6 weeks',
      instructorSignature: 'Marcus Johnson',
      skills: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Usability Testing']
    },
    {
      id: '2',
      courseTitle: 'Advanced JavaScript Programming',
      studentName: 'Alex Johnson',
      instructorName: 'Dr. Sarah Chen',
      completionDate: 'March 15, 2025',
      issueDate: 'March 16, 2025',
      certificateNumber: 'CERT-JS-2025-000892',
      category: 'Programming',
      duration: '8 weeks',
      instructorSignature: 'Dr. Sarah Chen',
      skills: ['ES6+', 'Async Programming', 'DOM Manipulation', 'Testing', 'Performance Optimization']
    },
    {
      id: '3',
      courseTitle: 'Digital Marketing Strategy',
      studentName: 'Alex Johnson',
      instructorName: 'Jennifer Williams',
      completionDate: 'February 28, 2025',
      issueDate: 'March 1, 2025',
      certificateNumber: 'CERT-DM-2025-000654',
      category: 'Marketing',
      duration: '5 weeks',
      instructorSignature: 'Jennifer Williams',
      skills: ['SEO', 'Social Media Marketing', 'Analytics', 'Content Strategy', 'PPC Advertising']
    },
    {
      id: '4',
      courseTitle: 'Project Management Essentials',
      studentName: 'Alex Johnson',
      instructorName: 'Michael Roberts',
      completionDate: 'January 18, 2025',
      issueDate: 'January 19, 2025',
      certificateNumber: 'CERT-PM-2025-000321',
      category: 'Management',
      duration: '6 weeks',
      instructorSignature: 'Michael Roberts',
      skills: ['Agile Methodology', 'Risk Management', 'Team Leadership', 'Budget Planning', 'Timeline Management']
    }
  ];

  const handleViewCertificate = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleDownloadCertificate = (certificate: Certificate) => {
    console.log(`Downloading certificate for ${certificate.courseTitle}`);
    alert(`Certificate for ${certificate.courseTitle} would be downloaded as PDF`);
  };

  const handleShareCertificate = (certificate: Certificate) => {
    const shareUrl = `https://example.com/certificates/${certificate.certificateNumber}`;
    navigator.clipboard.writeText(shareUrl);
    alert('Certificate link copied to clipboard!');
  };

  const CertificateModal = ({ certificate }: { certificate: Certificate }) => (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50,
      padding: '16px'
    }}>
      <div style={{
        background: '#FFFFFF',
        borderRadius: '12px',
        maxWidth: '1000px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        <div style={{ padding: '32px' }}>
          {/* Certificate Content */}
          <div style={{
            position: 'relative',
            border: '8px double #775D47',
            borderRadius: '12px',
            padding: '48px',
            background: 'linear-gradient(135deg, rgba(119, 93, 71, 0.02) 0%, #FFFFFF 100%)',
            minHeight: '600px'
          }}>
            {/* Decorative corners */}
            <div style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              width: '64px',
              height: '64px',
              borderLeft: '4px solid #775D47',
              borderTop: '4px solid #775D47',
              borderTopLeftRadius: '8px'
            }} />
            <div style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              width: '64px',
              height: '64px',
              borderRight: '4px solid #775D47',
              borderTop: '4px solid #775D47',
              borderTopRightRadius: '8px'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              width: '64px',
              height: '64px',
              borderLeft: '4px solid #775D47',
              borderBottom: '4px solid #775D47',
              borderBottomLeftRadius: '8px'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '16px',
              right: '16px',
              width: '64px',
              height: '64px',
              borderRight: '4px solid #775D47',
              borderBottom: '4px solid #775D47',
              borderBottomRightRadius: '8px'
            }} />

            {/* Header */}
            <div style={{
              textAlign: 'center',
              marginBottom: '32px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <Award style={{
                  width: '64px',
                  height: '64px',
                  color: '#775D47',
                  marginRight: '16px'
                }} />
                <div>
                  <h1 style={{
                    fontSize: '2.5rem',
                    fontWeight: '600',
                    color: '#775D47',
                    marginBottom: '8px'
                  }}>
                    CERTIFICATE
                  </h1>
                  <p style={{
                    fontSize: '1.25rem',
                    color: '#8B7355',
                    fontWeight: '600'
                  }}>
                    OF COMPLETION
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div style={{
              textAlign: 'center',
              marginBottom: '32px'
            }}>
              <p style={{
                fontSize: '1.1rem',
                color: '#666',
                marginBottom: '24px'
              }}>
                This is to certify that
              </p>
              
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '600',
                color: '#775D47',
                marginBottom: '32px',
                borderBottom: '2px solid #775D47',
                paddingBottom: '8px',
                display: 'inline-block',
                paddingLeft: '32px',
                paddingRight: '32px'
              }}>
                {certificate.studentName}
              </div>
              
              <p style={{
                fontSize: '1.1rem',
                color: '#666',
                marginBottom: '16px'
              }}>
                has successfully completed the course
              </p>
              
              <div style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#775D47',
                marginBottom: '32px'
              }}>
                {certificate.courseTitle}
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '32px',
                marginBottom: '32px',
                textAlign: 'left',
                maxWidth: '500px',
                margin: '0 auto 32px'
              }}>
                <div>
                  <p style={{
                    fontSize: '14px',
                    color: '#8B7355',
                    marginBottom: '4px'
                  }}>
                    Completion Date:
                  </p>
                  <p style={{
                    fontWeight: '600',
                    color: '#775D47'
                  }}>
                    {certificate.completionDate}
                  </p>
                </div>
                <div>
                  <p style={{
                    fontSize: '14px',
                    color: '#8B7355',
                    marginBottom: '4px'
                  }}>
                    Duration:
                  </p>
                  <p style={{
                    fontWeight: '600',
                    color: '#775D47'
                  }}>
                    {certificate.duration}
                  </p>
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <p style={{
                    fontSize: '14px',
                    color: '#8B7355',
                    marginBottom: '4px'
                  }}>
                    Certificate Number:
                  </p>
                  <p style={{
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    color: '#775D47'
                  }}>
                    {certificate.certificateNumber}
                  </p>
                </div>
              </div>

              {/* Skills Section */}
              <div style={{ marginBottom: '32px' }}>
                <p style={{
                  fontSize: '14px',
                  color: '#8B7355',
                  marginBottom: '12px'
                }}>
                  Skills Demonstrated:
                </p>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '8px'
                }}>
                  {certificate.skills.map((skill, index) => (
                    <span
                      key={index}
                      style={{
                        background: 'rgba(119, 93, 71, 0.1)',
                        color: '#775D47',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontSize: '14px',
                        fontWeight: '500'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Signature Section */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'end',
              marginTop: '48px'
            }}>
              <div style={{ textAlign: 'left' }}>
                <p style={{
                  fontSize: '14px',
                  color: '#8B7355',
                  marginBottom: '8px'
                }}>
                  Issue Date:
                </p>
                <p style={{
                  fontWeight: '600',
                  color: '#775D47'
                }}>
                  {certificate.issueDate}
                </p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{
                    fontSize: '1.5rem',
                    fontFamily: 'cursive',
                    color: '#775D47',
                    marginBottom: '8px'
                  }}>
                    {certificate.instructorSignature}
                  </div>
                  <div style={{
                    width: '192px',
                    borderTop: '2px solid #775D47',
                    margin: '0 auto'
                  }} />
                </div>
                <div>
                  <p style={{
                    fontWeight: '600',
                    color: '#775D47'
                  }}>
                    {certificate.instructorName}
                  </p>
                  <p style={{
                    fontSize: '14px',
                    color: '#8B7355'
                  }}>
                    Course Instructor
                  </p>
                </div>
              </div>
            </div>

            {/* Verification */}
            <div style={{
              textAlign: 'center',
              marginTop: '32px',
              paddingTop: '16px',
              borderTop: '1px solid rgba(119, 93, 71, 0.2)'
            }}>
              <p style={{
                fontSize: '12px',
                color: '#8B7355'
              }}>
                This certificate can be verified at: illuminance-learning.com/verify/{certificate.certificateNumber}
              </p>
            </div>
          </div>

          {/* Modal Actions */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '24px'
          }}>
            <button
              onClick={() => setSelectedCertificate(null)}
              style={{
                background: '#F5F5F5',
                color: '#775D47',
                padding: '12px 24px',
                borderRadius: '8px',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#E8E8E8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#F5F5F5';
              }}
            >
              Close
            </button>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => handleShareCertificate(certificate)}
                style={{
                  background: '#10B981',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#059669';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#10B981';
                }}
              >
                <Share2 style={{ width: '16px', height: '16px' }} />
                Share
              </button>
              <button
                onClick={() => handleDownloadCertificate(certificate)}
                style={{
                  background: '#775D47',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#8B7355';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#775D47';
                }}
              >
                <Download style={{ width: '16px', height: '16px' }} />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{
      minHeight: '100vh',
      background: '#FEFEFE',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '32px 24px'
      }}>
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: '400',
            color: '#775D47',
            marginBottom: '8px'
          }}>
            My Certificates
          </h1>
          <p style={{
            color: '#8B7355',
            fontSize: '1.1rem'
          }}>
            View and manage your earned certificates of completion
          </p>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          marginBottom: '32px'
        }}>
          <div style={{
            background: '#FFFFFF',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 4px 12px rgba(119, 93, 71, 0.05)',
            border: '1px solid rgba(119, 93, 71, 0.08)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <p style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#8B7355',
                  marginBottom: '4px'
                }}>
                  Total Certificates
                </p>
                <p style={{
                  fontSize: '2rem',
                  fontWeight: '600',
                  color: '#775D47'
                }}>
                  {certificates.length}
                </p>
              </div>
              <Award style={{ width: '32px', height: '32px', color: '#775D47' }} />
            </div>
          </div>
          
          <div style={{
            background: '#FFFFFF',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 4px 12px rgba(119, 93, 71, 0.05)',
            border: '1px solid rgba(119, 93, 71, 0.08)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <p style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#8B7355',
                  marginBottom: '4px'
                }}>
                  This Year
                </p>
                <p style={{
                  fontSize: '2rem',
                  fontWeight: '600',
                  color: '#775D47'
                }}>
                  {certificates.length}
                </p>
              </div>
              <Calendar style={{ width: '32px', height: '32px', color: '#10B981' }} />
            </div>
          </div>
          
          <div style={{
            background: '#FFFFFF',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 4px 12px rgba(119, 93, 71, 0.05)',
            border: '1px solid rgba(119, 93, 71, 0.08)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <p style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#8B7355',
                  marginBottom: '4px'
                }}>
                  Skills Earned
                </p>
                <p style={{
                  fontSize: '2rem',
                  fontWeight: '600',
                  color: '#775D47'
                }}>
                  {certificates.reduce((total, cert) => total + cert.skills.length, 0)}
                </p>
              </div>
              <CheckCircle style={{ width: '32px', height: '32px', color: '#8B5CF6' }} />
            </div>
          </div>
        </div>

        {/* Certificates Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '24px'
        }}>
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(119, 93, 71, 0.08)',
                border: '1px solid rgba(119, 93, 71, 0.1)',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(119, 93, 71, 0.12)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(119, 93, 71, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Certificate Preview */}
              <div style={{
                position: 'relative',
                height: '192px',
                background: 'linear-gradient(135deg, rgba(119, 93, 71, 0.02) 0%, #FFFFFF 100%)',
                borderBottom: '4px solid #775D47',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <Award style={{
                    width: '48px',
                    height: '48px',
                    color: '#775D47',
                    margin: '0 auto 8px'
                  }} />
                  <p style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#775D47'
                  }}>
                    CERTIFICATE
                  </p>
                  <p style={{
                    fontSize: '12px',
                    color: '#8B7355'
                  }}>
                    OF COMPLETION
                  </p>
                </div>
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px'
                }}>
                  <span style={{
                    background: '#D1FAE5',
                    color: '#065F46',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>
                    Verified
                  </span>
                </div>
              </div>

              {/* Certificate Info */}
              <div style={{ padding: '24px' }}>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#775D47',
                  marginBottom: '8px',
                  lineHeight: '1.4',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {certificate.courseTitle}
                </h3>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '12px'
                }}>
                  <User style={{ width: '16px', height: '16px', color: '#8B7355' }} />
                  <span style={{
                    fontSize: '14px',
                    color: '#8B7355'
                  }}>
                    {certificate.instructorName}
                  </span>
                </div>
                
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  marginBottom: '16px'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '14px'
                  }}>
                    <span style={{ color: '#8B7355' }}>Completed:</span>
                    <span style={{
                      fontWeight: '500',
                      color: '#775D47'
                    }}>
                      {certificate.completionDate}
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '14px'
                  }}>
                    <span style={{ color: '#8B7355' }}>Duration:</span>
                    <span style={{
                      fontWeight: '500',
                      color: '#775D47'
                    }}>
                      {certificate.duration}
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '14px'
                  }}>
                    <span style={{ color: '#8B7355' }}>Category:</span>
                    <span style={{
                      fontWeight: '500',
                      color: '#775D47'
                    }}>
                      {certificate.category}
                    </span>
                  </div>
                </div>

                {/* Skills Preview */}
                <div style={{ marginBottom: '16px' }}>
                  <p style={{
                    fontSize: '12px',
                    color: '#8B7355',
                    marginBottom: '8px'
                  }}>
                    Skills Demonstrated:
                  </p>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '4px'
                  }}>
                    {certificate.skills.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        style={{
                          background: 'rgba(119, 93, 71, 0.1)',
                          color: '#775D47',
                          padding: '4px 8px',
                          borderRadius: '12px',
                          fontSize: '12px'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                    {certificate.skills.length > 3 && (
                      <span style={{
                        fontSize: '12px',
                        color: '#8B7355',
                        padding: '4px 8px'
                      }}>
                        +{certificate.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={() => handleViewCertificate(certificate)}
                    style={{
                      flex: 1,
                      background: '#775D47',
                      color: 'white',
                      padding: '10px 16px',
                      borderRadius: '8px',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#8B7355';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#775D47';
                    }}
                  >
                    <Eye style={{ width: '16px', height: '16px' }} />
                    View
                  </button>
                  <button
                    onClick={() => handleDownloadCertificate(certificate)}
                    style={{
                      background: '#F5F5F5',
                      color: '#775D47',
                      padding: '10px 16px',
                      borderRadius: '8px',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#E8E8E8';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#F5F5F5';
                    }}
                  >
                    <Download style={{ width: '16px', height: '16px' }} />
                  </button>
                  <button
                    onClick={() => handleShareCertificate(certificate)}
                    style={{
                      background: 'rgba(16, 185, 129, 0.1)',
                      color: '#059669',
                      padding: '10px 16px',
                      borderRadius: '8px',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(16, 185, 129, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(16, 185, 129, 0.1)';
                    }}
                  >
                    <Share2 style={{ width: '16px', height: '16px' }} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {certificates.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '64px 0'
          }}>
            <Award style={{
              width: '64px',
              height: '64px',
              color: '#8B7355',
              margin: '0 auto 16px'
            }} />
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#775D47',
              marginBottom: '8px'
            }}>
              No certificates yet
            </h3>
            <p style={{
              color: '#8B7355',
              marginBottom: '24px'
            }}>
              Complete courses to earn your first certificate!
            </p>
            <button 
              onClick={() => window.location.href = '/courses'}
              style={{
                background: '#775D47',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#8B7355';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#775D47';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Browse Courses
            </button>
          </div>
        )}
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <CertificateModal certificate={selectedCertificate} />
      )}
    </div>
  );
}