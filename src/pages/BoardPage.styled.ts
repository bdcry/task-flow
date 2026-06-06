import styled from 'styled-components';

export const Header = styled.header`
  backdrop-filter: blur(15px) brightness(1.3);
  -webkit-backdrop-filter: blur(15px);
  background: hsla(0, 0%, 100%, 0.7);
  border: 1px solid #00000029;
  border-radius: 1rem;
  padding: 15px;
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 32px;
  line-height: 1.2;
  text-align: left;
  font-weight: 600;
`;

export const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
