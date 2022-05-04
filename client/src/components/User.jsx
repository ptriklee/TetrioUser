import React, {useState} from 'react';
import { Accordion } from 'react-bootstrap';

function User ({users}) {
  console.log(users)
  return(
    <div>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{users.username}</Accordion.Header>
          <Accordion.Body>
          {users.friend_count}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default User;