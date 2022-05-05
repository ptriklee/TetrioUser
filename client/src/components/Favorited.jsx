import React, {useState} from 'react';
import axios from 'axios';
import { Button, Offcanvas } from 'react-bootstrap';


function Favorited () {
  const [show, setShow] = useState(false);
  const [getFavorited, setGetFavorited] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <div>
      <Button variant="flat" onClick={handleShow}>Saved Users</Button>
      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Favorited;