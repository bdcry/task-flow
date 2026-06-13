import { useState } from 'react';
import { Board } from '../components/Board/Board';
import {
  AddTaskButton,
  Header,
  HeaderTitle,
  TaskAddWrapper,
  Title,
  Wrapper,
} from './BoardPage.styled';
import type { Task, TaskFormData } from '../types/task';
import { toast } from 'react-toastify';
import { Modal } from '../components/Modal/Modal';
import { TaskForm } from '../components/TaskForm/TaskForm';
import { useModalHook } from '../hooks/useModalHook';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { addTask, deleteTask, updateTask } from '../store/tasksSlice';

export const BoardPage = () => {
  const tasks = useAppSelector((state) => state.tasks.items);
  const dispatch = useAppDispatch();
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const { isModalOpen, handleOpenCreateModal, handleOpenEditModal, handleCloseModal } =
    useModalHook(setSelectedTask);

  const handleDeleteTask = (id: string) => {
    const task = tasks.find((task) => task.id === id);
    if (!task) return;

    dispatch(deleteTask(id));
    toast.success(`Task '${task.title}' deleted`);
  };

  const handleSubmitForm = (data: TaskFormData) => {
    if (selectedTask) {
      const updatedTask: Task = {
        id: selectedTask.id,
        createdAt: selectedTask.createdAt,
        ...data,
      };
      dispatch(updateTask(updatedTask));

      toast.success(`Task '${selectedTask.title}' is updated!`);
      handleCloseModal();

      return;
    }

    const newTask: Task = {
      id: crypto.randomUUID(),
      createdAt: new Date(),
      ...data,
    };

    dispatch(addTask(newTask));
    toast.success(`Task '${data.title}' is created!`);
    handleCloseModal();
  };

  return (
    <>
      <Wrapper>
        <Header>
          <HeaderTitle>My Tasks | Task Flow</HeaderTitle>
        </Header>
        <TaskAddWrapper>
          <Title>Add task</Title>
          <AddTaskButton type="button" onClick={handleOpenCreateModal} />
        </TaskAddWrapper>
        <Board tasks={tasks} onDeleteTask={handleDeleteTask} onEditTask={handleOpenEditModal} />
      </Wrapper>

      {isModalOpen && (
        <Modal title={selectedTask ? 'Edit Task' : 'Create Task'} onClose={handleCloseModal}>
          <TaskForm onSubmit={handleSubmitForm} task={selectedTask} />
        </Modal>
      )}
    </>
  );
};
