import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState, useEffect } from 'react';
import {QRCodeSVG} from 'qrcode.react';

export default function Exchange2() {
  const [template, setTemplate] = useState('')
  useEffect(() => {
    setTemplate('thisisatest')
  })

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Save CTV Unlocking Info
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          { template ?  <QRCodeSVG size={300} value="template" /> : 'loading' }
        </Grid>
      </Grid>
    </React.Fragment>
  );
}