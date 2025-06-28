import { NavLink } from 'react-router-dom';
import "./Footer.css"

import React from 'react'

export const Footer = () => {
  return (
    
<footer className="footer">
  <div className="footer-content">
    <p className="footer-logo">ANI-TASK-V2</p>
    
    <div className="footer-links">
      <NavLink to="/" className="footer-link">Home</NavLink>
      <NavLink to="/task-manager" className="footer-link">Task Manager</NavLink>
      <NavLink to="/about" className="footer-link">About Developer</NavLink>
      <NavLink to="/" className="footer-link">Contact</NavLink>
      <NavLink to="/" className="footer-link">Privacy Policy</NavLink>
    </div>
   
    <p className="footer-copy">&copy; {new Date().getFullYear()} Ani-Task. All rights reserved.</p>
  </div>
</footer>

  )
}
