import React from 'react';
import SocialLinks from '../Contact/SocialLinks';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__social">
          <SocialLinks variant="secondary" size="small" />
        </div>
        <p className="footer__copyright">© {currentYear} John Doe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
