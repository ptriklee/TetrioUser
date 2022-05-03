import React, {useState} from 'react';
import axios from 'axios';
// class App extends React.Component {
//   render() {
//       return <h1>Hello, World!</h1>
//   }
// }

function App () {
  const[playerCount, setPlayerCount] = useState

  const getGenStats = () => {
    axios.get('/general')
    .then(res => {
      console.log('data >>>', res.data.data)
    })
    .catch(err => {
      console.log('no good', err)
    })
  }

  return (
    <div>
    <h1>Hello, World!</h1>
    <button onClick={getGenStats} style={{color: 'blue', padding: '8px 8px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '8px'}}>View Player Information</button>
    </div>
  )
}


export default App;
