import { createTheme, darken, lighten, Theme as MaterialUITheme, ThemeOptions } from "@mui/material";
import { grey } from "@mui/material/colors";
import shadows from "@mui/material/styles/shadows";

declare module '@emotion/react' {
  export interface Theme extends MaterialUITheme {}
}

interface Color {
  dark: string;
  base: string;
  light: string;
  opposite_dark: string;
  opposite_base: string;
  opposite_light: string;
};

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    type: "dark" | "light"
    color: Color
  }

  interface PaletteOptions {
    type: "dark" | "light"
    color: Color
  }
}

declare module "@mui/material/styles/createTheme" {
  interface PaletteOptions {
    color: Color
  }
}

export function generateTheme() {
  const { theme } = {theme: "dark"};
  const color: Color = {
    base: '',
    dark: '',
    light: '',
    opposite_base: '',
    opposite_dark: '',
    opposite_light: ''
  };
  const text: {
    primary: string;
    secondary: string;
  } = {
    primary: '',
    secondary: ''
  };

  let paletteType: "dark" | "light" = 'dark';

  switch (theme) {
    case 'dark': {
      color.base = darken(grey[800], 0.25);
      color.light = lighten(color.base, 0.05);
      color.dark = grey[900];
      color.opposite_light = lighten(grey[200], 0.5);
      color.opposite_dark = grey[300];
      color.opposite_base = grey[200];
      text.primary = grey[100];
      text.secondary = grey[200];
      paletteType = 'dark';
      break;
    }
    case 'light': {
      color.light = lighten(grey[200], 0.5);
      color.dark = grey[300];
      color.base = grey[200];
      color.opposite_light = grey[800];
      color.opposite_dark = grey[900];
      color.opposite_base = darken(grey[800], 0.25);
      text.primary = grey[900];
      text.secondary = grey[800];
      paletteType = 'light';
      break;
    }
  }

  const primaryMain = "rgba(0,255,117, 0.9)";

  const { light, base, dark } = color;

  const themeOptions: ThemeOptions = {
    palette: {
      color,
      type: paletteType,
      text: {
        primary: text.primary,
        secondary: text.secondary
      },
      background: {
        default: base
      },
      primary: {
        main: primaryMain
      },
    },
    
    typography: {
      fontFamily: 'Space Mono',
      fontSize: 14,
      button: {
        fontWeight: "bold"
      },
      h5: {
        fontWeight: 'bold',
        fontSize: '1.25em'
      },
      h6: {
        fontWeight: 'bold',
        fontSize: '1.15em'
      }
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            borderRadius: 5
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: base
          }
        }
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            '&$selected': {
              backgroundColor: light
            }
          },
          button: {
            '&:hover': {
              backgroundColor: dark
            }
          }
        }
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            padding: 0,
            marginRight: 5
          }
        }
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            fill: "inherit",
            color: "inherit",
          }
        },
        defaultProps: {
          disableRipple: true
        }
      },
      MuiSelect: {
        styleOverrides: {
          select: {
            paddingLeft: 5
          }
        }
      },
      MuiRadio: {
        styleOverrides: {
          root: {
            padding: 5
          }
        }
      },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            margin: 0,
            padding: 0,
          }
        }
      },
      MuiFormControlLabel: {
        styleOverrides: {
          root: {
            marginLeft: 0,
            marginRight: 0,
            margin: 0,
            padding: 5,
            backgroundColor: light
          }
        }
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            margin: 2.5,
            padding: 5
          }
        }
      },
      MuiAlert: {
        styleOverrides: {
          filledSuccess: {
            backgroundColor: "rgba(0,195,117)"
          }
        }
      },
      MuiFormControl: {
        styleOverrides: {
          root: {
            backgroundColor: light,
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            border: "none",
            boxShadow: shadows[2],
          },
          input: {
            padding: 10
          },
          notchedOutline: {
            border: "none"
          }
        }
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            paddingBottom: 5
          },
          root: {
            padding: 0,
            paddingLeft: 0
          }
        }
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontWeight: 'bolder',
            fontSize: '1em',
            backgroundColor: dark,
            padding: 5,
            margin: 0,
            marginBottom: 5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }
        }
      }
    }
  };

  return createTheme(themeOptions);
}