// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=880E4F&secondary.color=CE93D8

export const theme = {
  palette: {
    primary: {
      default: '#880e4f' as const,
      light: '#bc477b' as const,
      dark: '#560027' as const,
      text: '#ffffff' as const,
    } as const,
    secondary: {
      default: '#ce93d8' as const,
      light: '#ffc4ff' as const,
      dark: '#9c64a6' as const,
      text: '#000000' as const,
    } as const,
  } as const,
};
