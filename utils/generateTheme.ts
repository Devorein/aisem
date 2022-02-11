import { createTheme, darken, lighten, Theme as MaterialUITheme, ThemeOptions } from "@mui/material";
import { grey } from "@mui/material/colors";

const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;

function createShadow(...px: number[]) {
  return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(',');
} // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


const shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];

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
        },
        defaultProps: {
          disableRipple: true
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