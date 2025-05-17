import React, { useState } from 'react';
import './SpokenEnglish.css';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import { FaCode, FaUserTie, FaComments, FaBuilding, FaSuitcase, FaChartLine } from 'react-icons/fa';
import { FaClipboardCheck, FaBookOpen, FaTasks, FaUserFriends, FaMedal } from 'react-icons/fa';

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

export default function InterviewPreparation() {
    const faqs = [
        {
            question: 'How long does it take to see improvement in spoken English?',
            answer: 'Most students notice significant improvement within 4-6 weeks of consistent practice. However, the exact timeline varies based on your starting proficiency level, the amount of time dedicated to practice, and your specific learning goals. Our structured approach ensures steady progress with measurable milestones along the way.'
        },
        {
            question: 'Do I need to have a certain level of English to start?',
            answer: 'Our program accommodates learners from intermediate to advanced levels. While basic English knowledge is required, we tailor our approach to your current proficiency. For absolute beginners, we recommend starting with our foundational English course before progressing to the specialized interview practice program.'
        },
        {
            question: 'How are the practice sessions conducted?',
            answer: 'Practice sessions are conducted through a combination of one-on-one coaching, small group discussions, and self-paced exercises. Our platform offers live video sessions with instructors, interactive practice tools, and AI-powered feedback on pronunciation and fluency. All sessions are scheduled at your convenience and can be accessed from any device.'
        },
        {
            question: 'Is the program industry-specific?',
            answer: 'Yes, we offer specialized tracks for various industries including technology, finance, healthcare, hospitality, and education. Each track includes industry-specific vocabulary, common interview questions, and relevant scenarios. You can choose the track that aligns with your career goals or opt for our general professional communication program.'
        },
        {
            question: 'What makes your approach different from other English programs?',
            answer: 'Our program stands out through its focus on practical application rather than theoretical knowledge. We emphasize real-world communication scenarios, provide personalized feedback from experienced instructors, and offer a structured development roadmap with clear milestones. Additionally, our advanced analytics track your progress across multiple dimensions of language proficiency, allowing for targeted improvement.'
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = index => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    const roadmap = [
        {
            icon: <FaClipboardCheck />,
            title: 'Assessment & Planning',
            status: 'Completed on May 10, 2025',
            highlight: 'Your assessment shows strong technical skills but opportunities to improve behavioral responses.',
            bgColor: '#f5f5f5',
        },
        {
            icon: <FaBookOpen />,
            title: 'Fundamentals Training',
            status: 'Completed on May 12, 2025',
            highlight: 'You’ve completed 6 fundamentals modules. Well done!',
            bgColor: '#f5f5f5',
        },
        {
            icon: <FaTasks />,
            title: 'Guided Practice',
            status: 'In Progress – 45% Complete',
            highlight: 'You’ve completed 10 practice sessions. Keep going!',
            bgColor: '#fff4e5',
        },
        {
            icon: <FaUserFriends />,
            title: 'Mock Interviews',
            status: 'Scheduled on May 20, 2025',
            highlight: '2 mock interviews scheduled with AI interviewer.',
            bgColor: '#f5f5f5',
        },
        {
            icon: <FaMedal />,
            title: 'Mastery & Confidence',
            status: 'Estimated completion: June 5, 2025',
            highlight: 'Your personalized roadmap to interview success.',
            bgColor: '#f5f5f5',
        },
    ];

    const categories = [
        {
            icon: <FaCode />,
            title: 'Technical Interviews',
            description: 'Master coding challenges, algorithm questions, and system design problems commonly asked in technical interviews.',
        },
        {
            icon: <FaUserTie />,
            title: 'Behavioral Questions',
            description: 'Prepare for questions about your past experiences, challenges you’ve overcome, and how you work with others.',
        },
        {
            icon: <FaComments />,
            title: 'Mock Interviews',
            description: 'Practice with AI-powered or peer-to-peer mock interviews that simulate real interview conditions and provide feedback.',
        },
        {
            icon: <FaBuilding />,
            title: 'Company-Specific',
            description: 'Prepare for interviews at specific companies with tailored questions and insights into their interview process.',
        },
        {
            icon: <FaSuitcase />,
            title: 'Case Studies',
            description: 'Practice solving business problems and case studies commonly used in consulting and business interviews.',
        },
        {
            icon: <FaChartLine />,
            title: 'Feedback & Analysis',
            description: 'Get detailed feedback on your interview performance and personalized recommendations for improvement.',
        },
    ];

    const chartData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
        datasets: [
            {
                label: 'Progress',
                data: [40, 55, 60, 75, 90],
                borderColor: '#fff',
                backgroundColor: '#fff',
                tension: 0.3,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
            x: { ticks: { color: '#fff' }, grid: { display: false } },
            y: { ticks: { color: '#fff' }, grid: { color: 'rgba(255,255,255,0.1)' } },
        },
    };

    return (
        <div className="app">
            {/* Hero Section */}
            <section className="hero-sectionn">
                <div className="hero-content">
                    <h1>
                        <span className="highlight">Master Your Interview Skills </span> with Spoken English Practice
                    </h1>
                    <p>
                       Elevate your communication skills and boost your confidence for job interviews, professional conversations, and everyday interactions. Our specialized program helps you speak fluently and naturally in any situation.
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
                        <h2 className="title">Why Spoken English Needed?</h2>
                        <p className="paragraph">
                           In today's globally connected world, proficient spoken English is no longer a luxury but a necessity. Whether you're interviewing for your dream job, networking with international colleagues, or simply traveling abroad, clear and confident English communication opens doors to countless opportunities.
                        </p>
                        <p className="paragraph">
                           Studies show that 85% of job success comes from having well-developed soft skills and communication abilities. Employers consistently rank verbal communication skills as the most desired quality in potential candidates, even above technical expertise in many cases.
                        </p>
                       
                    </div>
                    <div className="image-section">
                        <img
                            src="https://readdy.ai/api/search-image?query=A%20professional%20business%20setting%20with%20diverse%20people%20having%20a%20meeting%20or%20interview%2C%20showing%20confident%20communication.%20The%20image%20should%20have%20soft%20lighting%2C%20professional%20attire%2C%20and%20show%20positive%20body%20language.%20The%20scene%20depicts%20active%20listening%20and%20engaging%20conversation%20in%20a%20modern%20office%20environment.&width=600&height=500&seq=1&orientation=landscape"
                            alt="Interview Preparation"
                            className="interview-image"
                        />
                    </div>
                </div>
            </div>

            {/* Practice Categories Section */}
            <div className="categories-container">
                <h2 className="categories-title">Practice Categories</h2>
                <div className="card-grid">
                    {categories.map((cat, index) => (
                        <div className="category-card" key={index}>
                            <div className="icon-circle">{cat.icon}</div>
                            <div className="category-title">{cat.title}</div>
                            <div className="category-description">{cat.description}</div>
                            <a href="#" className="start-link">Start practicing →</a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Progress & Goals Section */}
            <div className="progress-container">
                <div className="progress-box">
                    <h3>Track Your Progress</h3>
                    <Line data={chartData} options={chartOptions} />
                    <div className="stats-grid">
                        <div><strong>Sessions Completed</strong><p>24</p></div>
                        <div><strong>Hours Practiced</strong><p>18.5</p></div>
                        <div><strong>Questions Mastered</strong><p>87</p></div>
                        <div><strong>Improvement Rate</strong><p>32%</p></div>
                    </div>
                </div>

                <div className="goal-box">
                    <h3>Weekly Goals Checklist</h3>
                    <ul className="checklist">
                        <li><input type="checkbox" defaultChecked /> Complete 3 interview simulation sessions <span>80%</span></li>
                        <li><input type="checkbox" defaultChecked /> Master 20 new industry-specific terms<span>100%</span></li>
                        <li><input type="checkbox" />Participate in 2 group discussion sessions<span>45%</span></li>
                        <li><input type="checkbox" /> Complete pronunciation exercises for difficult sounds <span>90%</span></li>
                        <li><input type="checkbox" /> Record and analyze 5 practice responses <span>25%</span></li>
                    </ul>
                    <button className="start-btn">Start Practice Session</button>
                </div>
            </div>

            {/* Roadmap Section
            <div className="roadmap-container">
                <h2 className="roadmap-title">Your Development Roadmap</h2>
                <div className="roadmap-list">
                    {roadmap.map((step, index) => (
                        <div className="roadmap-step" key={index}>
                            <div className="step-icon">{step.icon}</div>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p className="step-status">{step.status}</p>
                                <div className="step-highlight" style={{ backgroundColor: step.bgColor }}>
                                    {step.highlight}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}

            {/* FAQ Section */}
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
               <div className="english-cta">
      <h2 className="cta-heading">Ready to Transform Your English Communication?</h2>
      <p className="cta-subtext">
        Join thousands of successful professionals who have elevated their careers through our
        specialized spoken English program. Start your journey today!
      </p>
      <div className="cta-buttons">
        <button className="cta-primary">Start 7-Day Free Trial</button>
        <button className="cta-secondary">Schedule a Demo</button>
      </div>
    </div>
        </div>
    );
}
