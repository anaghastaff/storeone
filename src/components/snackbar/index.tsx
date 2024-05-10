import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function CustomizedSnackbars({open, message, handleClose}:{
    open: boolean,
    message: string,
    handleClose:()=>void
}) {
 
    const vertical = 'bottom'
    const horizontal = 'center'

    

  return (
    <div>
     
      <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}
      anchorOrigin={{vertical , horizontal}}
      key={'bottom' + 'center'}
      >
        <Alert
          onClose={handleClose}    
          severity={message === "Address updated Successfully" ? "success" : "warning"}
          variant="filled"
          sx={{ width: '100%', maxWidth:'500px' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
