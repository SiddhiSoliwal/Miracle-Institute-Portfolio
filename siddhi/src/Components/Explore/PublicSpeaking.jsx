import React, { useState } from 'react';

import './PublicSpeaking.css';
import {
  FaMicrophoneAlt,
  FaUserFriends,
  FaChalkboardTeacher,
  FaComments,
  FaVideo,
  FaPeopleArrows
} from "react-icons/fa";

const data = [
  {
    title: 'Voice Modulation',
    desc: 'Learn to control pitch, tone, and volume to create an engaging and dynamic speaking style...',
    icon: <FaMicrophoneAlt />,
  },
  {
    title: 'Body Language',
    desc: 'Master non-verbal communication techniques that project confidence...',
    icon: <FaUserFriends />,
  },
  {
    title: 'Content Structure',
    desc: 'Develop compelling narratives with clear beginnings, middles, and ends...',
    icon: <FaChalkboardTeacher />,
  },
  {
    title: 'Q&A Preparation',
    desc: 'Prepare for challenging questions with frameworks that help you respond confidently...',
    icon: <FaComments />,
  },
  {
    title: 'Video Analysis',
    desc: 'Receive personalized feedback through recorded practice sessions...',
    icon: <FaVideo />,
  },
  {
    title: 'Peer Workshops',
    desc: 'Practice in a supportive group environment...',
    icon: <FaPeopleArrows />,
  },
];

const faqs = [
  {
    question: 'How long does it take to see improvement in public speaking?',
    answer: 'Most students notice improvement within a few weeks of consistent practice.',
  },
  {
    question: 'Do I need prior speaking experience to join?',
    answer: 'No prior experience is necessary. Our courses are beginner-friendly.',
  },
  {
    question: 'How is this different from other public speaking courses?',
    answer: 'We focus on real-world practice, mentorship, and personalized feedback.',
  },
  {
    question: 'What if I have extreme speaking anxiety?',
    answer: 'We specialize in helping people overcome speaking anxiety with a supportive environment.',
  },
  {
    question: 'Can I focus specifically on interview skills?',
    answer: 'Yes, we offer modules that focus specifically on interview and presentation skills.',
  }
];
const App = () =>  {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero-sectionn">
        <div className="hero-content">
          <h1>
            <span className="highlight">Public</span> Speaking
          </h1>
          <p>
          Public speaking builds confidence, connects people, and inspires action. Clear delivery and engaging storytelling make it impactful.
          </p>
          <div className="buttons">
            <button className="start-btn">Start Your Journey</button>
    
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="why-section">
        <div className="why-content">
          <div className="why-text">
            <h2>Why Public speaking </h2>
            <p>
              Public speaking is a vital skill that enables individuals to communicate their thoughts clearly, persuade audiences, and inspire action. It builds confidence, strengthens leadership, and enhances professional and personal relationships. Whether delivering a presentation, giving a speech, or engaging in a discussion, effective public speaking fosters credibility and influence. Strong speaking skills help in networking, career advancement, and social interactions, making it a valuable asset in every aspect of life.
            </p>
           
            <a href="#">Discover how we can help you grow →</a>
          </div>
          <div className="why-image">
            <img
              src="https://images.pexels.com/photos/3184395/pexels-photo-3184395.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Students group"
            />
          </div>
        </div>
      </section>

      {/* Key Areas of Development */}
    

  <div className="public-speaking-page">
      <h2 className="heading">Our Comprehensive Approach</h2>
      <div className="card-grid">
        {data.map((item, index) => (
          <div key={index} className="card">
            <div className="icon">{item.icon}</div>

            <h3 className="card-title">{item.title}</h3>
            <p className="card-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>

        
      {/* Progress Section */}
      <div className="progress-section">
        <div className="progress-left">
          <h2>Track Your Progress</h2>
          <p>
           Your Speaking Journey
          </p>

          <div className="skill">
            <span>voice Clarity</span>
            <div className="bar">
              <div className="fill" style={{ width: '25%' }}></div>
            </div>
            <span className="percent">25%</span>
          </div>

          <div className="skill">
            <span>Body Language </span>
            <div className="bar">
              <div className="fill" style={{ width: '60%' }}></div>
            </div>
            <span className="percent">60%</span>
          </div>

          <div className="skill">
            <span>Content Organization</span>
            <div className="bar">
              <div className="fill" style={{ width: '85%' }}></div>
            </div>
            <span className="percent">85%</span>
          </div>

          <div className="skill">
            <span>Audience Engagement</span>
            <div className="bar">
              <div className="fill" style={{ width: '45%' }}></div>
            </div>
            <span className="percent">45%</span>
          </div> <br /><br />

          <button className="report-btn">View Detailed Report</button>
        </div>

        <div className="progress-right">
          <div className="checklist-box">
            <h3>Weekly Goals Checklist</h3>
            <ul>
              <li><input type="checkbox" defaultChecked /> 
Complete 3 practice speeches (5 minutes each)</li>
              <li><input type="checkbox" defaultChecked /> Read one chapter of “How to Win Friends and Influence People”</li>
              <li><input type="checkbox" /> 
Record and analyze one presentation</li>
              <li><input type="checkbox" /> 
Practice vocal exercises (15 minutes daily)"</li>
              <li><input type="checkbox" /> Prepare outline for next week's presentation</li>
              <li><input type="checkbox" /> 
Practice impromptu speaking (2 topics)</li>
            </ul>
            <div className="weekly-progress">
              <span>Weekly Progress</span>
              <div className="bar">
                <div className="fill" style={{ width: '33%' }}></div>
              </div>
              <span className="completed">2/6 Completed</span>
            </div>
          </div>
        </div>
      </div> <br /><br />
      <div className="enroll-container">
      <h2 className="enroll-heading">Ready to Transform Your Speaking Skills?</h2>
      <p className="enroll-subtext">
        Join thousands of successful graduates who have advanced their careers<br />
        through powerful communication.
      </p>
      <button className="enroll-button">Enroll Today</button>
      <p className="enroll-note">Limited spots available for May cohort</p>
    </div>
     <div className="faq-container">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      <div className="faq-footer">
        <p>Still have questions? We're here to help.</p>
        <button className="contact-button">Contact Our Team</button>
      </div>
    </div>
      </div>
   
     

     

  );
}

export default App;
