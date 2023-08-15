import React from 'react'

export type Theme = 'dark' | 'light';

export interface Data {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}