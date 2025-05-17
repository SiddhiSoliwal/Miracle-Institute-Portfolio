import React, { useEffect, useState } from 'react';
import './Teach.css';
import firstImage from './first.png';
import secondImage from './second.png';
import thirdImage from './third.png';
export default function Teach() {
    const images = [firstImage, secondImage, thirdImage];

    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }, []);

  return (
    <section className="shree">
      <div className="teachh-text">
        <h1>
          Come teach <br /> with us
        </h1>
        <p>Become an instructor and change lives — including your own</p>
        <button>Get started</button>

        <div className="lottie-container">
          <dotlottie-player
            src="https://lottie.host/8f02dc7a-9ee5-4fcf-88c7-bb93e5d43bfb/fbF8x0xhxR.lottie"
            background="transparent"
            speed="1"
            style={{ width: '100px', height: '100px' }}
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>

      <div className="teachh-image">
        <img
          src="https://images.pexels.com/photos/7943996/pexels-photo-7943996.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Instructor"
        />
      </div>

      {/* Reasons Section */}
      <div className="reasons-wrapper">
        <br />
        
       
       
      
        <div className="reasons-title">So many reasons to start</div>
        <div className="reasons-content">
          <div className="reason-box">
            <img
              src="https://s.udemycdn.com/teaching/value-prop-teach-v3.jpg"
              className="reason-img"
              alt="Teach your way"
            />
            <h3 className="reason-heading">Teach your way</h3>
            <p className="reason-text">
              Publish the course you want, in the way you want, and always have control of your own content.
            </p>
          </div>
          <div className="reason-box">
            <img
              src="https://s.udemycdn.com/teaching/value-prop-inspire-v3.jpg"
              className="reason-img"
              alt="Inspire learners"
            />
            <h3 className="reason-heading">Inspire learners</h3>
            <p className="reason-text">
              Teach what you know and help learners explore their interests, gain new skills, and advance their careers.
            </p>
          </div>
          <div className="reason-box">
            <img
              src="https://s.udemycdn.com/teaching/value-prop-get-rewarded-v3.jpg"
              className="reason-img"
              alt="Get rewarded"
            />
            <h3 className="reason-heading">Get rewarded</h3>
            <p className="reason-text">
              Expand your professional network, build your expertise, and earn money on each paid enrollment.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section (Purple) */}
      <div className="siddhi">
        <div className="siddhi2"> 
          <div className="stat">
            <h2>73M</h2>
            <p>Students</p>
          </div>
          <div className="stat">
            <h2>75+</h2>
            <p>Languages</p>
          </div>
          <div className="stat">
            <h2>1B</h2>
            <p>Enrollments</p>
          </div>
          <div className="stat">
            <h2>180+</h2>
            <p>Countries</p>
          </div>
          <div className="stat">
            <h2>16,000+</h2>
            <p>Enterprise customers</p>
          </div>
        </div>
      </div><br /><br /><br /><br />

      {/* Image Carousel + Steps */}
      {/* <h1 className="how-to-begin">How To Begain</h1> */}

      <div className="teach-container">
      <div className="image-side">
        <img src={images[currentIndex]} alt="Teaching step" />
      </div>
      <div className="text-side">
        <h2>Steps to Teach Online</h2>
        <ul>
          <li>Choose your subject and plan lessons</li>
          <li>Record clear and quality video content</li>
          <li>Use platforms like YouTube or Udemy</li>
          <li>Create supporting material like PDFs or quizzes</li>
          <li>Promote on social media or your own website</li>
          <li>Interact with students and update regularly</li>
        </ul>
        {/* <button>Get started</button> */}
      </div>
    </div><br /><br />
    <hr className="custom-line" />
    <div class="instructor-section">
  <h2 class="instructor-title">Become an instructor today</h2>
  <p class="instructor-subtitle">
    Join one of the world’s Trusted IT Institute.
  </p>
  <button class="instructor-button">Get started</button>
</div><br /><br /><br /><br />
<hr className="custom-line" />
    </section>
  );
}
