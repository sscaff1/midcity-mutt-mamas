import { NavLink, Link } from 'react-router';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaEtsy } from 'react-icons/fa';
import cn from 'clsx';
import './Layout.css';
import Footer from '../Footer/Footer';
import { ETSY_URL, FACEBOOK_URL, INSTAGRAM_URL } from '~/utils/constants';

interface LayoutProps {
  children?: ReactNode;
}

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/adopt', label: 'Adopt' },
  { to: '/foster', label: 'Foster' },
  { to: '/donate', label: 'Donate' },
  { to: '/meet-the-mamas', label: 'Meet the Mamas' },
  { to: '/contact-us', label: 'Contact Us' },
];

function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="layout-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="top-bar-content-left">
            <span>Contact us at:&nbsp;&nbsp;</span>
            <a href="mailto:midcitymutt@gmail.com">midcitymutt@gmail.com</a>
          </div>
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
      </div>

      <header className="header">
        <nav className="nav-container">
          <div className="nav-content">
            <Link to="/" className="logo-link">
              <img src="/logo.png" alt="Mid City Mutt Mamas Logo" className="logo" />
            </Link>

            {/* Hamburger menu button for mobile */}
            <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              <div className="hamburger-icon">
                <span className={cn('hamburger-line', { open: isMenuOpen })} />
                <span className={cn('hamburger-line', { open: isMenuOpen })} />
                <span className={cn('hamburger-line', { open: isMenuOpen })} />
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="desktop-nav">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={`nav-link-${to}`}
                  to={to}
                  className={({ isActive }) => cn('nav-link', { active: isActive })}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={cn('mobile-nav', { open: isMenuOpen, closed: !isMenuOpen })}>
            <div className="mobile-nav-content">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={`nav-link-${to}`}
                  to={to}
                  className={({ isActive }) => cn('nav-link', { active: isActive })}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
