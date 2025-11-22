/**
 * Color definitions for light and dark themes
 * @file colors.ts
 */

export type ThemeType = 'light' | 'dark';

export const commonColors = {
  primary: '#F9A130',
  success: '#34C759',
  error: '#FF3B30',
  warning: '#FF9500',
  info: '#5AC8FA',
};

export const Colors = {
  light: {
    background: '#FFFFFF',
    surface: '#F2F2F7',
    text: '#000000',
    textSecondary: '#3C3C43',
    border: '#C6C6C8',
    ...commonColors,
  },
  dark: {
    background: '#000000',
    surface: '#1C1C1E',
    text: '#FFFFFF',
    textSecondary: '#EBEBF5',
    border: '#38383A',
    ...commonColors,
  },
};

export default Colors;

