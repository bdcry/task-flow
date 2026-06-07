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

export const TaskAddWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  backdrop-filter: blur(15px) brightness(1.3);
  -webkit-backdrop-filter: blur(15px);
  background: hsla(0, 0%, 100%, 0.7);
  border: 1px solid #00000029;
  border-radius: 1rem;
  padding: 15px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  line-height: 1.2;
  text-align: left;
  font-weight: 600;
`;

export const AddTaskButton = styled.button`
  all: unset;
  position: relative;
  width: 40px;
  height: 40px;
  background-color: #007bff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(106, 226, 254);
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: #fff;
    border-radius: 2px;
  }

  &::before {
    width: 3px;
    height: 20px;
  }

  &::after {
    width: 20px;
    height: 3px;
  }
`;
