// src/components/MailboxList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => (
  <div>
    {mailboxes.map((mailbox) => (
      <div key={mailbox._id} className="mail-box">
        <Link to={`/mailboxes/${mailbox._id}`}>Mailbox {mailbox._id}</Link>
      </div>
    ))}
  </div>
);

export default MailboxList;
