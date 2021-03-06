import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert';
import Snackbar, { SnackbarProps } from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import * as React from 'react';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Snackbar(props, ref){
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

interface CustomizedSnackbarProps {
  autoHideDuration?: number
  message: string
  isOpen: boolean
  handleClose: SnackbarProps['onClose']
  severity?: AlertColor
}

export default function CustomizedSnackbar (props: CustomizedSnackbarProps) {
  const { severity = 'success', isOpen, handleClose, message, autoHideDuration = 5000 } = props;
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={isOpen} autoHideDuration={autoHideDuration} onClose={handleClose}>
        <Alert onClose={handleClose as any} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}