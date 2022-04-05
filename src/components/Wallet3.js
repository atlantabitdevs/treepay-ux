import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import {useState, useEffect} from 'react';

export default function Exchange3() {
  const [totalAmount, setTotalAmount] = useState(0)
  useEffect(() => {
    setTotalAmount(10000)
  })
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {totalAmount}
          </Typography>
        </ListItem>
      </List>
      
    </React.Fragment>
  );
}