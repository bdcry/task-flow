import styled from 'styled-components';

export const CardContainer = styled.div`
  background: hsla(0, 0%, 100%, 0.7);
  border: 1px solid #00000029;
  border-radius: 1rem;
  padding: 10px;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: space-between;
  align-items: center;
`;

export const CardBody = styled.div`
  margin-top: 10px;
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  margin-top: 10px;

  @media (max-width: 768px) {
  flex-direction: column;
  }
`;

export const Label = styled.span<{ $status?: 'low' | 'medium' | 'high' }>`
  ${(props) => {
    if (props.$status === 'high') {
      return `background-color: rgb(255, 105, 97); border: 1px solid rgb(233, 236, 239);`;
    } else if (props.$status === 'medium') {
      return `background-color: rgb(255, 242, 178); border: 1px solid rgb(233, 236, 239);`;
    }

    return `background-color: rgb(233, 236, 239);`;
  }}

  padding: 5px 10px;
  border-radius: 0.5rem;
  height: fit-content;
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #4183fe;
  color: white;
  font-size: 14px;
  transition: background-color 0.3s ease;
  width: 100%;

  &:hover {
    background-color: #6ae2fe;
  }
`;

export const DeleteButton = styled(Button)`
  background-color: #ff4d4d;

  &:hover {
    background-color: #ff6e6e;
  }
`;
