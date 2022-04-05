import * as React from 'react';
import {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Switch from "@material-ui/core/Switch";
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

export default function Wallet1() {
  const [checked, setChecked] = useState(false)
  const [address, setAddress] = useState("")
  const handleChange = () => {
    setChecked(!checked)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(address)
  }

  useEffect(() => {
    setAddress('1131sdlkfjaoalwefkawehf2893h49uhefokj')
  })

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="p" gutterBottom>Copy & paste me into real Coinbase.com</Typography>
          <Tooltip title="Copy to Clipboard">
            <Button varient="outlined" onClick={() => handleCopy()}>
              Address: {address ? address : 'loading...'}
            </Button>
          </Tooltip>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* <Switch checked={checked} onChange={handleChange} name="checked" /> */}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}