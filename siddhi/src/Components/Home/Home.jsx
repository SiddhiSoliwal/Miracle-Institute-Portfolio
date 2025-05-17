import React, { useEffect } from 'react';
import './Home.css';
import HomeImage from './Homeimg.png';
import Career from './career.png';
import data from './data.png';
import Creative from './creative.png';
import Marketing from './marketing.png';
import personal from './personal.png';
import Digital from './digital.png';
import Businessman from './businessman.png';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs';
    document.body.appendChild(script);
  }, []);

  function scrollSlider(direction) {
    const slider = document.getElementById('slider');
    const scrollAmount = 220;
    slider.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }

  const cards = [
    {
      org: "Microsoft",
      title: "BIGDATA HADOOP",
      type: "Professional Certificate",
      video: "https://videos.pexels.com/video-files/854322/854322-sd_640_360_25fps.mp4",
    },
    {
      org: "Course",
      title: "CYBER SECURITY",
      type: "Professional Certificate",
      video: "https://videos.pexels.com/video-files/5495890/5495890-sd_360_640_30fps.mp4",
    },
    {
      org: "Course",
      title: "CERTIFICATION DATA SCIENCE",
      type: "Professional Certificate",
      video: "https://videos.pexels.com/video-files/28320042/12359940_640_360_24fps.mp4",
    },
    {
      org: "JAVA: SPRING BOOt",
      title: "Sid",
      type: "Course",
      video: "https://videos.pexels.com/video-files/2516160/2516160-sd_640_360_24fps.mp4",
    },
  ];
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);
  }, []);

  const testimonials = [
    {
      quote: "It is our best institute in MP  for getting professional knowladge in the IT feild ",
      source: "StackOverflow",
      stats: "37,076 responses collected",
      link: "View Web Development courses",
    },
    {
      quote: "I had a great time during Full strack course . i look forward to recommending this course to my friends",
      name: "Ankita",
      position: "Technical Co-Founder, CTO at Dimensional",
      link: "Full stack course",
    },
    {
      quote: "My overall expireance was very good , The faculties are very helpfull to me during training .Thankyou miracle IT career Academy",
      name: "Siddhi",
      position: "Partner Account Manager at Amazon Web Services",
      link: "View this Data science",
    },
    {
      quote: "Miracle IT Career Academy is an amazing institute for learning coading and preparing for your career ",
      name: "Amrita",
      position: "Head of Capability Development, North America at Publicis Sapient",
      link: "Java",
    },
  ];
  const plans = [
    {
      title: 'PERSONAL PLAN',
      subtitle: 'For you',
      audience: 'Individual',
      price: 'Starting at ₹850 per month',
      note: 'Billed monthly or annually. Cancel anytime.',
      button: 'Start subscription',
      features: [
        'Access to 12,000+ top courses',
        'Certification prep',
        'Goal-focused recommendations',
        'AI-powered coding exercises',
      ],
    },
    {
      title: 'TEAM PLAN',
      subtitle: 'For your team',
      audience: '2 to 20 people',
      price: '₹2,000 a month per user',
      note: 'Billed annually. Cancel anytime.',
      button: 'Start subscription',
      features: [
        'Access to 12,000+ top courses',
        'Certification prep',
        'Goal-focused recommendations',
        'AI-powered coding exercises',
        'Analytics and adoption reports',
      ],
    },
    {
      title: 'ENTERPRICE PLAINS',
      subtitle: 'For your whole organization',
      audience: 'More than 20 people',
      price: 'Contact sales for pricing',
      note: '',
      button: 'Request a demo',
      features: [
        'Access to 27,000+ top courses',
        'Certification prep',
        'Goal-focused recommendations',
        'AI-powered coding exercises',
        'Advanced analytics and insights',
        'Dedicated customer success team',
        'International course collection featuring 15 languages',
        'Customizable content',
        'Hands-on tech training with add-on',
        'Strategic implementation services with add-on',
      ],
    },
  ];
  return (
    <>
      <div className="page-container">
        {/* Hero Section */}
        <div className="hero-container">
          <div className="hero-text">
            <h1>Learn without limits</h1>
            <p>
              Start, switch, or advance your career with more than 10,000 courses,
              Professional Certificates, and degrees from world-class universities and companies.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Join For Free</button>
              <button className="btn-secondary">Try Courses for Business</button>
            </div>
          </div>
          <div className="hero-image">
            <img src={HomeImage} alt="Hero" />
          </div>
        </div>

        {/* Lottie Arrow */}
        <div className="lottie-arrow">
          <dotlottie-player
            src="https://lottie.host/488acfd3-6cd1-4b62-8e93-890fcb7bf405/mJ2c78YVPh.lottie"
            background="transparent"
            speed="1"
            style={{ width: '200px', height: '200px' }}
            loop
            autoPlay
          ></dotlottie-player>
        </div>

        {/* Career Section */}
        <div className="career-section">
          <div className="heading">
            <h1>Ready to reimagine your career?</h1>
            <p>Get the skills and real-world experience employers want with Career Accelerators.</p>
          </div>

          <div className="cards-containerr">
            {/* Card 1 */}
            <div className="cardd">
              <img src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Full Stack Developer" className="card-image" />
              <div className="cardd-content">
                <div className="cardd-title">Full Stack Web Developer</div>
                <div className="cardd-info">$127,005 average salary (US) • 16,500 open roles (US)</div>
                <div className="cardd-meta">
                  <span>⭐ 4.7</span>
                  <span>440K ratings</span>
                  <span>87.6 total hours</span>
                </div>
                <a href="#" target="_blank" rel="noopener noreferrer" className="card-link">
                  Explore Course →
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="cardd">
              <img src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Digital Marketer" className="card-image" />
              <div className="cardd-content">
                <div className="cardd-title">Digital Marketer</div>
                <div className="cardd-info">$61,126 average salary (US) • 36,600 open roles (US)</div>
                <div className="cardd-meta">
                  <span>⭐ 4.6</span>
                  <span>3.3K ratings</span>
                  <span>28.4 total hours</span>
                </div> <br />
                <a href="#" target="_blank" rel="noopener noreferrer" className="card-link">
                  Explore Course →
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="cardd">
              <img src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Data Scientist" className="card-image" />
              <div className="cardd-content">
                <div className="cardd-title">Data Scientist</div>
                <div className="cardd-info">$126,629 average salary (US) • 20,800 open roles (US)</div>
                <div className="cardd-meta">
                  <span>⭐ 4.6</span>
                  <span>215K ratings</span>
                  <span>46.8 total hours</span>
                </div> <br />
                <a href="#" rel="noopener noreferrer" className="card-link">
                  Explore Course →
                </a>
              </div>
            </div>
          </div>

          <a href="#" className="btnn">All Courses</a>
        </div> <br /><br />

        {/* Categories Slider */}
        <h2>Learn from popular categories in India</h2>
        <div className="slider-containerr">
          <div className="slider" id="slider">
            {[
              { title: 'DEVLOPMENT', learners: '10M', img: Career },
              { title: 'BUSINESS & ENTERPRENERSHIP', learners: '8.2M', img: Marketing },
              { title: 'DATA SCIENCE & IT', learners: '5.5M', img: data },
              { title: 'MARKETING', learners: '3.5M', img: Businessman },
              { title: 'DESIGN & CREATIVITY', learners: '3.3M', img: Creative },
              { title: 'HEALTH & LIFESTYLE', learners: '4.2M', img: Digital },
              { title: 'LANGUAGE & SOFTSKILLS', learners: '2.8M', img: personal },
            ].map((item, index) => (
              <div className="card" key={index}>
                <img src={item.img} alt={item.title} />
                <div className="card-title">{item.title}</div>
                <div className="card-sub">{item.learners} learners</div>
              </div>
            ))}
          </div>
          <div className="nav-button left" onClick={() => scrollSlider(-1)}>&#8592;</div>
          <div className="nav-button right" onClick={() => scrollSlider(1)}>&#8594;</div>
        </div>

        <h2 className="mt-6">All the skills you need in one place</h2> 
        <p className="subtitlee">
          From critical skills to technical topics, Miracal IT Academy supports your professional development.
        </p>
      </div>

      {/* Video Card Section */}
      <div className="sid-card-container">
        {cards.map((card, index) => (
          <div className="sid-card" key={index}>
           <video className="sid-video" autoPlay loop muted>
  <source src={card.video} type="video/mp4" />
  Your browser does not support the video tag.
</video>
            <div className="sid-content">
              <div className="sid-org">{card.org}</div>
              <div className="sid-title">{card.title}</div>
              <div className="sid-type">{card.type}</div>
            </div>
          </div>
        ))}
        <div className="sid-buttons">
          
          <button className="sid-btn">Explore →</button>
        </div>
      </div>
      <div className="testimonial-sectionn">
      <h2>See what others are achieving through learning</h2><br />
      <div className="testimonial-cards">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <p className="quote">“{item.quote}”</p>
            {item.name && (
              <div className="person">
                <div className="avatar" />
                <div className="info">
                  <strong>{item.name}</strong>
                  <div>{item.position}</div>
                </div>
              </div>
            )}
            {item.source && <div className="source">{item.source}</div>}
            {item.stats && <div className="stats">{item.stats}</div>}
            <a href="#" className="testimonial-link">{item.link} &rarr;</a>
          </div>
        ))}
      </div> 

      {/* Downward Lottie Arrow */}
      <div className="down-arrow">
        <dotlottie-player
          src="https://lottie.host/488acfd3-6cd1-4b62-8e93-890fcb7bf405/mJ2c78YVPh.lottie"
          background="transparent"
          speed="1"
          style={{ width: '200px', height: '200px'  }}
          loop
          autoplay
        ></dotlottie-player>
      </div>
    </div>
    <div className="pricing-section">
      <h1>Accelerate growth — for you or your organization</h1>
      <p className="subtitle">
        Reach goals faster with one of our plans or programs. Try one free today or contact sales to learn more.
      </p>
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div className="card" key={index}>
            <div className="card-header">
              <h3>{plan.title}</h3>
              <p className="plan-subtitle">{plan.subtitle}</p>
              <p className="plan-audience">👥 {plan.audience}</p>
            </div>
            <div className="card-body">
              <p className="price">{plan.price}</p>
              {plan.note && <p className="note">{plan.note}</p>}
              <button className="btn">{plan.button} →</button>
              <ul className="features">
                {plan.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>

    </>
  );
}
