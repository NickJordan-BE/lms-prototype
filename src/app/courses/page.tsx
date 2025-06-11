'use client'

import React from 'react';
import { Clock, Users, BookOpen, Star, Calendar } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  students: number;
  lessons: number;
  rating: number;
  price: string;
  image: string;
  category: string;
  isComingSoon?: boolean;
  launchDate?: string;
}

const Courses: React.FC = () => {
  const courses: Course[] = [
    {
      id: '1',
      title: 'Advanced Technical Certification Program',
      description: 'Comprehensive technical training covering core concepts, equipment setup, and component analysis with hands-on demonstrations.',
      instructor: 'Dr. Alex Kumar',
      duration: '12 weeks',
      students: 1247,
      lessons: 14,
      rating: 4.8,
      price: '$299',
      image: '/api/placeholder/300/200',
      category: 'Technical Certification'
    },
    {
      id: '2',
      title: 'UI/UX Design Fundamentals',
      description: 'Learn the principles of user interface and user experience design from wireframes to high-fidelity prototypes.',
      instructor: 'Marcus Johnson',
      duration: '6 weeks',
      students: 892,
      lessons: 35,
      rating: 4.9,
      price: '$119',
      image: '/api/placeholder/300/200',
      category: 'Design'
    },
    {
      id: '3',
      title: 'Python for Data Science',
      description: 'Comprehensive course covering pandas, numpy, matplotlib, and machine learning basics with real-world projects.',
      instructor: 'Dr. Emily Rodriguez',
      duration: '10 weeks',
      students: 2156,
      lessons: 58,
      rating: 4.7,
      price: '$199',
      image: '/api/placeholder/300/200',
      category: 'Data Science'
    },
    {
      id: '4',
      title: 'DevOps & Cloud Architecture',
      description: 'Learn containerization, CI/CD pipelines, and cloud deployment strategies using AWS and Docker.',
      instructor: 'Alex Kumar',
      duration: '12 weeks',
      students: 743,
      lessons: 48,
      rating: 4.6,
      price: '$249',
      image: '/api/placeholder/300/200',
      category: 'DevOps'
    },
    {
      id: '5',
      title: 'Mobile App Development with Flutter',
      description: 'Build cross-platform mobile applications using Flutter and Dart, from basics to app store deployment.',
      instructor: 'Lisa Park',
      duration: '9 weeks',
      students: 0,
      lessons: 52,
      rating: 0,
      price: '$179',
      image: '/api/placeholder/300/200',
      category: 'Mobile Development',
      isComingSoon: true,
      launchDate: 'June 15, 2025'
    },
    {
      id: '6',
      title: 'Blockchain & Web3 Development',
      description: 'Dive into blockchain technology, smart contracts, and decentralized application development.',
      instructor: 'David Thompson',
      duration: '14 weeks',
      students: 0,
      lessons: 64,
      rating: 0,
      price: '$299',
      image: '/api/placeholder/300/200',
      category: 'Blockchain',
      isComingSoon: true,
      launchDate: 'July 1, 2025'
    }
  ];

  const availableCourses = courses.filter(course => !course.isComingSoon);
  const comingSoonCourses = courses.filter(course => course.isComingSoon);

  const handleEnrollClick = (courseId: string) => {
    // Navigate to LMS page
    window.location.href = '/lms';
  };

  const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
    <div style={{
      background: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '20px',
      overflow: 'hidden',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 15px 35px rgba(119, 93, 71, 0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-8px)';
      e.currentTarget.style.boxShadow = '0 25px 50px rgba(119, 93, 71, 0.2)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 15px 35px rgba(119, 93, 71, 0.1)';
    }}
    >
      <div style={{ position: 'relative' }}>
        <div style={{
          width: '100%',
          height: '200px',
          background: 'linear-gradient(135deg, #E1DCD5 0%, #D2BDAC 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <BookOpen style={{ width: '64px', height: '64px', color: '#775D47', opacity: 0.7 }} />
        </div>
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px'
        }}>
          <span style={{
            background: 'rgba(255, 255, 255, 0.9)',
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: '500',
            color: '#775D47',
            backdropFilter: 'blur(5px)'
          }}>
            {course.category}
          </span>
        </div>
        {course.isComingSoon && (
          <div style={{
            position: 'absolute',
            top: '12px',
            right: '12px'
          }}>
            <span style={{
              background: 'rgba(217, 119, 6, 0.1)',
              color: '#D97706',
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '500',
              border: '1px solid rgba(217, 119, 6, 0.2)'
            }}>
              Coming Soon
            </span>
          </div>
        )}
      </div>
      
      <div style={{ padding: '24px' }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: '600',
          color: '#775D47',
          marginBottom: '12px',
          lineHeight: '1.4',
          fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
        }}>
          {course.title}
        </h3>
        
        <p style={{
          color: '#666',
          fontSize: '14px',
          marginBottom: '16px',
          lineHeight: '1.5',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {course.description}
        </p>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            background: '#E1DCD5',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{
              fontSize: '14px',
              fontWeight: '600',
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
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '16px',
          fontSize: '14px',
          color: '#8B7355'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock style={{ width: '16px', height: '16px' }} />
            <span>{course.duration}</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <BookOpen style={{ width: '16px', height: '16px' }} />
            <span>{course.lessons} lessons</span>
          </div>
          
          {!course.isComingSoon && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Users style={{ width: '16px', height: '16px' }} />
              <span>{course.students.toLocaleString()}</span>
            </div>
          )}
        </div>
        
        {!course.isComingSoon && course.rating > 0 && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
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
        )}
        
        {course.isComingSoon && course.launchDate && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '16px',
            fontSize: '14px',
            color: '#D97706',
            background: 'rgba(217, 119, 6, 0.1)',
            padding: '12px',
            borderRadius: '12px',
            border: '1px solid rgba(217, 119, 6, 0.2)'
          }}>
            <Calendar style={{ width: '16px', height: '16px' }} />
            <span>Launches {course.launchDate}</span>
          </div>
        )}
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <span style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#775D47'
          }}>
            {course.price}
          </span>
          
          {course.isComingSoon ? (
            <button style={{
              background: '#E1DCD5',
              color: '#8B7355',
              padding: '10px 16px',
              borderRadius: '12px',
              fontWeight: '500',
              cursor: 'not-allowed',
              border: 'none',
              fontSize: '14px'
            }}>
              Notify Me
            </button>
          ) : (
            <button 
              onClick={() => handleEnrollClick(course.id)}
              style={{
                background: '#775D47',
                color: 'white',
                padding: '10px 16px',
                borderRadius: '12px',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#8B7355';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(119, 93, 71, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#775D47';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Enroll Now
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8f6f3 0%, #E1DCD5 50%, #D2BDAC 100%)',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '32px 16px'
      }}>
        {/* Header */}
        <div style={{ marginBottom: '48px', textAlign: 'center' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '300',
            color: '#775D47',
            marginBottom: '16px',
            letterSpacing: '1px'
          }}>
            Professional Courses
          </h1>
          <p style={{
            color: '#8B7355',
            fontSize: '1.2rem',
            fontWeight: '300',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Enhance your expertise with our comprehensive course library designed by industry professionals
          </p>
        </div>

        {/* Available Courses */}
        <section style={{ marginBottom: '64px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '32px'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '400',
              color: '#775D47',
              margin: '0'
            }}>
              Available Courses
            </h2>
            <span style={{
              fontSize: '14px',
              color: '#8B7355',
              background: 'rgba(255, 255, 255, 0.7)',
              padding: '8px 16px',
              borderRadius: '20px',
              backdropFilter: 'blur(5px)'
            }}>
              {availableCourses.length} courses available
            </span>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '24px'
          }}>
            {availableCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* Coming Soon */}
        {comingSoonCourses.length > 0 && (
          <section>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '32px'
            }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '400',
                color: '#775D47',
                margin: '0'
              }}>
                Coming Soon
              </h2>
              <span style={{
                fontSize: '14px',
                color: '#8B7355',
                background: 'rgba(255, 255, 255, 0.7)',
                padding: '8px 16px',
                borderRadius: '20px',
                backdropFilter: 'blur(5px)'
              }}>
                {comingSoonCourses.length} courses launching soon
              </span>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '24px'
            }}>
              {comingSoonCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Courses;