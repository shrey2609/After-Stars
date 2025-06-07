import React from 'react';
import { motion } from 'framer-motion';
import StatCard from '../ui/StatCard';
import { Users, ShoppingBag, Utensils, Building } from 'lucide-react';

const ImpactSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            Our Impact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400"
          >
            Together, we're making a difference in communities around the world.
            Here's what we've accomplished so far.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <StatCard
              title="Meals Donated"
              value="25,384"
              icon={Utensils}
              color="bg-primary-500"
              description="Nutritious meals provided to those in need"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <StatCard
              title="Active Donors"
              value="120+"
              icon={ShoppingBag}
              color="bg-secondary-500"
              description="Individuals and businesses sharing food"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <StatCard
              title="Volunteers"
              value="750"
              icon={Users}
              color="bg-accent-500"
              description="Dedicated people making it possible"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <StatCard
              title="Partner NGOs"
              value="45"
              icon={Building}
              color="bg-success-500"
              description="Organizations helping distribute food"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <div className="h-4 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
            <div className="h-full w-[75%] rounded-full bg-primary-500 text-center text-xs font-medium text-white">
              65% to 2025 goal
            </div>
          </div>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Our goal: Provide 100,000 meals by the end of 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;