import type { Column } from '../types/task';

export const columns: Column[] = [
  { status: 'backlog', title: 'Backlog' },
  { status: 'inProgress', title: 'In Progress' },
  { status: 'review', title: 'Review' },
  { status: 'done', title: 'Done' },
];
