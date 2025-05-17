import React, { useState } from 'react';

import './Yoga.css';
import { FaStar } from 'react-icons/fa'; // ✅ This line is necessary

import { FaPlay } from 'react-icons/fa'; // ✅ This is required

   import { FaRegSmile, FaSpa, FaHeart, FaBrain, FaSun, FaLeaf } from 'react-icons/fa';
export default function Yoga() {
 

const offerings = [
  {
    icon: <FaRegSmile className="icon" />,
    title: 'Mindfulness Meditation',
    desc: 'Learn to cultivate present-moment awareness through guided mindfulness practices that reduce stress and enhance mental clarity. Perfect for beginners and experienced practitioners alike.'
  },
  {
    icon: <FaSpa className="icon" />,
    title: 'Hatha Yoga',
    desc: 'A balanced approach combining physical postures, breathing exercises, and meditation. This foundational practice improves strength, flexibility, and balance while calming the mind.'
  },
  {
    icon: <FaHeart className="icon" />,
    title: 'Breathwork',
    desc: 'Master powerful breathing techniques that energize the body, calm the nervous system, and enhance meditation. Learn pranayama practices that transform your relationship with breath.'
  },
  {
    icon: <FaBrain className="icon" />,
    title: 'Stress Reduction',
    desc: 'Specialized techniques designed to release tension, manage anxiety, and build resilience. These evidence-based practices provide tools for navigating life’s challenges with greater ease.'
  },
  {
    icon: <FaSun className="icon" />,
    title: 'Vinyasa Flow',
    desc: 'Dynamic sequences that synchronize movement with breath, creating a meditative flow state. This practice builds heat, strength, and flexibility while cultivating mindful awareness.'
  },
  {
    icon: <FaLeaf className="icon" />,
    title: 'Restorative Yoga',
    desc: 'Gentle, supported poses held for extended periods to promote deep relaxation and healing. This practice activates the parasympathetic nervous system for profound rest and recovery.'
  },
];
const progressData = [
  { label: 'Meditation Minutes', percent: 75 },
  { label: 'Yoga Sessions', percent: 50 },
  { label: 'Stress Reduction', percent: 90 },
  { label: 'Mindfulness', percent: 60 },
];

const goalsChecklist = [
  'Complete 3 morning meditation sessions (5 min each)',
  'Attend 2 yoga classes (in-person or virtual)',
  'Practice 10 minutes of breathwork daily',
  'Complete 1 restorative yoga session',
  'Practice mindfulness during daily activities',
  'Try one new yoga pose or meditation technique',
  'Journal about your practice experience',
];

const checkedItems = [0, 1, 3]; // indexes of checked goals
const testimonials = [
  {
    name: 'Emily Richardson',
    title: 'Marketing Executive, 42',
    text: "After struggling with chronic stress and insomnia for years, this yoga and meditation program has been transformative. I’ve developed a consistent morning practice that has dramatically improved my sleep quality and overall resilience at work.",
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Michael Zhang',
    title: 'Software Engineer, 34',
    text: "As someone who spends long hours at a computer, I was experiencing significant back pain and mental fatigue. The combination of yoga postures and mindfulness techniques has not only relieved my physical discomfort but also improved my focus and problem-solving abilities.",
    image: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    name: 'Sarah Johnson',
    title: 'Retired Teacher, 58',
    text: "I started this program after my retirement, looking for ways to stay active and manage the transition. The community aspect has been as valuable as the practices themselves. I’ve made wonderful connections while improving my flexibility and finding a renewed sense of purpose.",
    image: 'https://randomuser.me/api/portraits/women/50.jpg',
  },
];

const videos = [
  {
    title: 'Morning Yoga Flow',
    description: 'Energize your day with this gentle yet invigorating morning sequence designed to awaken your body and mind.',
    duration: '15:24',
    thumbnail: 'https://videos.pexels.com/video-files/4352398/4352398-sd_640_360_25fps.mp4',
    link: 'https://videos.pexels.com/video-files/4352398/4352398-sd_640_360_25fps.mp4' // example YouTube link
  },
  {
    title: 'Guided Meditation for Anxiety',
    description: 'A calming meditation practice specifically designed to reduce anxiety and cultivate a sense of inner peace.',
    duration: '20:08',
    thumbnail: 'https://source.unsplash.com/featured/?meditation',
    link: 'https://www.youtube.com/watch?v=MIr3RsUWrdo'
  },
  {
    title: 'Advanced Breathwork Techniques',
    description: 'Master powerful pranayama practices to enhance your meditation, boost energy, and regulate your nervous system.',
    duration: '18:45',
    thumbnail: 'https://source.unsplash.com/featured/?breathwork',
    link: 'https://www.youtube.com/watch?v=Xy1bcp4gC3g'
  }
];
       const faqs = [
        {
            question: 'What is the best time to do yoga?',
            answer: 'Morning is considered the best time for yoga to energize your day and improve focus.',
        },
        {
            question: 'Do I need any equipment?',
            answer: 'A yoga mat is usually sufficient. Some styles may also use props like blocks or straps.',
        },
        {
            question: 'Can beginners start yoga?',
            answer: 'Absolutely! Yoga is for everyone. Start with beginner-level poses and gradually increase difficulty.',
        },
    ];

    // FAQ toggle logic
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = index => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero-sectionn">
        <div className="hero-content">
          <h1>
            <span className="highlight">Yoga & Meditation</span> 
          </h1>
          <p>
          Discover inner peace and physical wellness through our transformative yoga and meditation practices. Our expert-guided sessions help you balance mind, body, and spirit while reducing stress and enhancing overall wellbeing.
          </p>
          <div className="buttons">
            <button className="start-btn">Start Preparing</button>
            {/* <button className="explore-btn">Explore Tips</button> */}
          </div>
        </div>
      </section>

      {/* Why Practice Section */}
      <div className="interview-section">
        <div className="interview-content">
          <div className="text-section">
            <h2 className="title">Why Yoga and Meditation Needed?</h2>
            <p className="paragraph">
            In today's fast-paced world, yoga and meditation serve as essential anchors for our physical and mental wellbeing. These ancient practices offer a sanctuary from the constant digital stimulation and workplace pressures that characterize modern life.
            </p>
            <p className="paragraph">
       Regular yoga practice strengthens the body, improves flexibility, and enhances posture while reducing risk of injury. Meanwhile, meditation cultivates mindfulness, reduces anxiety, and improves focus and emotional regulation. Together, they create a powerful synergy that promotes holistic health.
            </p>
            <p className="paragraph">
              Scientific research increasingly validates these benefits, with studies showing yoga and meditation can lower blood pressure, improve sleep quality, boost immune function, and even alter brain structure in positive ways. Whether you're seeking physical fitness, stress management, or spiritual growth, these practices offer accessible pathways to transformation.
            </p>
          </div>
          <div className="image-section">
            <img
              src="https://readdy.ai/api/search-image?query=peaceful%20yoga%20meditation%20pose%20in%20natural%20setting%2C%20woman%20in%20lotus%20position%2C%20serene%20expression%2C%20soft%20morning%20light%20filtering%20through%20trees%2C%20calm%20water%20nearby%2C%20muted%20earth%20tones%2C%20professional%20photography%2C%20high%20resolution&width=600&height=800&seq=2&orientation=portrait"
              alt="Interview Preparation"
              className="interview-image"
            />
          </div>
        </div>
      </div>
        <div className="offerings-container">
      <h2 className="offerings-title">Our Yoga & Meditation Offerings</h2>
      <div className="cards-wrapper">
        {offerings.map((item, index) => (
          <div className="card" key={index}>
            <div className="icon-wrapper">{item.icon}</div>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
     <div className="progress-container">
      <h2>Track Your Progress</h2>
      <div className="progress-content">
        {/* Wellness Journey Section */}
        <div className="wellness-journey">
          <h3>Your Wellness Journey</h3>
          <div className="circles">
            {progressData.map((item, index) => (
              <div className="circle-wrapper" key={index}>
                <svg className="progress-circle" width="80" height="80">
                  <circle cx="40" cy="40" r="35" stroke="#eee" strokeWidth="8" fill="none" />
                  <circle
                    cx="40"
                    cy="40"
                    r="35"
                    stroke="#001F61"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={220}
                    strokeDashoffset={220 - (220 * item.percent) / 100}
                    strokeLinecap="round"
                  />
                  <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fontSize="16" fill="#001F61">
                    {item.percent}%
                  </text>
                </svg>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Goals Checklist Section */}
        <div className="goals-checklist">
          <h3>Weekly Goals Checklist</h3>
          <ul>
            {goalsChecklist.map((goal, index) => (
              <li key={index}>
                <input type="checkbox" checked={checkedItems.includes(index)} readOnly />
                <span>{goal}</span>
              </li>
            ))}
          </ul>
          <button className="update-button">Update Your Progress</button>
        </div>
      </div>
    </div>
      <div className="experiences-container">
      <h2 className="experiences-title">Student Experiences</h2>
      <div className="testimonial-grid">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <img src={t.image} alt={t.name} className="profile-img" />
            <h3 className="student-name">{t.name}</h3>
            <p className="student-title">{t.title}</p>
            <div className="stars">
              {[...Array(5)].map((_, idx) => (
                <FaStar key={idx} color="#FF7500" />
              ))}
            </div>
            <p className="testimonial-text">“{t.text}”</p>
          </div>
        ))}
      </div>
    </div>
     <div className="featured-videos">
      <h2>Featured Videos</h2>
      <div className="video-cards">
        {videos.map((video, index) => (
          <div className="video-card" key={index}>
            <div className="thumbnail">
              <img src={video.thumbnail} alt={video.title} />
              <a href={video.link} className="play-button" target="_blank" rel="noopener noreferrer">
                <FaPlay />
              </a>
              <span className="duration">{video.duration}</span>
            </div>
            <div className="video-info">
              <h4>{video.title}</h4>
              <p>{video.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all-btn">View All Videos</button>
    </div>
     <div className="faq-container">
                <h2 className="faq-title">Frequently Asked Questions</h2>
                {faqs.map((faq, index) => (
                    <div
                        className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                        key={index}
                    >
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            <span>{faq.question}</span>
                            <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
                        </div>
                        <div className="faq-answer">
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
             <div className="wellness-container">
            <h2 className="wellness-heading">Begin Your Wellness Journey Today</h2>
            <p className="wellness-description">
                Transform your mind and body through our expert-guided yoga and meditation practices.
                Join our community and discover the profound benefits of these ancient traditions.
            </p>
            <div className="wellness-buttons">
                <button className="primary-btn">Start Your Free Trial</button>
                <button className="secondary-btn">View Class Schedule</button>
            </div>
        </div>
    </div>  
  );
}
