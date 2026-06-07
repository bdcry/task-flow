import { Section } from './Board.styled';
import { BoardColumn } from './BoardColum/BoardColumn';
import type { Task, TaskStatus } from '../../types/task';
import { columns } from '../../constants/taskColumns';

interface BoardProps {
  tasks: Task[];
  onDeleteTask: (id: string) => void;
  onEditTask: (task: Task) => void;
}

export const Board = ({ tasks, onDeleteTask, onEditTask }: BoardProps) => {
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
              onEditTask={onEditTask}
            />
          );
        })}
      </Section>
    </>
  );
};
