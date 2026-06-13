import type { ReactNode } from 'react';
import { StyledButton } from './Button.styled';

interface ButtonProps {
  variant?: 'EDIT' | 'DELETE';
  handleOnClick: () => void;
  isDisabled?: boolean;
  children: ReactNode;
}

export const Button = ({
  variant = 'EDIT',
  handleOnClick,
  isDisabled = false,
  children,
}: ButtonProps) => {
  return (
    <StyledButton type="button" $buttonType={variant} onClick={handleOnClick} disabled={isDisabled}>
      {children}
    </StyledButton>
  );
};
