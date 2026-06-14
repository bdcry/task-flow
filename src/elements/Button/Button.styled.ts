import styled from 'styled-components';

type ButtonVariant = 'EDIT' | 'DELETE';
interface HTMLElementProps {
  $buttonType: ButtonVariant;
}

const disabledStyle = {
  '&:disabled': {
    cursor: 'default',
    opacity: '0.6',
  },
};

const BaseButton = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 14px;
    transition: background-color 0.3s ease;
    width: 100%;
`;

export const StyledButton = styled(BaseButton)<HTMLElementProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => {
    switch (props.$buttonType) {
      case 'EDIT':
        return {
          backgroundColor: '#4183fe',

          '&:not(:disabled):hover': {
            backgroundColor: '#6ae2fe',
          },

          ...disabledStyle,
        };

      case 'DELETE':
        return {
          backgroundColor: '#ff4d4d',

          '&:not(:disabled):hover': {
            backgroundColor: '#ff6e6e',
          },

          ...disabledStyle,
        };
    }
  }}
`;
