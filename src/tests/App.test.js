import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Test component App', () => {
  it('Link with text Home', () => {
    renderWithRouter(<App />);
    const link = screen.getByRole('link', { name: 'Home' });
    expect(link).toBeInTheDocument();
  });

  it('Link with text About', () => {
    renderWithRouter(<App />);
    const link = screen.getByRole('link', { name: 'About' });
    expect(link).toBeInTheDocument();
  });

  it('Link with text Favorite Pokémons', () => {
    renderWithRouter(<App />);
    const link = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(link).toBeInTheDocument();
  });

  it('Should render the Home page', () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'Home' });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/Projeto-RTL-com-Pokedex');

    const aboutTitle = screen.getByRole('heading',
      { name: 'Encountered pokémons' });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('Should render the About page', () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'About' });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');

    const aboutTitle = screen.getByRole('heading',
      { name: 'About Pokédex' });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('Should render the Favorite Pokemons page', () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');

    const aboutTitle = screen.getByRole('heading',
      { name: 'Favorite pokémons' });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('Should render the 404 page not found', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/textoAleatorio');

    const aboutTitle = screen.getByRole('heading',
      { name: 'Pokédex' });
    expect(aboutTitle).toBeInTheDocument();
  });
});
