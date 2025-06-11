import { NavLink } from 'react-router';
import { FaFacebookF, FaInstagram, FaEtsy } from 'react-icons/fa';
import cn from 'clsx';
import './Footer.css';
import { EMAIL_URL, ETSY_URL, FACEBOOK_URL, INSTAGRAM_URL } from '~/utils/constants';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div>
            <h3 className="footer-heading">Contact Us</h3>
            <p className="footer-text">New Orleans, LA</p>
            <p className="footer-text">Email: {EMAIL_URL}</p>
          </div>
          <div>
            <h3 className="footer-heading">Follow Us</h3>
            <div className="social-links">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <FaFacebookF className="social-icon" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <FaInstagram className="social-icon" />
              </a>
              <a href={ETSY_URL} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Etsy">
                <FaEtsy className="social-icon" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <div>
              <NavLink to="/adopt" className={({ isActive }) => cn('footer-link block', { active: isActive })}>
                Adopt
              </NavLink>
              <NavLink to="/foster" className={({ isActive }) => cn('footer-link block', { active: isActive })}>
                Foster
              </NavLink>
              <NavLink to="/contact-us" className={({ isActive }) => cn('footer-link block', { active: isActive })}>
                Contact Us
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
