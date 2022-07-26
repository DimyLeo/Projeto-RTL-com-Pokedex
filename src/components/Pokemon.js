import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { pokemonType } from '../types';

import './pokemon.css';

class Pokemon extends React.Component {
  render() {
    const { pokemon, showDetailsLink, isFavorite } = this.props;
    const { averageWeight, id, image, name, type } = pokemon;
    const { measurementUnit, value } = averageWeight;

    return (
      <div className="pokemon">
        <div className="div-img-pokemon">
        <p className="pokemon-name" data-testid="pokemon-name">{name}</p>
          <img src={ `${image}` } alt={ `${name} sprite` } />
          {isFavorite && (
            <img
              className="favorite-icon"
              src={ `/star-icon.svg` }
              alt={ `${name} is a favorite` }
            />
          )}
        </div>
        <div className="pokemon-overview">
          <p className="pokemons-infos" data-testid="pokemon-type">{`${type}`}</p>
          <p className="pokemons-infos" data-testid="pokemon-weight">
            Average weight: {value} {measurementUnit}
          </p>
          {showDetailsLink && <Link to={ `pokemons/${id}` }>More details</Link>}
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  pokemon: pokemonType.isRequired,
  showDetailsLink: PropTypes.bool,
};

Pokemon.defaultProps = {
  showDetailsLink: true,
};

export default Pokemon;
