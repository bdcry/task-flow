import type { Task } from '../../../../types/task';
import {
  CardContainer,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  DeleteButton,
  Label,
} from './TaskCard.styled';

const priorityLabels = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
};

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
          onClick={() => {
            onEditTask(data);
          }}>
          Edit
        </Button>
        <DeleteButton
          onClick={() => {
            onDeleteTask(id);
          }}>
          Delete
        </DeleteButton>
      </CardFooter>
    </CardContainer>
  );
};
