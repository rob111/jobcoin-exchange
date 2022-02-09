import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import goldCoin from '../assets/goldCoin.png';

const NavBarWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid var(--primary-grey);
  display: inline-flex;
  background: var(--white);

  .left-section {
    display: flex;
    margin-left: 30px;

    .logo {
      display: flex;
      margin: auto;
      justify-content: center;
      width: 20px;
      height: 20px;
    }

    .logo-name {
      margin: auto 10px;
      font-weight: 500;
      color: var(--font-grey);
    }
  }

  .right-section {
    margin-left: auto;
    display: flex;

    .signin {
      display: flex;
      margin-right: 3rem;
      color: var(--font-grey);
    }
  }
`;

const SignOutButton = styled.button`
  border: none;
  background: #fff;
  color: var(--blue);
  height: 2rem;
  margin: auto;
  cursor: pointer;
  font-size: 1rem;
`;

export const NavBar = ({address, setAddress}: {address: string, setAddress: Function}): JSX.Element => {
  const signOut = () => {
    
    if (address) {
      setAddress('');
    }
  };

  return (
    <NavBarWrapper>
      <div className='left-section'>
        <div className='logo'>
          <img src={goldCoin} alt='logo' />
        </div>
        <div className='logo-name'><span>Jobcoin Sender</span></div>
      </div>
      <div className='right-section'>
        <FontAwesomeIcon style={{margin: 'auto 10px'}} icon={faUser} />
        <div className='signin'>
          <p style={{margin: 'auto'}}>Signed in <span style={{fontWeight: 'bold'}}>{address}</span></p>
          <SignOutButton onClick={signOut}>Sign Out</SignOutButton>
        </div>
      </div>
    </NavBarWrapper>
  );
}
