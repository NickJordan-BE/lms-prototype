'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import VideoPlayer from '../components/VideoPlayer';
import { isFeatureEnabled } from '../utils/featureFlags';
import dynamic from 'next/dynamic';
import { Play, FileText, Download, BookOpen, CheckCircle, X, ChevronLeft, ChevronRight, Presentation } from 'lucide-react';

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
    setCurrentSlide(0);
    setQuizAnswers({});
    setShowQuizResults(false);
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
    alert(`Downloading ${fileName}...`);
  };

  const getItemIcon = (type: string) => {
    switch (type) {
      case 'video': return <Play style={{ width: '16px', height: '16px' }} />;
      case 'quiz': return <CheckCircle style={{ width: '16px', height: '16px' }} />;
      case 'slides': return <Presentation style={{ width: '16px', height: '16px' }} />;
      case 'file': return <Download style={{ width: '16px', height: '16px' }} />;
      case 'text': return <BookOpen style={{ width: '16px', height: '16px' }} />;
      default: return <FileText style={{ width: '16px', height: '16px' }} />;
    }
  };

  const renderContent = () => {
    if (!selectedItem || !contentItems[selectedItem]) {
      return (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          textAlign: 'center'
        }}>
          <div>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '400',
              color: '#775D47',
              marginBottom: '16px'
            }}>
              Welcome to Your Course
            </h2>
            <p style={{
              color: '#8B7355',
              fontSize: '1.1rem'
            }}>
              Select a module from the sidebar to begin your learning journey
            </p>
          </div>
        </div>
      );
    }

    const content = contentItems[selectedItem];

    switch (content.type) {
      case 'video':
        return (
          <>
            <div style={{ padding: '32px 16px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '400',
                color: '#775D47',
                marginBottom: '24px',
                textAlign: 'center'
              }}>
                {content.title}
              </h2>
              <VideoPlayer 
                videoId={content.content.videoId}
                onVideoComplete={handleVideoComplete}
              />
            </div>

            {/* Transcript Section */}
            <div style={{
              borderRadius: '12px',
              padding: '24px',
              marginBottom: '32px'
            }}>
              <h3 style={{
                color: '#775D47',
                fontSize: '1.25rem',
                marginBottom: '20px',
                fontWeight: '600',
                paddingBottom: '8px',
                borderBottom: '2px solid rgba(119, 93, 71, 0.1)'
              }}>
                Lecture Transcript
              </h3>
              <div style={{
                maxHeight: '384px',
                overflowY: 'auto',
                border: '1px solid rgba(119, 93, 71, 0.15)',
                borderRadius: '8px',
                padding: '8px'
              }}>
                {content.content.transcript.map((line: any, index: number) => (
                  <div
                    key={index}
                    style={{
                      padding: '16px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      gap: '16px',
                      minHeight: '64px',
                      margin: '2px',
                      borderRadius: '8px',
                      background: index === activeLine 
                        ? 'rgba(119, 93, 71, 0.08)' 
                        : 'rgba(255, 255, 255, 0.8)',
                      borderLeft: index === activeLine ? '4px solid #775D47' : '4px solid transparent',
                      boxShadow: index === activeLine ? '0 4px 12px rgba(119, 93, 71, 0.1)' : 'none'
                    }}
                    onClick={() => setActiveLine(index)}
                    onMouseEnter={(e) => {
                      if (index !== activeLine) {
                        e.currentTarget.style.background = 'rgba(119, 93, 71, 0.04)';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (index !== activeLine) {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }
                    }}
                  >
                    <span style={{
                      color: '#8B7355',
                      fontSize: '14px',
                      minWidth: '56px',
                      fontWeight: '500',
                      userSelect: 'none',
                      paddingTop: '2px'
                    }}>
                      {line.time}
                    </span>
                    <p style={{
                      color: '#666',
                      lineHeight: '1.6',
                      margin: '0',
                      flexGrow: 1,
                      fontSize: '14px'
                    }}>
                      {line.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </>
        );

      case 'text':
        return (
          <div style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '32px 0'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '400',
              color: '#775D47',
              marginBottom: '24px'
            }}>
              {content.title}
            </h2>
            <div>
              {content.content.sections.map((section: any, index: number) => (
                <div key={index} style={{ marginBottom: '32px' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '500',
                    color: '#775D47',
                    marginBottom: '16px'
                  }}>
                    {section.heading}
                  </h3>
                  <p style={{
                    color: '#666',
                    lineHeight: '1.7',
                    marginBottom: '24px',
                    fontSize: '1rem'
                  }}>
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
            <div style={{
              marginTop: '32px',
              textAlign: 'center'
            }}>
              <button
                onClick={() => {
                  if (!selectedItem) return;
                  setVisitedItems(prev => ({ ...prev, [selectedItem]: true }));
                  setShowCongratulations(true);
                }}
                style={{
                  background: '#775D47',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem'
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
                Mark as Complete
              </button>
            </div>
          </div>
        );

      case 'slides':
        const slides = content.content.slides;
        return (
          <div style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '32px 0'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '400',
              color: '#775D47',
              marginBottom: '24px',
              textAlign: 'center'
            }}>
              {content.title}
            </h2>
            
            {/* Slide Container */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(119, 93, 71, 0.08)',
              padding: '32px',
              marginBottom: '24px',
              minHeight: '384px'
            }}>
              <div style={{
                textAlign: 'center',
                marginBottom: '32px'
              }}>
                <h3 style={{
                  fontSize: '1.75rem',
                  fontWeight: '500',
                  color: '#775D47',
                  marginBottom: '16px'
                }}>
                  {slides[currentSlide].title}
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#8B7355',
                  marginBottom: '24px'
                }}>
                  {slides[currentSlide].content}
                </p>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {slides[currentSlide].bulletPoints.map((point: string, index: number) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      background: '#775D47',
                      borderRadius: '50%',
                      marginTop: '8px',
                      flexShrink: 0
                    }} />
                    <p style={{
                      color: '#666',
                      margin: '0',
                      lineHeight: '1.6'
                    }}>
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Navigation */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <button
                onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                disabled={currentSlide === 0}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: currentSlide === 0 ? '#E1DCD5' : '#775D47',
                  color: currentSlide === 0 ? '#8B7355' : 'white',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  cursor: currentSlide === 0 ? 'not-allowed' : 'pointer'
                }}
                onMouseEnter={(e) => {
                  if (currentSlide !== 0) {
                    e.currentTarget.style.background = '#8B7355';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentSlide !== 0) {
                    e.currentTarget.style.background = '#775D47';
                  }
                }}
              >
                <ChevronLeft style={{ width: '16px', height: '16px' }} />
                Previous
              </button>
              
              <div style={{ display: 'flex', gap: '8px' }}>
                {slides.map((_: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      transition: 'all 0.3s ease',
                      background: index === currentSlide ? '#775D47' : 'rgba(119, 93, 71, 0.3)',
                      border: 'none',
                      cursor: 'pointer'
                    }}
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
                  style={{
                    background: '#775D47',
                    color: 'white',
                    padding: '10px 16px',
                    borderRadius: '8px',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
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
                  Complete
                </button>
              ) : (
                <button
                  onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#775D47',
                    color: 'white',
                    padding: '10px 16px',
                    borderRadius: '8px',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
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
                  Next
                  <ChevronRight style={{ width: '16px', height: '16px' }} />
                </button>
              )}
            </div>
          </div>
        );

      case 'file':
        return (
          <div style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '32px 0'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '400',
              color: '#775D47',
              marginBottom: '24px',
              textAlign: 'center'
            }}>
              {content.title}
            </h2>
            
            <div style={{
              background: '#FFFFFF',
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(119, 93, 71, 0.08)',
              padding: '32px'
            }}>
              <div style={{
                textAlign: 'center',
                marginBottom: '32px'
              }}>
                <Download style={{
                  width: '64px',
                  height: '64px',
                  color: '#775D47',
                  margin: '0 auto 16px'
                }} />
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '500',
                  color: '#775D47',
                  marginBottom: '8px'
                }}>
                  {content.content.fileName}
                </h3>
                <p style={{
                  color: '#8B7355',
                  marginBottom: '4px'
                }}>
                  File size: {content.content.fileSize}
                </p>
                <p style={{
                  color: '#666',
                  marginBottom: '24px',
                  lineHeight: '1.6'
                }}>
                  {content.content.description}
                </p>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  color: '#775D47',
                  marginBottom: '16px'
                }}>
                  Contents Include:
                </h4>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '12px'
                }}>
                  {content.content.previewContent.map((item: string, index: number) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px',
                      background: 'rgba(119, 93, 71, 0.05)',
                      borderRadius: '8px'
                    }}>
                      <FileText style={{
                        width: '16px',
                        height: '16px',
                        color: '#775D47'
                      }} />
                      <span style={{ color: '#666' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <button
                  onClick={() => {
                    handleFileDownload(content.content.fileName);
                    if (!selectedItem) return;
                    setVisitedItems(prev => ({ ...prev, [selectedItem]: true }));
                    setShowCongratulations(true);
                  }}
                  style={{
                    background: '#775D47',
                    color: 'white',
                    padding: '12px 32px',
                    borderRadius: '8px',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    margin: '0 auto',
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
                  <Download style={{ width: '20px', height: '20px' }} />
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
          <div style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '32px 0'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '400',
              color: '#775D47',
              marginBottom: '24px',
              textAlign: 'center'
            }}>
              {content.title}
            </h2>
            
            {!showQuizResults ? (
              <>
                <div style={{ marginBottom: '24px' }}>
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
                      fontWeight: '500',
                      color: '#775D47'
                    }}>
                      {answeredQuestions}/{totalQuestions}
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
                      background: '#775D47',
                      borderRadius: '4px',
                      transition: 'all 0.3s ease',
                      width: `${(answeredQuestions / totalQuestions) * 100}%`
                    }} />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  {quiz.questions.map((question: QuizQuestion, index: number) => (
                    <div key={index} style={{
                      background: 'rgba(255, 255, 255, 0.95)',
                      borderRadius: '12px',
                      boxShadow: '0 4px 12px rgba(119, 93, 71, 0.05)',
                      border: '1px solid rgba(119, 93, 71, 0.1)',
                      padding: '24px'
                    }}>
                      <h3 style={{
                        fontSize: '1.1rem',
                        fontWeight: '500',
                        color: '#775D47',
                        marginBottom: '16px'
                      }}>
                        Question {index + 1}: {question.question}
                      </h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {question.options.map((option: string, optionIndex: number) => (
                          <label
                            key={optionIndex}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              padding: '12px',
                              borderRadius: '8px',
                              border: '1px solid',
                              borderColor: quizAnswers[index] === optionIndex 
                                ? '#775D47' 
                                : 'rgba(119, 93, 71, 0.2)',
                              background: quizAnswers[index] === optionIndex 
                                ? 'rgba(119, 93, 71, 0.05)' 
                                : 'transparent',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                              if (quizAnswers[index] !== optionIndex) {
                                e.currentTarget.style.background = 'rgba(119, 93, 71, 0.02)';
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (quizAnswers[index] !== optionIndex) {
                                e.currentTarget.style.background = 'transparent';
                              }
                            }}
                          >
                            <input
                              type="radio"
                              name={`question-${index}`}
                              value={optionIndex}
                              checked={quizAnswers[index] === optionIndex}
                              onChange={() => handleQuizAnswer(index, optionIndex)}
                              style={{ marginRight: '12px' }}
                            />
                            <span style={{ color: '#666' }}>{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{
                  marginTop: '32px',
                  textAlign: 'center'
                }}>
                  <button
                    onClick={handleQuizSubmit}
                    disabled={answeredQuestions < totalQuestions}
                    style={{
                      background: answeredQuestions < totalQuestions ? '#E1DCD5' : '#775D47',
                      color: answeredQuestions < totalQuestions ? '#8B7355' : 'white',
                      padding: '12px 32px',
                      borderRadius: '8px',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      border: 'none',
                      cursor: answeredQuestions < totalQuestions ? 'not-allowed' : 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      if (answeredQuestions >= totalQuestions) {
                        e.currentTarget.style.background = '#8B7355';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (answeredQuestions >= totalQuestions) {
                        e.currentTarget.style.background = '#775D47';
                      }
                    }}
                  >
                    Submit Quiz
                  </button>
                </div>
              </>
            ) : (
              <div style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                boxShadow: '0 8px 24px rgba(119, 93, 71, 0.08)',
                padding: '32px'
              }}>
                <div style={{
                  textAlign: 'center',
                  marginBottom: '32px'
                }}>
                  <div style={{ fontSize: '4rem', marginBottom: '16px' }}>
                    {correctAnswers === totalQuestions ? '🎉' : correctAnswers >= totalQuestions * 0.7 ? '👍' : '📚'}
                  </div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '500',
                    color: '#775D47',
                    marginBottom: '16px'
                  }}>
                    Quiz Results
                  </h3>
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#8B7355',
                    marginBottom: '8px'
                  }}>
                    You scored {correctAnswers} out of {totalQuestions} questions correctly
                  </p>
                  <p style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#775D47'
                  }}>
                    {Math.round((correctAnswers / totalQuestions) * 100)}%
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {quiz.questions.map((question: QuizQuestion, index: number) => {
                    const userAnswer = quizAnswers[index];
                    const isCorrect = userAnswer === question.correctAnswer;
                    
                    return (
                      <div key={index} style={{
                        border: '1px solid rgba(119, 93, 71, 0.15)',
                        borderRadius: '8px',
                        padding: '16px'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          marginBottom: '12px'
                        }}>
                          {isCorrect ? (
                            <CheckCircle style={{
                              width: '20px',
                              height: '20px',
                              color: '#10B981',
                              marginTop: '2px'
                            }} />
                          ) : (
                            <X style={{
                              width: '20px',
                              height: '20px',
                              color: '#EF4444',
                              marginTop: '2px'
                            }} />
                          )}
                          <div style={{ flex: 1 }}>
                            <h4 style={{
                              fontWeight: '500',
                              color: '#775D47',
                              marginBottom: '8px'
                            }}>
                              Question {index + 1}: {question.question}
                            </h4>
                            <p style={{
                              fontSize: '14px',
                              color: '#666',
                              marginBottom: '8px'
                            }}>
                              Your answer: <span style={{
                                color: isCorrect ? '#10B981' : '#EF4444'
                              }}>
                                {question.options[userAnswer]}
                              </span>
                            </p>
                            {!isCorrect && (
                              <p style={{
                                fontSize: '14px',
                                color: '#666',
                                marginBottom: '8px'
                              }}>
                                Correct answer: <span style={{ color: '#10B981' }}>
                                  {question.options[question.correctAnswer]}
                                </span>
                              </p>
                            )}
                            <p style={{
                              fontSize: '14px',
                              color: '#666',
                              background: 'rgba(119, 93, 71, 0.05)',
                              padding: '12px',
                              borderRadius: '6px',
                              margin: '0'
                            }}>
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
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'hidden',
      background: '#FEFEFE',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
    }}>
      {/* Top Navigation Bar */}
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
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <button 
            onClick={() => router.push('/')}
            style={{
              color: '#775D47',
              fontSize: '1.5rem',
              fontWeight: '300',
              letterSpacing: '0.5px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: '8px 0'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#8B7355';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#775D47';
            }}
          >
            Illuminance Learning
          </button>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              width: '320px'
            }}>
              <div style={{
                flex: 1,
                height: '8px',
                background: 'rgba(119, 93, 71, 0.1)',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #775D47 0%, #8B7355 100%)',
                  transition: 'all 0.3s ease',
                  width: `${progress}%`
                }} />
              </div>
              <div style={{
                color: '#775D47',
                fontSize: '14px',
                fontWeight: '500',
                minWidth: '80px',
                textAlign: 'right'
              }}>
                {progress}% Complete
              </div>
            </div>
            <button 
              onClick={() => router.push('/mylearning')}
              style={{
                background: '#775D47',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
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
              My Learning
            </button>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <button 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'transparent',
                  border: '1px solid rgba(119, 93, 71, 0.15)',
                  borderRadius: '10px',
                  padding: '8px 12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  color: '#775D47',
                  fontSize: '14px'
                }}
                onClick={handleProfileClick}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(119, 93, 71, 0.25)';
                  e.currentTarget.style.background = 'rgba(119, 93, 71, 0.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(119, 93, 71, 0.15)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #775D47 0%, #8B7355 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '14px'
                }}>
                  U
                </div>
                <span style={{ fontWeight: '500', color: '#775D47' }}>User</span>
                <span style={{
                  fontSize: '10px',
                  color: '#8B7355',
                  transition: 'transform 0.3s ease',
                  transform: showProfileMenu ? 'rotate(180deg)' : 'rotate(0deg)'
                }}>
                  ▼
                </span>
              </button>
              {showProfileMenu && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  marginTop: '8px',
                  background: '#FFFFFF',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(119, 93, 71, 0.1)',
                  borderRadius: '12px',
                  boxShadow: '0 12px 32px rgba(119, 93, 71, 0.15)',
                  minWidth: '220px',
                  zIndex: 50
                }}>
                  <div style={{
                    padding: '16px',
                    borderBottom: '1px solid rgba(119, 93, 71, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #775D47 0%, #8B7355 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: '600'
                    }}>
                      U
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontWeight: '600',
                        color: '#775D47',
                        fontSize: '14px',
                        marginBottom: '2px'
                      }}>
                        User Name
                      </div>
                      <div style={{
                        color: '#8B7355',
                        fontSize: '12px'
                      }}>
                        user@example.com
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: '8px 0' }}>
                    {[
                      { label: 'My Profile', route: '/profile' },
                      { label: 'Settings', route: '/settings' },
                      { label: 'My Certificates', route: '/certificates' },
                      { label: 'Help & Support', route: '/help' }
                    ].map((item) => (
                      <button 
                        key={item.route}
                        onClick={() => handleNavigation(item.route)}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          display: 'block',
                          padding: '12px 16px',
                          color: '#775D47',
                          fontSize: '14px',
                          fontWeight: '400',
                          transition: 'all 0.3s ease',
                          borderRadius: '6px',
                          margin: '2px 8px',
                          border: 'none',
                          background: 'transparent',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(119, 93, 71, 0.05)';
                          e.currentTarget.style.color = '#8B7355';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '#775D47';
                        }}
                      >
                        {item.label}
                      </button>
                    ))}
                    <div style={{
                      height: '1px',
                      background: 'rgba(119, 93, 71, 0.08)',
                      margin: '8px 16px'
                    }} />
                    <button 
                      onClick={handleSignOut}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        display: 'block',
                        padding: '12px 16px',
                        color: '#DC2626',
                        fontSize: '14px',
                        fontWeight: '400',
                        transition: 'all 0.3s ease',
                        borderRadius: '6px',
                        margin: '2px 8px',
                        border: 'none',
                        background: 'transparent',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(220, 38, 38, 0.05)';
                        e.currentTarget.style.color = '#EF4444';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#DC2626';
                      }}
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay to close profile menu when clicking outside */}
      {showProfileMenu && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 40,
            background: 'transparent'
          }}
          onClick={handleProfileMenuClose}
        />
      )}

      {/* Main Content Wrapper */}
      <div style={{
        flex: 1,
        display: 'flex',
        overflow: 'hidden',
        background: '#FAFAFA'
      }}>
        {/* Left Sidebar */}
        <div style={{
          width: '320px',
          padding: '24px',
          borderRight: '1px solid rgba(119, 93, 71, 0.1)',
          overflowY: 'auto',
          flexShrink: 0,
          background: '#FFFFFF'
        }}>
          {courseSections.map((section) => (
            <div key={section.title} style={{ marginBottom: '32px' }}>
              <h3 style={{
                color: '#775D47',
                fontSize: '1.1rem',
                fontWeight: '600',
                marginBottom: '16px',
                paddingBottom: '8px',
                borderBottom: '2px solid rgba(119, 93, 71, 0.15)'
              }}>
                {section.title}
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {section.items.map((itemId) => {
                  const item = contentItems[itemId];
                  if (!item) return null;
                  
                  return (
                    <li 
                      key={itemId}
                      style={{
                        padding: '12px 16px',
                        margin: '4px 0',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        transition: 'all 0.3s ease',
                        background: selectedItem === itemId 
                          ? 'rgba(119, 93, 71, 0.1)' 
                          : visitedItems[itemId] 
                            ? 'rgba(119, 93, 71, 0.04)' 
                            : 'transparent',
                        fontWeight: selectedItem === itemId ? '500' : '400'
                      }}
                      onClick={() => handleItemClick(itemId)}
                      onMouseEnter={(e) => {
                        if (selectedItem !== itemId) {
                          e.currentTarget.style.background = 'rgba(119, 93, 71, 0.06)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedItem !== itemId) {
                          e.currentTarget.style.background = visitedItems[itemId] 
                            ? 'rgba(119, 93, 71, 0.04)' 
                            : 'transparent';
                        }
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        flexGrow: 1
                      }}>
                        <div style={{ color: '#775D47' }}>
                          {getItemIcon(item.type)}
                        </div>
                        <div style={{ flexGrow: 1 }}>
                          <span style={{
                            color: '#775D47',
                            fontSize: '14px',
                            display: 'block'
                          }}>
                            {item.title}
                          </span>
                          <span style={{
                            color: '#8B7355',
                            fontSize: '12px'
                          }}>
                            {item.duration}
                          </span>
                        </div>
                      </div>
                      {visitedItems[itemId] && (
                        <span style={{
                          color: '#10B981',
                          fontWeight: '600',
                          marginLeft: '8px'
                        }}>
                          ✓
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Right Main Content */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '32px',
          minWidth: 0
        }}>
          {renderContent()}

          {/* Congratulations Screen */}
          {showCongratulations && (
            <div style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 50
            }}>
              <div style={{
                background: 'white',
                borderRadius: '12px',
                padding: '32px',
                maxWidth: '500px',
                width: '100%',
                margin: '16px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '24px' }}>🎉</div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '500',
                  color: '#775D47',
                  marginBottom: '16px'
                }}>
                  Congratulations!
                </h3>
                <p style={{
                  color: '#8B7355',
                  marginBottom: '32px',
                  lineHeight: '1.6'
                }}>
                  You've completed "{contentItems[selectedItem!]?.title}". Keep up the great work!
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '16px'
                }}>
                  <button
                    onClick={() => setShowCongratulations(false)}
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
                    Continue Learning
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Quiz Prompt */}
          {showQuizPrompt && !isCourseComplete && (
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 251, 235, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%)',
              borderRadius: '12px',
              padding: '32px',
              margin: '32px 0',
              borderLeft: '4px solid #F59E0B'
            }}>
              <div style={{
                textAlign: 'center',
                maxWidth: '500px',
                margin: '0 auto'
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '16px'
                }}>
                  🎯
                </div>
                <h3 style={{
                  color: '#775D47',
                  fontSize: '1.5rem',
                  marginBottom: '16px'
                }}>
                  Progress Checkpoint!
                </h3>
                <p style={{
                  color: '#8B7355',
                  lineHeight: '1.6',
                  marginBottom: '24px'
                }}>
                  You've completed {completedCount} of {totalItems} modules.<br />
                  Ready to test your understanding with a quick assessment?
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '16px',
                  marginTop: '24px'
                }}>
                  <button 
                    style={{
                      background: 'linear-gradient(135deg, #775D47 0%, #8B7355 100%)',
                      color: 'white',
                      border: 'none',
                      padding: '12px 32px',
                      borderRadius: '8px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => setShowQuizPrompt(false)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    Start Assessment
                  </button>
                  <button
                    style={{
                      background: 'white',
                      color: '#775D47',
                      border: '1px solid rgba(119, 93, 71, 0.2)',
                      padding: '12px 32px',
                      borderRadius: '8px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => setShowQuizPrompt(false)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(119, 93, 71, 0.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'white';
                    }}
                  >
                    Continue Learning
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Completion Certificate */}
          {isCourseComplete && (
            <div style={{
              background: 'white',
              padding: '32px',
              borderRadius: '12px'
            }}>
              <div style={{
                position: 'relative',
                border: '2px solid #775D47',
                borderRadius: '12px',
                padding: '48px',
                maxWidth: '1000px',
                margin: '0 auto',
                background: 'white'
              }}>
                <div style={{
                  textAlign: 'center',
                  marginBottom: '32px',
                  position: 'relative'
                }}>
                  <h2 style={{
                    color: '#775D47',
                    fontSize: '2.5rem',
                    marginBottom: '16px'
                  }}>
                    Certificate of Completion
                  </h2>
                  <div style={{
                    fontSize: '4rem',
                    margin: '16px 0'
                  }}>
                    🏅
                  </div>
                </div>
                <div style={{
                  textAlign: 'center',
                  margin: '32px 0'
                }}>
                  <p style={{
                    color: '#8B7355',
                    fontSize: '1.1rem',
                    lineHeight: '1.6',
                    margin: '16px 0'
                  }}>
                    This document certifies that
                  </p>
                  <div style={{
                    color: '#775D47',
                    fontSize: '2.5rem',
                    fontWeight: '600',
                    margin: '24px 0',
                    textTransform: 'uppercase'
                  }}>
                    [Participant Name]
                  </div>
                  <p style={{
                    color: '#8B7355',
                    fontSize: '1.1rem',
                    lineHeight: '1.6',
                    margin: '16px 0'
                  }}>
                    has successfully completed all requirements of the
                  </p>
                  <div style={{
                    color: '#775D47',
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    margin: '32px 0'
                  }}>
                    Advanced Technical Certification Program
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '48px',
                    padding: '0 32px'
                  }}>
                    <div style={{
                      color: '#8B7355',
                      fontSize: '14px'
                    }}>
                      Date Achieved: [MM/DD/YYYY]
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{
                        width: '192px',
                        borderBottom: '2px solid #775D47',
                        margin: '8px 0'
                      }} />
                      <div style={{
                        color: '#8B7355',
                        fontSize: '14px'
                      }}>
                        Authorized Signature
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: 'absolute',
                  top: '-16px',
                  right: '-16px',
                  background: '#775D47',
                  color: 'white',
                  padding: '8px 24px',
                  borderRadius: '6px',
                  transform: 'rotate(12deg)',
                  fontWeight: '500',
                  boxShadow: '0 4px 12px rgba(119, 93, 71, 0.3)'
                }}>
                  Certified Professional
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}