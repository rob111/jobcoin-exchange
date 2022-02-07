import React, {useState} from 'react';
import styled from 'styled-components';
import {Button} from './Button';
import {StyledInput} from './StyledInput';
import goldCoin from '../assets/goldCoin.png';

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;

  .logo {
    display: flex;
    justify-content: center;
    width: 100px;
    height: 100px;
    border: 1px solid var(--primary-grey);
    color: var(--primary-grey);
    margin-bottom: 50px;
    border-radius: 50%;
    background: 
         linear-gradient(to top left,
             rgba(0,0,0,0) 0%,
             rgba(0,0,0,0) calc(50% - 0.8px),
             var(--primary-grey),
             rgba(0,0,0,0) calc(50% + 0.8px),
             rgba(0,0,0,0) 100%),
         linear-gradient(to top right,
             rgba(0,0,0,0) 0%,
             rgba(0,0,0,0) calc(50% - 0.8px),
             var(--primary-grey),
             rgba(0,0,0,0) calc(50% + 0.8px),
             rgba(0,0,0,0) 100%);

    span {
      align-self: flex-end;
      padding: 0.5rem;
      font-size: 12px;
    }
  }

  .signin-form {
    color: var(--primary-grey);
    width: 350px;
    border: 1px solid var(--primary-grey);
    border-radius: 5px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .title {
      color: var(--primary-grey);
      font-size: 14px;
      font-weight: 700;
      border-bottom: 1px solid #d3d3d3;
      text-align: center;
      padding: 15px 60px;
    }

    form {
      width: 250px;
      padding: 1rem 2rem 2rem;
    }
  }
`;

export const Login = ({setAddress}: {setAddress: Function}): JSX.Element => {

  const [jobcoinAddress, setJobcoinAddress] = useState('');

  const handleSubmit = ($event: React.SyntheticEvent) => {
    $event.preventDefault();
    setAddress(jobcoinAddress);
  }

  return (
    <LoginWrapper>
      <div className='logo'>
        <img style={{width: '100px', height: '100px'}} src={goldCoin} alt='logo' />
      </div>
      <div className='signin-form'>
        <div className='title'>
          <span>
            Welcome! Sign In With Your Jobcoin Address
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <StyledInput label='Jobcoin Address' placeholder='Please enter address' setValue={setJobcoinAddress} />
          <div>
            <Button type="submit">Sign In</Button>
          </div>
        </form>
      </div>
    </LoginWrapper>
  );
};
