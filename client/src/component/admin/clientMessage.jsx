import React, { useContext, useEffect } from 'react';
import AdminContext from '../../context/admin/adminContext';
import ClientMessageItem from './clientMessageItem';

const ClientMessage = () => {
  const adminContext = useContext(AdminContext);

  const { clientMessage, Messages } = adminContext;

  useEffect(() => {
    Messages();
  }, []);
  return (
    <div>
      <strong>
        Client <span className="text-primary">Messages</span>
      </strong>
      {clientMessage!==null &&
        clientMessage.map(message => (
          <ClientMessageItem key={message._id} messages={message} />
        ))}
    </div>
  );
};

export default ClientMessage;
