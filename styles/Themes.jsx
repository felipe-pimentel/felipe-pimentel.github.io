export const lightTheme = {
  colors: {
    background: (a = 1) => `hsla(32, 38%, 91%, ${a})`,
    content: (a = 1) => `hsla(230, 7%, 16%, ${a})`,
    accent: (a = 1) => `hsla(30, 95%, 40%, ${a})`,
    // eu poderia usar apenas "white: 'white'", mas como os outros utilizam funções,
    // decidi manter o mesmo padrão para evitar possíveis confusões no futuro
    white: () => 'white',
  },
};

export const darkTheme = {
  colors: {
    background: (a = 1) => `hsla(213, 65%, 15%, ${a})`,
    content: (a = 1) => `hsla(0, 0%, 100%, ${a})`,
    accent: (a = 1) => `hsla(341, 56%, 49%, ${a})`,
    white: () => 'white',
  },
};
