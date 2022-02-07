import React, {useState} from 'react';
import StyledCard from './StyledCard';
import {Button} from './Button';
import {StyledInput} from './StyledInput';
import {sendCoins} from '../services/coinsService';
import {MessageType} from '../domain/MessageType';
import {INotification} from './Notification';
import {Notification} from './Notification';

interface SendCoinCardProps {
  address: string;
  balance: number;
  setBalance: Function;
}

export const SendCoinCard = ({address, balance, setBalance}: SendCoinCardProps) => {

  const [destinationAddress, setDestinationAddress] = useState('');
  const [amountToSend, setAmountToSend] = useState(0);
  const [notification, setNotification] = useState<INotification>({
    message: '',
    type: MessageType.SUCCESS
  });

  const submit = ($event: React.SyntheticEvent) => {
    $event.preventDefault();
    console.log('submit');
    
    const valid = validateAmountToSend(balance, amountToSend);
    if (!valid) {
      return;
    }

    sendCoins(amountToSend.toString(), destinationAddress, address)
    .then(response => {
      if (response && response.status === 'OK') {
        let plural = amountToSend > 1 ? 'coins' : 'coin';
        setNotification({
            message: `Successfully sent ${amountToSend} ${plural} to ${destinationAddress}`,
            type: MessageType.SUCCESS
          });
      }
      if (response && response.error === 'Insufficient Funds') {
        setNotification({
          message: 'You have insufficient funds',
          type: MessageType.ERROR
        });
      }
    })
    .catch((err) => console.error(err))
    .finally(() => {
      setBalance(balance - amountToSend);
      setAmountToSend(0);
      setDestinationAddress('');
        // show the notification bar
    });
  };

  const validateAmountToSend = (balance: number, amountToSend: number): boolean => {
    if (amountToSend === 0) {
      setNotification({
        message: 'You are sending 0 coins',
        type: MessageType.ERROR
      });
      return false;
    }
    else if ((balance - amountToSend) < 0) {
      console.log('balance');
      
      setNotification({
          message: 'You have insufficient funds',
          type: MessageType.ERROR
        });
      return false;
    }
    return true;
  }

  return (
    <StyledCard>
      <div className='card-header'>
        <p>Send Jobcoin</p>
      </div>
      <div className='card-body'>
        <form style={{padding: '1rem'}} onSubmit={submit}>
          <StyledInput label='Destination Address' setValue={setDestinationAddress} />
          <StyledInput label='Amount to Send' type='number' setValue={setAmountToSend} />
          <Notification {...notification} />
          <div>
            <Button type='submit'>Send Jobcoins</Button>
          </div>
        </form>
      </div>
    </StyledCard>
  );
};
