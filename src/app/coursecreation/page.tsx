'use client'
import React, { useState } from 'react';
import { 
  ArrowLeft,
  Save,
  Eye,
  Plus,
  Trash2,
  Upload,
  PlayCircle,
  FileText,
  Image,
  Settings,
  Users,
  Calendar,
  Clock,
  Tag,
  GripVertical,
  ChevronDown,
  ChevronUp,
  Bell
} from 'lucide-react';

interface Lesson {
  id: number;
  title: string;
  type: 'video' | 'document' | 'quiz' | 'assignment';
  duration: string;
  completed: boolean;
}

interface Module {
  id: number;
  title: string;
  description: string;
  lessons: Lesson[];
  expanded: boolean;
}

interface CourseData {
  title: string;
  description: string;
  category: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  price: string;
  thumbnail: File | null;
  isPublished: boolean;
}

export default function CourseCreation() {
  const [courseData, setCourseData] = useState<CourseData>({
    title: '',
    description: '',
    category: '',
    duration: '',
    difficulty: 'beginner',
    price: '',
    thumbnail: null,
    isPublished: false
  });

  const [modules, setModules] = useState<Module[]>([
    {
      id: 1,
      title: 'Introduction to Course',
      description: '',
      lessons: [
        { id: 1, title: 'Welcome & Overview', type: 'video', duration: '5 min', completed: false },
        { id: 2, title: 'Course Materials', type: 'document', duration: '3 min', completed: false }
      ],
      expanded: true
    }
  ]);

  const [activeTab, setActiveTab] = useState('content');

  const addModule = () => {
    const newModule: Module = {
      id: modules.length + 1,
      title: `Module ${modules.length + 1}`,
      description: '',
      lessons: [],
      expanded: true
    };
    setModules([...modules, newModule]);
  };

  const addLesson = (moduleId: number) => {
    setModules(modules.map(module => 
      module.id === moduleId 
        ? {
            ...module,
            lessons: [...module.lessons, {
              id: module.lessons.length + 1,
              title: 'New Lesson',
              type: 'video' as const,
              duration: '0 min',
              completed: false
            }]
          }
        : module
    ));
  };

  const toggleModule = (moduleId: number) => {
    setModules(modules.map(module =>
      module.id === moduleId ? { ...module, expanded: !module.expanded } : module
    ));
  };

  const removeModule = (moduleId: number) => {
    setModules(modules.filter(module => module.id !== moduleId));
  };

  const removeLesson = (moduleId: number, lessonId: number) => {
    setModules(modules.map(module =>
      module.id === moduleId
        ? { ...module, lessons: module.lessons.filter(lesson => lesson.id !== lessonId) }
        : module
    ));
  };

  const CourseBasics = () => (
    <div style={{
      background: '#FFFFFF',
      borderRadius: '12px',
      padding: '32px',
      boxShadow: '0 4px 12px rgba(119, 93, 71, 0.08)',
      border: '1px solid rgba(119, 93, 71, 0.1)',
      marginBottom: '24px'
    }}>
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: '600',
        color: '#775D47',
        marginBottom: '24px'
      }}>
        Course Information
      </h3>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '32px'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#775D47',
              marginBottom: '8px'
            }}>
              Course Title *
            </label>
            <input
              type="text"
              value={courseData.title}
              onChange={(e) => setCourseData({ ...courseData, title: e.target.value })}
              placeholder="Enter course title..."
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid rgba(119, 93, 71, 0.2)',
                borderRadius: '8px',
                fontSize: '16px',
                fontFamily: 'inherit'
              }}
            />
          </div>

          <div>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#775D47',
              marginBottom: '8px'
            }}>
              Description *
            </label>
            <textarea
              value={courseData.description}
              onChange={(e) => setCourseData({ ...courseData, description: e.target.value })}
              placeholder="Describe what students will learn in this course..."
              rows={4}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid rgba(119, 93, 71, 0.2)',
                borderRadius: '8px',
                fontSize: '16px',
                fontFamily: 'inherit',
                resize: 'vertical'
              }}
            />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px'
          }}>
            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#775D47',
                marginBottom: '8px'
              }}>
                Category
              </label>
              <select
                value={courseData.category}
                onChange={(e) => setCourseData({ ...courseData, category: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid rgba(119, 93, 71, 0.2)',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontFamily: 'inherit'
                }}
              >
                <option value="">Select category...</option>
                <option value="technical">Technical Certification</option>
                <option value="design">Design</option>
                <option value="programming">Programming</option>
                <option value="marketing">Marketing</option>
                <option value="business">Business</option>
                <option value="data-science">Data Science</option>
              </select>
            </div>

            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#775D47',
                marginBottom: '8px'
              }}>
                Difficulty Level
              </label>
              <select
                value={courseData.difficulty}
                onChange={(e) => setCourseData({ ...courseData, difficulty: e.target.value as CourseData['difficulty'] })}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid rgba(119, 93, 71, 0.2)',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontFamily: 'inherit'
                }}
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px'
          }}>
            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#775D47',
                marginBottom: '8px'
              }}>
                Duration
              </label>
              <input
                type="text"
                value={courseData.duration}
                onChange={(e) => setCourseData({ ...courseData, duration: e.target.value })}
                placeholder="e.g., 8 weeks"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid rgba(119, 93, 71, 0.2)',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#775D47',
                marginBottom: '8px'
              }}>
                Price
              </label>
              <input
                type="text"
                value={courseData.price}
                onChange={(e) => setCourseData({ ...courseData, price: e.target.value })}
                placeholder="e.g., $199"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid rgba(119, 93, 71, 0.2)',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontFamily: 'inherit'
                }}
              />
            </div>
          </div>
        </div>

        {/* Thumbnail Upload */}
        <div>
          <label style={{
            display: 'block',
            fontSize: '14px',
            fontWeight: '500',
            color: '#775D47',
            marginBottom: '8px'
          }}>
            Course Thumbnail
          </label>
          <div style={{
            border: '2px dashed rgba(119, 93, 71, 0.3)',
            borderRadius: '8px',
            padding: '32px',
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#775D47';
            e.currentTarget.style.background = 'rgba(119, 93, 71, 0.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(119, 93, 71, 0.3)';
            e.currentTarget.style.background = 'transparent';
          }}>
            <Image style={{
              width: '48px',
              height: '48px',
              color: '#8B7355',
              margin: '0 auto 16px'
            }} />
            <p style={{
              color: '#775D47',
              fontWeight: '500',
              marginBottom: '4px'
            }}>
              Upload thumbnail
            </p>
            <p style={{
              fontSize: '14px',
              color: '#8B7355'
            }}>
              Recommended: 1280x720px
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const ContentStructure = () => (
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
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '24px'
      }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: '600',
          color: '#775D47'
        }}>
          Course Content
        </h3>
        <button
          onClick={addModule}
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
            fontWeight: '500'
          }}
        >
          <Plus style={{ width: '16px', height: '16px' }} />
          Add Module
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {modules.map((module, moduleIndex) => (
          <div key={module.id} style={{
            border: '1px solid rgba(119, 93, 71, 0.1)',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            {/* Module Header */}
            <div style={{
              background: 'rgba(119, 93, 71, 0.05)',
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                <GripVertical style={{ width: '16px', height: '16px', color: '#8B7355' }} />
                <input
                  type="text"
                  value={module.title}
                  onChange={(e) => {
                    setModules(modules.map(m => 
                      m.id === module.id ? { ...m, title: e.target.value } : m
                    ));
                  }}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#775D47',
                    flex: 1
                  }}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{
                  fontSize: '14px',
                  color: '#8B7355'
                }}>
                  {module.lessons.length} lessons
                </span>
                <button
                  onClick={() => toggleModule(module.id)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#8B7355'
                  }}
                >
                  {module.expanded ? 
                    <ChevronUp style={{ width: '16px', height: '16px' }} /> :
                    <ChevronDown style={{ width: '16px', height: '16px' }} />
                  }
                </button>
                <button
                  onClick={() => removeModule(module.id)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#EF4444'
                  }}
                >
                  <Trash2 style={{ width: '16px', height: '16px' }} />
                </button>
              </div>
            </div>

            {/* Module Content */}
            {module.expanded && (
              <div style={{ padding: '16px' }}>
                <div style={{ marginBottom: '16px' }}>
                  <textarea
                    value={module.description}
                    onChange={(e) => {
                      setModules(modules.map(m => 
                        m.id === module.id ? { ...m, description: e.target.value } : m
                      ));
                    }}
                    placeholder="Module description (optional)..."
                    rows={2}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      border: '1px solid rgba(119, 93, 71, 0.2)',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                  />
                </div>

                {/* Lessons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {module.lessons.map((lesson, lessonIndex) => (
                    <div key={lesson.id} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px',
                      background: 'rgba(119, 93, 71, 0.02)',
                      borderRadius: '6px'
                    }}>
                      <GripVertical style={{ width: '14px', height: '14px', color: '#8B7355' }} />
                      
                      <div style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '4px',
                        background: lesson.type === 'video' ? '#DBEAFE' : '#FEF3C7',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {lesson.type === 'video' ? 
                          <PlayCircle style={{ width: '14px', height: '14px', color: '#2563EB' }} /> :
                          <FileText style={{ width: '14px', height: '14px', color: '#D97706' }} />
                        }
                      </div>

                      <input
                        type="text"
                        value={lesson.title}
                        onChange={(e) => {
                          setModules(modules.map(m => 
                            m.id === module.id 
                              ? {
                                  ...m,
                                  lessons: m.lessons.map(l => 
                                    l.id === lesson.id ? { ...l, title: e.target.value } : l
                                  )
                                }
                              : m
                          ));
                        }}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          fontSize: '14px',
                          color: '#775D47',
                          flex: 1
                        }}
                      />

                      <select
                        value={lesson.type}
                        onChange={(e) => {
                          setModules(modules.map(m => 
                            m.id === module.id 
                              ? {
                                  ...m,
                                  lessons: m.lessons.map(l => 
                                    l.id === lesson.id ? { ...l, type: e.target.value as Lesson['type'] } : l
                                  )
                                }
                              : m
                          ));
                        }}
                        style={{
                          padding: '4px 8px',
                          border: '1px solid rgba(119, 93, 71, 0.2)',
                          borderRadius: '4px',
                          fontSize: '12px'
                        }}
                      >
                        <option value="video">Video</option>
                        <option value="document">Document</option>
                        <option value="quiz">Quiz</option>
                        <option value="assignment">Assignment</option>
                      </select>

                      <input
                        type="text"
                        value={lesson.duration}
                        onChange={(e) => {
                          setModules(modules.map(m => 
                            m.id === module.id 
                              ? {
                                  ...m,
                                  lessons: m.lessons.map(l => 
                                    l.id === lesson.id ? { ...l, duration: e.target.value } : l
                                  )
                                }
                              : m
                          ));
                        }}
                        placeholder="Duration"
                        style={{
                          width: '80px',
                          padding: '4px 8px',
                          border: '1px solid rgba(119, 93, 71, 0.2)',
                          borderRadius: '4px',
                          fontSize: '12px'
                        }}
                      />

                      <button
                        onClick={() => removeLesson(module.id, lesson.id)}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          color: '#EF4444'
                        }}
                      >
                        <Trash2 style={{ width: '14px', height: '14px' }} />
                      </button>
                    </div>
                  ))}

                  <button
                    onClick={() => addLesson(module.id)}
                    style={{
                      padding: '8px 12px',
                      border: '1px dashed rgba(119, 93, 71, 0.3)',
                      borderRadius: '6px',
                      background: 'transparent',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      fontSize: '14px',
                      color: '#8B7355'
                    }}
                  >
                    <Plus style={{ width: '14px', height: '14px' }} />
                    Add Lesson
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const CourseSettings = () => (
    <div style={{
      background: '#FFFFFF',
      borderRadius: '12px',
      padding: '32px',
      boxShadow: '0 4px 12px rgba(119, 93, 71, 0.08)',
      border: '1px solid rgba(119, 93, 71, 0.1)',
      marginBottom: '24px'
    }}>
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: '600',
        color: '#775D47',
        marginBottom: '24px'
      }}>
        Course Settings
      </h3>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '32px'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer'
            }}>
              <input
                type="checkbox"
                checked={courseData.isPublished}
                onChange={(e) => setCourseData({ ...courseData, isPublished: e.target.checked })}
                style={{
                  width: '16px',
                  height: '16px'
                }}
              />
              <span style={{
                fontSize: '14px',
                fontWeight: '500',
                color: '#775D47'
              }}>
                Publish course immediately
              </span>
            </label>
            <p style={{
              fontSize: '12px',
              color: '#8B7355',
              marginLeft: '24px',
              marginTop: '4px'
            }}>
              Students will be able to enroll as soon as you save
            </p>
          </div>

          <div>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#775D47',
              marginBottom: '8px'
            }}>
              Enrollment Limit
            </label>
            <input
              type="number"
              placeholder="Leave empty for unlimited"
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid rgba(119, 93, 71, 0.2)',
                borderRadius: '8px',
                fontSize: '16px',
                fontFamily: 'inherit'
              }}
            />
          </div>

          <div>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#775D47',
              marginBottom: '8px'
            }}>
              Prerequisites
            </label>
            <textarea
              placeholder="List any prerequisites or recommended prior knowledge..."
              rows={3}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid rgba(119, 93, 71, 0.2)',
                borderRadius: '8px',
                fontSize: '16px',
                fontFamily: 'inherit',
                resize: 'vertical'
              }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#775D47',
              marginBottom: '8px'
            }}>
              Certificate Template
            </label>
            <select
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid rgba(119, 93, 71, 0.2)',
                borderRadius: '8px',
                fontSize: '16px',
                fontFamily: 'inherit'
              }}
            >
              <option value="standard">Standard Certificate</option>
              <option value="professional">Professional Certificate</option>
              <option value="advanced">Advanced Certificate</option>
            </select>
          </div>

          <div>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#775D47',
              marginBottom: '8px'
            }}>
              Pass Threshold
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input
                type="number"
                defaultValue="70"
                min="0"
                max="100"
                style={{
                  width: '80px',
                  padding: '12px 16px',
                  border: '1px solid rgba(119, 93, 71, 0.2)',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontFamily: 'inherit'
                }}
              />
              <span style={{ color: '#8B7355' }}>% minimum score to pass</span>
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
              Discussion Forum
            </label>
            <select
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid rgba(119, 93, 71, 0.2)',
                borderRadius: '8px',
                fontSize: '16px',
                fontFamily: 'inherit'
              }}
            >
              <option value="enabled">Enable discussion forum</option>
              <option value="disabled">Disable discussion forum</option>
              <option value="moderated">Enable with moderation</option>
            </select>
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
            <button
              onClick={() => {
                // In a real app: router.push('/dashboard')
                window.location.href = '/dashboard';
                console.log('Navigate back to /dashboard');
              }}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: '#8B7355',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#775D47';
                e.currentTarget.style.background = 'rgba(119, 93, 71, 0.05)';
                e.currentTarget.style.borderRadius = '6px';
                e.currentTarget.style.padding = '6px 12px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#8B7355';
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.padding = '0';
              }}
            >
              <ArrowLeft style={{ width: '20px', height: '20px' }} />
              <span style={{ fontSize: '14px' }}>Back to Dashboard</span>
            </button>
            <h1 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#775D47',
              margin: 0
            }}>
              Create New Course
            </h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={() => {
                // In a real app: router.push('/lms')
                window.location.href = '/lms';
                console.log('Navigate to /lms for course preview');
              }}
              style={{
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
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(119, 93, 71, 0.15)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(119, 93, 71, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Eye style={{ width: '16px', height: '16px' }} />
              Preview
            </button>
            
            <button style={{
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
              fontWeight: '500'
            }}>
              <Save style={{ width: '16px', height: '16px' }} />
              Save Course
            </button>

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
                DK
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
        {/* Progress Indicator */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '32px',
          padding: '16px 0'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            background: courseData.title ? '#D1FAE5' : 'rgba(119, 93, 71, 0.1)',
            color: courseData.title ? '#065F46' : '#8B7355',
            borderRadius: '20px',
            fontSize: '14px'
          }}>
            <span style={{ 
              width: '6px', 
              height: '6px', 
              borderRadius: '50%', 
              background: 'currentColor' 
            }} />
            Course Info
          </div>
          <div style={{
            width: '40px',
            height: '2px',
            background: modules.length > 0 && modules[0].lessons.length > 0 ? '#775D47' : 'rgba(119, 93, 71, 0.2)'
          }} />
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            background: modules.length > 0 && modules[0].lessons.length > 0 ? '#D1FAE5' : 'rgba(119, 93, 71, 0.1)',
            color: modules.length > 0 && modules[0].lessons.length > 0 ? '#065F46' : '#8B7355',
            borderRadius: '20px',
            fontSize: '14px'
          }}>
            <span style={{ 
              width: '6px', 
              height: '6px', 
              borderRadius: '50%', 
              background: 'currentColor' 
            }} />
            Content
          </div>
          <div style={{
            width: '40px',
            height: '2px',
            background: 'rgba(119, 93, 71, 0.2)'
          }} />
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            background: 'rgba(119, 93, 71, 0.1)',
            color: '#8B7355',
            borderRadius: '20px',
            fontSize: '14px'
          }}>
            <span style={{ 
              width: '6px', 
              height: '6px', 
              borderRadius: '50%', 
              background: 'currentColor' 
            }} />
            Settings
          </div>
        </div>

        <CourseBasics />
        <ContentStructure />
        <CourseSettings />

        {/* Summary Card */}
        <div style={{
          background: 'rgba(119, 93, 71, 0.05)',
          borderRadius: '12px',
          padding: '24px',
          border: '1px solid rgba(119, 93, 71, 0.1)'
        }}>
          <h4 style={{
            fontSize: '1.125rem',
            fontWeight: '600',
            color: '#775D47',
            marginBottom: '16px'
          }}>
            Course Summary
          </h4>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px'
          }}>
            <div>
              <span style={{ fontSize: '14px', color: '#8B7355' }}>Total Modules: </span>
              <span style={{ fontWeight: '600', color: '#775D47' }}>{modules.length}</span>
            </div>
            <div>
              <span style={{ fontSize: '14px', color: '#8B7355' }}>Total Lessons: </span>
              <span style={{ fontWeight: '600', color: '#775D47' }}>
                {modules.reduce((total, module) => total + module.lessons.length, 0)}
              </span>
            </div>
            <div>
              <span style={{ fontSize: '14px', color: '#8B7355' }}>Estimated Duration: </span>
              <span style={{ fontWeight: '600', color: '#775D47' }}>{courseData.duration || 'Not set'}</span>
            </div>
            <div>
              <span style={{ fontSize: '14px', color: '#8B7355' }}>Status: </span>
              <span style={{ 
                fontWeight: '600', 
                color: courseData.isPublished ? '#059669' : '#D97706' 
              }}>
                {courseData.isPublished ? 'Will be published' : 'Draft'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}