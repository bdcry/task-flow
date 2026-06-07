import { useState } from 'react';
import type { Task } from '../types/task';

export const useModalHook = (setSelectedTask: (data: Task | null) => void) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenEditModal = (task: Task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleOpenCreateModal = () => {
    setSelectedTask(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  return {
    isModalOpen,
    handleOpenCreateModal,
    handleOpenEditModal,
    handleCloseModal,
  };
};
