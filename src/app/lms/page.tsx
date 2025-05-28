
'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import VideoPlayer from '../components/VideoPlayer';
import { isFeatureEnabled } from '../utils/featureFlags';
import dynamic from 'next/dynamic';
import { Play, FileText, Download, BookOpen, CheckCircle, X, ChevronLeft, ChevronRight, Presentation } from 'lucide-react';

const ReactConfetti = dynamic(() => import('react-confetti'), {
  ssr: false
});

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface ContentItem {
  id: string;
  title: string;
  type: 'video' | 'quiz' | 'slides' | 'file' | 'text';
  content: any;
  duration?: string;
}

export default function LMS() {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [visitedItems, setVisitedItems] = useState<Record<string, boolean>>({});
  const [showQuizPrompt, setShowQuizPrompt] = useState(false);
  const [activeLine, setActiveLine] = useState<number>(0);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [showQuizResults, setShowQuizResults] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  const courseSections = [
    {
      title: "Module 1: Foundation",
      items: [
        "introduction-concepts",
        "principles-overview", 
        "methodology-fundamentals",
        "foundation-quiz"
      ]
    },
    {
      title: "Module 2: Technical Setup",
      items: [
        "equipment-preparation",
        "setup-slides",
        "configuration-basics",
        "safety-protocols",
        "setup-resources",
        "practical-demo",
        "technical-quiz"
      ]
    },
    {
      title: "Module 3: Component Analysis",
      items: [
        "element-breakdown",
        "analysis-guide",
        "operational-factors",
        "final-assessment"
      ]
    }
  ];

  const contentItems: Record<string, ContentItem> = {
    "introduction-concepts": {
      id: "introduction-concepts",
      title: "Introduction to Core Concepts",
      type: "video",
      duration: "15 min",
      content: {
        videoId: "Div0iP65aZo",
        transcript: [
          { time: "00:00", content: "Welcome to the Advanced Technical Certification Program. This comprehensive course will take you through essential concepts and practical applications." },
          { time: "02:30", content: "We'll start by exploring the fundamental principles that form the foundation of technical expertise in this field." },
          { time: "05:15", content: "Throughout this module, you'll learn key terminology and concepts that will be essential for your success." },
          { time: "08:45", content: "These core concepts serve as building blocks for the more advanced techniques we'll cover in later modules." },
          { time: "12:20", content: "By the end of this lesson, you'll have a solid understanding of the foundational principles." }
        ]
      }
    },
    "principles-overview": {
      id: "principles-overview",
      title: "Essential Principles Overview",
      type: "text",
      duration: "10 min read",
      content: {
        sections: [
          {
            heading: "Core Principles",
            content: "The technical certification program is built on five core principles that guide all professional practice in this field. These principles ensure consistency, safety, and effectiveness in all operations."
          },
          {
            heading: "Principle 1: Safety First",
            content: "Every technical operation must prioritize safety above all else. This includes personal safety, equipment safety, and environmental considerations. Before beginning any procedure, always conduct a thorough risk assessment."
          },
          {
            heading: "Principle 2: Precision and Accuracy",
            content: "Technical work requires extreme precision. Measurements must be accurate, procedures must be followed exactly, and documentation must be complete and correct. Small errors can lead to significant problems."
          },
          {
            heading: "Principle 3: Continuous Learning",
            content: "Technology and best practices evolve constantly. Professionals must commit to ongoing education and staying current with industry developments, standards, and innovations."
          },
          {
            heading: "Principle 4: Systematic Approach",
            content: "All technical work should follow established methodologies and systematic approaches. This ensures repeatability, reliability, and the ability to troubleshoot when issues arise."
          },
          {
            heading: "Principle 5: Quality Assurance",
            content: "Every step of the process should include quality checks and verification. Multiple validation points help catch errors early and ensure the final result meets all specifications."
          }
        ]
      }
    },
    "methodology-fundamentals": {
      id: "methodology-fundamentals",
      title: "Methodology Fundamentals",
      type: "slides",
      duration: "20 min",
      content: {
        slides: [
          {
            title: "Methodology Overview",
            content: "Understanding systematic approaches to technical problem-solving",
            bulletPoints: [
              "Structured problem-solving frameworks",
              "Data-driven decision making",
              "Risk assessment protocols",
              "Quality assurance processes"
            ]
          },
          {
            title: "The PDCA Cycle",
            content: "Plan-Do-Check-Act methodology for continuous improvement",
            bulletPoints: [
              "Plan: Define objectives and processes",
              "Do: Implement the plan on a small scale",
              "Check: Monitor and evaluate results",
              "Act: Implement changes and standardize"
            ]
          },
          {
            title: "Root Cause Analysis",
            content: "Systematic approach to identifying underlying problems",
            bulletPoints: [
              "Define the problem clearly",
              "Collect relevant data",
              "Identify possible causes",
              "Determine root cause",
              "Implement corrective actions"
            ]
          },
          {
            title: "Documentation Standards",
            content: "Essential documentation practices for technical work",
            bulletPoints: [
              "Clear, concise writing",
              "Standardized formats",
              "Version control",
              "Regular updates and reviews"
            ]
          }
        ]
      }
    },
    "foundation-quiz": {
      id: "foundation-quiz",
      title: "Foundation Knowledge Quiz",
      type: "quiz",
      duration: "15 min",
      content: {
        questions: [
          {
            question: "What is the most important principle in technical operations?",
            options: ["Speed", "Safety", "Cost efficiency", "Innovation"],
            correctAnswer: 1,
            explanation: "Safety is always the top priority in technical operations. All other considerations come after ensuring the safety of personnel, equipment, and environment."
          },
          {
            question: "Which methodology emphasizes continuous improvement through iterative cycles?",
            options: ["Waterfall", "PDCA", "Agile", "Lean"],
            correctAnswer: 1,
            explanation: "PDCA (Plan-Do-Check-Act) is specifically designed for continuous improvement through repeated cycles of planning, implementation, evaluation, and refinement."
          },
          {
            question: "In root cause analysis, what should be done first?",
            options: ["Implement solutions", "Collect data", "Define the problem", "Identify causes"],
            correctAnswer: 2,
            explanation: "The first step in root cause analysis is to clearly define the problem. Without a clear problem definition, the analysis may address symptoms rather than the actual issue."
          },
          {
            question: "What is essential for maintaining quality in technical documentation?",
            options: ["Lengthy descriptions", "Technical jargon", "Version control", "Multiple authors"],
            correctAnswer: 2,
            explanation: "Version control ensures that documentation remains current, changes are tracked, and the most up-to-date information is always available to users."
          }
        ]
      }
    },
    "equipment-preparation": {
      id: "equipment-preparation",
      title: "Equipment Preparation",
      type: "video",
      duration: "18 min",
      content: {
        videoId: "ZRRRuUu2soE",
        transcript: [
          { time: "00:00", content: "Proper equipment preparation is crucial for successful technical operations. Let's explore the essential steps." },
          { time: "03:20", content: "First, conduct a thorough inventory of all required equipment and tools." },
          { time: "07:15", content: "Each piece of equipment should be inspected for damage, wear, or calibration needs." },
          { time: "11:45", content: "Safety equipment must be checked and verified as functional before beginning any work." },
          { time: "15:30", content: "Finally, organize equipment in a logical sequence for efficient workflow." }
        ]
      }
    },
    "setup-slides": {
      id: "setup-slides",
      title: "Technical Setup Guidelines",
      type: "slides",
      duration: "25 min",
      content: {
        slides: [
          {
            title: "Setup Phase Overview",
            content: "Systematic approach to technical system setup",
            bulletPoints: [
              "Pre-setup planning and preparation",
              "Equipment verification and testing",
              "Environmental considerations",
              "Safety protocol implementation"
            ]
          },
          {
            title: "Environmental Assessment",
            content: "Evaluating the work environment for optimal setup",
            bulletPoints: [
              "Temperature and humidity requirements",
              "Power supply specifications",
              "Ventilation and air quality",
              "Noise level considerations"
            ]
          },
          {
            title: "Equipment Integration",
            content: "Connecting and configuring system components",
            bulletPoints: [
              "Connection sequence and protocols",
              "Configuration parameter settings",
              "Compatibility verification",
              "Performance optimization"
            ]
          },
          {
            title: "Testing and Validation",
            content: "Ensuring system functionality before going live",
            bulletPoints: [
              "Functional testing procedures",
              "Performance benchmarking",
              "Safety system verification",
              "Documentation requirements"
            ]
          }
        ]
      }
    },
    "configuration-basics": {
      id: "configuration-basics",
      title: "Configuration Basics",
      type: "text",
      duration: "12 min read",
      content: {
        sections: [
          {
            heading: "Configuration Management",
            content: "Configuration management is the process of maintaining computer systems, servers, and software in a desired, consistent state. It's a way to ensure systems perform in a reliable, expected manner as changes are made over time."
          },
          {
            heading: "Key Configuration Areas",
            content: "There are several critical areas that require careful configuration: System parameters define how the system operates under various conditions. Security settings control access and protect against unauthorized use. Performance tuning optimizes system efficiency and response times."
          },
          {
            heading: "Best Practices",
            content: "Always document configuration changes thoroughly. Test configurations in a controlled environment before applying to production systems. Maintain backup configurations to enable quick recovery if needed. Use version control for configuration files to track changes over time."
          },
          {
            heading: "Common Pitfalls",
            content: "Avoid making multiple configuration changes simultaneously, as this makes troubleshooting difficult. Don't skip testing phases, even for seemingly minor changes. Never ignore compatibility requirements between different system components."
          }
        ]
      }
    },
    "safety-protocols": {
      id: "safety-protocols",
      title: "Safety Protocols and Guidelines",
      type: "file",
      duration: "Download",
      content: {
        fileName: "Safety_Protocols_Handbook.pdf",
        fileSize: "2.3 MB",
        description: "Comprehensive safety protocols handbook covering all essential safety procedures, emergency protocols, and risk assessment guidelines for technical operations.",
        downloadUrl: "#",
        previewContent: [
          "Personal Protective Equipment (PPE) Requirements",
          "Emergency Response Procedures",
          "Hazard Identification and Risk Assessment",
          "Equipment Safety Protocols",
          "Environmental Safety Guidelines",
          "Incident Reporting Procedures"
        ]
      }
    },
    "setup-resources": {
      id: "setup-resources",
      title: "Setup Resources and Templates",
      type: "file",
      duration: "Download",
      content: {
        fileName: "Technical_Setup_Resources.zip",
        fileSize: "5.7 MB",
        description: "Collection of templates, checklists, and reference materials for technical setup procedures.",
        downloadUrl: "#",
        previewContent: [
          "Equipment Inventory Checklist",
          "Setup Procedure Templates",
          "Configuration Parameter Sheets",
          "Testing and Validation Forms",
          "Safety Inspection Checklists",
          "Troubleshooting Quick Reference"
        ]
      }
    },
    "practical-demo": {
      id: "practical-demo",
      title: "Practical Setup Demonstration",
      type: "video",
      duration: "22 min",
      content: {
        videoId: "dNW0B0HsvVs",
        transcript: [
          { time: "00:00", content: "In this hands-on demonstration, we'll walk through a complete setup process from start to finish." },
          { time: "04:15", content: "Notice how we follow the safety protocols established in the previous modules." },
          { time: "08:30", content: "Each step is documented as we proceed, maintaining our quality assurance standards." },
          { time: "13:45", content: "Watch carefully as we perform the validation tests to ensure everything is working correctly." },
          { time: "18:20", content: "Finally, we'll review the completed setup and discuss any adjustments that might be needed." }
        ]
      }
    },
    "technical-quiz": {
      id: "technical-quiz",
      title: "Technical Setup Assessment",
      type: "quiz",
      duration: "20 min",
      content: {
        questions: [
          {
            question: "What should be the first step in any technical setup process?",
            options: ["Connect all equipment", "Review safety protocols", "Configure software", "Test connections"],
            correctAnswer: 1,
            explanation: "Safety protocols should always be reviewed first to ensure all personnel are aware of potential hazards and proper procedures."
          },
          {
            question: "Why is environmental assessment important during setup?",
            options: ["To reduce costs", "To ensure optimal performance", "To speed up the process", "To impress clients"],
            correctAnswer: 1,
            explanation: "Environmental factors like temperature, humidity, and power quality directly affect system performance and reliability."
          },
          {
            question: "What is the purpose of validation testing after setup?",
            options: ["To delay project completion", "To increase costs", "To verify system functionality", "To train operators"],
            correctAnswer: 2,
            explanation: "Validation testing ensures that the system meets all specifications and operates correctly before going into production use."
          },
          {
            question: "How should configuration changes be managed?",
            options: ["Make all changes at once", "Document and test systematically", "Skip documentation to save time", "Let users make changes"],
            correctAnswer: 1,
            explanation: "Configuration changes should be documented, tested in controlled environments, and implemented systematically to maintain system stability."
          }
        ]
      }
    },
    "element-breakdown": {
      id: "element-breakdown",
      title: "Primary Element Breakdown",
      type: "video",
      duration: "16 min",
      content: {
        videoId: "D86RtevtfrA",
        transcript: [
          { time: "00:00", content: "Component analysis begins with understanding the primary elements of any technical system." },
          { time: "03:45", content: "Each element has specific characteristics and functions that contribute to overall system performance." },
          { time: "07:20", content: "We'll examine how these elements interact and depend on each other." },
          { time: "11:10", content: "Understanding these relationships is key to effective troubleshooting and optimization." },
          { time: "14:30", content: "This analysis framework can be applied to any technical system you encounter." }
        ]
      }
    },
    "analysis-guide": {
      id: "analysis-guide",
      title: "Component Analysis Guide",
      type: "file",
      duration: "Download",
      content: {
        fileName: "Component_Analysis_Guide.pdf",
        fileSize: "1.8 MB",
        description: "Detailed guide for performing thorough component analysis, including methodologies, tools, and reporting templates.",
        downloadUrl: "#",
        previewContent: [
          "Analysis Methodology Framework",
          "Component Classification Systems",
          "Performance Measurement Techniques",
          "Failure Mode Analysis",
          "Optimization Strategies",
          "Reporting Templates and Examples"
        ]
      }
    },
    "operational-factors": {
      id: "operational-factors",
      title: "Common Operational Factors",
      type: "text",
      duration: "8 min read",
      content: {
        sections: [
          {
            heading: "Understanding Operational Factors",
            content: "Operational factors are the various conditions, constraints, and variables that affect how technical systems perform in real-world environments. These factors can significantly impact system reliability, efficiency, and longevity."
          },
          {
            heading: "Environmental Factors",
            content: "Temperature variations can affect component performance and lifespan. Humidity levels impact electrical components and can cause corrosion. Vibration and shock can damage sensitive equipment. Air quality affects cooling efficiency and component cleanliness."
          },
          {
            heading: "Load and Usage Patterns",
            content: "Peak usage periods stress systems beyond normal operating parameters. Continuous operation versus intermittent use affects component wear patterns. Unexpected load spikes can cause system failures if not properly managed."
          },
          {
            heading: "Maintenance and Support Factors",
            content: "Regular maintenance schedules prevent many operational issues. Availability of replacement parts affects system uptime. Skilled technician availability impacts response times for repairs and upgrades."
          },
          {
            heading: "Human Factors",
            content: "Operator training levels directly affect system performance. User behavior patterns can reveal optimization opportunities. Communication protocols ensure coordinated responses to operational changes."
          }
        ]
      }
    },
    "final-assessment": {
      id: "final-assessment",
      title: "Final Course Assessment",
      type: "quiz",
      duration: "30 min",
      content: {
        questions: [
          {
            question: "Which principle should guide all technical decision-making?",
            options: ["Cost optimization", "Safety first", "Speed of delivery", "Customer satisfaction"],
            correctAnswer: 1,
            explanation: "Safety must be the primary consideration in all technical decisions, as it affects personnel, equipment, and environmental well-being."
          },
          {
            question: "What is the most critical phase of technical setup?",
            options: ["Initial planning", "Equipment connection", "Final testing", "All phases are equally important"],
            correctAnswer: 3,
            explanation: "While each phase has specific importance, all phases must be executed properly for successful technical setup. Skipping or rushing any phase can compromise the entire project."
          },
          {
            question: "How should component analysis be approached?",
            options: ["Focus only on failed components", "Analyze components in isolation", "Use systematic methodology", "Rely on experience alone"],
            correctAnswer: 2,
            explanation: "Systematic methodology ensures thorough, consistent analysis that can be repeated and verified by others, leading to more reliable results."
          },
          {
            question: "What makes operational factors important to consider?",
            options: ["They are easy to control", "They rarely change", "They significantly impact performance", "They only affect new systems"],
            correctAnswer: 2,
            explanation: "Operational factors significantly impact system performance and must be considered in design, implementation, and maintenance decisions."
          },
          {
            question: "What is the key to successful technical certification?",
            options: ["Memorizing procedures", "Understanding principles and applying them systematically", "Working quickly", "Using expensive tools"],
            correctAnswer: 1,
            explanation: "True technical competence comes from understanding underlying principles and being able to apply them systematically across various situations and challenges."
          }
        ]
      }
    }
  };

  const allItems = courseSections.flatMap(section => section.items);
  const totalItems = allItems.length;
  const completedCount = Object.keys(visitedItems).length;
  const progress = Math.round((completedCount / totalItems) * 100);
  const isCourseComplete = completedCount === totalItems;

  useEffect(() => {
    if (progress >= 50 && !isCourseComplete) {
      setShowQuizPrompt(true);
    }
  }, [progress, isCourseComplete]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleItemClick = (itemId: string) => {
    setSelectedItem(itemId);
    setCurrentSlide(0); // Reset slide position
    setQuizAnswers({}); // Reset quiz answers
    setShowQuizResults(false); // Reset quiz results
    if (isFeatureEnabled('complete_section_on_view')) {
      setVisitedItems(prev => ({ ...prev, [itemId]: true }));
    }
    setActiveLine(0);
  };

  const handleProfileClick = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const handleProfileMenuClose = () => {
    setShowProfileMenu(false);
  };

  const handleNavigation = (route: string) => {
    setShowProfileMenu(false);
    router.push(route);
  };

  const handleSignOut = () => {
    setShowProfileMenu(false);
    console.log('Signing out...');
    router.push('/login');
  };

  const handleVideoComplete = () => {
    if (!selectedItem) return;
    setVisitedItems(prev => ({ ...prev, [selectedItem]: true }));
    setShowCongratulations(true);
  };

  const handleQuizAnswer = (questionIndex: number, answerIndex: number) => {
    setQuizAnswers(prev => ({ ...prev, [questionIndex]: answerIndex }));
  };

  const handleQuizSubmit = () => {
    setShowQuizResults(true);
    if (!selectedItem) return;
    setVisitedItems(prev => ({ ...prev, [selectedItem]: true }));
  };

  const handleFileDownload = (fileName: string) => {
    // In a real app, this would trigger an actual download
    alert(`Downloading ${fileName}...`);
  };

  const getItemIcon = (type: string) => {
    switch (type) {
      case 'video': return <Play className="w-4 h-4" />;
      case 'quiz': return <CheckCircle className="w-4 h-4" />;
      case 'slides': return <Presentation className="w-4 h-4" />;
      case 'file': return <Download className="w-4 h-4" />;
      case 'text': return <BookOpen className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const renderContent = () => {
    if (!selectedItem || !contentItems[selectedItem]) {
      return (
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Welcome to the Course</h2>
            <p className="text-slate-600">Select a module from the sidebar to begin learning</p>
          </div>
        </div>
      );
    }

    const content = contentItems[selectedItem];

    switch (content.type) {
      case 'video':
        return (
          <>
            <div className="py-8 px-4 mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                {content.title}
              </h2>
              <VideoPlayer 
                videoId={content.content.videoId}
                onVideoComplete={handleVideoComplete}
              />
            </div>

            {/* Transcript Section */}
            <div className="rounded-lg p-6 mb-8">
              <h3 className="text-slate-800 text-xl mb-5 font-semibold pb-2 border-b-2 border-slate-100">Lecture Transcript</h3>
              <div className="max-h-96 overflow-y-auto border border-slate-200 rounded-md p-2">
                {content.content.transcript.map((line: any, index: number) => (
                  <div
                    key={index}
                    className={`p-4 cursor-pointer transition-all duration-200 flex gap-4 min-h-16 m-0.5 rounded ${
                      index === activeLine 
                        ? 'bg-slate-100 border-l-4 border-green-600 border-b-0 -ml-1 shadow-lg shadow-green-600/20' 
                        : 'bg-white border-b border-slate-100 hover:bg-slate-50 hover:translate-x-0.5'
                    }`}
                    onClick={() => setActiveLine(index)}
                  >
                    <span className="text-slate-500 text-sm min-w-14 font-medium select-none pt-0.5">{line.time}</span>
                    <p className="text-slate-600 leading-relaxed m-0 flex-grow text-sm">{line.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        );

      case 'text':
        return (
          <div className="max-w-4xl mx-auto py-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.title}</h2>
            <div className="prose max-w-none">
              {content.content.sections.map((section: any, index: number) => (
                <div key={index} className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">{section.heading}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{section.content}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <button
                onClick={() => {
                  if (!selectedItem) return;
                  setVisitedItems(prev => ({ ...prev, [selectedItem]: true }));
                  setShowCongratulations(true);
                }}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Mark as Complete
              </button>
            </div>
          </div>
        );

      case 'slides':
        const slides = content.content.slides;
        return (
          <div className="max-w-4xl mx-auto py-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">{content.title}</h2>
            
            {/* Slide Container */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6 min-h-96">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{slides[currentSlide].title}</h3>
                <p className="text-lg text-gray-600 mb-6">{slides[currentSlide].content}</p>
              </div>
              
              <div className="space-y-3">
                {slides[currentSlide].bulletPoints.map((point: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Navigation */}
            <div className="flex justify-between items-center">
              <button
                onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                disabled={currentSlide === 0}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
              
              <div className="flex gap-2">
                {slides.map((_: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              {currentSlide === slides.length - 1 ? (
                <button
                  onClick={() => {
                    if (!selectedItem) return;
                    setVisitedItems(prev => ({ ...prev, [selectedItem]: true }));
                    setShowCongratulations(true);
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Complete
                </button>
              ) : (
                <button
                  onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        );

      case 'file':
        return (
          <div className="max-w-4xl mx-auto py-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">{content.title}</h2>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <Download className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{content.content.fileName}</h3>
                <p className="text-gray-600 mb-1">File size: {content.content.fileSize}</p>
                <p className="text-gray-700 mb-6">{content.content.description}</p>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Contents Include:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {content.content.previewContent.map((item: string, index: number) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <FileText className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={() => {
                    handleFileDownload(content.content.fileName);
                    if (!selectedItem) return;
                    setVisitedItems(prev => ({ ...prev, [selectedItem]: true }));
                    setShowCongratulations(true);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 mx-auto"
                >
                  <Download className="w-5 h-5" />
                  Download File
                </button>
              </div>
            </div>
          </div>
        );

      case 'quiz':
        const quiz = content.content;
        const totalQuestions = quiz.questions.length;
        const answeredQuestions = Object.keys(quizAnswers).length;
        const correctAnswers = Object.entries(quizAnswers).filter(
          ([questionIndex, answerIndex]) => quiz.questions[parseInt(questionIndex)].correctAnswer === answerIndex
        ).length;

        return (
          <div className="max-w-4xl mx-auto py-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">{content.title}</h2>
            
            {!showQuizResults ? (
              <>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-sm font-medium text-gray-900">{answeredQuestions}/{totalQuestions}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 bg-blue-600 rounded-full transition-all duration-300"
                      style={{ width: `${(answeredQuestions / totalQuestions) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-8">
                  {quiz.questions.map((question: QuizQuestion, index: number) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Question {index + 1}: {question.question}
                      </h3>
                      <div className="space-y-3">
                        {question.options.map((option: string, optionIndex: number) => (
                          <label
                            key={optionIndex}
                            className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${
                              quizAnswers[index] === optionIndex
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:bg-gray-50'
                            }`}
                          >
                            <input
                              type="radio"
                              name={`question-${index}`}
                              value={optionIndex}
                              checked={quizAnswers[index] === optionIndex}
                              onChange={() => handleQuizAnswer(index, optionIndex)}
                              className="mr-3"
                            />
                            <span className="text-gray-700">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <button
                    onClick={handleQuizSubmit}
                    disabled={answeredQuestions < totalQuestions}
                    className="bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                  >
                    Submit Quiz
                  </button>
                </div>
              </>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-8">
                  <div className="text-4xl mb-4">
                    {correctAnswers === totalQuestions ? '🎉' : correctAnswers >= totalQuestions * 0.7 ? '👍' : '📚'}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Quiz Results</h3>
                  <p className="text-lg text-gray-600 mb-2">
                    You scored {correctAnswers} out of {totalQuestions} questions correctly
                  </p>
                  <p className="text-xl font-semibold text-blue-600">
                    {Math.round((correctAnswers / totalQuestions) * 100)}%
                  </p>
                </div>

                <div className="space-y-6">
                  {quiz.questions.map((question: QuizQuestion, index: number) => {
                    const userAnswer = quizAnswers[index];
                    const isCorrect = userAnswer === question.correctAnswer;
                    
                    return (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start gap-3 mb-3">
                          {isCorrect ? (
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                          ) : (
                            <X className="w-5 h-5 text-red-600 mt-0.5" />
                          )}
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800 mb-2">
                              Question {index + 1}: {question.question}
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              Your answer: <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                                {question.options[userAnswer]}
                              </span>
                            </p>
                            {!isCorrect && (
                              <p className="text-sm text-gray-600 mb-2">
                                Correct answer: <span className="text-green-600">
                                  {question.options[question.correctAnswer]}
                                </span>
                              </p>
                            )}
                            <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded">
                              <strong>Explanation:</strong> {question.explanation}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-white">
      {/* Top Navigation Bar */}
      <nav className="bg-white sticky top-0 z-50 h-15 flex items-center px-8">
        <div className="w-full mx-auto flex justify-between items-center">
          <button 
            onClick={() => router.push('/')}
            className="text-slate-800 text-xl font-semibold m-0 tracking-tight bg-transparent border-none cursor-pointer hover:text-slate-600 transition-colors duration-200"
          >
            Skilled LMS
          </button>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-4 w-80">
              <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-600 transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="text-slate-600 text-sm font-medium min-w-20 text-right">
                {progress}% Complete
              </div>
            </div>
            <button 
              onClick={() => router.push('/mylearning')}
              className="bg-blue-600 hover:bg-blue-700 text-white border-none px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition-all duration-200 whitespace-nowrap hover:-translate-y-px"
            >
              My Learning
            </button>
            <div className="relative flex items-center">
              <button 
                className="flex items-center gap-2 bg-transparent border border-slate-200 hover:border-slate-300 rounded-lg px-3 py-1.5 cursor-pointer transition-all duration-200 text-slate-600 text-sm hover:bg-slate-50"
                onClick={handleProfileClick}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center text-white font-semibold text-sm">
                  <span className="select-none">U</span>
                </div>
                <span className="font-medium text-slate-800">User</span>
                <span className="text-xs text-slate-500 transition-transform duration-200">▼</span>
              </button>
              {showProfileMenu && (
                <div className="absolute top-full right-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-xl min-w-56 z-50 animate-in fade-in-0 zoom-in-95 duration-150">
                  <div className="p-4 border-b border-slate-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center text-white font-semibold">
                      U
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-800 text-sm mb-0.5">User Name</div>
                      <div className="text-slate-500 text-xs">user@example.com</div>
                    </div>
                  </div>
                  <div className="h-px bg-slate-100 my-2"></div>
                  <ul className="list-none p-2 m-0">
                    <li className="p-0">
                      <button 
                        onClick={() => handleNavigation('/profile')}
                        className="w-full text-left block px-4 py-3 text-slate-600 text-sm transition-all duration-200 hover:bg-slate-50 hover:text-slate-800 rounded-md border-none bg-transparent cursor-pointer"
                      >
                        My Profile
                      </button>
                    </li>
                    <li className="p-0">
                      <button 
                        onClick={() => handleNavigation('/settings')}
                        className="w-full text-left block px-4 py-3 text-slate-600 text-sm transition-all duration-200 hover:bg-slate-50 hover:text-slate-800 rounded-md border-none bg-transparent cursor-pointer"
                      >
                        Settings
                      </button>
                    </li>
                    <li className="p-0">
                      <button 
                        onClick={() => handleNavigation('/certificates')}
                        className="w-full text-left block px-4 py-3 text-slate-600 text-sm transition-all duration-200 hover:bg-slate-50 hover:text-slate-800 rounded-md border-none bg-transparent cursor-pointer"
                      >
                        My Certificates
                      </button>
                    </li>
                    <li className="p-0">
                      <button 
                        onClick={() => handleNavigation('/help')}
                        className="w-full text-left block px-4 py-3 text-slate-600 text-sm transition-all duration-200 hover:bg-slate-50 hover:text-slate-800 rounded-md border-none bg-transparent cursor-pointer"
                      >
                        Help & Support
                      </button>
                    </li>
                    <li className="p-0">
                      <button 
                        onClick={handleSignOut}
                        className="w-full text-left block px-4 py-3 text-slate-600 text-sm transition-all duration-200 hover:bg-slate-50 hover:text-slate-800 rounded-md border-none bg-transparent cursor-pointer"
                      >
                        Sign Out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay to close profile menu when clicking outside */}
      {showProfileMenu && (
        <div 
          className="fixed inset-0 z-40 bg-transparent"
          onClick={handleProfileMenuClose}
        />
      )}

      {/* Main Content Wrapper */}
      <div className="flex-1 flex overflow-hidden bg-slate-100 rounded-lg m-4 mt-0">
        {/* Left Sidebar */}
        <div className="w-80 p-6 border-r border-slate-200 overflow-y-auto flex-shrink-0">
          {courseSections.map((section) => (
            <div key={section.title} className="mb-8">
              <h3 className="text-slate-800 text-lg font-semibold mb-4 pb-2 border-b-2 border-slate-200">{section.title}</h3>
              <ul className="list-none p-0 m-0">
                {section.items.map((itemId) => {
                  const item = contentItems[itemId];
                  if (!item) return null;
                  
                  return (
                    <li 
                      key={itemId}
                      className={`px-4 py-3 my-1 rounded-md cursor-pointer flex justify-between items-center transition-all duration-200 hover:bg-slate-100 ${
                        selectedItem === itemId ? 'bg-slate-200 font-medium' : ''
                      } ${
                        visitedItems[itemId] ? 'bg-green-50' : ''
                      }`}
                      onClick={() => handleItemClick(itemId)}
                    >
                      <div className="flex items-center gap-2 flex-grow">
                        {getItemIcon(item.type)}
                        <div className="flex-grow">
                          <span className="text-slate-700 text-sm block">{item.title}</span>
                          <span className="text-slate-500 text-xs">{item.duration}</span>
                        </div>
                      </div>
                      {visitedItems[itemId] && (
                        <span className="text-green-600 font-bold ml-2">✓</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Right Main Content */}
        <div className="flex-1 overflow-y-auto p-8 min-w-0">
          {renderContent()}

          {/* Congratulations Screen */}
          {showCongratulations && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <ReactConfetti
                width={windowSize.width}
                height={windowSize.height}
                recycle={false}
                numberOfPieces={200}
                gravity={0.2}
              />
              <div className="bg-white rounded-xl p-8 max-w-lg w-full mx-4 transform transition-all animate-in zoom-in-95 duration-200">
                <div className="text-center">
                  <div className="text-6xl mb-6 animate-bounce">🎉</div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Congratulations!</h3>
                  <p className="text-slate-600 mb-8">
                    You've completed "{contentItems[selectedItem!]?.title}". Keep up the great work!
                  </p>
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => setShowCongratulations(false)}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5"
                    >
                      Continue Learning
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Quiz Prompt */}
          {showQuizPrompt && !isCourseComplete && (
            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-lg p-8 my-8 border-l-4 border-yellow-500">
              <div className="text-center max-w-lg mx-auto">
                <div className="text-4xl mb-4 animate-bounce">🎯</div>
                <h3 className="text-slate-800 text-2xl mb-4">Progress Checkpoint!</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  You've completed {completedCount} of {totalItems} modules.<br />
                  Ready to test your understanding with a quick assessment?
                </p>
                <div className="flex justify-center gap-4 mt-6">
                  <button 
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white border-none px-8 py-3 rounded-md font-medium cursor-pointer transition-transform duration-200 hover:-translate-y-0.5"
                    onClick={() => setShowQuizPrompt(false)}
                  >
                    Start Assessment
                  </button>
                  <button
                    className="bg-white text-slate-600 border border-slate-300 px-8 py-3 rounded-md font-medium cursor-pointer transition-all duration-200 hover:bg-slate-50"
                    onClick={() => setShowQuizPrompt(false)}
                  >
                    Continue Learning
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Completion Certificate */}
          {isCourseComplete && (
            <div className="bg-white p-8 rounded-xl">
              <div className="relative border-2 border-green-600 rounded-xl p-12 max-w-4xl mx-auto bg-white">
                <div className="text-center mb-8 relative">
                  <h2 className="text-slate-800 text-4xl mb-4">Certificate of Completion</h2>
                  <div className="text-5xl my-4 animate-spin" style={{ animationDuration: '8s' }}>🏅</div>
                </div>
                <div className="text-center my-8">
                  <p className="text-slate-600 text-lg leading-relaxed my-4">
                    This document certifies that
                  </p>
                  <div className="text-slate-800 text-4xl font-semibold my-6 uppercase">[Participant Name]</div>
                  <p className="text-slate-600 text-lg leading-relaxed my-4">
                    has successfully completed all requirements of the
                  </p>
                  <div className="text-green-600 text-2xl font-semibold my-8">Advanced Technical Certification Program</div>
                  <div className="flex justify-between mt-12 px-8">
                    <div className="text-slate-500 text-sm">
                      Date Achieved: [MM/DD/YYYY]
                    </div>
                    <div className="text-right">
                      <div className="w-48 border-b-2 border-slate-800 my-2" />
                      <div className="text-slate-500 text-sm">Authorized Signature</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-green-600 text-white px-6 py-2 rounded transform rotate-12 font-medium shadow">Certified Professional</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}