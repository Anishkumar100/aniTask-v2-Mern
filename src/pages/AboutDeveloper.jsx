import React from "react";
import "./AboutDeveloper.css"; // Make sure this CSS file exists

export const AboutDeveloper = () => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <h2 className="about-heading">About the Developer</h2>
        <p className="about-description">
          I'm <span className="highlight">Anish Kumar</span>, a passionate <span className="highlight">MERN Stack Developer</span> and <span className="highlight">Co-founder of Spark Solutions</span>. I enjoy building scalable and interactive full-stack applications with a touch of modern design.
        </p>

        <div className="tech-icons">
          <span>⚛️ React</span>
          <span>🟢 Node.js</span>
          <span>🌐 Next.js</span>
          <span>🍃 MongoDB</span>
          <span>🔷 TypeScript</span>
          <span>⚙️ Laravel</span>
          <span>☁️ AWS</span>
          <span>🔵 Azure</span>
        </div>

        <div className="about-section">
          <h3>🚀 About Spark Solutions</h3>
          <ul>
            <li>Building modern portfolio websites</li>
            <li>Helping students with final year projects</li>
            <li>Providing internship & training programs</li>
            <li>Delivering custom web solutions for clients</li>
          </ul>
        </div>

        <div className="about-section">
          <h3>🧠 My Role as Co-founder</h3>
          <ul>
            <li>Leading full-stack development</li>
            <li>Mentoring interns & managing teams</li>
            <li>Handling deployments on AWS/Azure</li>
            <li>Collaborating directly with clients</li>
          </ul>
        </div>

        <div className="about-links">
          <a href="https://anishkumarversion1.netlify.app/" target="_blank" rel="noopener noreferrer">🌐 Visit Portfolio</a>
          <a href="https://github.com/anishkumar100" target="_blank" rel="noopener noreferrer">💻 GitHub: anishkumar100</a>
        </div>
      </div>
    </div>
  );
};
