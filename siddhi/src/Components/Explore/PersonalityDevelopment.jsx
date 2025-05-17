import React from 'react';
import './PersonalityDevelopment.css'; 


const faqs = [
  {
    question: 'How long does the program last?',
    answer:
      'Our core program spans 8 weeks, divided into four stages. However, personality development is an ongoing journey, and we offer continued support and resources even after the formal program ends.',
  },
  {
    question: 'Is this program suitable for all students?',
    answer:
      'Yes, our program is designed for students from all academic backgrounds and levels. Whether you’re in high school, undergraduate, or postgraduate studies, the skills we teach are universally beneficial.',
  },
  {
    question: 'How much time commitment is required per week?',
    answer:
      'We recommend dedicating 3–5 hours per week to get the most out of the program. This includes attending workshops, completing exercises, and practicing new skills in real-life situations.',
  },
  {
    question: 'Will I receive a certificate upon completion?',
    answer:
      'Yes, students who complete the program receive a verified certificate that can be added to your resume and LinkedIn profile. Many employers recognize the value of these soft skills.',
  },
  {
    question: 'Can I join if I’m extremely introverted?',
    answer:
      'Absolutely! Our program is especially beneficial for introverted students. We create a supportive environment where you can gradually build confidence at your own pace, with personalized guidance.',
  },
];


