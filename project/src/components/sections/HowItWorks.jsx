import React from 'react';
import { motion } from 'framer-motion';
import { PackageOpen, Truck, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    icon: PackageOpen,
    title: 'Donate Food',
    description: 'Donate your surplus food through our platform. Every bit helps in reducing food waste.',
    color: 'bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400',
  },
  {
    icon: Truck,
    title: 'We Collect & Distribute',
    description: 'Our volunteers collect and deliver donated food to nearby distribution centers.',
    color: 'bg-secondary-100 text-secondary-600 dark:bg-secondary-900/30 dark:text-secondary-400',
  },
  {
    icon: Users,
    title: 'Reach The Needy',
    description: 'The food reaches those who need it the most, providing nourishment and hope.',
    color: 'bg-accent-100 text-accent-600 dark:bg-accent-900/30 dark:text-accent-400',
  },
  {
    icon: Award,
    title: 'Make An Impact',
    description: 'Track your contributions and see the real-world impact of your donations.',
    color: 'bg-success-100 text-success-500 dark:bg-success-900/30 dark:text-success-400',
  },
];

const HowItWorks= () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400"
          >
            Our platform makes food donation simple and effective. Follow these steps to start making a difference today.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full dark:bg-gray-800">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full ${step.color}`}>
                  <step.icon size={24} />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 rounded-lg bg-primary-500 p-8 text-center text-white"
        >
          <h3 className="mb-4 text-2xl font-bold">Ready to Make a Difference?</h3>
          <p className="mb-6">Join thousands of donors and volunteers who are fighting hunger in their communities.</p>
          <div className="flex flex-wrap justify-center gap-4">
          <Link to="/donate">
            <button className="btn bg-white px-6 py-3 text-primary-700 transition-colors hover:bg-gray-100">
              Donate Food
            </button>
            </Link>
            <Link to="/register">
            <button className="btn border-2 border-white bg-transparent px-6 py-3 text-white transition-colors hover:bg-white/10">
              Become a Volunteer
            </button>
            </Link>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;