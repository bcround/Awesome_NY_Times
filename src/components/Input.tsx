import { ChangeEventHandler } from 'react';
import styled from 'styled-components';

type InputProps = {
  className?: string;
  id: string;
  type?: string;
  value: string;
  placeHolder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 50px;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 2.4rem;
  padding: 0 0 0 10px;
`;

const StlyedLabel = styled.label`
  position: absolute;
  left: 10px;
  top: 12.5px;
  font-size: 2.4rem;
  color: #aaa;
`;

const Input = ({ className, id, type, value, placeHolder, onChange }: InputProps) => {
  return (
    <InputWrapper className={className}>
      <StyledInput id={id} type={type} value={value} onChange={onChange} />
      <StlyedLabel htmlFor={id}>{value ? '' : placeHolder}</StlyedLabel>
    </InputWrapper>
  );
};

Input.defaultProps = {
  type: 'text',
  className: undefined,
};

export default Input;
