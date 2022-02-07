import {useState} from 'react';

type UseAddress = () => {
  setAddress: Function;
  address: string;
}

export const useAddress: UseAddress = () => {

  const getAddress = (): string => {
    const sessionAddress = sessionStorage.getItem('address');
    const userAddress = sessionAddress && JSON.parse(sessionAddress);
    console.log(userAddress);
    
    return userAddress && userAddress;
  };

  const [address, setAddress] = useState(getAddress());

  const saveAddress = (userAddress: string): void => {
    sessionStorage.setItem('address', JSON.stringify(userAddress));
    setAddress(userAddress);
  };

  return {
    setAddress: saveAddress,
    address
  };
};
