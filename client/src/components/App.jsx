/* eslint-disable react/no-unescaped-entities */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Button, Row, Col, Container, Form, Spinner, OverlayTrigger, Tooltip, Modal} from 'react-bootstrap';
import User from './User.jsx';
import Favorited from './Favorited.jsx';

function App () {
  const [playerCount, setPlayerCount] = useState(0);
  const [userName, setUserName] = useState('');
  const [notFound, setNotFound] = useState(false);
  const [reqNotMet, setReqNotMet] = useState(false);
  const [users, setUsers] = useState([]);

  const handleClose1 = () => setNotFound(false);
  const handleClose2 = () => setReqNotMet(false);

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

  const reloadCount = (e) => {
    e.preventDefault();
    axios.get('/general')
    .then(response => {
      // console.log(response.data.data.usercount)
      setPlayerCount(response.data.data.usercount)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const handleChange = (e) => {
    e.preventDefault();
    setUserName(e.target.value)
  };

  const refreshPage = () => {
    window.location.reload(false);
  }

  const handleSearch = (e, name) => {
    // console.log('name>>', name)
    e.preventDefault();
    const input = name.toLowerCase()
    if (input.length >= 3 && input.length <= 16) {
      axios.get(`/users/${input}`)
      .then(response => {
          if(response.data.success === true) {
          // console.log('response>>', response.data)
          // setUsers(response.data.data.user)
          setUsers(oldUsers => [...oldUsers, response.data.data.user])
          // console.log(users)
          } else {
            setNotFound(true)
          }
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


  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Click to refresh count
    </Tooltip>
  );

  return (
    <div>
    {/* <Button variant="flat">Saved Users</Button> */}
    <Favorited/>
    <Container className="justify-content" style={{marginTop: "6%"}}>
    <Row className="justify-content-md-center">
    <Col md="auto">
      <h1 onClick={refreshPage} style={{cursor: "pointer"}}>
    <span style={{color: "#FF0000"}}>T</span>
    <span style={{color: "#66CC66"}}>e</span>
    <span style={{color: "#DB5B1A"}}>t</span>
    <span style={{color: "#FFCCCC"}}>r</span>
    <span style={{color: "#2428b3"}}>i</span>
    <span style={{color: "#FF9966"}}>.</span>
    <span style={{color: "#FF0066"}}>n</span>
    <span style={{color: "#CFCF19"}}>o</span>
      </h1>
    </Col>
    </Row>
    <Row className="justify-content-md-center">
      {(!playerCount)
      ?
    <Col md="auto" className="text-white"><div><Spinner animation="border" size="sm"/> calculating live players </div></Col>
      :
      <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
    <Col md="auto" className="text-white"><div onClick={(e) => reloadCount(e)} style={{cursor: "pointer"}}>{playerCount} current players!</div></Col>
      </OverlayTrigger>
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
    <Row>
      <User users={users}/>
    </Row>
    <Modal show={notFound} onHide={handleClose1}>
      <Modal.Header closeButton>
        <Modal.Title>Oh No!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Either you mistyped something, or the account no longer   exists
      </Modal.Body>
    </Modal>
    <Modal show={reqNotMet} onHide={handleClose2}>
      <Modal.Header closeButton>
        <Modal.Title>Uh Oh!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Please review the character requirements
      </Modal.Body>
    </Modal>
  </Container>
  </div>
  )
}


export default App;

// <Container fluid className='justify-content'>
// <Row style={{height: '100px', marginTop: '1%', marginLeft: '5%'}}>
//   {/* <Col style={{backgroundColor: '#5C5361'}}>1 of 2 text here, can replace these Col tags with the card tags below</Col> */}
//   <Card border='primary' style={{ width: '18rem', marginRight: '5%' }}>
// <Card.Header>Header (These are build in for you)</Card.Header>
// <Card.Body>
//   <Card.Title>Primary Card Title (Just Big Text basically)</Card.Title>
//   <Card.Text>
//     Can Just replace the columns (or even use the Card tags inside the column) tags w/ theses cards
//   </Card.Text>
// </Card.Body>
// </Card>
//   <Card border='primary' style={{ width: '18rem', marginRight: '5%' }}>
// <Card.Header>Header (These are build in for you)</Card.Header>
// <Card.Body>
//   <Card.Title>Primary Card Title (Just Big Text basically)</Card.Title>
//   <Card.Text>
//     Can Just replace the columns (or even use the Card tags inside the column) tags w/ theses cards
//   </Card.Text>
// </Card.Body>
// </Card>
// <Card border='primary' style={{ width: '18rem', marginRight: '5%' }}>
// <Card.Header>Header (These are build in for you)</Card.Header>
// <Card.Body>
//   <Card.Title>Primary Card Title (Just Big Text basically)</Card.Title>
//   <Card.Text>
//     Can Just replace the columns (or even use the Card tags inside the column) tags w/ theses cards
//   </Card.Text>
// </Card.Body>
// </Card>
// </Row>
// </Container>