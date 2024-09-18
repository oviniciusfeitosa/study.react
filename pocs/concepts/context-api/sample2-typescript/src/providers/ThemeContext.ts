import { createContext, useContext } from 'react';

import { Theme } from './Theme.enum';
import { ThemeContextType } from './ThemeContext.type';

export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.Dark, 
  setTheme: theme => console.warn('no theme provider')
});

export const useTheme = () => useContext(ThemeContext);