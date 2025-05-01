import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TaskItem from './TaskItem';
import { Task } from '../types';
import { ListFilter } from 'lucide-react';

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  stats: {
    total: number;
    active: number;
    completed: number;
  };
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete, stats }) => {
  // List of motivational quotes to show when the task list is empty
  const motivationalQuotes = [
    "The secret of getting ahead is getting started.",
    "Don't wait. The time will never be just right.",
    "Start where you are. Use what you have. Do what you can.",
    "The best way to predict the future is to create it.",
    "Small progress is still progress."
  ];

  // Get a random quote
  const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  return (
    <div className="w-full">
      {/* Task Stats */}
      <div className="flex items-center justify-between mb-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center text-sm text-gray-500"
        >
          <ListFilter size={16} className="mr-1 text-blue-500" />
          <span>
            {stats.total === 0 
              ? 'No tasks yet' 
              : `${stats.active} active, ${stats.completed} completed`}
          </span>
        </motion.div>
      </div>

      {/* Task List */}
      {tasks.length > 0 ? (
        <motion.ul layout>
          <AnimatePresence initial={false}>
            {tasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            ))}
          </AnimatePresence>
        </motion.ul>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center p-8 text-center"
        >
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ 
              scale: [0.8, 1.05, 1],
              transition: { duration: 0.5 }
            }}
            className="mb-4 p-3 bg-blue-100 rounded-full"
          >
            <ListFilter size={32} className="text-blue-500" />
          </motion.div>
          <p className="text-lg text-gray-600 mb-2">Your task list is empty</p>
          <p className="text-sm text-gray-500 italic max-w-xs">"{randomQuote}"</p>
        </motion.div>
      )}
    </div>
  );
};

export default TaskList;