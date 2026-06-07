import { useForm } from 'react-hook-form';
import { Button, ErrorText, Field, Form, Input, Label, Select, Textarea } from './TaskForm.styled';
import type { Task, TaskFormData } from '../../types/task';
import { columns } from '../../constants/taskColumns';
import { priorityOptions } from '../../constants/priorityLabels';

interface TaskFormProps {
  onSubmit: (data: TaskFormData) => void;
  task?: Task | null;
}

export const TaskForm = ({ onSubmit, task }: TaskFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormData>({
    defaultValues: {
      title: task?.title ?? '',
      description: task?.description ?? '',
      status: task?.status ?? 'backlog',
      priority: task?.priority ?? 'low',
    },
  });

  const isEditForm = Boolean(task);

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
          {columns.map((column) => (
            <option key={column.status} value={column.status}>
              {column.title}
            </option>
          ))}
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
          {priorityOptions.map((label) => (
            <option key={label.option} value={label.option}>
              {label.title}
            </option>
          ))}
        </Select>
        {errors.priority?.message && <ErrorText>{errors.priority.message}</ErrorText>}
      </Field>

      <Button type="submit">{isEditForm ? 'Edit task' : 'Create Task'}</Button>
    </Form>
  );
};
