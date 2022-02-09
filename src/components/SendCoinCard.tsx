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

export const SendCoinCard = ({address, balance, setBalance}: SendCoinCardProps): JSX.Element => {

  const [destinationAddress, setDestinationAddress] = useState('');
  const [amountToSend, setAmountToSend] = useState('');
  const [notification, setNotification] = useState<INotification | null>();

  const getNotification = () => {
    if (notification) {
      return <Notification
        notification={notification}
        clearNotification={() => setNotification(null)}
      />
    }
  }

  const submit = ($event: React.SyntheticEvent) => {
    $event.preventDefault();
    const valid = validateAmountToSend(balance, amountToSend);
    if (!valid) {
      clearForm();
      return;
    }
    
    sendCoins(amountToSend.toString(), destinationAddress, address)
      .then(response => {
        if (response && response.status === 'OK') {
          let plural = parseFloat(amountToSend) > 1 ? 'coins' : 'coin';
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
        setBalance(balance - parseFloat(amountToSend));
        clearForm();
      });
  };

  const validateAmountToSend = (balance: number, amountToSend: string): boolean => {
    if (!!parseFloat(amountToSend) === false) {
      setNotification({
        message: 'Enter numbers for amount to send',
        type: MessageType.ERROR
      });
      return false;
    }
    else if (parseFloat(amountToSend) === 0) {
      setNotification({
        message: 'You are sending 0 coins',
        type: MessageType.ERROR
      });
      return false;
    }
    else if ((balance - parseFloat(amountToSend)) < 0) {
      setNotification({
        message: 'You have insufficient funds',
        type: MessageType.ERROR
      });
      return false;
    }
    return true;
  }

  const clearForm = (): void => {
    setAmountToSend('');
    setDestinationAddress('');
  };

  return (
    <StyledCard>
      <div className='card-header'>
        <p>Send Jobcoin</p>
      </div>
      <div className='card-body'>
        <form style={{padding: '1rem'}} onSubmit={submit}>
          <StyledInput label='Destination Address' setValue={setDestinationAddress} value={destinationAddress} />
          <StyledInput label='Amount to Send' setValue={setAmountToSend} value={amountToSend} />
          <div>{getNotification()}</div>
          <div>
            <Button type='submit'>Send Jobcoins</Button>
          </div>
        </form>
      </div>
    </StyledCard>
  );
};
