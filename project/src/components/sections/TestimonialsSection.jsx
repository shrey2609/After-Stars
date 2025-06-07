import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import abhi from '../assets/abhi.jpg'
import ashu from '../assets/ashu.jpg'
import aviral from '../assets/aviral.jpg'
import tanmay from '../assets/tanmay.jpg'
import prakh from '../assets/prakh.jpg'

const testimonials = [
  {
    id: 1,
    quote: "Through After Stars, our restaurant has been able to donate over 500 meals to those in need instead of throwing away surplus food. It's a win-win for everyone.",
    name: "Abhishek",
    title: "Restaurant Owner",
    image: abhi,
  },
  {
    id: 2,
    quote: "As an NGO worker, After Stars has revolutionized how we connect with food donors. The platform is intuitive and has helped us feed thousands more people than before.",
    name: "Aviral Jain",
    title: "NGO Coordinator",
    image: aviral,
  },
  {
    id: 3,
    quote: "Volunteering through After Stars has been incredibly rewarding. The platform made it easy to find opportunities where I could make a real difference in my community.",
    name: "Ashutosh Singh",
    title: "Volunteer",
    image: ashu,
  },
  {
    id: 3,
    quote: "Volunteering through After Stars has been incredibly rewarding. The platform made it easy to find opportunities where I could make a real difference in my community.",
    name: "Tanmay Dixit",
    title: "Volunteer",
    image:tanmay,
  },
  {
    id: 3,
    quote: "Volunteering through After Stars has been incredibly rewarding. The platform made it easy to find opportunities where I could make a real difference in my community.",
    name: "Prakhar Srivastav",
    title: "Volunteer",
    image: prakh,
  },

];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gray-100 py-16 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            What People Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400"
          >
            Hear from donors, volunteers, and organizations who are making a difference.
          </motion.p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="glass p-8 md:p-12"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-white">
              <Quote size={32} />
            </div>

            <p className="mb-8 text-center text-lg font-medium italic md:text-xl">
              "{testimonials[activeIndex].quote}"
            </p>

            <div className="flex items-center justify-center">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="mr-4 h-16 w-16 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">{testimonials[activeIndex].name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonials[activeIndex].title}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-primary-500' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-transform hover:scale-110 dark:bg-gray-700"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-transform hover:scale-110 dark:bg-gray-700"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;