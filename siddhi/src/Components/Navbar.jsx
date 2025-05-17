import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';
import { FaSearch } from 'react-icons/fa'; 

const exploreMenu = [
  {
    title: 'Development',
    items: [
      { name: 'Web Development', path: '/Explore/web-development' }, 
      { name: 'Python Programming', path: '/category/python-programming' },
      { name: 'Java & C++', path: '/category/java-cpp' },
      { name: 'App Development', path: '/category/app-development' },
      { name: 'Full Stack Development', path: '/category/full-stack-development' },

    ],
  },
  
  
  {
    title: 'Data Science and IT',
    items: [
      { name: 'Data Science Basics', path: '/category/data-science-basics' },
      { name: 'Machine Learning', path: '/category/machine-learning' },
      { name: 'SQL & Database', path: '/category/sql-database' },
      { name: ' Data Science  & Data Analytics', path: '/category/Data-Science' },
      { name: 'Big Data', path: '/category/Big-Data' },
    ],
  },
 
  {
    title: 'Cloud Security',
    items: [
      { name: 'IT Security and Ethical', path: '/category/IT-Security' },
      { name: 'Cloud Computer', path: '/category/Cloud-Computer' },
      { name: 'DevOps', path: '/category/DevOps' },
    
    ],
  },
  {
    title: 'JOB linked Programs',
    items: [
      
      { name: 'PGDSE', path: '/category/PGDSE' },
      { name: 'PGDIE', path: '/category/PGDIE' },
      { name: 'PGDDA', path: '/category/PGDDA' },
    ],
  },
  {
    title: 'Languages and Soft Skills',
    items: [
      { name: 'Yoga and Meditation', path: '/Explore/yoga-meditation' },
      { name: 'Spoken English', path: '/Explore/spoken-english' },
      { name: 'Personality Development', path: '/Explore/personality-development' },
     
     { name: 'Interview Preparation', path: '/Explore/interview-preparation ' }, 


      { name: 'Public Speaking', path: '/Explore/public-speaking' },
    ],
  },
];

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); 

  const handleSearch = () => {
    if (searchTerm.trim()) {
      
      const searchMapping = {
        python: '/category/python-programming',
        java: '/category/java-cpp',
        web: '/category/web-development',
      
      };
      const path = searchMapping[searchTerm.toLowerCase()];
      if (path) {
        navigate(path);
      } else {
        alert('No results found');
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <span className="miracle">Miracle</span><br />
          <span className="it-academy">IT Academy</span>
        </div>

        <div
          className="explore"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <span className="explore-text">Explore</span>
          {showDropdown && (
            <div className="dropdown">
              {exploreMenu.map((section) => (
                <div key={section.title} className="dropdown-section">
                  <div className="dropdown-title">{section.title}</div>
                  {section.items.map((item) => (
                    <Link to={item.path} key={item.name} className="dropdown-link">
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Find your next course by skill, topic, or instructor"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-icon" onClick={handleSearch}>
            <FaSearch />
          </button>
        </div>

        <NavLink to="/plans" className="nav-item">Plans & Pricing</NavLink>
        <NavLink to="/business" className="nav-item">Miracle Business</NavLink>
        <NavLink to="/teach" className="nav-item">Teach on Miracle</NavLink>

        {/* Use NavLink for login and signup to enable routing */}
        <NavLink to="/login" className="nav-item login">Log in</NavLink>
        <NavLink to="/signup" className="nav-item signup">Sign up</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
