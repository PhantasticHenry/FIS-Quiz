import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";

function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.logo}>
        <NavLink to="/">
          {/* fix why logo isn't loading image */}
          <h1 className={styles.logo}>Logo Here</h1>
        </NavLink>
      </div>
      <ul className={styles.navMenu}>
        <li className={styles.links}>
          <NavLink to="/start-game">Start Game</NavLink>
        </li>
        <li className={styles.links}>
          <NavLink to="/high-scores">High Scores</NavLink>
        </li>
        <li className={styles.links}>
          <NavLink to="/questions">All Questions</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
