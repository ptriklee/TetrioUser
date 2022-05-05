import React, {useState} from 'react';
import { Accordion } from 'react-bootstrap';
import moment from 'moment';

function User ({users}) {
  const sec = users.gametime;
  const time = moment.utc(sec*1000).format('HH:mm:ss');
  const percent = (users.gameswon/users.gamesplayed);
  const winRate = (Math.round(percent * 100));
  // console.log(users)

  return(
    <span>
      <Accordion defaultActiveKey="0" style={{width: "50%", marginLeft: "40%", marginTop: "-63px"}} flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{users.username}</Accordion.Header>
          <Accordion.Body>
          Games Played:
          &nbsp;
          {users.gamesplayed}
          <br />
          Games Won:
          &nbsp;
          {users.gameswon}
          <br />
          Total Time Played:
          &nbsp;
          {time}
          <b>
          Win Rate: {winRate}%
          </b>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </span>
  )
}

export default User;