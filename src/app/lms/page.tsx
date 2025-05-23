'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import VideoPlayer from '../components/VideoPlayer';
import { isFeatureEnabled } from '../utils/featureFlags';
import dynamic from 'next/dynamic';

const ReactConfetti = dynamic(() => import('react-confetti'), {
  ssr: false
});

const LMS = () => {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [visitedItems, setVisitedItems] = useState<Record<string, boolean>>({});
  const [showQuizPrompt, setShowQuizPrompt] = useState(false);
  const [activeLine, setActiveLine] = useState<number>(0);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  const courseSections = [
    {
      title: "Module 1: Foundation",
      items: [
        "Introduction to Core Concepts.",
        "Essential Principles Overview",
        "Methodology Fundamentals",
        "Basic Techniques Primer"
      ]
    },
    {
      title: "Module 2: Technical Setup",
      items: [
        "Equipment Preparation",
        "Tool Configuration Basics",
        "Advanced Component Setup",
        "Safety Protocols Review",
        "Operational Best Practices",
        "Practical Demonstration",
        "Final System Checks"
      ]
    },
    {
      title: "Module 3: Component Analysis",
      items: [
        "Primary Element Breakdown",
        "Common Operational Factors",
        "Knowledge Assessment"
      ]
    }
  ];

  const transcript = [
    { time: "00:00", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { time: "05:30", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { time: "12:45", content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { time: "18:20", content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { time: "24:10", content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." },
    { time: "29:55", content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores." },
    { time: "35:40", content: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit." },
    { time: "40:15", content: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur." },
    { time: "45:00", content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti." }
  ];

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

  interface TranscriptLine {
    time: string;
    content: string;
  }

  interface ItemContent {
    videoId: string;
    title: string;
    transcript: TranscriptLine[];
  }

  interface ItemContentMap {
    [key: string]: ItemContent;
  }

  // Content mapping for each item
  const itemContent: ItemContentMap = {
    // Module 1: Foundation
    "Introduction to Core Concepts.": {
      videoId: "Div0iP65aZo",
      title: "Introduction to Core Concepts",
      transcript: [
        { time: "00:00", content: "Welcome to the Introduction to Core Concepts. In this module, we'll explore the fundamental principles that form the foundation of our subject." },
        { time: "05:30", content: "Let's begin by understanding the key terminology and basic concepts that you'll encounter throughout this course." },
        { time: "12:45", content: "These core concepts will serve as building blocks for more advanced topics we'll cover in later modules." }
      ]
    },
    "Essential Principles Overview": {
      videoId: "dxWvtMOGAhw",
      title: "Essential Principles Overview",
      transcript: [
        { time: "00:00", content: "In this section, we'll dive into the essential principles that guide our practice." },
        { time: "05:30", content: "Understanding these principles is crucial for applying the concepts effectively in real-world scenarios." }
      ]
    },
    "Methodology Fundamentals": {
      videoId: "6ZfuNTqbHE8",
      title: "Methodology Fundamentals",
      transcript: [
        { time: "00:00", content: "The methodology fundamentals section covers the systematic approach to problem-solving." },
        { time: "05:30", content: "We'll explore different methodologies and their applications in various contexts." }
      ]
    },
    "Basic Techniques Primer": {
      videoId: "6reo6h7h1wk",
      title: "Basic Techniques Primer",
      transcript: [
        { time: "00:00", content: "This primer introduces you to the basic techniques you'll need to master." },
        { time: "05:30", content: "We'll practice these techniques through hands-on exercises and real-world examples." }
      ]
    },
    // Module 2: Technical Setup
    "Equipment Preparation": {
      videoId: "ZRRRuUu2soE",
      title: "Equipment Preparation",
      transcript: [
        { time: "00:00", content: "In this module, we'll cover the essential equipment needed for our technical setup." },
        { time: "05:30", content: "Proper equipment preparation is crucial for ensuring smooth operations and safety." }
      ]
    },
    "Tool Configuration Basics": {
      videoId: "jAy6NJ_D5vU",
      title: "Tool Configuration Basics",
      transcript: [
        { time: "00:00", content: "Let's explore the fundamental configuration settings for our tools." },
        { time: "05:30", content: "Understanding these basics will help you optimize your workflow." }
      ]
    },
    "Advanced Component Setup": {
      videoId: "XrfVfRV0zSg",
      title: "Advanced Component Setup",
      transcript: [
        { time: "00:00", content: "Now we'll dive into more complex component configurations." },
        { time: "05:30", content: "These advanced setups will enhance your system's capabilities." }
      ]
    },
    "Safety Protocols Review": {
      videoId: "zSWdZVtXT7E",
      title: "Safety Protocols Review",
      transcript: [
        { time: "00:00", content: "Safety is our top priority. Let's review essential safety protocols." },
        { time: "05:30", content: "Following these protocols ensures a secure working environment." }
      ]
    },
    "Operational Best Practices": {
      videoId: "wb49-oV0F78",
      title: "Operational Best Practices",
      transcript: [
        { time: "00:00", content: "Learn the industry's best practices for optimal operations." },
        { time: "05:30", content: "These practices will help you achieve maximum efficiency." }
      ]
    },
    "Practical Demonstration": {
      videoId: "dNW0B0HsvVs",
      title: "Practical Demonstration",
      transcript: [
        { time: "00:00", content: "Watch as we demonstrate the practical application of our tools." },
        { time: "05:30", content: "This hands-on demonstration will reinforce your understanding." }
      ]
    },
    "Final System Checks": {
      videoId: "UEhsFEgsI5U",
      title: "Final System Checks",
      transcript: [
        { time: "00:00", content: "Before going live, we need to perform thorough system checks." },
        { time: "05:30", content: "These final checks ensure everything is working as expected." }
      ]
    },
    // Module 3: Component Analysis
    "Primary Element Breakdown": {
      videoId: "D86RtevtfrA",
      title: "Primary Element Breakdown",
      transcript: [
        { time: "00:00", content: "Let's analyze the primary elements of our system." },
        { time: "05:30", content: "Understanding these elements is key to system optimization." }
      ]
    },
    "Common Operational Factors": {
      videoId: "xo4rkcC7kFc",
      title: "Common Operational Factors",
      transcript: [
        { time: "00:00", content: "We'll examine the factors that affect system operations." },
        { time: "05:30", content: "Understanding these factors helps in troubleshooting and optimization." }
      ]
    },
    "Knowledge Assessment": {
      videoId: "0kQ8i2FpRDk",
      title: "Knowledge Assessment",
      transcript: [
        { time: "00:00", content: "It's time to test your understanding of the course material." },
        { time: "05:30", content: "This assessment will help reinforce your learning and identify areas for improvement." }
      ]
    }
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    if (isFeatureEnabled('complete_section_on_view')) {
      setVisitedItems(prev => ({ ...prev, [item]: true }));
    }
    setActiveLine(0); // Reset transcript position when changing items
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
    // Add your sign out logic here (e.g., clear auth tokens, etc.)
    console.log('Signing out...');
    // For now, just redirect to login or home page
    router.push('/login');
  };

  function handleVideoComplete(): void {
    if (!selectedItem) return;
    setVisitedItems(prev => ({ ...prev, [selectedItem]: true }));
    setShowCongratulations(true);
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-white">
      {/* Top Navigation Bar */}
      <nav className="bg-white sticky top-0 z-50 h-15 flex items-center px-8">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
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
                {section.items.map((item) => (
                  <li 
                    key={item}
                    className={`px-4 py-3 my-1 rounded-md cursor-pointer flex justify-between items-center transition-all duration-200 hover:bg-slate-100 ${
                      selectedItem === item ? 'bg-slate-200 font-medium' : ''
                    } ${
                      visitedItems[item] ? 'bg-green-50' : ''
                    }`}
                    onClick={() => handleItemClick(item)}
                  >
                    <span className="flex-grow text-slate-700 text-sm">{item}</span>
                    {visitedItems[item] && (
                      <span className="text-green-600 font-bold ml-2">✓</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right Main Content */}
        <div className="flex-1 overflow-y-auto p-8 min-w-0">
          {selectedItem ? (
            <>
              {/* Video Section */}
              <div className="py-8 px-4 mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  {itemContent[selectedItem]?.title || selectedItem}
                </h2>
                <VideoPlayer 
                  videoId={itemContent[selectedItem]?.videoId || "Jt1_Q_tnbEk"}
                  onVideoComplete={handleVideoComplete}
                />
              </div>

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
                        You've completed "{selectedItem}". Keep up the great work!
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

              {/* Transcript Section */}
              <div className="rounded-lg p-6 mb-8">
                <h3 className="text-slate-800 text-xl mb-5 font-semibold pb-2 border-b-2 border-slate-100">Lecture Transcript</h3>
                <div className="max-h-96 overflow-y-auto border border-slate-200 rounded-md p-2">
                  {(itemContent[selectedItem]?.transcript || []).map((line, index) => (
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
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-slate-800 mb-4">Welcome to the Course</h2>
                <p className="text-slate-600">Select a module from the sidebar to begin learning</p>
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
};

export default LMS;