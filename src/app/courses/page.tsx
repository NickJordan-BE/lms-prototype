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
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200 hover:-translate-y-1">
      <div className="relative">
        <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <BookOpen className="w-16 h-16 text-gray-400" />
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-white px-2 py-1 rounded-full text-xs font-medium text-gray-600">
            {course.category}
          </span>
        </div>
        {course.isComingSoon && (
          <div className="absolute top-3 right-3">
            <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium">
              Coming Soon
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
          {course.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
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
        
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>{course.lessons} lessons</span>
          </div>
          
          {!course.isComingSoon && (
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{course.students.toLocaleString()}</span>
            </div>
          )}
        </div>
        
        {!course.isComingSoon && course.rating > 0 && (
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
        )}
        
        {course.isComingSoon && course.launchDate && (
          <div className="flex items-center gap-2 mb-4 text-sm text-amber-700 bg-amber-50 px-3 py-2 rounded-lg">
            <Calendar className="w-4 h-4" />
            <span>Launches {course.launchDate}</span>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">{course.price}</span>
          
          {course.isComingSoon ? (
            <button className="bg-gray-100 text-gray-500 px-4 py-2 rounded-lg font-medium cursor-not-allowed">
              Notify Me
            </button>
          ) : (
            <button 
              onClick={() => handleEnrollClick(course.id)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Enroll Now
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Courses</h1>
          <p className="text-gray-600">
            Enhance your skills with our comprehensive course library
          </p>
        </div>

        {/* Available Courses */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Available Courses</h2>
            <span className="text-sm text-gray-500">
              {availableCourses.length} courses available
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* Coming Soon */}
        {comingSoonCourses.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">Coming Soon</h2>
              <span className="text-sm text-gray-500">
                {comingSoonCourses.length} courses launching soon
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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