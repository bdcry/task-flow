import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: hsla(0, 0%, 100%, 0.7);
  border: 1px solid #00000029;
  border-radius: 1rem;
  padding: 10px;
  max-height: 500px;
  min-width: 250px;
`;

export const ColumnTitle = styled.h4`
  margin: 0;
  font-size: 18px;
  line-height: 1.2;
  text-align: left;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ColumnCount = styled.span`
  margin: 0;
  font-size: 18px;
  line-height: 1.2;
  text-align: left;
  font-weight: 600;
  cursor: default;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ColumnHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(233, 236, 239);
  border-radius: 0.5rem;
  padding: 10px;
}
`;

export const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
`;
