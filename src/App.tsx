import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import FilterTabs from './components/FilterTabs';
import { useTasks } from './hooks/useTasks';

function App() {
  const { tasks, addTask, toggleTask, deleteTask, filter, setFilter, stats } = useTasks();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4 sm:px-6">
      <div className="max-w-lg mx-auto">
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center mb-3">
            <motion.div
              animate={{ 
                rotate: [0, 360],
                transition: { duration: 1, delay: 0.5 }
              }}
            >
              <CheckCircle size={32} className="text-blue-600 mr-2" />
            </motion.div>
            <h1 className="text-3xl font-bold text-gray-800">
              TaskFlow
            </h1>
          </div>
          <p className="text-gray-600">Stay organized, focused, and productive</p>
        </motion.header>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-6"
        >
          <TaskInput onAddTask={addTask} />
          
          <FilterTabs 
            currentFilter={filter} 
            onFilterChange={setFilter} 
            stats={stats} 
          />
          
          <TaskList 
            tasks={tasks} 
            onToggle={toggleTask} 
            onDelete={deleteTask} 
            stats={stats}
          />
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          TaskFlow © {new Date().getFullYear()}
        </motion.footer>
      </div>
    </div>
  );
}

export default App;