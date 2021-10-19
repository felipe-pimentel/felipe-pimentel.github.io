export const lightTheme = {
  colors: {
    background: (a = 1, l = 91, s = 38, h = 32) => `hsla(${h}, ${s}%, ${l}%, ${a})`,
    content: (a = 1, l = 16, s = 7, h = 230) => `hsla(${h}, ${s}%, ${l}%, ${a})`,
    accent: (a = 1, l = 40, s = 95, h = 30) => `hsla(${h}, ${s}%, ${l}%, ${a})`,
    // eu poderia usar apenas "white: 'white'", mas como os outros utilizam funções,
    // decidi manter o mesmo padrão para evitar possíveis confusões no futuro
    white: () => 'white',
  },
};

export const darkTheme = {
  colors: {
    background: (a = 1, l = 15, s = 65, h = 213) => `hsla(${h}, ${s}%, ${l}%, ${a})`,
    content: (a = 1, l = 100, s = 0, h = 0) => `hsla(${h}, ${s}%, ${l}%, ${a})`,
    accent: (a = 1, l = 49, s = 56, h = 341) => `hsla(${h}, ${s}%, ${l}%, ${a})`,
    white: () => 'white',
  },
};