const roadmapStages = [
  {
    title: 'Stage 1: Self-Discovery',
    description:
      'Begin by understanding your strengths, weaknesses, values, and personality traits through assessments and reflection exercises.',
    tag: 'Currently Active',
    tagType: 'active',
  },
  {
    title: 'Stage 2: Foundation Building',
    description:
      'Develop core communication skills, emotional intelligence, and basic time management techniques through structured exercises.',
    tag: 'Upcoming',
    tagType: 'upcoming',
  },
  {
    title: 'Stage 3: Skill Enhancement',
    description:
      'Focus on specific areas like public speaking, leadership, and advanced communication through workshops and practical applications.',
    tag: 'Upcoming',
    tagType: 'upcoming',
  },
  {
    title: 'Stage 4: Real-World Application',
    description:
      'Apply your skills in real-world scenarios through internships, projects, and community initiatives to solidify your development.',
    tag: 'Upcoming',
    tagType: 'upcoming',
  },
];

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            <span className="highlight">Personality Development</span> for Students
          </h1>
          <p>
            Unlock your potential and develop essential life skills that will help you
            succeed academically, professionally, and personally.
          </p>
          <div className="buttons">
            <button className="start-btn">Start Your Journey</button>
            <button className="explore-btn">Explore Programs</button>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="why-section">
        <div className="why-content">
          <div className="why-text">
            <h2>Why Personality Development Matters</h2>
            <p>
              In today’s competitive world, academic excellence alone is not enough.
              Employers and universities are increasingly looking for well-rounded
              individuals with strong soft skills and emotional intelligence.
            </p>
            <p>
              Our comprehensive personality development program is designed for students
              to build confidence, improve communication, develop leadership qualities,
              and enhance overall personal effectiveness.
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
      <section className="development-section">
        <h2>Key Areas of Development</h2>
        <p className="subheading">
          Our comprehensive approach focuses on six essential aspects of personality development that <br />
          will transform you into a confident and capable individual.
        </p>
        <div className="cards-container">
          <div className="card">
            <div className="icon-circle">💬</div>
            <h3>Communication Skills</h3>
            <p>Learn to express yourself clearly and confidently in both written and verbal forms. Develop active listening skills and effective presentation techniques.</p>
            <ul>
              <li>✔ Verbal & non-verbal communication</li>
              <li>✔ Active listening techniques</li>
              <li>✔ Persuasive speaking & writing</li>
            </ul>
          </div>

          <div className="card">
            <div className="icon-circle">👥</div>
            <h3>Leadership Qualities</h3>
            <p>Develop the ability to inspire and influence others. Learn decision-making skills, team management, and how to lead by example.</p>
            <ul>
              <li>✔ Team building & collaboration</li>
              <li>✔ Conflict resolution strategies</li>
              <li>✔ Ethical decision-making</li>
            </ul>
          </div>

          <div className="card">
            <div className="icon-circle">⏰</div>
            <h3>Time Management</h3>
            <p>Master the art of prioritizing tasks, setting goals, and creating effective schedules to minimize procrastination and stress.</p>
            <ul>
              <li>✔ Prioritization techniques</li>
              <li>✔ Goal setting & planning</li>
              <li>✔ Productivity optimization</li>
            </ul>
          </div>

          <div className="card">
            <div className="icon-circle">🧠</div>
            <h3>Emotional Intelligence</h3>
            <p>Develop self-awareness, empathy, and the ability to manage emotions effectively in various situations and relationships.</p>
            <ul>
              <li>✔ Self-awareness & regulation</li>
              <li>✔ Empathy development</li>
              <li>✔ Relationship management</li>
            </ul>
          </div>

          <div className="card">
            <div className="icon-circle">💪</div>
            <h3>Self-Confidence</h3>
            <p>Build genuine self-esteem and overcome self-doubt. Learn to project confidence in interviews, presentations, and social situations.</p>
            <ul>
              <li>✔ Positive self-talk techniques</li>
              <li>✔ Overcoming imposter syndrome</li>
              <li>✔ Body language mastery</li>
            </ul>
          </div>

          <div className="card">
            <div className="icon-circle">🎤</div>
            <h3>Public Speaking</h3>
            <p>Conquer stage fright and learn to deliver compelling presentations. Master the art of engaging audiences and communicating ideas effectively.</p>
            <ul>
              <li>✔ Speech structure & delivery</li>
              <li>✔ Audience engagement tactics</li>
              <li>✔ Overcoming speech anxiety</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <div className="progress-section">
        <div className="progress-left">
          <h2>Track Your Progress</h2>
          <p>
            Our interactive tools help you monitor your development journey. Set goals,
            track achievements, and celebrate your growth along the way.
          </p>

          <div className="skill">
            <span>Communication Skills</span>
            <div className="bar">
              <div className="fill" style={{ width: '64%' }}></div>
            </div>
            <span className="percent">64%</span>
          </div>

          <div className="skill">
            <span>Leadership Qualities</span>
            <div className="bar">
              <div className="fill" style={{ width: '48%' }}></div>
            </div>
            <span className="percent">48%</span>
          </div>

          <div className="skill">
            <span>Emotional Intelligence</span>
            <div className="bar">
              <div className="fill" style={{ width: '72%' }}></div>
            </div>
            <span className="percent">72%</span>
          </div>

          <div className="skill">
            <span>Public Speaking</span>
            <div className="bar">
              <div className="fill" style={{ width: '35%' }}></div>
            </div>
            <span className="percent">35%</span>
          </div> <br /><br />

          <button className="report-btn">View Detailed Report</button>
        </div>

        <div className="progress-right">
          <div className="checklist-box">
            <h3>Weekly Goals Checklist</h3>
            <ul>
              <li><input type="checkbox" defaultChecked /> Practice public speaking for 5 minutes daily</li>
              <li><input type="checkbox" defaultChecked /> Read one chapter of “How to Win Friends and Influence People”</li>
              <li><input type="checkbox" /> Participate actively in group discussion</li>
              <li><input type="checkbox" /> Practice active listening in conversations</li>
              <li><input type="checkbox" /> Maintain a daily journal for self-reflection</li>
              <li><input type="checkbox" /> Volunteer to lead a team project</li>
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
      </div>

      {/* Roadmap Timeline */}
      <div className="roadmap-container">
        <h2>Your Development Roadmap</h2>
        <p className="roadmap-subtitle">
          Follow our structured approach to systematically develop your personality and soft skills. Each stage builds upon the previous one.
        </p>

        <div className="timeline">
          {roadmapStages.map((stage, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot" />
              <div className="timeline-line" />
              <div className="timeline-content">
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
                <div className={`tag ${stage.tagType}`}>{stage.tag}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">
          Find answers to common questions about our personality development program.
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-box">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
