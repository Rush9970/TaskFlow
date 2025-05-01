export interface Task {
  id: string;
  content: string;
  completed: boolean;
  createdAt: Date;
}

export type Filter = 'all' | 'active' | 'completed';