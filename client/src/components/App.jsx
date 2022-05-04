import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';


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
    <Button variant="contained">Find Tetr.io User</Button>
    <TextField label="Text Here" size="medium" margin="normal" />
    <Alert severity="info">This is an info alert — check it out!</Alert>
    <Alert severity="success">This is a success alert — check it out!</Alert>
    </div>
  )
}

export default App;
