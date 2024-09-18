import { Theme } from './Theme.enum';

export type ThemeContextType = {
  theme: Theme;
  setTheme: (Theme: Theme) => void;
}