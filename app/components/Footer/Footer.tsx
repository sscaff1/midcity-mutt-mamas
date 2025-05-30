import { NavLink } from 'react-router';
import cn from 'clsx';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div>
            <h3 className="footer-heading">Contact Us</h3>
            <p className="footer-text">New Orleans, LA</p>
            <p className="footer-text">Email: info@midcitymuttmamas.org</p>
          </div>
          <div>
            <h3 className="footer-heading">Follow Us</h3>
            <div className="space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                Facebook
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                Instagram
              </a>
            </div>
          </div>
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <div>
              <NavLink to="/volunteer" className={({ isActive }) => cn('footer-link block', { active: isActive })}>
                Volunteer
              </NavLink>
              <NavLink to="/foster" className={({ isActive }) => cn('footer-link block', { active: isActive })}>
                Foster
              </NavLink>
              <NavLink to="/resources" className={({ isActive }) => cn('footer-link block', { active: isActive })}>
                Resources
              </NavLink>
            </div>
          </div>
        </div>
        <div className="footer-copyright">© {new Date().getFullYear()} Mid City Mutt Mamas. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
