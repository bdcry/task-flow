import { Board } from '../components/Board/Board';
import { Header, HeaderTitle, Wrapper } from './BoardPage.styled';

export const BoardPage = () => {
  return (
    <>
      <Wrapper>
        <Header>
          <HeaderTitle>My Tasks | Task Flow</HeaderTitle>
        </Header>
        <Board />
      </Wrapper>
    </>
  );
};
