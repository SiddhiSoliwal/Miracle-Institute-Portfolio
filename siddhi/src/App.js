
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import Login from'./Components/Login/Login.jsx'; 
import Signup from './Components/Signup/Signup.jsx';
import Home from './Components/Home/Home.jsx'; 
import Teach from './Components/Teach/Teach.jsx';
import WebDevelopment from './Components/Explore/WebDevelopment.jsx';
import PersonalityDevelopment from './Components/Explore/PersonalityDevelopment.jsx';
import InterviewPreparation from './Components/Explore/InterviewPreparation.jsx';
import PublicSpeaking from './Components/Explore/PublicSpeaking.jsx';
import Yoga  from './Components/Explore/Yoga.jsx';
import SpokenEnglish from './Components/Explore/SpokenEnglish.jsx';
const DummyPage = ({ title }) => <div style={{ padding: '2rem' }}><h2>{title}</h2></div>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/plans" element={<DummyPage title="Plans & Pricing" />} />
        <Route path="/business" element={<DummyPage title="Miracle Business" />} />
        <Route path="/teach" element={<Teach />} />
              
        
        

     
        <Route path="/goal/launch-career" element={<DummyPage title="Launch a New Career" />} />
        <Route path="/goal/certification-prep" element={<DummyPage title="Certification Preparation" />} />

        {/* In-demand Careers */}
        <Route path="/career/full-stack" element={<DummyPage title="Full Stack Developer" />} />
        <Route path="/career/marketing" element={<DummyPage title="Digital Marketer" />} />
        <Route path="/career/data-scientist" element={<DummyPage title="Data Scientist" />} />
        <Route path="/career/cloud-engineer" element={<DummyPage title="Cloud Engineer" />} />
        <Route path="/career/gamedev" element={<DummyPage title="Game Developer" />} />
        <Route path="/career/pm" element={<DummyPage title="Project Manager" />} />
        <Route path="/career/all" element={<DummyPage title="All Career Accelerators" />} />

        {/* Development */}
        <Route path="/Explore/web-development" element={<WebDevelopment />} />

        <Route path="/category/python-programming" element={<DummyPage title="Python Programming" />} />
        <Route path="/category/java-cpp" element={<DummyPage title="Java & C++" />} />
        <Route path="/category/app-development" element={<DummyPage title="App Development" />} />
        <Route path="/category/full-stack-development" element={<DummyPage title="Full Stack Development" />} />

        {/* Business and Entrepreneurship */}
        <Route path="/category/setup-fundamentals" element={<DummyPage title="Set Up Fundamentals" />} />
        <Route path="/category/business-communication" element={<DummyPage title="Business Communication" />} />
        <Route path="/category/leadership-management" element={<DummyPage title="Leadership & Management" />} />
        <Route path="/category/finance-beginners" element={<DummyPage title="Finance for Beginners" />} />
        <Route path="/category/sales-crm" element={<DummyPage title="Sales and CRM" />} />

        {/* Data Science and IT */}
        <Route path="/category/data-science-basics" element={<DummyPage title="Data Science Basics" />} />
        <Route path="/category/machine-learning" element={<DummyPage title="Machine Learning" />} />
        <Route path="/category/sql-database" element={<DummyPage title="SQL & Database" />} />
        <Route path="/category/power-ai" element={<DummyPage title="Excellent Power AI" />} />
        <Route path="/category/cyber-security" element={<DummyPage title="Cyber Security" />} />

        {/* Marketing */}
        <Route path="/category/digital-marketing" element={<DummyPage title="Digital Marketing" />} />
        <Route path="/category/social-media-marketing" element={<DummyPage title="Social Media Marketing" />} />

        {/* Design and Creativity */}
        <Route path="/category/graphic-design" element={<DummyPage title="Graphic Design" />} />
        <Route path="/category/ui-ux-design" element={<DummyPage title="UI & UX Design" />} />
        <Route path="/category/animation-basics" element={<DummyPage title="Animation Basics" />} />
        <Route path="/category/canva-project" element={<DummyPage title="Canva Project" />} />
        
        {/* Health and Lifestyle */}
        <Route path="/Explore/yoga-meditation" element={<Yoga/>} />
        <Route path="/category/fitness-programs" element={<DummyPage title="Fitness Programs" />} />
        <Route path="/category/mental-wellness" element={<DummyPage title="Mental Wellness" />} />
        <Route path="/category/time-management" element={<DummyPage title="Time Management" />} />

        {/* Languages and Soft Skills */}
        <Route path="/Explore/spoken-english" element={<SpokenEnglish />} />
    <Route path="/Explore/personality-development" element={<PersonalityDevelopment />} />

        
   <Route path="/Explore/interview-preparation" element={<InterviewPreparation />} />



        <Route path="/Explore/public-speaking" element={<PublicSpeaking />} />

        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
