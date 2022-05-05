import React from 'react';
import { Button, Card } from 'react-bootstrap';

function Cards ({favorite}) {
  return (
  <Card style={{ width: '18rem', marginBottom: '10px', backgroundColor: '#a3a1a1' }}>
    <Card.Body>
      <Card.Title>{favorite.username}</Card.Title>
      <Card.Text>
        Games Played:
        &nbsp;
        &nbsp;
        {favorite.gamesplayed}
        <br />
        Games Won:
        &nbsp;
        &nbsp;
        {favorite.gameswon}
      </Card.Text>
      <Button variant="warning" style={{}}>Remove from favorites</Button>
    </Card.Body>
  </Card>
  )
}

export default Cards;