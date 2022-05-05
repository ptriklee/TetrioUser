import React, {useState} from 'react';
import { Accordion } from 'react-bootstrap';
import moment from 'moment';

function User ({users}) {
  // const sec = user.gametime;
  // const time = moment.utc((user.gametime)*1000).format('HH:mm:ss')
  // const percent = (user.gameswon/user.gamesplayed)
  // const winRate = (Math.round((user.gameswon/user.gamesplayed) * 100))
  let key = 1;

  return(
    <span>
      <Accordion defaultActiveKey={key ++} style={{width: "50%", marginLeft: "40%", marginTop: "-63px"}} flush>
        {users.map(user =>
        <Accordion.Item eventKey={key ++} key={user._id}>
          <Accordion.Header>{user.username}</Accordion.Header>
          <Accordion.Body>
          Games Played:
          &nbsp;
          {user.gamesplayed}
          <br />
          Games Won:
          &nbsp;
          {user.gameswon}
          <br />
          Total Time Played:
          &nbsp;
          {moment.utc((user.gametime)*1000).format('HH:mm:ss')}
          <b>
          Win Rate: {(Math.round((user.gameswon/user.gamesplayed) * 100))}%
          </b>
          </Accordion.Body>
        </Accordion.Item>
        )}
      </Accordion>
    </span>
  )
}

export default User;