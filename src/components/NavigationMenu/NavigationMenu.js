import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import AboutPage from '../AboutPage/AboutPage';
import HomePage from '../HomePage/HomePage';
import PetPage from '../PetPage/PetPage';
import PetsPage from '../PetsPage/PetsPage';
import styles from './NavigationMenu.module.css';

const NavigationMenu = () => (
  <div className={styles.wrapper}>
    <div className={styles.beforeMenu}>
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
      <div className={styles.circle3}></div>
    </div>
    <ul className={styles.list}>
      <li>
        <NavLink
          exact
          to="/"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pets"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Pets
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          About
        </NavLink>
      </li>
    </ul>
    <Switch>
      <Route path="/about" component={AboutPage} />
      <Route path="/pets/:id" component={PetPage} />
      <Route path="/pets" component={PetsPage} />
      <Route component={HomePage} />
    </Switch>
  </div>
);

export default NavigationMenu;
