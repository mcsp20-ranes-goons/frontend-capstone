import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProductDetails from '../src/components/ProductMain/ProductDetails/ProductDetails';


describe('ProductDetails', () => {
    it('renders h1 with ProductDetals', () => {
      render(<ProductDetails />);
  
      screen.debug();
  
      // check if App components renders headline
      expect(screen.getByText('ProductDetails')).toBeInTheDocument();
    });
  });