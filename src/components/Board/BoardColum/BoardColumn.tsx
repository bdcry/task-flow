import type { Task } from '../../../types/task';
import {
  Container,
  ColumnTitle,
  ColumnCount,
  TasksContainer,
  ColumnHeader,
} from './BoardColumn.styled';
import { TaskCard } from './TaskCard/TaskCard';

interface BoardColumnProps {
  tasks: Task[];
  title: string;
  onDeleteTask: (id: string) => void;
}

export const BoardColumn = ({ tasks, title, onDeleteTask }: BoardColumnProps) => {
  return (
    <Container>
      <ColumnHeader>
        <ColumnTitle>{title}</ColumnTitle>
        <ColumnCount title="Количество задач">{tasks.length}</ColumnCount>
      </ColumnHeader>
      <TasksContainer>
        {tasks.map((task) => (
          <TaskCard key={task.id} data={task} onDeleteTask={onDeleteTask} />
        ))}
      </TasksContainer>
    </Container>
  );
};
