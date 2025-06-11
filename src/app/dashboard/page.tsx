'use client'
import React, { useState } from 'react';
import { Julius_Sans_One, Inter } from 'next/font/google';
import { 
  BookOpen, 
  Users, 
  BarChart3, 
  Plus, 
  Search, 
  Bell, 
  Settings, 
  Download,
  Eye,
  Edit3,
  Calendar,
  Clock,
  TrendingUp,
  Award,
  PlayCircle,
  FileText,
  MessageSquare,
  Upload,
  CheckCircle2,
  AlertCircle,
  User
} from 'lucide-react';

const julius = Julius_Sans_One({ subsets: ['latin'], weight: '400' });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] });

export default function ProfessorDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Sample data
  const courses = [
    {
      id: 1,
      title: 'Advanced Technical Certification Program',
      students: 24,
      progress: 67,
      avgScore: 88,
      lastUpdated: '2 days ago',
      status: 'active',
      lessons: 14,
      completedLessons: 9
    },
    {
      id: 2,
      title: 'UI/UX Design Fundamentals',
      students: 31,
      progress: 45,
      avgScore: 92,
      lastUpdated: '1 week ago',
      status: 'active',
      lessons: 12,
      completedLessons: 5
    },
    {
      id: 3,
      title: 'Python for Data Science',
      students: 18,
      progress: 23,
      avgScore: 85,
      lastUpdated: '3 days ago',
      status: 'draft',
      lessons: 16,
      completedLessons: 3
    }
  ];

  const students = [
    { id: 1, name: 'Alex Johnson', course: 'Advanced Technical Certification', progress: 85, lastActive: '2 hours ago', status: 'on-track' },
    { id: 2, name: 'Sarah Chen', course: 'UI/UX Design Fundamentals', progress: 92, lastActive: '1 day ago', status: 'ahead' },
    { id: 3, name: 'Marcus Williams', course: 'Python for Data Science', progress: 34, lastActive: '5 days ago', status: 'behind' },
    { id: 4, name: 'Emily Rodriguez', course: 'Advanced Technical Certification', progress: 78, lastActive: '4 hours ago', status: 'on-track' }
  ];

  const recentActivity = [
    { type: 'completion', student: 'Alex Johnson', action: 'completed lesson "Component Analysis"', time: '2 hours ago' },
    { type: 'submission', student: 'Sarah Chen', action: 'submitted assignment "Wireframe Project"', time: '4 hours ago' },
    { type: 'question', student: 'Marcus Williams', action: 'asked a question in "Data Cleaning Basics"', time: '1 day ago' },
    { type: 'completion', student: 'Emily Rodriguez', action: 'completed quiz "Safety Protocols"', time: '1 day ago' }
  ];

  const QuickStats = () => (
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
        boxShadow: '0 4px 12px rgba(119, 93, 71, 0.08)',
        border: '1px solid rgba(119, 93, 71, 0.1)'
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
              marginBottom: '4px',
              fontFamily: inter.style.fontFamily
            }}>
              Total Students
            </p>
            <p style={{
              fontSize: '2rem',
              fontWeight: '600',
              color: '#775D47',
              fontFamily: inter.style.fontFamily
            }}>
              73
            </p>
          </div>
          <Users style={{ width: '32px', height: '32px', color: '#775D47' }} />
        </div>
      </div>

      <div style={{
        background: '#FFFFFF',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 4px 12px rgba(119, 93, 71, 0.08)',
        border: '1px solid rgba(119, 93, 71, 0.1)'
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
              marginBottom: '4px',
              fontFamily: inter.style.fontFamily
            }}>
              Active Courses
            </p>
            <p style={{
              fontSize: '2rem',
              fontWeight: '600',
              color: '#775D47',
              fontFamily: inter.style.fontFamily
            }}>
              {courses.filter(c => c.status === 'active').length}
            </p>
          </div>
          <BookOpen style={{ width: '32px', height: '32px', color: '#10B981' }} />
        </div>
      </div>

      <div style={{
        background: '#FFFFFF',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 4px 12px rgba(119, 93, 71, 0.08)',
        border: '1px solid rgba(119, 93, 71, 0.1)'
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
              marginBottom: '4px',
              fontFamily: inter.style.fontFamily
            }}>
              Avg Completion
            </p>
            <p style={{
              fontSize: '2rem',
              fontWeight: '600',
              color: '#775D47',
              fontFamily: inter.style.fontFamily
            }}>
              67%
            </p>
          </div>
          <TrendingUp style={{ width: '32px', height: '32px', color: '#F59E0B' }} />
        </div>
      </div>

      <div style={{
        background: '#FFFFFF',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 4px 12px rgba(119, 93, 71, 0.08)',
        border: '1px solid rgba(119, 93, 71, 0.1)'
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
              marginBottom: '4px',
              fontFamily: inter.style.fontFamily
            }}>
              Avg Score
            </p>
            <p style={{
              fontSize: '2rem',
              fontWeight: '600',
              color: '#775D47',
              fontFamily: inter.style.fontFamily
            }}>
              88%
            </p>
          </div>
          <Award style={{ width: '32px', height: '32px', color: '#8B5CF6' }} />
        </div>
      </div>
    </div>
  );

  const CourseOverview = () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: '32px',
      marginBottom: '32px'
    }}>
      {/* Courses List */}
      <div style={{
        background: '#FFFFFF',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 4px 12px rgba(119, 93, 71, 0.08)',
        border: '1px solid rgba(119, 93, 71, 0.1)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '24px'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#775D47',
            fontFamily: inter.style.fontFamily
          }}>
            My Courses
          </h3>
          <button
            onClick={() => {
              // In a real app: router.push('/coursecreation')
              window.location.href = '/coursecreation';
              console.log('Navigate to /coursecreation');
            }}
            style={{
              background: '#775D47',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              fontFamily: inter.style.fontFamily
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#8B7355';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#775D47';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Plus style={{ width: '16px', height: '16px' }} />
            New Course
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {courses.map(course => (
            <div key={course.id} style={{
              padding: '16px',
              border: '1px solid rgba(119, 93, 71, 0.1)',
              borderRadius: '8px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(119, 93, 71, 0.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '12px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#775D47',
                    margin: 0,
                    fontFamily: inter.style.fontFamily
                  }}>
                    {course.title}
                  </h4>
                  <span style={{
                    background: course.status === 'active' ? '#D1FAE5' : '#FEF3C7',
                    color: course.status === 'active' ? '#065F46' : '#92400E',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '500',
                    fontFamily: inter.style.fontFamily
                  }}>
                    {course.status}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#8B7355'
                  }}>
                    <Eye style={{ width: '16px', height: '16px' }} />
                  </button>
                  <button style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#8B7355'
                  }}>
                    <Edit3 style={{ width: '16px', height: '16px' }} />
                  </button>
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '16px',
                fontSize: '14px',
                fontFamily: inter.style.fontFamily
              }}>
                <div>
                  <span style={{ color: '#8B7355' }}>Students: </span>
                  <span style={{ color: '#775D47', fontWeight: '500' }}>{course.students}</span>
                </div>
                <div>
                  <span style={{ color: '#8B7355' }}>Progress: </span>
                  <span style={{ color: '#775D47', fontWeight: '500' }}>{course.progress}%</span>
                </div>
                <div>
                  <span style={{ color: '#8B7355' }}>Avg Score: </span>
                  <span style={{ color: '#775D47', fontWeight: '500' }}>{course.avgScore}%</span>
                </div>
                <div>
                  <span style={{ color: '#8B7355' }}>Updated: </span>
                  <span style={{ color: '#775D47', fontWeight: '500' }}>{course.lastUpdated}</span>
                </div>
              </div>

              <div style={{
                marginTop: '12px',
                width: '100%',
                background: 'rgba(119, 93, 71, 0.1)',
                borderRadius: '4px',
                height: '6px'
              }}>
                <div style={{
                  width: `${course.progress}%`,
                  background: 'linear-gradient(90deg, #775D47 0%, #8B7355 100%)',
                  height: '6px',
                  borderRadius: '4px',
                  transition: 'width 0.3s ease'
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div style={{
        background: '#FFFFFF',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 4px 12px rgba(119, 93, 71, 0.08)',
        border: '1px solid rgba(119, 93, 71, 0.1)'
      }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: '600',
          color: '#775D47',
          marginBottom: '24px',
          fontFamily: inter.style.fontFamily
        }}>
          Recent Activity
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {recentActivity.map((activity, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              padding: '12px',
              borderRadius: '8px',
              background: 'rgba(119, 93, 71, 0.02)'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: activity.type === 'completion' ? '#D1FAE5' : 
                          activity.type === 'submission' ? '#DBEAFE' : '#FEF3C7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {activity.type === 'completion' && <CheckCircle2 style={{ width: '16px', height: '16px', color: '#059669' }} />}
                {activity.type === 'submission' && <FileText style={{ width: '16px', height: '16px', color: '#2563EB' }} />}
                {activity.type === 'question' && <MessageSquare style={{ width: '16px', height: '16px', color: '#D97706' }} />}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{
                  fontSize: '14px',
                  color: '#775D47',
                  margin: 0,
                  lineHeight: '1.4',
                  fontFamily: inter.style.fontFamily
                }}>
                  <strong>{activity.student}</strong> {activity.action}
                </p>
                <p style={{
                  fontSize: '12px',
                  color: '#8B7355',
                  margin: '4px 0 0 0',
                  fontFamily: inter.style.fontFamily
                }}>
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const StudentManagement = () => (
    <div style={{
      background: '#FFFFFF',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 4px 12px rgba(119, 93, 71, 0.08)',
      border: '1px solid rgba(119, 93, 71, 0.1)',
      marginBottom: '32px'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '24px'
      }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: '600',
          color: '#775D47',
          fontFamily: inter.style.fontFamily
        }}>
          Student Progress
        </h3>
        <div style={{ display: 'flex', gap: '12px' }}>
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center'
          }}>
            <Search style={{
              position: 'absolute',
              left: '12px',
              width: '16px',
              height: '16px',
              color: '#8B7355'
            }} />
            <input
              type="text"
              placeholder="Search students..."
              style={{
                padding: '8px 8px 8px 36px',
                border: '1px solid rgba(119, 93, 71, 0.2)',
                borderRadius: '8px',
                fontSize: '14px',
                width: '200px',
                fontFamily: inter.style.fontFamily
              }}
            />
          </div>
          <button style={{
            background: 'rgba(119, 93, 71, 0.1)',
            color: '#775D47',
            padding: '8px 16px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            fontFamily: inter.style.fontFamily
          }}>
            <Download style={{ width: '16px', height: '16px' }} />
            Export
          </button>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '16px'
      }}>
        {students.map(student => (
          <div key={student.id} style={{
            padding: '16px',
            border: '1px solid rgba(119, 93, 71, 0.1)',
            borderRadius: '8px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(119, 93, 71, 0.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(119, 93, 71, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <User style={{ width: '20px', height: '20px', color: '#775D47' }} />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#775D47',
                    margin: 0,
                    fontFamily: inter.style.fontFamily
                  }}>
                    {student.name}
                  </h4>
                  <p style={{
                    fontSize: '14px',
                    color: '#8B7355',
                    margin: 0,
                    fontFamily: inter.style.fontFamily
                  }}>
                    {student.course}
                  </p>
                </div>
              </div>
              <span style={{
                background: student.status === 'ahead' ? '#D1FAE5' :
                          student.status === 'behind' ? '#FEE2E2' : '#FEF3C7',
                color: student.status === 'ahead' ? '#065F46' :
                       student.status === 'behind' ? '#991B1B' : '#92400E',
                padding: '4px 8px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: '500',
                fontFamily: inter.style.fontFamily
              }}>
                {student.status === 'ahead' ? 'Ahead' : 
                 student.status === 'behind' ? 'Behind' : 'On Track'}
              </span>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '8px'
            }}>
              <span style={{ 
                fontSize: '14px', 
                color: '#8B7355',
                fontFamily: inter.style.fontFamily 
              }}>Progress</span>
              <span style={{ 
                fontSize: '14px', 
                fontWeight: '600', 
                color: '#775D47',
                fontFamily: inter.style.fontFamily 
              }}>
                {student.progress}%
              </span>
            </div>

            <div style={{
              width: '100%',
              background: 'rgba(119, 93, 71, 0.1)',
              borderRadius: '4px',
              height: '6px',
              marginBottom: '8px'
            }}>
              <div style={{
                width: `${student.progress}%`,
                background: student.status === 'ahead' ? '#10B981' :
                          student.status === 'behind' ? '#EF4444' : '#775D47',
                height: '6px',
                borderRadius: '4px',
                transition: 'width 0.3s ease'
              }} />
            </div>

            <p style={{
              fontSize: '12px',
              color: '#8B7355',
              margin: 0,
              fontFamily: inter.style.fontFamily
            }}>
              Last active: {student.lastActive}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{
      minHeight: '100vh',
      background: '#FEFEFE',
      fontFamily: inter.style.fontFamily
    }}>
      {/* Navigation */}
      <div style={{ display: 'flex' }}>
        {/* Sidebar Navigation */}
        <nav style={{
          width: '280px',
          background: '#FFFFFF',
          borderRight: '1px solid rgba(119, 93, 71, 0.08)',
          minHeight: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          zIndex: 40
        }}>
          {/* Logo/Brand */}
          <div style={{
            padding: '24px',
            borderBottom: '1px solid rgba(119, 93, 71, 0.08)'
          }}>
            <a
              href="/"
              onClick={() => {
                // In a real app: router.push('/')
                window.location.href = '/';
                console.log('Navigate to home /');
              }}
              style={{
                textDecoration: 'none',
                display: 'block',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <h1 style={{
                fontSize: '1.5rem',
                fontWeight: '400',
                color: '#775D47',
                margin: 0,
                fontFamily: julius.style.fontFamily
              }}>
                Illuminance Esthetics
              </h1>
            </a>
          </div>

          {/* Navigation Menu */}
          <div style={{ padding: '24px 0' }}>
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BarChart3, href: '/professor' },
              { id: 'courses', label: 'My Courses', icon: BookOpen, href: '/professor/courses' },
              { id: 'students', label: 'Students', icon: Users, href: '/professor/students' },
              { id: 'analytics', label: 'Analytics', icon: BarChart3, href: '/professor/analytics' },
              { id: 'messages', label: 'Messages', icon: MessageSquare, href: '/professor/messages' },
              { id: 'settings', label: 'Settings', icon: Settings, href: '/professor/settings' }
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    // In a real app, this would be: router.push(item.href)
                    console.log(`Navigate to ${item.href}`);
                  }}
                  style={{
                    width: '100%',
                    padding: '12px 24px',
                    background: isActive ? 'rgba(119, 93, 71, 0.1)' : 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    color: isActive ? '#775D47' : '#8B7355',
                    fontSize: '14px',
                    fontWeight: isActive ? '600' : '500',
                    transition: 'all 0.2s ease',
                    borderRight: isActive ? '3px solid #775D47' : '3px solid transparent',
                    fontFamily: inter.style.fontFamily
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'rgba(119, 93, 71, 0.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  <Icon style={{ width: '18px', height: '18px' }} />
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Bottom Section */}
          <div style={{
            position: 'absolute',
            bottom: '24px',
            left: '24px',
            right: '24px'
          }}>
            <div style={{
              background: 'rgba(119, 93, 71, 0.05)',
              borderRadius: '8px',
              padding: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(119, 93, 71, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{
                    fontSize: '16px',
                    fontWeight: '500',
                    color: '#775D47',
                    fontFamily: inter.style.fontFamily
                  }}>
                    DK
                  </span>
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#775D47',
                    margin: 0,
                    fontFamily: inter.style.fontFamily
                  }}>
                    Dr. Kumar
                  </p>
                  <p style={{
                    fontSize: '12px',
                    color: '#8B7355',
                    margin: 0,
                    fontFamily: inter.style.fontFamily
                  }}>
                    Professor
                  </p>
                </div>
                <button style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#8B7355'
                }}>
                  <Settings style={{ width: '16px', height: '16px' }} />
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Top Bar */}
        <div style={{ marginLeft: '280px', flex: 1 }}>
          <header style={{
            background: '#FFFFFF',
            backdropFilter: 'blur(8px)',
            borderBottom: '1px solid rgba(119, 93, 71, 0.08)',
            boxShadow: '0 2px 12px rgba(119, 93, 71, 0.04)',
            position: 'sticky',
            top: 0,
            zIndex: 30,
            height: '70px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 32px'
          }}>
            <div>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '400',
                color: '#775D47',
                margin: 0,
                fontFamily: julius.style.fontFamily
              }}>
                {activeTab === 'dashboard' && 'Dashboard'}
                {activeTab === 'courses' && 'My Courses'}
                {activeTab === 'students' && 'Students'}
                {activeTab === 'analytics' && 'Analytics'}
                {activeTab === 'messages' && 'Messages'}
                {activeTab === 'settings' && 'Settings'}
              </h2>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: '#8B7355',
                position: 'relative'
              }}>
                <Bell style={{ width: '20px', height: '20px' }} />
                <span style={{
                  position: 'absolute',
                  top: '-2px',
                  right: '-2px',
                  width: '8px',
                  height: '8px',
                  background: '#EF4444',
                  borderRadius: '50%'
                }} />
              </button>
              
              <button
                onClick={() => {
                  // In a real app: router.push('/student')
                  console.log('Switch to Student View');
                }}
                style={{
                  background: 'rgba(119, 93, 71, 0.1)',
                  color: '#775D47',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '12px',
                  fontWeight: '500',
                  fontFamily: inter.style.fontFamily
                }}
              >
                Student View
              </button>
            </div>
          </header>

          {/* Main Content */}
          <main style={{
            padding: '32px',
            background: '#FEFEFE',
            minHeight: 'calc(100vh - 70px)'
          }}>
            {activeTab === 'dashboard' && (
              <div>
                <div style={{ marginBottom: '32px' }}>
                  <p style={{
                    color: '#8B7355',
                    fontSize: '1.1rem',
                    fontFamily: inter.style.fontFamily
                  }}>
                    Here's what's happening with your courses today
                  </p>
                </div>
                <QuickStats />
                <CourseOverview />
                <StudentManagement />
                {/* Quick Actions */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '16px'
                }}>
                  <button
                    onClick={() => setActiveTab('courses')}
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid rgba(119, 93, 71, 0.1)',
                      borderRadius: '12px',
                      padding: '20px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(119, 93, 71, 0.08)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <Upload style={{ width: '24px', height: '24px', color: '#775D47', marginBottom: '12px' }} />
                    <h4 style={{ 
                      color: '#775D47', 
                      fontSize: '1rem', 
                      fontWeight: '600', 
                      margin: '0 0 4px 0',
                      fontFamily: inter.style.fontFamily 
                    }}>
                      Upload Content
                    </h4>
                    <p style={{ 
                      color: '#8B7355', 
                      fontSize: '14px', 
                      margin: 0,
                      fontFamily: inter.style.fontFamily 
                    }}>
                      Add new lessons and materials
                    </p>
                  </button>

                  <button
                    onClick={() => setActiveTab('analytics')}
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid rgba(119, 93, 71, 0.1)',
                      borderRadius: '12px',
                      padding: '20px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(119, 93, 71, 0.08)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <BarChart3 style={{ width: '24px', height: '24px', color: '#775D47', marginBottom: '12px' }} />
                    <h4 style={{ 
                      color: '#775D47', 
                      fontSize: '1rem', 
                      fontWeight: '600', 
                      margin: '0 0 4px 0',
                      fontFamily: inter.style.fontFamily 
                    }}>
                      Analytics
                    </h4>
                    <p style={{ 
                      color: '#8B7355', 
                      fontSize: '14px', 
                      margin: 0,
                      fontFamily: inter.style.fontFamily 
                    }}>
                      View detailed reports
                    </p>
                  </button>

                  <button
                    onClick={() => setActiveTab('messages')}
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid rgba(119, 93, 71, 0.1)',
                      borderRadius: '12px',
                      padding: '20px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(119, 93, 71, 0.08)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <MessageSquare style={{ width: '24px', height: '24px', color: '#775D47', marginBottom: '12px' }} />
                    <h4 style={{ 
                      color: '#775D47', 
                      fontSize: '1rem', 
                      fontWeight: '600', 
                      margin: '0 0 4px 0',
                      fontFamily: inter.style.fontFamily 
                    }}>
                      Messages
                    </h4>
                    <p style={{ 
                      color: '#8B7355', 
                      fontSize: '14px', 
                      margin: 0,
                      fontFamily: inter.style.fontFamily 
                    }}>
                      Communicate with students
                    </p>
                  </button>

                  <button
                    onClick={() => setActiveTab('settings')}
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid rgba(119, 93, 71, 0.1)',
                      borderRadius: '12px',
                      padding: '20px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(119, 93, 71, 0.08)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <Settings style={{ width: '24px', height: '24px', color: '#775D47', marginBottom: '12px' }} />
                    <h4 style={{ 
                      color: '#775D47', 
                      fontSize: '1rem', 
                      fontWeight: '600', 
                      margin: '0 0 4px 0',
                      fontFamily: inter.style.fontFamily 
                    }}>
                      Settings
                    </h4>
                    <p style={{ 
                      color: '#8B7355', 
                      fontSize: '14px', 
                      margin: 0,
                      fontFamily: inter.style.fontFamily 
                    }}>
                      Manage preferences
                    </p>
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'courses' && (
              <div style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '32px',
                boxShadow: '0 4px 12px rgba(119, 93, 71, 0.08)',
                border: '1px solid rgba(119, 93, 71, 0.1)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '24px'
                }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: '#775D47',
                    fontFamily: inter.style.fontFamily
                  }}>
                    Course Management
                  </h3>
                  <button
                    onClick={() => {
                      // In a real app: router.push('/coursecreation')
                      window.location.href = '/coursecreation';
                      console.log('Navigate to /coursecreation');
                    }}
                    style={{
                      background: '#775D47',
                      color: 'white',
                      padding: '10px 20px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '14px',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      fontFamily: inter.style.fontFamily
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
                    <Plus style={{ width: '16px', height: '16px' }} />
                    Create New Course
                  </button>
                </div>
                <p style={{ 
                  color: '#8B7355', 
                  fontSize: '1rem',
                  fontFamily: inter.style.fontFamily 
                }}>
                  Manage your courses, create new content, and track student progress.
                </p>
              </div>
            )}

            {activeTab === 'students' && (
              <div style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '32px',
                boxShadow: '0 4px 12px rgba(119, 93, 71, 0.08)',
                border: '1px solid rgba(119, 93, 71, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#775D47',
                  marginBottom: '16px',
                  fontFamily: inter.style.fontFamily
                }}>
                  Student Management
                </h3>
                <p style={{ 
                  color: '#8B7355', 
                  fontSize: '1rem',
                  fontFamily: inter.style.fontFamily 
                }}>
                  View student progress, manage enrollments, and communicate with your learners.
                </p>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '32px',
                boxShadow: '0 4px 12px rgba(119, 93, 71, 0.08)',
                border: '1px solid rgba(119, 93, 71, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#775D47',
                  marginBottom: '16px',
                  fontFamily: inter.style.fontFamily
                }}>
                  Analytics & Reports
                </h3>
                <p style={{ 
                  color: '#8B7355', 
                  fontSize: '1rem',
                  fontFamily: inter.style.fontFamily 
                }}>
                  Track course performance, student engagement, and learning outcomes.
                </p>
              </div>
            )}

            {activeTab === 'messages' && (
              <div style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '32px',
                boxShadow: '0 4px 12px rgba(119, 93, 71, 0.08)',
                border: '1px solid rgba(119, 93, 71, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#775D47',
                  marginBottom: '16px',
                  fontFamily: inter.style.fontFamily
                }}>
                  Messages & Communication
                </h3>
                <p style={{ 
                  color: '#8B7355', 
                  fontSize: '1rem',
                  fontFamily: inter.style.fontFamily 
                }}>
                  Send announcements, answer questions, and communicate with students.
                </p>
              </div>
            )}

            {activeTab === 'settings' && (
              <div style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '32px',
                boxShadow: '0 4px 12px rgba(119, 93, 71, 0.08)',
                border: '1px solid rgba(119, 93, 71, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#775D47',
                  marginBottom: '16px',
                  fontFamily: inter.style.fontFamily
                }}>
                  Settings & Preferences
                </h3>
                <p style={{ 
                  color: '#8B7355', 
                  fontSize: '1rem',
                  fontFamily: inter.style.fontFamily 
                }}>
                  Manage your account settings, notification preferences, and platform configuration.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}