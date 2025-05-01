import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Circle, Trash2 } from 'lucide-react';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
      transition={{ duration: 0.3 }}
      className={`group flex items-center justify-between p-4 mb-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ${
        task.completed ? 'bg-opacity-80' : ''
      }`}
    >
      <div className="flex items-center flex-1 min-w-0">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onToggle(task.id)}
          className="focus:outline-none mr-3"
          aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
        >
          {task.completed ? (
            <CheckCircle className="text-green-500" size={22} />
          ) : (
            <Circle className="text-gray-400 group-hover:text-blue-400 transition-colors duration-200" size={22} />
          )}
        </motion.button>
        
        <span 
          className={`flex-1 min-w-0 break-words ${
            task.completed 
              ? 'text-gray-400 line-through' 
              : 'text-gray-800'
          } transition-colors duration-200`}
        >
          {task.content}
        </span>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onDelete(task.id)}
        className="ml-2 p-1 text-gray-400 hover:text-red-500 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        aria-label="Delete task"
      >
        <Trash2 size={18} />
      </motion.button>
    </motion.li>
  );
};

export default TaskItem;