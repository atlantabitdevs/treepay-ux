import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState, useEffect } from 'react';
import {QRCodeSVG} from 'qrcode.react';
import useClippy from 'use-clippy'
import Modal from '@material-ui/core/Modal';
import { QrReader } from 'react-qr-reader';

export default function Exchange2() {
  const [template, setTemplate] = useState('')
  const [clipboard, setClipboard] = useClippy('')
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handlePaste = (event) => {
    console.log('here')
    setTemplate(clipboard)
  }
  useEffect(() => {
    setTemplate(clipboard)
  }, [template])

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Scan CTV Unlocking Info
      </Typography>

      <Grid item xs={12} md={6}>
        <TextField placeholder={template ? template : "Unlocking Hash"} disabled title={"Unlocking Hash"} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Button onClick={handlePaste}>Paste</Button>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Button onClick={() => setOpen(true)}>Open Camera</Button>
        </Grid>
      </Grid>
      <Modal open={open} onClose={() => handleClose()}>
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              setTemplate(result?.text);
            }
            if (!!error) {
              console.info(error);
            }
          }}
          style={{ width: '80%' }}
        />
      </Modal>
    </React.Fragment>
  );
}