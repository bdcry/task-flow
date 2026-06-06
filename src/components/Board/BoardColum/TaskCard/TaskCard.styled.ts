import styled from 'styled-components';

export const CardContainer = styled.div`
  background: hsla(0, 0%, 100%, 0.7);
  border: 1px solid #00000029;
  border-radius: 1rem;
  padding: 10px;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const CardBody = styled.div`
  margin-top: 10px;
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #4183fe;
  color: white;
  font-size: 14px;
  transition: background-color 0.3s ease;

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
