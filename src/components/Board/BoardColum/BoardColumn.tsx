import type { Task, TaskStatus } from '../../../types/task';
import {
  Container,
  ColumnTitle,
  ColumnCount,
  TasksContainer,
  ColumnHeader,
} from './BoardColumn.styled';
import { TaskCard } from './TaskCard/TaskCard';

type TBoardColumnProps = {
  tasks: Task[];
  title: string;
};

export const BoardColumn = ({ tasks, title }: TBoardColumnProps) => {
  return (
    <Container>
      <ColumnHeader>
        <ColumnTitle>{title}</ColumnTitle>
        <ColumnCount title="Количество задач">{tasks.length}</ColumnCount>
      </ColumnHeader>
      <TasksContainer>
        {tasks.map((task) => (
          <TaskCard data={task} />
        ))}
      </TasksContainer>
    </Container>
  );
};
