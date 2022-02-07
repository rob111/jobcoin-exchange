import React, {useEffect, useState} from 'react';
import {MessageType} from '../domain/MessageType';
import styled from 'styled-components';

export interface INotification {
  message: string | null;
  type: MessageType;
}

const NotificationWrapper = styled.div<{notification: INotification}>`
  color: ${props => (props.notification.type === MessageType.SUCCESS ? 'green' : 'red')};
  font-size: 12px;
  font-weight: bold;
  display: block;
  width: auto;
  height: 20px;
`;

export const Notification = (notification: INotification): JSX.Element => {
  const [show, setShow] = useState(true);
  console.log(notification);
  console.log(show);

  useEffect(() => {
    setTimeout(function() {
      setShow(false);
    }, 3000)
  }, []);

  return (
    <>
      {show && <NotificationWrapper notification={notification}>{notification.message}</NotificationWrapper>}
    </>
  );
};
