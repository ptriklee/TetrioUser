import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App () {
  const [playerCount, setPlayerCount] = useState(0);

  useEffect(() => {
    axios.get('/general')
    .then(response => {
      console.log(response)
      setPlayerCount(response.data.data.usercount)
    })
    .catch(err => {
      console.log(err)
    }), [null]
  });

    //   const timer = window.setInterval(() => {
    //     setPlayerCount(prevTime => prevTime + 1000);
    //   }, 1000);
    //   return () => {
    //     window.clearInterval(timer);
    //   };
    // })

  return (
    <div>
    <h1>Hello, World!</h1>
    <div>{playerCount}</div>
    <button style={{color: 'blue', padding: '8px 8px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '8px'}}>View Player Information</button>
    </div>
  )
}

export default App;
