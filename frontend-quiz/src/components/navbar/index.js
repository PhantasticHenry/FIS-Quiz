import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../../images/logo.png";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <NavLink to="/">
          {/* fix why logo isn't loading image */}
          <img src={logo} alt="logo" className={styles.logo} />
        </NavLink>
      </div>
      <ul className={styles.navMenu}>
        <FaBars className={styles.bars} />
        <li className={styles.links}>
          <NavLink activeClassName={styles.selected} to="/start-quiz">
            Start Quiz
          </NavLink>
        </li>
        <li className={styles.links}>
          <NavLink activeClassName={styles.selected} to="/high-scores">
            High Scores
          </NavLink>
        </li>
        <li className={styles.links}>
          <NavLink activeClassName={styles.selected} to="/questions">
            All Questions
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

//need to test passing props through NavLink when i get back  ****
