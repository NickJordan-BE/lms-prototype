'use client'

import React from 'react';
import { Clock, Users, BookOpen, Star, Calendar, Play, CheckCircle, BarChart3 } from 'lucide-react';

interface EnrolledCourse {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  lessons: number;
  completedLessons: number;
  rating: number;
  price: string;
  image: string;
  category: string;
  enrolledDate: string;
  lastAccessed: string;
  estimatedTimeLeft: string;
  isCompleted: boolean;
  certificateEarned?: boolean;
}

export default function MyLearning() {
  const enrolledCourses: EnrolledCourse[] = [
    {
      id: '1',
      title: 'Advanced Technical Certification Program',
      description: 'Comprehensive technical training covering core concepts, equipment setup, and component analysis with hands-on demonstrations.',
      instructor: 'Dr. Alex Kumar',
      duration: '12 weeks',
      lessons: 14,
      completedLessons: 8,
      rating: 4.8,
      price: '$299',
      image: '/api/placeholder/300/200',
      category: 'Technical Certification',
      enrolledDate: 'March 15, 2025',
      lastAccessed: '2 hours ago',
      estimatedTimeLeft: '3 weeks',
      isCompleted: false
    },
    {
      id: '2',
      title: 'UI/UX Design Fundamentals',
      description: 'Learn the principles of user interface and user experience design from wireframes to high-fidelity prototypes.',
      instructor: 'Marcus Johnson',
      duration: '6 weeks',
      lessons: 35,
      completedLessons: 35,
      rating: 4.9,
      price: '$119',
      image: '/api/placeholder/300/200',
      category: 'Design',
      enrolledDate: 'February 8, 2025',
      lastAccessed: '1 week ago',
      estimatedTimeLeft: 'Completed',
      isCompleted: true,
      certificateEarned: true
    },
    {
      id: '3',
      title: 'Python for Data Science',
      description: 'Comprehensive course covering pandas, numpy, matplotlib, and machine learning basics with real-world projects.',
      instructor: 'Dr. Emily Rodriguez',
      duration: '10 weeks',
      lessons: 58,
      completedLessons: 23,
      rating: 4.7,
      price: '$199',
      image: '/api/placeholder/300/200',
      category: 'Data Science',
      enrolledDate: 'January 20, 2025',
      lastAccessed: '3 days ago',
      estimatedTimeLeft: '6 weeks',
      isCompleted: false
    }
  ];

  const handleContinueCourse = (courseId: string) => {
    window.location.href = '/lms';
  };

  const handleViewCertificate = (courseId: string) => {
    window.location.href = '/certificates';
  };

  const totalCourses = enrolledCourses.length;
  const completedCourses = enrolledCourses.filter(course => course.isCompleted).length;
  const inProgressCourses = totalCourses - completedCourses;
  const totalLessons = enrolledCourses.reduce((sum, course) => sum + course.lessons, 0);
  const completedLessons = enrolledCourses.reduce((sum, course) => sum + course.completedLessons, 0);
  const overallProgress = Math.round((completedLessons / totalLessons) * 100);

  const CourseCard: React.FC<{ course: EnrolledCourse }> = ({ course }) => {
    const progress = Math.round((course.completedLessons / course.lessons) * 100);
    
    return (
      <div style={{
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
      }}>
        <div style={{ position: 'relative' }}>
          <div style={{
            width: '100%',
            height: '192px',
            background: 'linear-gradient(135deg, #F5F5F5 0%, #E8E8E8 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}>
            <BookOpen style={{ width: '64px', height: '64px', color: '#8B7355' }} />
            {course.isCompleted && (
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(16, 185, 129, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <CheckCircle style={{ width: '80px', height: '80px', color: '#10B981' }} />
              </div>
            )}
          </div>
          <div style={{
            position: 'absolute',
            top: '12px',
            left: '12px'
          }}>
            <span style={{
              background: 'rgba(255, 255, 255, 0.95)',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '500',
              color: '#775D47',
              boxShadow: '0 2px 8px rgba(119, 93, 71, 0.1)'
            }}>
              {course.category}
            </span>
          </div>
          {course.isCompleted && (
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
                Completed
              </span>
            </div>
          )}
        </div>
        
        <div style={{ padding: '24px' }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#775D47',
            marginBottom: '8px',
            lineHeight: '1.4',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {course.title}
          </h3>
          
          <p style={{
            color: '#666',
            fontSize: '14px',
            marginBottom: '16px',
            lineHeight: '1.5',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {course.description}
          </p>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '16px'
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              background: 'rgba(119, 93, 71, 0.1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{
                fontSize: '14px',
                fontWeight: '500',
                color: '#775D47'
              }}>
                {course.instructor.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <span style={{
              fontSize: '14px',
              color: '#775D47',
              fontWeight: '500'
            }}>
              {course.instructor}
            </span>
          </div>
          
          {/* Progress Bar */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '8px'
            }}>
              <span style={{
                fontSize: '14px',
                fontWeight: '500',
                color: '#775D47'
              }}>
                Progress
              </span>
              <span style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#775D47'
              }}>
                {progress}%
              </span>
            </div>
            <div style={{
              width: '100%',
              background: 'rgba(119, 93, 71, 0.1)',
              borderRadius: '4px',
              height: '8px'
            }}>
              <div style={{
                height: '8px',
                borderRadius: '4px',
                transition: 'all 0.3s ease',
                background: course.isCompleted 
                  ? 'linear-gradient(90deg, #10B981 0%, #059669 100%)' 
                  : 'linear-gradient(90deg, #775D47 0%, #8B7355 100%)',
                width: `${progress}%`
              }} />
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '12px',
              color: '#8B7355',
              marginTop: '4px'
            }}>
              <span>{course.completedLessons} of {course.lessons} lessons</span>
              <span>{course.estimatedTimeLeft}</span>
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '16px',
            fontSize: '14px',
            color: '#8B7355'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <Clock style={{ width: '16px', height: '16px' }} />
              <span>{course.duration}</span>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <Calendar style={{ width: '16px', height: '16px' }} />
              <span>Started {course.enrolledDate}</span>
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '16px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2px'
            }}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  style={{
                    width: '16px',
                    height: '16px',
                    fill: i < Math.floor(course.rating) ? '#F59E0B' : 'transparent',
                    color: i < Math.floor(course.rating) ? '#F59E0B' : '#D1D5DB'
                  }}
                />
              ))}
            </div>
            <span style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#775D47'
            }}>
              {course.rating}
            </span>
          </div>
          
          <div style={{
            fontSize: '12px',
            color: '#8B7355',
            marginBottom: '16px'
          }}>
            Last accessed: {course.lastAccessed}
          </div>
          
          <div style={{ display: 'flex', gap: '12px' }}>
            {course.isCompleted ? (
              <>
                <button 
                  onClick={() => handleContinueCourse(course.id)}
                  style={{
                    flex: 1,
                    background: '#F5F5F5',
                    color: '#775D47',
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
                    e.currentTarget.style.background = '#E8E8E8';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#F5F5F5';
                  }}
                >
                  <Play style={{ width: '16px', height: '16px' }} />
                  Review
                </button>
                {course.certificateEarned && (
                  <button 
                    onClick={() => handleViewCertificate(course.id)}
                    style={{
                      flex: 1,
                      background: '#10B981',
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
                      e.currentTarget.style.background = '#059669';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#10B981';
                    }}
                  >
                    <CheckCircle style={{ width: '16px', height: '16px' }} />
                    Certificate
                  </button>
                )}
              </>
            ) : (
              <button 
                onClick={() => handleContinueCourse(course.id)}
                style={{
                  width: '100%',
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
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#775D47';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Play style={{ width: '16px', height: '16px' }} />
                Continue Learning
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

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
            My Learning
          </h1>
          <p style={{
            color: '#8B7355',
            fontSize: '1.1rem'
          }}>
            Track your progress and continue your learning journey
          </p>
        </div>

        {/* Stats Overview */}
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
                  Total Courses
                </p>
                <p style={{
                  fontSize: '2rem',
                  fontWeight: '600',
                  color: '#775D47'
                }}>
                  {totalCourses}
                </p>
              </div>
              <BookOpen style={{ width: '32px', height: '32px', color: '#775D47' }} />
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
                  In Progress
                </p>
                <p style={{
                  fontSize: '2rem',
                  fontWeight: '600',
                  color: '#775D47'
                }}>
                  {inProgressCourses}
                </p>
              </div>
              <Play style={{ width: '32px', height: '32px', color: '#F59E0B' }} />
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
                  Completed
                </p>
                <p style={{
                  fontSize: '2rem',
                  fontWeight: '600',
                  color: '#775D47'
                }}>
                  {completedCourses}
                </p>
              </div>
              <CheckCircle style={{ width: '32px', height: '32px', color: '#10B981' }} />
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
                  Overall Progress
                </p>
                <p style={{
                  fontSize: '2rem',
                  fontWeight: '600',
                  color: '#775D47'
                }}>
                  {overallProgress}%
                </p>
              </div>
              <BarChart3 style={{ width: '32px', height: '32px', color: '#8B5CF6' }} />
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <section>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '500',
              color: '#775D47'
            }}>
              Your Courses
            </h2>
            <span style={{
              fontSize: '14px',
              color: '#8B7355'
            }}>
              {enrolledCourses.length} enrolled courses
            </span>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '24px'
          }}>
            {enrolledCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section style={{
          marginTop: '48px',
          background: '#FFFFFF',
          borderRadius: '12px',
          padding: '32px',
          boxShadow: '0 4px 12px rgba(119, 93, 71, 0.05)',
          border: '1px solid rgba(119, 93, 71, 0.08)'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '500',
            color: '#775D47',
            marginBottom: '16px'
          }}>
            Quick Actions
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '16px'
          }}>
            <button 
              onClick={() => window.location.href = '/courses'}
              style={{
                background: 'rgba(119, 93, 71, 0.05)',
                color: '#775D47',
                padding: '16px',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                textAlign: 'left',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(119, 93, 71, 0.08)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(119, 93, 71, 0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <BookOpen style={{ width: '24px', height: '24px', marginBottom: '8px' }} />
              <div style={{ fontWeight: '500', marginBottom: '4px' }}>Browse More Courses</div>
              <div style={{ fontSize: '14px', color: '#8B7355' }}>Discover new skills</div>
            </button>
            
            <button 
              onClick={() => window.location.href = '/certificates'}
              style={{
                background: 'rgba(16, 185, 129, 0.05)',
                color: '#059669',
                padding: '16px',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                textAlign: 'left',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(16, 185, 129, 0.08)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(16, 185, 129, 0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <CheckCircle style={{ width: '24px', height: '24px', marginBottom: '8px' }} />
              <div style={{ fontWeight: '500', marginBottom: '4px' }}>View Certificates</div>
              <div style={{ fontSize: '14px', color: '#047857' }}>See your achievements</div>
            </button>
            
            <button 
              onClick={() => window.location.href = '/profile'}
              style={{
                background: 'rgba(139, 92, 246, 0.05)',
                color: '#7C3AED',
                padding: '16px',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                textAlign: 'left',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.08)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <BarChart3 style={{ width: '24px', height: '24px', marginBottom: '8px' }} />
              <div style={{ fontWeight: '500', marginBottom: '4px' }}>Learning Analytics</div>
              <div style={{ fontSize: '14px', color: '#6D28D9' }}>Track your progress</div>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}