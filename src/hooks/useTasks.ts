import { useState, useEffect } from 'react';
import { Task, Filter } from '../types';

const API_URL = 'http://localhost:5000/api';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch tasks from the API
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const queryParam = filter !== 'all' ? `?completed=${filter === 'completed'}` : '';
      const response = await fetch(`${API_URL}/tasks${queryParam}`);
      if (!response.ok) throw new Error('Failed to fetch tasks');
      const data = await response.json();
      setTasks(data.map((task: any) => ({
        ...task,
        id: task._id,
        createdAt: new Date(task.createdAt)
      })));
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Fetch tasks when filter changes
  useEffect(() => {
    fetchTasks();
  }, [filter]);

  // Add a new task
  const addTask = async (content: string) => {
    if (content.trim()) {
      try {
        const response = await fetch(`${API_URL}/tasks`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ content }),
        });
        if (!response.ok) throw new Error('Failed to add task');
        fetchTasks();
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to add task');
      }
    }
  };

  // Toggle task completion
  const toggleTask = async (id: string) => {
    try {
      const task = tasks.find(t => t.id === id);
      if (!task) return;

      const response = await fetch(`${API_URL}/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: !task.completed }),
      });
      if (!response.ok) throw new Error('Failed to update task');
      fetchTasks();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update task');
    }
  };

  // Delete a task
  const deleteTask = async (id: string) => {
    try {
      const response = await fetch(`${API_URL}/tasks/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete task');
      fetchTasks();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete task');
    }
  };

  // Get task statistics
  const stats = {
    total: tasks.length,
    active: tasks.filter(task => !task.completed).length,
    completed: tasks.filter(task => task.completed).length
  };

  return {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    filter,
    setFilter,
    stats,
    loading,
    error
  };
};