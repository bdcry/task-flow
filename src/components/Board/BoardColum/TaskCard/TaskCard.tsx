import { priorityLabels } from '../../../../constants/priorityLabels';
import { Button } from '../../../../elements';
import type { Task } from '../../../../types/task';
import { CardContainer, CardHeader, CardBody, CardFooter, Label } from './TaskCard.styled';

interface TaskCardProps {
  data: Task;
  onDeleteTask: (id: string) => void;
  onEditTask: (task: Task) => void;
}

export const TaskCard = ({ data, onDeleteTask, onEditTask }: TaskCardProps) => {
  const { id, title, description, priority } = data;
  return (
    <CardContainer>
      <CardHeader>
        <h4>{title}</h4>
        <Label $status={priority}>{priorityLabels[priority]}</Label>
      </CardHeader>
      <CardBody>
        <p>{description}</p>
      </CardBody>
      <CardFooter>
        <Button
          variant="EDIT"
          handleOnClick={() => {
            onEditTask(data);
          }}
          isDisabled={data.status === 'done'}>
          Edit
        </Button>
        <Button
          variant="DELETE"
          handleOnClick={() => {
            onDeleteTask(id);
          }}
          isDisabled={!(data.status === 'backlog')}>
          Delete
        </Button>
      </CardFooter>
    </CardContainer>
  );
};
