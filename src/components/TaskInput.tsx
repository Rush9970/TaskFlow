import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface TaskInputProps {
  onAddTask: (content: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onAddTask(content);
      setContent('');
    }
  };

  return (
    <motion.form 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit} 
      className="w-full mb-6"
    >
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Add a new task..."
          className="w-full px-4 py-3 pr-12 text-gray-700 bg-white border-2 border-blue-100 rounded-lg focus:outline-none focus:border-blue-400 transition-colors duration-200"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="absolute right-2 p-1 text-blue-500 hover:text-blue-700 focus:outline-none transition-colors duration-200"
          aria-label="Add task"
        >
          <PlusCircle size={24} />
        </motion.button>
      </div>
    </motion.form>
  );
};

export default TaskInput;