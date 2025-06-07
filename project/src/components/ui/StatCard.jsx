import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, color, description }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass p-6"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <h3 className="mt-2 text-3xl font-bold">{value}</h3>
          {description && (
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
        <div className={`rounded-lg ${color} p-3 text-white`}>
          <Icon size={24} />
        </div>
      </div>
    </motion.div>
  );
};

export default StatCard;