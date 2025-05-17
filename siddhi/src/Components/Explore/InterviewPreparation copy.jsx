import React, { useState } from 'react';
import './InterviewPreparation.css';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import { FaCode, FaUserTie, FaComments, FaBuilding, FaSuitcase, FaChartLine } from 'react-icons/fa';
import { FaClipboardCheck, FaBookOpen, FaTasks, FaUserFriends, FaMedal } from 'react-icons/fa';


Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

export default function InterviewPreparation() {
    const faqs = [
        {
            question: 'How often should I practice interviews?',
            answer: 'For optimal results, we recommend practicing 2–3 times per week, with each session lasting 30–60 minutes.'
        },
        {
            question: 'How realistic are the mock interviews?',
            answer: 'Our mock interviews are designed to closely simulate real interview conditions. The AI-powered system ensures relevancy and accuracy.'
        },
        {
            question: 'Can I practice for specific companies?',
            answer: 'Yes! We offer company-specific practice modules for over 200 top employers across various industries.'
        },
        {
            question: 'How is feedback provided?',
            answer: 'Feedback is provided through multiple channels. For AI-powered practice, you receive immediate and detailed insights.'
        },
        {
            question: 'Is there a mobile app available?',
            answer: 'Yes, we offer mobile apps for both iOS and Android devices. The apps include all the features of the web version.'
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
                        <span className="highlight">Interview Preparation</span> for Students
                    </h1>
                    <p>
                        Get ready to shine in your interviews by mastering communication, confidence, and key strategies.
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
                        <h2 className="title">Why Interview Practice Needed?</h2>
                        <p className="paragraph">
                            Interviews are the gateway to your dream job, yet they remain one of the most challenging aspects of the job search process.
                            Studies show that 92% of adults experience interview anxiety, and 84% of candidates who practice regularly report higher confidence levels.
                        </p>
                        <p className="paragraph">
                            Regular practice helps you identify your weaknesses, refine your communication skills, and develop a structured approach to answering both technical and behavioral questions.
                            Our platform provides a risk-free environment to make mistakes and learn from them.
                        </p>
                        <p className="paragraph">
                            Remember, the difference between a good and great interview often comes down to preparation. The more you practice, the more natural and confident you’ll appear to potential employers.
                        </p>
                    </div>
                    <div className="image-section">
                        <img
                            src="https://images.pexels.com/photos/4344878/pexels-photo-4344878.jpeg?auto=compress&cs=tinysrgb&w=600"
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
                        <li><input type="checkbox" defaultChecked /> Complete 5 technical practice questions <span>80%</span></li>
                        <li><input type="checkbox" defaultChecked /> Participate in 2 mock interviews <span>100%</span></li>
                        <li><input type="checkbox" /> Review feedback from previous sessions <span>45%</span></li>
                        <li><input type="checkbox" /> Practice behavioral questions for 1 hour <span>90%</span></li>
                        <li><input type="checkbox" /> Research 3 target companies <span>25%</span></li>
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
        </div>
    );
}
