import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
        <li className={styles.menuItem}>Home </li>
        <li className={styles.menuItem}>About </li>
        <li className={styles.menuItem}>Track </li>
      </ul>
    </nav>
  );
};

export default Navbar;
