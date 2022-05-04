import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Button, TextField, Alert, Grid} from '@mui/material';

function App () {
  const [playerCount, setPlayerCount] = useState(0);

  useEffect(() => {
    axios.get('/general')
    .then(response => {
      console.log(response.data.data.usercount)
      setPlayerCount(response.data.data.usercount)
    })
    .catch(err => {
      console.log(err)
    })
  }, []);

    //   const timer = window.setInterval(() => {
    //     setPlayerCount(prevTime => prevTime + 1000);
    //   }, 1000);
    //   return () => {
    //     window.clearInterval(timer);
    //   };
    // })

  return (
    <div>
    <h1>Tetri.no</h1>
    <div>{playerCount}</div>
    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }} background-color="linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)">
    <Grid item xs={3}>
    <TextField label="Text Here" color="primary" background-color="white" margin="normal" />
    <Button variant="contained">Find Tetr.io User</Button>
    </Grid>
    </Grid>
    <Alert severity="info" color="error">No such user! | Either you mistyped something, or the account no longer exists!</Alert>
    </div>
  )
}

export default App;
