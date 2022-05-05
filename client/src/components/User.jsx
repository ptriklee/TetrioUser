/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import moment from 'moment';
import axios from 'axios';
import { Accordion } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

function User ({users}) {
  const [submitted, setSubmitted] = useState(false);
  let key = 1;

  const addToFavorites = (body) => {
    axios.post('/favorited', body)
      .then(data => {
        console.log('data >>', data)
        setSubmitted(true)
      })
      .catch(err => {
        console.log('unsuccessfull add', err)
      })
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
          ? <b className="small-body">
          Win Rate: {(Math.round((user.gameswon/user.gamesplayed) * 100))}%
          {(submitted)
          ? <b><Icon.BookmarkStarFill className="disabled-icon"/>
            <small className="fine-print-submit">User Saved!</small></b>
          : <b><Icon.BookmarkStarFill className="icon"  onClick={() => addToFavorites(user)}/>
          <small className="fine-print">Click To Save User</small></b> }
          </b>
          : <b className="small-body">No games played yet!</b>
          }
          </Accordion.Body>
        </Accordion.Item>
        )}
      </Accordion>
    </span>
  )
}

export default User;