import React from 'react';
import { FaCheckCircle, FaPhoneAlt } from 'react-icons/fa';
import logo from './real.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Grid Layout */}
        <div style={styles.grid}>
          {/* Logo and Trusted By */}
          <div style={styles.column}>
            <img src={logo} alt="K-Flex" style={styles.logo} />
            <h5 style={styles.title}>Trusted By</h5>
            <ul style={styles.list}>
              {['Shopify', 'Daraz', 'OLX'].map((platform) => (
                <li key={platform} style={styles.listItem}>
                  <FaCheckCircle style={styles.icon} />
                  <span>{platform}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div style={styles.column}>
            <h5 style={styles.title}>Customer Care</h5>
            <div style={styles.contactBox}>
              <FaPhoneAlt style={styles.contactIcon} />
              <div>
                <p style={styles.contactText}>Any inquiries or problems?</p>
                <p style={styles.contactNumber}>0322 2301920</p>
              </div>
            </div>
            <ul style={styles.list}>
              {['Help Center', 'How to Buy', 'Bulk Purchase', 'Returns & Refunds', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" style={styles.link}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div style={styles.column}>
            <h5 style={styles.title}>Follow Us</h5>
            <div style={styles.socialContainer}>
              <a href="#" style={styles.social}>Facebook</a>
              <a href="https://instagram.com/kflex.pk" target="_blank" rel="noopener noreferrer" style={styles.social}>Instagram</a>
            </div>
            <p style={styles.dealText}>Get exclusive drops & offers!</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={styles.bottom}>
          <p>© {currentYear} <strong>K-Flex</strong> — Crafted with passion 🖤</p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(20px)',
    borderTop: '5px solid #feb500',
    fontFamily: 'Poppins, sans-serif',
    color: '#000',
    marginTop: '80px',
    padding: '40px 20px 15px',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '40px',
    marginBottom: '30px',
  },
  column: {
    padding: '10px',
  },
  logo: {
    height: '60px',
    marginBottom: '20px',
  },
  title: {
    color: '#feb500',
    fontWeight: '700',
    fontSize: '1.1rem',
    marginBottom: '20px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '0.95rem',
    marginBottom: '10px',
  },
  icon: {
    color: '#4CAF50',
    fontSize: '1rem',
  },
  contactBox: {
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(255,255,255,0.8)',
    border: '2px solid #feb500',
    borderRadius: '12px',
    padding: '15px',
    marginBottom: '20px',
  },
  contactIcon: {
    fontSize: '1.5rem',
    color: '#feb500',
    marginRight: '15px',
  },
  contactText: {
    fontSize: '0.95rem',
    color: '#333',
  },
  contactNumber: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#feb500',
  },
  link: {
    textDecoration: 'none',
    color: '#000',
    display: 'block',
    marginBottom: '10px',
    fontSize: '0.95rem',
    transition: 'all 0.3s',
  },
  socialContainer: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    marginTop: '10px',
    marginBottom: '20px',
  },
  social: {
    background: '#feb500',
    color: '#000',
    padding: '8px 18px',
    borderRadius: '30px',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '600',
    transition: 'all 0.3s',
  },
  dealText: {
    fontSize: '0.95rem',
    color: '#feb500',
    fontWeight: '600',
  },
  bottom: {
    textAlign: 'center',
    borderTop: '1px solid #feb500',
    paddingTop: '20px',
    fontSize: '0.85rem',
    color: '#555',
  },
};

export default Footer;
  
