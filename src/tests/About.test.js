import { screen } from '@testing-library/react';
import React from 'react';
import { About } from '../pages';
import renderWithRouter from './renderWithRouter';

describe('Test component About', () => {
  it('The page must contain the text About Pokédex', () => {
    renderWithRouter(<About />);
    const aboutTitle = screen.getByRole('heading', { name: 'About Pokédex' });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('The page must contain 2 paragraphs about Pokédex', () => {
    renderWithRouter(<About />);
    const pOne = (/simulates a Pokédex, a digital encyclopedia containing all Pokémons/i
    );
    const pTwo = (
      'One can filter Pokémons by type, and see more details for each one of them'
    );

    const paragraphOne = screen.getByText(pOne);
    const paragraphTwo = screen.getByText(pTwo);

    expect(paragraphOne).toBeInTheDocument();
    expect(paragraphTwo).toBeInTheDocument();
  });

  it('The page must contain the img of Pokédex', () => {
    renderWithRouter(<About />);
    const img = screen.getByRole('img', { name: 'Pokédex' });
    expect(img.src).toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
