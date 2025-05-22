'use client'

import { useState, useEffect } from 'react';
import styles from './lms.module.css';

const LMS = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [visitedItems, setVisitedItems] = useState<Record<string, boolean>>({});
  const [showQuizPrompt, setShowQuizPrompt] = useState(false);
  const [activeLine, setActiveLine] = useState<number>(0);

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

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setVisitedItems(prev => ({ ...prev, [item]: true }));
  };

  return (
    <div className={styles.container}>
      {/* Top Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          <h2 className={styles.brand}>Skilled LMS</h2>
          <div className={styles.navProgress}>
            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill} 
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className={styles.progressText}>
              {progress}% Complete
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Wrapper */}
      <div className={styles.mainWrapper}>
        {/* Left Sidebar */}
        <div className={styles.sidebar}>
          {courseSections.map((section) => (
            <div key={section.title} className={styles.section}>
              <h3 className={styles.sectionTitle}>{section.title}</h3>
              <ul className={styles.sectionList}>
                {section.items.map((item) => (
                  <li 
                    key={item}
                    className={`${styles.sectionItem} ${
                      selectedItem === item ? styles.selectedItem : ''
                    } ${
                      visitedItems[item] ? styles.visitedItem : ''
                    }`}
                    onClick={() => handleItemClick(item)}
                  >
                    <span className={styles.itemText}>{item}</span>
                    {visitedItems[item] && (
                      <span className={styles.completionIndicator}>✓</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right Main Content */}
        <div className={styles.mainContent}>
          {/* Video Section */}
          <div className={styles.videoSection}>
            <h2 className={styles.courseTitle}>Professional Development Program</h2>
            <div className={styles.videoContainer}>
              <div className={styles.videoPlaceholder} />
              <div className={styles.playbackControls}>
                <span className={styles.timestamp}>00:00</span>
                <div className={styles.progressTrack}>
                  <div className={styles.playbackProgress} />
                </div>
                <span className={styles.timestamp}>45:00</span>
              </div>
            </div>
          </div>

          {/* Transcript Section */}
          <div className={styles.transcriptSection}>
            <h3 className={styles.transcriptTitle}>Lecture Transcript</h3>
            <div className={styles.transcriptContainer}>
              {transcript.map((line, index) => (
                <div
                  key={index}
                  className={`${styles.transcriptLine} ${
                    index === activeLine ? styles.activeTranscriptLine : ''
                  }`}
                  onClick={() => setActiveLine(index)}
                >
                  <span className={styles.timestamp}>{line.time}</span>
                  <p className={styles.transcriptText}>{line.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quiz Prompt */}
          {showQuizPrompt && !isCourseComplete && (
            <div className={styles.quizPrompt}>
              <div className={styles.quizContent}>
                <div className={styles.celebrationBadge}>🎯</div>
                <h3 className={styles.quizTitle}>Progress Checkpoint!</h3>
                <p className={styles.quizMessage}>
                  You've completed {completedCount} of {totalItems} modules.<br />
                  Ready to test your understanding with a quick assessment?
                </p>
                <div className={styles.quizActions}>
                  <button 
                    className={styles.quizButton}
                    onClick={() => setShowQuizPrompt(false)}
                  >
                    Start Assessment
                  </button>
                  <button
                    className={styles.secondaryButton}
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
            <div className={styles.certificateContainer}>
              <div className={styles.certificate}>
                <div className={styles.certificateHeader}>
                  <h2 className={styles.certificateTitle}>Certificate of Completion</h2>
                  <div className={styles.decorativeSeal}>🏅</div>
                </div>
                <div className={styles.certificateBody}>
                  <p className={styles.certificateText}>
                    This document certifies that
                  </p>
                  <div className={styles.recipientName}>[Participant Name]</div>
                  <p className={styles.certificateText}>
                    has successfully completed all requirements of the
                  </p>
                  <div className={styles.courseName}>Advanced Technical Certification Program</div>
                  <div className={styles.certificateDetails}>
                    <div className={styles.completionDate}>
                      Date Achieved: [MM/DD/YYYY]
                    </div>
                    <div className={styles.authorizationSection}>
                      <div className={styles.signatureLine} />
                      <div className={styles.authorizedBy}>Authorized Signature</div>
                    </div>
                  </div>
                </div>
                <div className={styles.achievementBadge}>Certified Professional</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LMS;