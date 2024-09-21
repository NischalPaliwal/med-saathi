import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { DialogsProvider, useDialogs } from '@toolpad/core/useDialogs';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CircularProgress from '@mui/material/CircularProgress';

function MyCustomDialog({ open, onClose }) {
    return (
      <Dialog fullWidth open={open} onClose={() => onClose()}>
        <DialogTitle>Permission</DialogTitle>
        <DialogContent>You will be redirected to UHI page of MHRC, GOI</DialogContent>
        <DialogActions>
          <Button onClick={() => <CircularProgress/>}>Want to proceed</Button>
        </DialogActions>
      </Dialog>
    );
  }

  function DemoContent() {
    const dialogs = useDialogs();
    return (
      <div>
        <Button
          onClick={async () => {
            // preview-start
            await dialogs.open(MyCustomDialog);
            // preview-end
          }}
          variant='contained'
          size='large'
        >
          Get information through UHI
        </Button>
      </div>
    );
  }

  MyCustomDialog.propTypes = {
    /**
     * A function to call when the dialog should be closed. If the dialog has a return
     * value, it should be passed as an argument to this function. You should use the promise
     * that is returned to show a loading state while the dialog is performing async actions
     * on close.
     * @param result The result to return from the dialog.
     * @returns A promise that resolves when the dialog can be fully closed.
     */
    onClose: PropTypes.func.isRequired,
    /**
     * Whether the dialog is open.
     */
    open: PropTypes.bool.isRequired,
  };
  

export default function Patients() {
    return (
        <div style={{
            position: 'relative',
            overflowY: 'scroll',
            height: '90vh',
        }}>
            <div>
                <img src='https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg?t=st=1726550544~exp=1726554144~hmac=f02a660d526a9f41618f7520ad0fb7201066640f10137ea5ff8045c1a3901335&w=996' height={200} width='100%'/>
                <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            paddingLeft: '30px',
            marginTop: '60px',
            alignItems: 'flex-start',
            color: 'white',
          }}>
            <h1>Patient Information</h1>
          </div>
            </div>
            <div style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
              <DialogsProvider>
              <DemoContent />
              </DialogsProvider>
            </div>
        </div>
    );
}