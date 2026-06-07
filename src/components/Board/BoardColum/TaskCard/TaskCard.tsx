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
  medium: 'Meduim',
  high: 'High',
};

interface TaskCardProps {
  data: Task;
  onDeleteTask: (id: string) => void;
}

export const TaskCard = ({ data, onDeleteTask }: TaskCardProps) => {
  const { id, title, description, priority } = data;
  return (
    <CardContainer>
      <CardHeader>
        <h4>{title}</h4>
        <Label $status={data.priority}>{priorityLabels[priority]}</Label>
      </CardHeader>
      <CardBody>
        <p>{description}</p>
      </CardBody>
      <CardFooter>
        <Button>Edit</Button>
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
