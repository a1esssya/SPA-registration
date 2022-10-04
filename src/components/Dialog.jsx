import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { closeDialogAction } from '../actions/isDialogOpen';

export default function DraggableDialog() {
  const dispatch = useDispatch();
  const isDialogOpen = useSelector((store) => store.isDialogOpen);
  const handleClose = () => {
    dispatch(closeDialogAction());
    window.location.reload(false);
  };
  const userInfo = useSelector((store) => store.userInfo);
  return (
    <Dialog
      open={isDialogOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        style: {
          backgroundColor: '#DDA0DD',
        },
      }}
    >
      <DialogTitle
        id="alert-dialog-title"
        sx={{
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          textDecoration: 'none',
          color: 'info.main',
        }}
      >
        Your information
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {userInfo?.map((e) => (
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'monospace',
                textDecoration: 'none',
                color: 'secondary',
              }}
            >
              {e.name}: {e.value}
            </Typography>
          ))}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          color="info"
          sx={{ width: '100%' }}
          variant="outlined"
          onClick={handleClose}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
