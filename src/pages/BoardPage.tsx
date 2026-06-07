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
import { mockTasks } from '../mock/tasks';
import { toast } from 'react-toastify';
import { Modal } from '../components/Modal/Modal';
import { TaskForm } from '../components/TaskForm/TaskForm';
import { useModalHook } from '../hooks/useModalHook';

export const BoardPage = () => {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const { isModalOpen, handleOpenCreateModal, handleOpenEditModal, handleCloseModal } =
    useModalHook(setSelectedTask);

  const handleDeleteTask = (id: string) => {
    const task = tasks.find((task) => task.id === id);

    if (!task) return;

    setTasks((prevState) => prevState.filter((task) => task.id !== id));
    toast.success(`Task '${task.title}' deleted`);
  };

  const handleSubmitForm = (data: TaskFormData) => {
    if (selectedTask) {
      setTasks((prev) =>
        prev.map((task) => (selectedTask.id === task.id ? { ...task, ...data } : task)),
      );

      toast.success(`Task '${selectedTask.title}' is updated!`);
      handleCloseModal();

      return;
    }

    const newTask: Task = {
      id: crypto.randomUUID(),
      createdAt: new Date(),
      ...data,
    };

    setTasks((prev) => [...prev, newTask]);
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
