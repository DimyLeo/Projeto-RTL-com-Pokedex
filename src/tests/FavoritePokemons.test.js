import { screen } from '@testing-library/react';
import React from 'react';
import { FavoritePokemons } from '../pages';
import renderWithRouter from './renderWithRouter';

describe('Test component Favorite Pokemons', () => {
  it('Mensage with text No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemons />);
    const favorite = screen.getByText('No favorite pokemon found');
    expect(favorite).toBeInTheDocument();
  });
});
