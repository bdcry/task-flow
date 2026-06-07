import { Section } from './Board.styled';
import { BoardColumn } from './BoardColum/BoardColumn';
import type { Task, TaskStatus } from '../../types/task';

interface BoardProps {
  tasks: Task[];
  onDeleteTask: (id: string) => void;
}
interface Column {
  status: TaskStatus;
  title: string;
}

const columns: Column[] = [
  { status: 'backlog', title: 'Backlog' },
  { status: 'inProgress', title: 'In Progress' },
  { status: 'review', title: 'Review' },
  { status: 'done', title: 'Done' },
];

export const Board = ({ tasks, onDeleteTask }: BoardProps) => {
  return (
    <>
      <Section>
        {columns.map((column) => {
          const columnTasks = tasks.filter((task) => task.status === column.status);
          return (
            <BoardColumn
              key={column.title}
              tasks={columnTasks}
              title={column.title}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
      </Section>
    </>
  );
};
