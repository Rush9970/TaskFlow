import React from 'react';
import { motion } from 'framer-motion';
import { Filter } from '../types';

interface FilterTabsProps {
  currentFilter: Filter;
  onFilterChange: (filter: Filter) => void;
  stats: {
    total: number;
    active: number;
    completed: number;
  };
}

const FilterTabs: React.FC<FilterTabsProps> = ({ currentFilter, onFilterChange, stats }) => {
  const filters: { value: Filter; label: string; count: number }[] = [
    { value: 'all', label: 'All', count: stats.total },
    { value: 'active', label: 'Active', count: stats.active },
    { value: 'completed', label: 'Completed', count: stats.completed }
  ];

  return (
    <div className="flex justify-center mb-6">
      <div className="bg-gray-100 p-1 rounded-lg inline-flex">
        {filters.map(filter => (
          <motion.button
            key={filter.value}
            whileHover={{ y: -1 }}
            whileTap={{ y: 1 }}
            onClick={() => onFilterChange(filter.value)}
            className={`relative px-4 py-2 text-sm rounded-md transition-colors duration-200 focus:outline-none ${
              currentFilter === filter.value
                ? 'text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {currentFilter === filter.value && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-md"
                initial={false}
                transition={{ type: 'spring', duration: 0.5 }}
              />
            )}
            <span className="relative z-10 flex items-center">
              {filter.label}
              {filter.count > 0 && (
                <span className={`ml-1.5 px-1.5 py-0.5 text-xs rounded-full ${
                  currentFilter === filter.value 
                    ? 'bg-white bg-opacity-30 text-white' 
                    : 'bg-gray-200 text-gray-700'
                }`}>
                  {filter.count}
                </span>
              )}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default FilterTabs;