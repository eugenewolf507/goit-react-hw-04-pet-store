import React, { Component } from 'react';
import petsList from '../../db/pets.json';
import styles from './PetPage.module.css';

const getIdFromProps = props => props.match.params.id;

class PetPage extends Component {
  state = {
    petId: getIdFromProps(this.props),
    pet: {},
  };

  componentDidMount() {
    const pet = petsList.find(singlePet => singlePet.id === this.state.petId);
    console.log(pet);
    this.setState({ pet });
  }

  onGoBack = () => {
    console.log(this.props.history);
    this.props.history.push('/pets');
  };

  render() {
    const { pet } = this.state;
    return (
      <div className={styles.wrapper}>
        <button type="button" onClick={this.onGoBack} className={styles.button}>
          &#x21e6; Return
        </button>
        <h1>All about {pet.name}</h1>
        <div className={styles.horizontalDiv}>
          <img src={pet.image} alt={pet.description} className={styles.image} />

          <div className={styles.shortInfo}>
            <p>
              <span className={styles.specifications}>Age:</span> {pet.age}
            </p>
            <p>
              <span className={styles.specifications}>Gender:</span>{' '}
              {pet.gender}
            </p>
            <p>
              <span className={styles.specifications}>Color:</span> {pet.color}
            </p>
            <p>
              <span className={styles.specifications}>Breed:</span> {pet.breed}
            </p>
          </div>
        </div>

        <p className={styles.description}>{pet.description}</p>
      </div>
    );
  }
}

export default PetPage;
