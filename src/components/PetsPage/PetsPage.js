import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import petsList from '../../db/pets.json';
import styles from './PetsPage.module.css';

class PetsPage extends Component {
  render() {
    console.log(styles.aaa);
    return (
      <div className={styles.wrapper}>
        <h1>Available pets</h1>
        <ul className={styles.list}>
          {petsList.map(pet => (
            <li key={pet.id} className={styles.item}>
              <Link to={`/pets/${pet.id}`} className={styles.link}>
                <div className={styles.petCard}>
                  <img
                    src={pet.image}
                    alt={pet.description}
                    className={styles.image}
                  />
                  {pet.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PetsPage;
