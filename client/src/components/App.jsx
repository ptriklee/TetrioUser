/* eslint-disable react/no-unescaped-entities */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Button, Row, Col, Container, Form, Alert, Spinner, Modal, OverlayTrigger } from 'react-bootstrap';
import User from './User.jsx';

function App () {
  const [playerCount, setPlayerCount] = useState('');
  const [userName, setUserName] = useState('');
  const [notFound, setNotFound] = useState(false);
  const [reqNotMet, setReqNotMet] = useState(false);
  const [users, setUsers] = useState({});
  const [submit, setSubmit] = useState(false);

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
  };

  const handleSearch = (e, name) => {
    // console.log('name>>', name)
    e.preventDefault();
    const input = name.toLowerCase()
    if (input.length >= 3 && input.length <= 16) {
      axios.get(`/users/${input}`)
        .then(response => {
          console.log('response>>', response.data.data.user)
          setUsers(response.data.data.user)
          setSubmit(true)
        })
        .catch(err => {
          console.log('err>>', err)
          setNotFound(true)
        })
    }
    else {
      console.log('nope')
      setReqNotMet(true);
    }
  };

  return (
    <div>
    <Container className="justify-content" style={{marginTop: "10%"}}>
    <Row className="justify-content-md-center" style={{color: "blue"}}>
    <Col md="auto">
      <h1>
    <span style={{color: "#FF0000"}}>T</span>
    <span style={{color: "#66CC66"}}>e</span>
    <span style={{color: "#FF9966"}}>t</span>
    <span style={{color: "#FFCCCC"}}>r</span>
    <span style={{color: "#2428b3"}}>i</span>
    <span style={{color: "#FF9966"}}>.</span>
    <span style={{color: "#FF0066"}}>n</span>
    <span style={{color: "#cfcf19"}}>o</span>
      </h1>
    </Col>
    </Row>
    <Row className="justify-content-md-center">
      {(!playerCount)
      ?
    <Col md="auto" className="text-white"><div><Spinner animation="border" size="sm"/> calculating live players </div></Col>
      :
    <Col md="auto" className="text-white"><div>{playerCount} current players!</div></Col>
      }
    </Row>
    <Row>
    <Form style={{width: "100%"}}>
    <Form.Label className="text-white">Username</Form.Label>
    <Form.Control type="text" placeholder="Enter username" onChange={(e) => handleChange(e)}/>
    <Form.Text className="text-white" style={{fontSize: "11px"}}>
      Username must be 3 to 16 characters long /
      Username may only contain letters, numbers, dashes, and underscores
    </Form.Text>
    <br />
    <br />
    <Button style={{width: "25%"}} variant="success" type="submit" onClick={(e) => handleSearch(e, userName)}>Search</Button>
    </Form>
    </Row>
    <br />
    {(reqNotMet)
      ?
      <Alert variant="warning" onClose={() => setReqNotMet(false)} dismissible>
      <Alert.Heading>Uh Oh!</Alert.Heading>
      <p>
        Either you mistyped something, or the account no longer exists
      </p>
      </Alert>
      : null}
    {(notFound)
      ?
      <Alert variant="warning" onClose={() => setNotFound(false)} dismissible>
      <Alert.Heading>Uh Oh!</Alert.Heading>
      <p>
        Either you mistyped something, or the account no longer exists
      </p>
      </Alert>
      : null}
    {(submit)
      ?
      <Row>
      <User users={users}/>
      </Row>
      : null}
    </Container>
    </div>
  )
}


export default App;