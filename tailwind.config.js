module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontWeight: {
      light: 300,
      normal: 400,
      bold: 600,
      extrabold: 700,
    },
    colors: {
      primary: {
        50: '#F5FAFA',
        100: '#E0F1F1',
        200: '#C8E7E7',
        300: '#FBCA96',
        500: '#FCDBB8',
        600: '#4BAEAE',
        700: '#C67620',
        800: '#007979',
        900: '#004747',
      },
      pink: {
        50: '#FCF8FA',
        600: '#CC8DAD',
        700: '#BF7098',
        800: '#AD487B',
      },
      gray: {
        50: '#F9F9F9',
        100: '#EFEFEB',
        700: '#808B8B',
        800: '#616F6F',
        900: '#344242',
      },
      orange: '#F79428',
      yellow: '#F2C94C',
      black: '#443E38',
      white: '#FFFFFF',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.5rem',
      xl: '1.875rem',
      '2xl': '2.25rem',
    },
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('/img/Hero.png')",
      }),
    },
  },
  plugins: [],
};
