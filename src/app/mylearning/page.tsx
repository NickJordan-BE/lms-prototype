
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
    // Navigate to LMS for the specific course
    window.location.href = '/lms';
  };

  const handleViewCertificate = (courseId: string) => {
    // Navigate to certificate view
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
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200">
        <div className="relative">
          <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
            <BookOpen className="w-16 h-16 text-gray-400" />
            {course.isCompleted && (
              <div className="absolute inset-0 bg-green-600/10 flex items-center justify-center">
                <CheckCircle className="w-20 h-20 text-green-600" />
              </div>
            )}
          </div>
          <div className="absolute top-3 left-3">
            <span className="bg-white px-2 py-1 rounded-full text-xs font-medium text-gray-600">
              {course.category}
            </span>
          </div>
          {course.isCompleted && (
            <div className="absolute top-3 right-3">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                Completed
              </span>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
            {course.title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {course.description}
          </p>
          
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-blue-700">
                {course.instructor.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <span className="text-sm text-gray-700 font-medium">{course.instructor}</span>
          </div>
          
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Progress</span>
              <span className="text-sm font-medium text-gray-900">{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-300 ${
                  course.isCompleted ? 'bg-green-600' : 'bg-blue-600'
                }`}
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>{course.completedLessons} of {course.lessons} lessons</span>
              <span>{course.estimatedTimeLeft}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{course.duration}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>Started {course.enrolledDate}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(course.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700">{course.rating}</span>
          </div>
          
          <div className="text-xs text-gray-500 mb-4">
            Last accessed: {course.lastAccessed}
          </div>
          
          <div className="flex gap-3">
            {course.isCompleted ? (
              <>
                <button 
                  onClick={() => handleContinueCourse(course.id)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  Review
                </button>
                {course.certificateEarned && (
                  <button 
                    onClick={() => handleViewCertificate(course.id)}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Certificate
                  </button>
                )}
              </>
            ) : (
              <button 
                onClick={() => handleContinueCourse(course.id)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4" />
                Continue Learning
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Learning</h1>
          <p className="text-gray-600">
            Track your progress and continue your learning journey
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Courses</p>
                <p className="text-2xl font-bold text-gray-900">{totalCourses}</p>
              </div>
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">In Progress</p>
                <p className="text-2xl font-bold text-gray-900">{inProgressCourses}</p>
              </div>
              <Play className="w-8 h-8 text-orange-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">{completedCourses}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Overall Progress</p>
                <p className="text-2xl font-bold text-gray-900">{overallProgress}%</p>
              </div>
              <BarChart3 className="w-8 h-8 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Your Courses</h2>
            <span className="text-sm text-gray-500">
              {enrolledCourses.length} enrolled courses
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mt-12 bg-white rounded-lg p-8 shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button 
              onClick={() => window.location.href = '/courses'}
              className="bg-blue-50 hover:bg-blue-100 text-blue-700 p-4 rounded-lg transition-colors text-left"
            >
              <BookOpen className="w-6 h-6 mb-2" />
              <div className="font-medium">Browse More Courses</div>
              <div className="text-sm text-blue-600">Discover new skills</div>
            </button>
            
            <button 
              onClick={() => window.location.href = '/certificates'}
              className="bg-green-50 hover:bg-green-100 text-green-700 p-4 rounded-lg transition-colors text-left"
            >
              <CheckCircle className="w-6 h-6 mb-2" />
              <div className="font-medium">View Certificates</div>
              <div className="text-sm text-green-600">See your achievements</div>
            </button>
            
            <button 
              onClick={() => window.location.href = '/profile'}
              className="bg-purple-50 hover:bg-purple-100 text-purple-700 p-4 rounded-lg transition-colors text-left"
            >
              <BarChart3 className="w-6 h-6 mb-2" />
              <div className="font-medium">Learning Analytics</div>
              <div className="text-sm text-purple-600">Track your progress</div>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}