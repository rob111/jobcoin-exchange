import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {useAddress} from '../useAddress';

const NavBarWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid var(--primary-grey);
  display: inline-flex;

  .left-section {
    display: flex;
    margin-left: 30px;

    .logo {
      display: flex;
      margin: auto;
      justify-content: center;
      width: 20px;
      height: 20px;
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

export const NavBar = (): JSX.Element => {
  const {address, setAddress} = useAddress();
  const signOut = () => {
    
    if (address) {
      setAddress('');
      window.location.reload();
    }
  };

  return (
    <NavBarWrapper>
      <div className='left-section'>
        <div className='logo'></div>
        <div className='logo-name'><span>Jobcoin Sender</span></div>
      </div>
      <div className='right-section'>
        <FontAwesomeIcon style={{margin: 'auto 10px'}} icon={faUser} />
        <div className='signin'>
          <p style={{margin: 'auto'}}>Signed in</p>
          <SignOutButton onClick={signOut}>Sign Out</SignOutButton>
        </div>
      </div>
    </NavBarWrapper>
  );
}
