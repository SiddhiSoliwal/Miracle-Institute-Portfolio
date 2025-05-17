// import React from 'react'
// import './ResumeBuilder.css'; // Import your CSS file
// export default function ResumeBuilder() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     education: '',
//     experience: '',
//     skills: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Resume Data:', formData);
//     alert('Resume submitted successfully!');
//   };

//     const templates = [
//   {
//     title: 'Modern Professional',
//     description: 'Clean and contemporary design perfect for tech and creative industries.',
//     image: 'https://i.pinimg.com/originals/fa/7b/89/fa7b89356255ea4cc39dc9efd8ac4ec6.jpg',
//   },
//   {
//     title: 'Executive Classic',
//     description: 'Traditional format ideal for corporate and management positions.',
//     image: 'https://th.bing.com/th/id/OIP.n5SeIXrgkBeobdqZ08VTTwHaJl?rs=1&pid=ImgDetMain',
//   },
//   {
//     title: 'Creative Impact',
//     description: 'Bold design for creative professionals and innovators.',
//     image: 'data:image/jpeg;base64,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',
//   },
// ];
//   return (  
//   <div className="hero-sectionnn">
//                 <div className="hero-content">
//                     <h1>
//                         <span className="highlight">Resume Building</span> for All
//                     </h1>
//                     <p>
//                         Resume building is essential for showcasing skills, experience, and achievements effectively. A well-crafted resume highlights strengths, making a strong impression on employers. It should be clear, concise, and tailored to the job role, with relevant keywords and structured formatting
//                     </p>
//                     <div className="buttons">
//                         <button className="start-btn">Start Preparing</button>
//                         {/* <button className="explore-btn">Explore Tips</button> */}
//                     </div>
//                 </div> <br />
//                  <div className="resume-container">
//       <h2 className="resume-heading">Professional Resume Templates</h2><br />
//       <div className="resume-grid">
//         {templates.map((template, index) => (
//           <div className="resume-card" key={index}>
//             <img src={template.image} alt={template.title} className="resume-image" />
//             <div className="resume-info">
//               <h3>{template.title}</h3>
//               <p>{template.description}</p>
//               <button className="resume-button">Use Template</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//      <div className="resume-container">
//       <h2>Resume Builder</h2>
//       <form className="resume-form" onSubmit={handleSubmit}>
//         <label>
//           Full Name:
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//         </label>

//         <label>
//           Email:
//           <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//         </label>

//         <label>
//           Phone:
//           <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
//         </label>

//         <label>
//           Education:
//           <textarea name="education" value={formData.education} onChange={handleChange} rows="3" />
//         </label>

//         <label>
//           Work Experience:
//           <textarea name="experience" value={formData.experience} onChange={handleChange} rows="3" />
//         </label>

//         <label>
//           Skills:
//           <textarea name="skills" value={formData.skills} onChange={handleChange} rows="3" />
//         </label>

//         <button type="submit">Submit Resume</button>
//       </form>
//     </div>
//             </div>
            
          
//   )
// }
import React from 'react'

export default function ResumeBuilder() {
  return (
    <div>
      <h1>gjhhiu8</h1>
    </div>
  )
}
