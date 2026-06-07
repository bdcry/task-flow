import { useForm } from 'react-hook-form';
import { Button, ErrorText, Field, Form, Input, Label, Select, Textarea } from './TaskForm.styled';
import type { TaskFormData } from '../../types/task';
interface TaskFormProps {
  onSubmit: (data: TaskFormData) => void;
}

export const TaskForm = ({ onSubmit }: TaskFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormData>({
    defaultValues: {
      title: '',
      description: '',
      status: 'backlog',
      priority: 'low',
    },
  });

  const submitHandler = handleSubmit(onSubmit);

  return (
    <Form
      onSubmit={(e) => {
        void submitHandler(e);
      }}>
      <Field>
        <Label htmlFor="title">Title</Label>
        <Input
          $error={!!errors.title?.message}
          id="title"
          aria-invalid={Boolean(errors.title)}
          {...register('title', {
            required: 'Title is required',
          })}
        />
        {errors.title?.message && <ErrorText>{errors.title.message}</ErrorText>}
      </Field>
      <Field>
        <Label htmlFor="description">Description</Label>
        <Textarea
          $error={!!errors.description?.message}
          id="description"
          aria-invalid={Boolean(errors.description)}
          {...register('description', {
            required: 'Description is required',
          })}
        />
        {errors.description?.message && <ErrorText>{errors.description.message}</ErrorText>}
      </Field>

      <Field>
        <Label htmlFor="status">Status</Label>
        <Select
          id="status"
          aria-invalid={Boolean(errors.status)}
          {...register('status', {
            required: 'Status is required',
          })}>
          <option value="backlog">Backlog</option>
          <option value="inProgress">In Progress</option>
          <option value="review">Review</option>
          <option value="done">Done</option>
        </Select>
        {errors.status?.message && <ErrorText>{errors.status.message}</ErrorText>}
      </Field>

      <Field>
        <Label htmlFor="priority">Priority</Label>
        <Select
          id="priority"
          aria-invalid={Boolean(errors.priority)}
          {...register('priority', {
            required: 'Priority is required',
          })}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </Select>
        {errors.priority?.message && <ErrorText>{errors.priority.message}</ErrorText>}
      </Field>

      <Button type="submit">Create Task</Button>
    </Form>
  );
};
