import React, { ReactNode } from 'react'

export type Theme = 'dark' | 'light';

export interface Data {
  theme?: Theme;
  setTheme?: React.Dispatch<React.SetStateAction<Theme>>;
}

export interface ContextProps {
  children: ReactNode;
}