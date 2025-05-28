
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
    // In a real app, this would generate and download a PDF
    console.log(`Downloading certificate for ${certificate.courseTitle}`);
    alert(`Certificate for ${certificate.courseTitle} would be downloaded as PDF`);
  };

  const handleShareCertificate = (certificate: Certificate) => {
    // In a real app, this would generate a shareable link
    const shareUrl = `https://example.com/certificates/${certificate.certificateNumber}`;
    navigator.clipboard.writeText(shareUrl);
    alert('Certificate link copied to clipboard!');
  };

  const CertificateModal = ({ certificate }: { certificate: Certificate }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          {/* Certificate Content */}
          <div className="relative border-8 border-double border-blue-800 rounded-lg p-12 bg-gradient-to-br from-blue-50 to-white min-h-[600px]">
            {/* Decorative corners */}
            <div className="absolute top-4 left-4 w-16 h-16 border-l-4 border-t-4 border-blue-800 rounded-tl-lg"></div>
            <div className="absolute top-4 right-4 w-16 h-16 border-r-4 border-t-4 border-blue-800 rounded-tr-lg"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 border-l-4 border-b-4 border-blue-800 rounded-bl-lg"></div>
            <div className="absolute bottom-4 right-4 w-16 h-16 border-r-4 border-b-4 border-blue-800 rounded-br-lg"></div>

            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Award className="w-16 h-16 text-blue-800 mr-4" />
                <div>
                  <h1 className="text-4xl font-bold text-blue-800 mb-2">CERTIFICATE</h1>
                  <p className="text-xl text-blue-600 font-semibold">OF COMPLETION</p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="text-center mb-8">
              <p className="text-lg text-gray-700 mb-6">This is to certify that</p>
              
              <div className="text-4xl font-bold text-gray-800 mb-8 border-b-2 border-blue-800 pb-2 inline-block px-8">
                {certificate.studentName}
              </div>
              
              <p className="text-lg text-gray-700 mb-4">has successfully completed the course</p>
              
              <div className="text-2xl font-bold text-blue-800 mb-8">
                {certificate.courseTitle}
              </div>

              <div className="grid grid-cols-2 gap-8 mb-8 text-left max-w-2xl mx-auto">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Completion Date:</p>
                  <p className="font-semibold text-gray-800">{certificate.completionDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Duration:</p>
                  <p className="font-semibold text-gray-800">{certificate.duration}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-600 mb-1">Certificate Number:</p>
                  <p className="font-mono text-sm text-gray-800">{certificate.certificateNumber}</p>
                </div>
              </div>

              {/* Skills Section */}
              <div className="mb-8">
                <p className="text-sm text-gray-600 mb-3">Skills Demonstrated:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {certificate.skills.map((skill, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Signature Section */}
            <div className="flex justify-between items-end mt-12">
              <div className="text-left">
                <p className="text-sm text-gray-600 mb-2">Issue Date:</p>
                <p className="font-semibold text-gray-800">{certificate.issueDate}</p>
              </div>
              
              <div className="text-center">
                <div className="mb-4">
                  <div className="text-2xl font-script text-blue-800 mb-2" style={{ fontFamily: 'cursive' }}>
                    {certificate.instructorSignature}
                  </div>
                  <div className="w-48 border-t-2 border-blue-800 mx-auto"></div>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{certificate.instructorName}</p>
                  <p className="text-sm text-gray-600">Course Instructor</p>
                </div>
              </div>
            </div>

            {/* Verification */}
            <div className="text-center mt-8 pt-4 border-t border-blue-200">
              <p className="text-xs text-gray-500">
                This certificate can be verified at: skilled-lms.com/verify/{certificate.certificateNumber}
              </p>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => setSelectedCertificate(null)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Close
            </button>
            <div className="flex gap-3">
              <button
                onClick={() => handleShareCertificate(certificate)}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
              <button
                onClick={() => handleDownloadCertificate(certificate)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Certificates</h1>
          <p className="text-gray-600">
            View and manage your earned certificates of completion
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Certificates</p>
                <p className="text-2xl font-bold text-gray-900">{certificates.length}</p>
              </div>
              <Award className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">This Year</p>
                <p className="text-2xl font-bold text-gray-900">{certificates.length}</p>
              </div>
              <Calendar className="w-8 h-8 text-green-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Skills Earned</p>
                <p className="text-2xl font-bold text-gray-900">
                  {certificates.reduce((total, cert) => total + cert.skills.length, 0)}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <div key={certificate.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200">
              {/* Certificate Preview */}
              <div className="relative h-48 bg-gradient-to-br from-blue-50 to-white border-b-4 border-blue-800 flex items-center justify-center">
                <div className="text-center">
                  <Award className="w-12 h-12 text-blue-800 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-blue-800">CERTIFICATE</p>
                  <p className="text-xs text-blue-600">OF COMPLETION</p>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    Verified
                  </span>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {certificate.courseTitle}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <User className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{certificate.instructorName}</span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Completed:</span>
                    <span className="font-medium text-gray-900">{certificate.completionDate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium text-gray-900">{certificate.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-medium text-gray-900">{certificate.category}</span>
                  </div>
                </div>

                {/* Skills Preview */}
                <div className="mb-4">
                  <p className="text-xs text-gray-600 mb-2">Skills Demonstrated:</p>
                  <div className="flex flex-wrap gap-1">
                    {certificate.skills.slice(0, 3).map((skill, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                    {certificate.skills.length > 3 && (
                      <span className="text-xs text-gray-500 px-2 py-1">
                        +{certificate.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleViewCertificate(certificate)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  <button
                    onClick={() => handleDownloadCertificate(certificate)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleShareCertificate(certificate)}
                    className="bg-green-100 hover:bg-green-200 text-green-700 px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {certificates.length === 0 && (
          <div className="text-center py-16">
            <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No certificates yet</h3>
            <p className="text-gray-600 mb-6">Complete courses to earn your first certificate!</p>
            <button 
              onClick={() => window.location.href = '/courses'}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
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