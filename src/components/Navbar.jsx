import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>ShipSmartly</div>
      <div className={`${styles.menuIcon} ${menuOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <ul className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
        <Link to="/" onClick={closeMenu}>
          <li className={styles.menuItem}>Home</li>
        </Link>
        <Link to="/About" onClick={closeMenu}>
          <li className={styles.menuItem}>About</li>
        </Link>
        <Link to="/Track" onClick={closeMenu}>
          <li className={styles.menuItem}>Track</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
