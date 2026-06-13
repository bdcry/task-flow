import styled from 'styled-components';

type TypeButton = 'EDIT' | 'DELETE';
interface HTMLElementProps {
  $buttonType: TypeButton;
}

const disabledStyle = {
  '&:disabled': {
    cursor: 'default',
    opacity: '0.6',
  },
};

export const StyledButton = styled.button<HTMLElementProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => {
    switch (props.$buttonType) {
      case 'EDIT':
        return {
          padding: '5px 10px',
          border: 'none',
          borderRadius: '8px',
          backgroundColor: '#4183fe',
          color: '#ffff',
          fontSize: '14px',
          transition: 'background-color 0.3s ease',
          width: '100%',

          '&:hover': {
            backgroundColor: '#6ae2fe',
          },

          ...disabledStyle,
        };

      case 'DELETE':
        return {
          padding: '5px 10px',
          border: 'none',
          borderRadius: '8px',
          backgroundColor: '#ff4d4d',
          color: '#ffff',
          fontSize: '14px',
          transition: 'background-color 0.3s ease',
          width: '100%',

          '&:hover': {
            backgroundColor: '#ff6e6e',
          },

          ...disabledStyle,
        };
    }
  }}
`;
