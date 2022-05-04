/* eslint-disable react/no-unescaped-entities */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Button, Row, Col, Container, Form, Alert } from 'react-bootstrap';

function App () {
  const [playerCount, setPlayerCount] = useState('');
  const [userName, setUserName] = useState('')

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

  const handleChange = (e) => {
    e.preventDefault();
    setUserName(e.target.value)
  }

    //   const timer = window.setInterval(() => {
    //     setPlayerCount(prevTime => prevTime + 1000);
    //   }, 1000);
    //   return () => {
    //     window.clearInterval(timer);
    //   };
    // })

  return (
    <div>
    <Container fluid>
    <Row className="justify-content-md-center">
    <Col md="auto"><h1>Tetri.no</h1></Col>
    </Row>
    <Row className="justify-content-md-center">
      {(!playerCount)
      ?
    <Col md="auto"><div>{playerCount}</div></Col>
      :
    <Col md="auto"><div>{playerCount} live players!</div></Col>
      }
    </Row>
    <Row>
    <Form>
    <Form.Label>Username</Form.Label>
    <Form.Control type="email" placeholder="Enter username" onChange={handleChange}/>
    <Form.Text>
      Username must be 3 to 16 characters long /
      Username may only contain letters, numbers, dashes, and underscores
    </Form.Text>
    </Form>
    <Button variant="success">Search</Button>
    </Row>
    <br />
    <Alert variant="danger">
    <Alert.Heading>No such User!</Alert.Heading>
    <p>
      Either you mistyped something, or the account no longer exists
    </p>
    </Alert>
    </Container>
    </div>
  )
}

export default App;
