import styled from 'styled-components';

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  background: hsla(0, 0%, 100%, 0.7);
  border: 1px solid #00000029;
  border-radius: 1rem;
  padding: 15px;
  overflow: auto;
`;
