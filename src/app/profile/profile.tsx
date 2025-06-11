import React, { useState } from 'react';
import { 
  User,
  Settings,
  BookOpen,
  Award,
  Calendar,
  Clock,
  TrendingUp,
  Target,
  Bell,
  Edit3,
  Camera,
  Mail,
  Phone,
  MapPin,
  Save,
  Eye,
  Download,
  Share2,
  CheckCircle2,
  PlayCircle,
  BarChart3,
  Trophy
} from 'lucide-react';

interface StudentData {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  joinDate: string;
  avatar: string;
  learningGoals: string[];
  preferences: {
    notifications: boolean;
    emailUpdates: boolean;
    courseReminders: boolean;
  };
}

interface CourseProgress {
  id: string;
  title: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  lastAccessed: string;
  instructor: string;
  nextLesson: string;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  earnedDate: string;
  badgeColor: string;
  icon: string;
}

export default function StudentProfile() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);

  const [studentData, setStudentData] = useState<StudentData>({
    id: '1',
    name: 'Alex Johnson',
    email: 'alex.johnson@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Passionate about learning new technologies and advancing my career in software development. Currently focused on mastering full-stack development and data science.',
    joinDate: 'January 2024',
    avatar: '',
    learningGoals: ['Complete JavaScript certification', 'Master React framework', 'Learn data visualization', 'Build portfolio projects'],
    preferences: {
      notifications: true,
      emailUpdates: true,
      courseReminders: true
    }
  });

  const courseProgress: CourseProgress[] = [
    {
      id: '1',
      title: 'Advanced Technical Certification Program',
      progress: 67,
      totalLessons: 14,
      completedLessons: 9,
      lastAccessed: '2 hours ago',
      instructor: 'Dr. Alex Kumar',
      nextLesson: 'Component Analysis Techniques'
    },
    {
      id: '2',
      title: 'Python for Data Science',
      progress: 42,
      totalLessons: 16,
      completedLessons: 7,
      lastAccessed: '1 day ago',
      instructor: 'Dr. Emily Rodriguez',
      nextLesson: 'Data Visualization with Matplotlib'
    },
    {
      id: '3',
      title: 'UI/UX Design Fundamentals',
      progress: 100,
      totalLessons: 12,
      completedLessons: 12,
      lastAccessed: '1 week ago',
      instructor: 'Marcus Johnson',
      nextLesson: 'Course Completed'
    }
  ];

  const achievements: Achievement[] = [
    {
      id: '1',
      title: 'First Course Complete',
      description: 'Completed your first course',
      earnedDate: 'March 2025',
      badgeColor: '#10B981',
      icon: 'trophy'
    },
    {
      id: '2',
      title: 'Learning Streak',
      description: '7 days of continuous learning',
      earnedDate: 'April 2025',
      badgeColor: '#F59E0B',
      icon: 'target'
    },
    {
      id: '3',
      title: 'Quick Learner',
      description: 'Completed 3 lessons in one day',
      earnedDate: 'April 2025',
      badgeColor: '#8B5CF6',
      icon: 'trending'
    },
    {
      id: '4',
      title: 'Perfectionist',
      description: 'Scored 100% on a quiz',
      earnedDate: 'March 2025',
      badgeColor: '#EF4444',
      icon: 'award'
    }
  ];

  const learningStats = {
    totalCourses: 3,
    completedCourses: 1,
    totalHours: 47,
    currentStreak: 12,
    totalCertificates: 1,
    averageScore: 89
  };

  const ProfileHeader = () => (
    <div style={{
      background: '#FFFFFF',
      borderRadius: '12px',
      padding: '32px',
      boxShadow: '0 4px 12px rgba(119, 93, 71, 0.08)',
      border: '1px solid rgba(119, 93, 71, 0.1)',
      marginBottom: '24px'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '24px'
      }}>
        {/* Avatar */}
        <div style={{
          position: 'relative',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'rgba(119, 93, 71, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2.5rem',
          fontWeight: '600',
          color: '#775D47',
          flexShrink: 0
        }}>
          {studentData.name.split(' ').map(n => n[0]).join('')}
          <button style={{
            position: 'absolute',
            bottom: '8px',
            right: '8px',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: '#775D47',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Camera style={{ width: '16px', height: '16px' }} />
          </button>
        </div>

        {/* Basic Info */}
        <div style={{ flex: 1 }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px'
          }}>
            <div>
              <h1 style={{
                fontSize: '2rem',
                fontWeight: '600',
                color: '#775D47',
                marginBottom: '4px'
              }}>
                {studentData.name}
              </h1>
              <p style={{
                color: '#8B7355',
                fontSize: '1.1rem'
              }}>
                Student since {studentData.joinDate}
              </p>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              style={{
                background: isEditing ? '#10B981' : 'rgba(119, 93, 71, 0.1)',
                color: isEditing ? 'white' : '#775D47',
                padding: '8px 16px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              {isEditing ? <Save style={{ width: '16px', height: '16px' }} /> : <Edit3 style={{ width: '16px', height: '16px' }} />}
              {isEditing ? 'Save' : 'Edit Profile'}
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginBottom: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail style={{ width: '16px', height: '16px', color: '#8B7355' }} />
              {isEditing ? (
                <input
                  type="email"
                  value={studentData.email}
                  onChange={(e) => setStudentData({ ...studentData, email: e.target.value })}
                  style={{
                    border: '1px solid rgba(119, 93, 71, 0.2)',
                    borderRadius: '4px',
                    padding: '4px 8px',
                    fontSize: '14px',
                    flex: 1
                  }}
                />
              ) : (
                <span style={{ fontSize: '14px', color: '#775D47' }}>{studentData.email}</span>
              )}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone style={{ width: '16px', height: '16px', color: '#8B7355' }} />
              {isEditing ? (
                <input
                  type="tel"
                  value={studentData.phone}
                  onChange={(e) => setStudentData({ ...studentData, phone: e.target.value })}
                  style={{
                    border: '1px solid rgba(119, 93, 71, 0.2)',
                    borderRadius: '4px',
                    padding: '4px 8px',
                    fontSize: '14px',
                    flex: 1
                  }}
                />
              ) : (
                <span style={{ fontSize: '14px', color: '#775D47' }}>{studentData.phone}</span>
              )}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin style={{ width: '16px', height: '16px', color: '#8B7355' }} />
              {isEditing ? (
                <input
                  type="text"
                  value={studentData.location}
                  onChange={(e) => setStudentData({ ...studentData, location: e.target.value })}
                  style={{
                    border: '1px solid rgba(119, 93, 71, 0.2)',
                    borderRadius: '4px',
                    padding: '4px 8px',
                    fontSize: '14px',
                    flex: 1
                  }}
                />
              ) : (
                <span style={{ fontSize: '14px', color: '#775D47' }}>{studentData.location}</span>
              )}
            </div>
          </div>

          <div>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#775D47',
              marginBottom: '8px'
            }}>
              Bio
            </label>
            {isEditing ? (
              <textarea
                value={studentData.bio}
                onChange={(e) => setStudentData({ ...studentData, bio: e.target.value })}
                rows={3}
                style={{
                  width: '100%',
                  border: '1px solid rgba(119, 93, 71, 0.2)',
                  borderRadius: '6px',
                  padding: '8px 12px',
                  fontSize: '14px',
                  fontFamily: 'inherit',
                  resize: 'vertical'
                }}
              />
            ) : (
              <p style={{
                fontSize: '14px',
                color: '#8B7355',
                lineHeight: '1.5',
                margin: 0
              }}>
                {studentData.bio}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const LearningStats = () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '24px',
      marginBottom: '32px'
    }}>
      <div style={{
        background: '#FFFFFF',
        borderRadius: '12px',
        padding: '20px',
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
              marginBottom: '4px'
            }}>
              Total Courses
            </p>
            <p style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: '#775D47'
            }}>
              {learningStats.totalCourses}
            </p>
          </div>
          <BookOpen style={{ width: '28px', height: '28px', color: '#775D47' }} />
        </div>
      </div>

      <div style={{
        background: '#FFFFFF',
        borderRadius: '12px',
        padding: '20px',
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
              marginBottom: '4px'
            }}>
              Learning Hours
            </p>
            <p style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: '#775D47'
            }}>
              {learningStats.totalHours}
            </p>
          </div>
          <Clock style={{ width: '28px', height: '28px', color: '#F59E0B' }} />
        </div>
      </div>

      <div style={{
        background: '#FFFFFF',
        borderRadius: '12px',
        padding: '20px',
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
              marginBottom: '4px'
            }}>
              Current Streak
            </p>
            <p style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: '#775D47'
            }}>
              {learningStats.currentStreak}
            </p>
          </div>
          <TrendingUp style={{ width: '28px', height: '28px', color: '#10B981' }} />
        </div>
      </div>

      <div style={{
        background: '#FFFFFF',
        borderRadius: '12px',
        padding: '20px',
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
              marginBottom: '4px'
            }}>
              Avg Score
            </p>
            <p style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: '#775D47'
            }}>
              {learningStats.averageScore}%
            </p>
          </div>
          <BarChart3 style={{ width: '28px', height: '28px', color: '#8B5CF6' }} />
        </div>
      </div>
    </div>
  );

  const CurrentCourses = () => (
    <div style={{
      background: '#FFFFFF',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 4px 12px rgba(119, 93, 71, 0.08)',
      border: '1px solid rgba(119, 93, 71, 0.1)',
      marginBottom: '24px'
    }}>
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: '600',
        color: '#775D47',
        marginBottom: '20px'
      }}>
        Current Courses
      </h3>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        {courseProgress.map(course => (
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
              <div>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#775D47',
                  margin: 0,
                  marginBottom: '4px'
                }}>
                  {course.title}
                </h4>
                <p style={{
                  fontSize: '14px',
                  color: '#8B7355',
                  margin: 0
                }}>
                  Instructor: {course.instructor}
                </p>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                {course.progress === 100 ? (
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
                ) : (
                  <button style={{
                    background: '#775D47',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <PlayCircle style={{ width: '12px', height: '12px' }} />
                    Continue
                  </button>
                )}
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '16px',
              alignItems: 'center'
            }}>
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '6px'
                }}>
                  <span style={{ fontSize: '14px', color: '#8B7355' }}>
                    Progress: {course.completedLessons}/{course.totalLessons} lessons
                  </span>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#775D47' }}>
                    {course.progress}%
                  </span>
                </div>
                <div style={{
                  width: '100%',
                  background: 'rgba(119, 93, 71, 0.1)',
                  borderRadius: '4px',
                  height: '6px'
                }}>
                  <div style={{
                    width: `${course.progress}%`,
                    background: course.progress === 100 
                      ? 'linear-gradient(90deg, #10B981 0%, #059669 100%)' 
                      : 'linear-gradient(90deg, #775D47 0%, #8B7355 100%)',
                    height: '6px',
                    borderRadius: '4px',
                    transition: 'width 0.3s ease'
                  }} />
                </div>
                {course.nextLesson !== 'Course Completed' && (
                  <p style={{
                    fontSize: '12px',
                    color: '#8B7355',
                    margin: '6px 0 0 0'
                  }}>
                    Next: {course.nextLesson}
                  </p>
                )}
              </div>
              <div style={{
                textAlign: 'right',
                fontSize: '12px',
                color: '#8B7355'
              }}>
                Last accessed:<br/>{course.lastAccessed}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const Achievements = () => (
    <div style={{
      background: '#FFFFFF',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 4px 12px rgba(119, 93, 71, 0.08)',
      border: '1px solid rgba(119, 93, 71, 0.1)',
      marginBottom: '24px'
    }}>
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: '600',
        color: '#775D47',
        marginBottom: '20px'
      }}>
        Achievements
      </h3>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '16px'
      }}>
        {achievements.map(achievement => (
          <div key={achievement.id} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            padding: '16px',
            border: '1px solid rgba(119, 93, 71, 0.1)',
            borderRadius: '8px'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: achievement.badgeColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              {achievement.icon === 'trophy' && <Trophy style={{ width: '24px', height: '24px', color: 'white' }} />}
              {achievement.icon === 'target' && <Target style={{ width: '24px', height: '24px', color: 'white' }} />}
              {achievement.icon === 'trending' && <TrendingUp style={{ width: '24px', height: '24px', color: 'white' }} />}
              {achievement.icon === 'award' && <Award style={{ width: '24px', height: '24px', color: 'white' }} />}
            </div>
            <div>
              <h4 style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#775D47',
                margin: 0,
                marginBottom: '4px'
              }}>
                {achievement.title}
              </h4>
              <p style={{
                fontSize: '14px',
                color: '#8B7355',
                margin: 0,
                marginBottom: '4px'
              }}>
                {achievement.description}
              </p>
              <p style={{
                fontSize: '12px',
                color: '#8B7355',
                margin: 0
              }}>
                Earned {achievement.earnedDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const LearningGoals = () => (
    <div style={{
      background: '#FFFFFF',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 4px 12px rgba(119, 93, 71, 0.08)',
      border: '1px solid rgba(119, 93, 71, 0.1)',
      marginBottom: '24px'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px'
      }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: '600',
          color: '#775D47'
        }}>
          Learning Goals
        </h3>
        {isEditing && (
          <button style={{
            background: 'rgba(119, 93, 71, 0.1)',
            color: '#775D47',
            padding: '6px 12px',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '12px'
          }}>
            Add Goal
          </button>
        )}
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        {studentData.learningGoals.map((goal, index) => (
          <div key={index} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px',
            background: 'rgba(119, 93, 71, 0.02)',
            borderRadius: '6px'
          }}>
            <Target style={{ width: '16px', height: '16px', color: '#775D47' }} />
            {isEditing ? (
              <input
                type="text"
                value={goal}
                onChange={(e) => {
                  const newGoals = [...studentData.learningGoals];
                  newGoals[index] = e.target.value;
                  setStudentData({ ...studentData, learningGoals: newGoals });
                }}
                style={{
                  border: '1px solid rgba(119, 93, 71, 0.2)',
                  borderRadius: '4px',
                  padding: '4px 8px',
                  fontSize: '14px',
                  flex: 1
                }}
              />
            ) : (
              <span style={{ fontSize: '14px', color: '#775D47', flex: 1 }}>
                {goal}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const Settings = () => (
    <div style={{
      background: '#FFFFFF',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 4px 12px rgba(119, 93, 71, 0.08)',
      border: '1px solid rgba(119, 93, 71, 0.1)',
      marginBottom: '24px'
    }}>
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: '600',
        color: '#775D47',
        marginBottom: '20px'
      }}>
        Preferences
      </h3>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 0',
          borderBottom: '1px solid rgba(119, 93, 71, 0.1)'
        }}>
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '500',
              color: '#775D47',
              margin: 0,
              marginBottom: '4px'
            }}>
              Push Notifications
            </h4>
            <p style={{
              fontSize: '14px',
              color: '#8B7355',
              margin: 0
            }}>
              Receive notifications about course updates
            </p>
          </div>
          <label style={{
            position: 'relative',
            display: 'inline-block',
            width: '44px',
            height: '24px'
          }}>
            <input
              type="checkbox"
              checked={studentData.preferences.notifications}
              onChange={(e) => setStudentData({
                ...studentData,
                preferences: { ...studentData.preferences, notifications: e.target.checked }
              })}
              style={{ opacity: 0, width: 0, height: 0 }}
            />
            <span style={{
              position: 'absolute',
              cursor: 'pointer',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: studentData.preferences.notifications ? '#775D47' : '#ccc',
              transition: '0.4s',
              borderRadius: '24px'
            }}>
              <span style={{
                position: 'absolute',
                content: '""',
                height: '18px',
                width: '18px',
                left: studentData.preferences.notifications ? '23px' : '3px',
                bottom: '3px',
                backgroundColor: 'white',
                transition: '0.4s',
                borderRadius: '50%'
              }} />
            </span>
          </label>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 0',
          borderBottom: '1px solid rgba(119, 93, 71, 0.1)'
        }}>
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '500',
              color: '#775D47',
              margin: 0,
              marginBottom: '4px'
            }}>
              Email Updates
            </h4>
            <p style={{
              fontSize: '14px',
              color: '#8B7355',
              margin: 0
            }}>
              Receive weekly progress emails
            </p>
          </div>
          <label style={{
            position: 'relative',
            display: 'inline-block',
            width: '44px',
            height: '24px'
          }}>
            <input
              type="checkbox"
              checked={studentData.preferences.emailUpdates}
              onChange={(e) => setStudentData({
                ...studentData,
                preferences: { ...studentData.preferences, emailUpdates: e.target.checked }
              })}
              style={{ opacity: 0, width: 0, height: 0 }}
            />
            <span style={{
              position: 'absolute',
              cursor: 'pointer',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: studentData.preferences.emailUpdates ? '#775D47' : '#ccc',
              transition: '0.4s',
              borderRadius: '24px'
            }}>
              <span style={{
                position: 'absolute',
                content: '""',
                height: '18px',
                width: '18px',
                left: studentData.preferences.emailUpdates ? '23px' : '3px',
                bottom: '3px',
                backgroundColor: 'white',
                transition: '0.4s',
                borderRadius: '50%'
              }} />
            </span>
          </label>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 0'
        }}>
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '500',
              color: '#775D47',
              margin: 0,
              marginBottom: '4px'
            }}>
              Course Reminders
            </h4>
            <p style={{
              fontSize: '14px',
              color: '#8B7355',
              margin: 0
            }}>
              Get reminders to continue learning
            </p>
          </div>
          <label style={{
            position: 'relative',
            display: 'inline-block',
            width: '44px',
            height: '24px'
          }}>
            <input
              type="checkbox"
              checked={studentData.preferences.courseReminders}
              onChange={(e) => setStudentData({
                ...studentData,
                preferences: { ...studentData.preferences, courseReminders: e.target.checked }
              })}
              style={{ opacity: 0, width: 0, height: 0 }}
            />
            <span style={{
              position: 'absolute',
              cursor: 'pointer',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: studentData.preferences.courseReminders ? '#775D47' : '#ccc',
              transition: '0.4s',
              borderRadius: '24px'
            }}>
              <span style={{
                position: 'absolute',
                content: '""',
                height: '18px',
                width: '18px',
                left: studentData.preferences.courseReminders ? '23px' : '3px',
                bottom: '3px',
                backgroundColor: 'white',
                transition: '0.4s',
                borderRadius: '50%'
              }} />
            </span>
          </label>
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
      {/* Navbar */}
      <nav style={{
        background: '#FFFFFF',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(119, 93, 71, 0.08)',
        boxShadow: '0 2px 12px rgba(119, 93, 71, 0.04)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 32px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <h1 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#775D47',
              margin: 0
            }}>
              My Profile
            </h1>
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
            
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(119, 93, 71, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}>
              <span style={{
                fontSize: '16px',
                fontWeight: '500',
                color: '#775D47'
              }}>
                AJ
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '32px 24px'
      }}>
        <ProfileHeader />
        <LearningStats />
        <CurrentCourses />
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px'
        }}>
          <Achievements />
          <LearningGoals />
        </div>
        
        <Settings />
      </div>
    </div>
  );
}