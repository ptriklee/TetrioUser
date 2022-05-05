import React from 'react';
import moment from 'moment';
import { Accordion } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

function User ({users}) {
  let key = 1;

  const test = () => {
    console.log('hey')
  }

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
          <Icon.BookmarkStarFill className="icon" onClick={test}/>
          <small className="fine-print">Click To Save User</small>
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