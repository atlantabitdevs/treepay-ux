import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
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
      <Grid container center spacing={3} align="center" direction="column">

        <Grid item sx={{py: 3, px: 1}} ms={5} xs={1} >
          <Typography variant="p">
            We've sent this to you in a congestion
            controlled transaction. Import this data into your wallet by
            scanning the below QR code. We have also sent this data to
            your email on file.
          </Typography>
        </Grid>
        <Grid item sx={{py: 2, px: 1}} xs={10}>
          <Box component="div" sx={{ width: '50%', p: 2, boxShadow: '5' }}>
            { template ?  <QRCodeSVG size={300} value="template" /> : 'loading' }
          </Box>
        </Grid>

      </Grid>
    </React.Fragment>
  );
}