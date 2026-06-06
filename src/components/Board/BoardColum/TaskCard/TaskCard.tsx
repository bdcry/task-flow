import type { Task } from '../../../../types/task';
import {
  CardContainer,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  DeleteButton,
} from './TaskCard.styled';

type TTaskCardProps = {
  data: Task;
};

export const TaskCard = ({ data }: TTaskCardProps) => {
  return (
    <CardContainer>
      <CardHeader>
        <h4>{data.title}</h4>
        <span>{data.status}</span>
        <span>{data.priority}</span>
      </CardHeader>
      <CardBody>
        <p>{data.description}</p>
      </CardBody>
      <CardFooter>
        <Button>Edit</Button>
        <DeleteButton>Delete</DeleteButton>
      </CardFooter>
    </CardContainer>
  );
};
