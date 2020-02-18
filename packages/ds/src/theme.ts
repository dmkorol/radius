export const fonts = {
  body: '"Helvetica Neue", Roboto, sans-serif',
  heading: '"Roboto", sans-serif',
  monospace: 'Menlo, monospace',
};

export const fontSizes = [
  '3rem',
  '2.5rem',
  '2rem',
  '1.75rem',
  '1.5rem',
  '1.25rem',
  '1.125rem',
  '1rem',
  '0.75rem',
  '0.625rem',
];

export const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
};

export const lineHeights = {
  solid: 1,
  title: 1.25,
  copy: 1.5,
};

export const letterSpacings = {
  default: 'normal',
  tracked: '0.04em',
};

export const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

export default {
  light: {
    space,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacings,
    colors: {
      text: '#000',
      background: '#fff',
      primary: '#07c',
      secondary: '#30c',
      muted: '#f6f6f6',
    },
  },
  dark: {
    space,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacings,
    colors: {
      text: '#fff',
      background: '#060606',
      primary: '#3cf',
      secondary: '#e0f',
      muted: '#191919',
      highlight: '#29112c',
      gray: '#999',
      purple: '#c0f',
    },
  },
};
