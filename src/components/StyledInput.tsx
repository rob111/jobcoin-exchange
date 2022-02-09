import styled from 'styled-components';

const Input = styled.input`
  box-sizing: border-box;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid var(--primary-grey);
  width: 100%;
  margin: 0 auto 0.9rem;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: var(--font-grey);
`;

interface StyledInputProps {
  label: string;
  setValue: Function;
  placeholder?: string;
  type?: string;
  value: string | number;
}

export const StyledInput = ({label, placeholder, type='text', setValue, value}: StyledInputProps): JSX.Element => {

  return (
    <Label>
      <p style={{marginBottom: '5px'}}>{label}</p>
      <Input placeholder={placeholder} type={type} value={value} onChange={e => setValue(e.target.value)} />
    </Label>
  );
}
