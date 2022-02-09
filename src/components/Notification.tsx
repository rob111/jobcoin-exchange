import React, {useEffect} from 'react';
import {MessageType} from '../domain/MessageType';
import styled from 'styled-components';

export interface INotification {
  message: string;
  type: MessageType;
}

const NotificationWrapper = styled.div`
  font-size: 12px;
  font-weight: bold;
  display: block;
  width: auto;
  height: 20px;
`;

export const Notification = (
  {notification, clearNotification}: {notification: INotification, clearNotification: Function}
  ): JSX.Element => {


  useEffect(() => {
    setTimeout(clearNotification, 3000)
  });

  return (
    <NotificationWrapper>
      <span style={{color: notification.type === MessageType.SUCCESS ? 'green' : 'red'}}>
        {notification && notification.message}
      </span>
    </NotificationWrapper>
  );
};
