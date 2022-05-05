import React, {useState} from 'react';
import axios from 'axios';
import { Button, Offcanvas } from 'react-bootstrap';
import Cards from './Cards.jsx';


function Favorited () {
  const [show, setShow] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    axios.get('/favorited')
    .then(response => {
      console.log(response.data)
      setFavorites(response.data)
      setShow(true)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
      <Button variant="flat" onClick={handleShow}>Favorited Users</Button>
      <Offcanvas placement="end" show={show} onHide={handleClose} style={{backgroundColor: '#DB5B1A'}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Favorited Users</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {favorites.slice(0).reverse().map(favorite =>
          <Cards key={favorite._id} favorite={favorite} />
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Favorited;