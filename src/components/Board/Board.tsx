import { mockTasks } from '../../mock/tasks';
import { Section } from './Board.styled';
import { BoardColumn } from './BoardColum/BoardColumn';

const columns = [
  { status: 'backlog', title: 'Backlog' },
  { status: 'inProgress', title: 'In Progress' },
  { status: 'review', title: 'Review' },
  { status: 'done', title: 'Done' },
];

export const Board = () => {
  return (
    <>
      <Section>
        {columns.map((column) => {
          const columnTasks = mockTasks.filter((task) => task.status === column.status);
          return <BoardColumn tasks={columnTasks} title={column.title} />;
        })}
      </Section>
    </>
  );
};
