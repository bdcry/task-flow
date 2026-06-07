import type { TaskStatus } from './task';

export interface Column {
  status: TaskStatus;
  title: string;
}
