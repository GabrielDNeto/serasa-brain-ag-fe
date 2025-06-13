export const theme = {
  colors: {
    primary: "#08AB7F",
    secondary: "#2ecc71",

    zinc: {
      50: "#FAFAFA",
      100: "#F4F4F5",
      200: "#E4E4E7",
      300: "#D4D4D8",
      400: "#A1A1AA",
      500: "#71717A",
      600: "#52525B",
      700: "#3F3F46",
      800: "#27272A",
      900: "#18181B",
      950: "#09090B",
    },
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "16px",
  },
  spacing: {
    sm: "8px",
    md: "16px",
    lg: "24px",
  },
};

export type ThemeType = typeof theme;
