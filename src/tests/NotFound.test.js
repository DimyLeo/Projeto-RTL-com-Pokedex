import { screen } from '@testing-library/react';
import React from 'react';
import { NotFound } from '../pages';
import renderWithRouter from './renderWithRouter';

describe('Test component NotFound', () => {
  it('Heading with text Page requested not found 😭', () => {
    renderWithRouter(<NotFound />);
    const h2 = screen.getByRole('heading', { name: /Page requested not found/i });
    expect(h2).toBeInTheDocument();
  });

  it('Must contain the image', () => {
    renderWithRouter(<NotFound />);
    const img = screen.getByRole('img', { name: /crying because the page requested/i });
    expect(img.src).toContain('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
