import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const StyledButton = styled.button`
  border: none;
  background-color: #fff;
`;

const Button = ({ className, type, children, onClick }: ButtonProps) => {
  return (
    <StyledButton className={className} type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: 'submit',
  className: undefined,
  onClick: undefined,
};

export default Button;
