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
      <div className={styles.logo}><img src="https://res.cloudinary.com/dvd8hlffl/image/upload//c_thumb,w_160,h_39,g_auto/v1692199519/Free_Sample_By_Wix-removebg-preview_bccqnv.png" alt="" /></div>
      <div className={`${styles.menuIcon} ${menuOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <ul className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
        <Link to="/#targetDiv" onClick={closeMenu}>
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
