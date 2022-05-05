import React from 'react';
import { Accordion } from 'react-bootstrap';
import moment from 'moment';

function User ({users}) {
  let key = 1;

  return(
    <span>
      <Accordion defaultActiveKey={(users).length} style={{width: "50%", marginLeft: "40%", marginTop: "-63px"}}>
        {users.slice(-5).map(user =>
        <Accordion.Item eventKey={key ++} key={user._id} style={{marginBottom: '6px'}}>
          <Accordion.Header>{user.username}</Accordion.Header>
          <Accordion.Body>
          Games Played:
          &nbsp;
          &nbsp;
          {user.gamesplayed}
          <br />
          Games Won:
          &nbsp;
          &nbsp;
          {user.gameswon}
          <br />
          Total Time Played:
          &nbsp;
          &nbsp;
          {moment.utc((user.gametime)*1000).format('HH:mm:ss')}
          {(user.gamesplayed > 0)
          ? <b>
          Win Rate: {(Math.round((user.gameswon/user.gamesplayed) * 100))}%
          </b>
          : <b>No games played yet!</b>
          }
          </Accordion.Body>
        </Accordion.Item>
        )}
      </Accordion>
    </span>
  )
}

export default User;