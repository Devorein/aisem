import { SxProps, useTheme } from '@mui/material';

export function useScrollbarStyling () {
  const theme = useTheme();
  return {
    '&::-webkit-scrollbar': {
      width: '10px'
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: theme.palette.color.dark
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.color.light
    }
  } as SxProps;
}