import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/common/Layout';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const ContactPage: React.FC = () => {
  return (
    <Layout>
      <div className="page-container section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-prcs-black-600 max-w-2xl mx-auto dark:text-prcs-black-300">
            Get in touch with the Palestinian Red Crescent Society or the AI-D team
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-prcs-black-700 mb-1 dark:text-prcs-black-300">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full px-4 py-2 border border-prcs-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-prcs-red-500 focus:border-transparent dark:bg-prcs-black-700 dark:border-prcs-black-600 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-prcs-black-700 mb-1 dark:text-prcs-black-300">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full px-4 py-2 border border-prcs-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-prcs-red-500 focus:border-transparent dark:bg-prcs-black-700 dark:border-prcs-black-600 dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-prcs-black-700 mb-1 dark:text-prcs-black-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-prcs-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-prcs-red-500 focus:border-transparent dark:bg-prcs-black-700 dark:border-prcs-black-600 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-prcs-black-700 mb-1 dark:text-prcs-black-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-prcs-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-prcs-red-500 focus:border-transparent dark:bg-prcs-black-700 dark:border-prcs-black-600 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-prcs-black-700 mb-1 dark:text-prcs-black-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-prcs-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-prcs-red-500 focus:border-transparent dark:bg-prcs-black-700 dark:border-prcs-black-600 dark:text-white"
                ></textarea>
              </div>
              <Button type="submit" rightIcon={<Send className="h-4 w-4" />}>
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8 dark:bg-prcs-black-800">
              <h3 className="text-xl font-semibold mb-4">Palestinian Red Crescent Society</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <MapPin className="h-6 w-6 text-prcs-red-600 mr-3 flex-shrink-0" />
                  <span className="text-prcs-black-700 dark:text-prcs-black-300">
                    Nablus, Palestine
                  </span>
                </li>
                <li className="flex">
                  <Phone className="h-6 w-6 text-prcs-red-600 mr-3 flex-shrink-0" />
                  <span className="text-prcs-black-700 dark:text-prcs-black-300">+970 599 989 846</span>
                </li>
                <li className="flex">
                  <Mail className="h-6 w-6 text-prcs-red-600 mr-3 flex-shrink-0" />
                  <span className="text-prcs-black-700 dark:text-prcs-black-300">info@palestinercs.org</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm dark:bg-prcs-black-800">
              <h3 className="text-xl font-semibold mb-4">AI-D Technical Support</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <Mail className="h-6 w-6 text-prcs-red-600 mr-3 flex-shrink-0" />
                  <span className="text-prcs-black-700 dark:text-prcs-black-300">support@ai-d.org</span>
                </li>
                <li className="flex">
                  <Phone className="h-6 w-6 text-prcs-red-600 mr-3 flex-shrink-0" />
                  <span className="text-prcs-black-700 dark:text-prcs-black-300">+970 599 989 846</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-prcs-black-200 dark:border-prcs-black-700">
                <h4 className="font-semibold mb-2">Support Hours</h4>
                <p className="text-sm text-prcs-black-600 dark:text-prcs-black-400">
                  Sunday - Thursday: 8:00 AM - 5:00 PM (Palestine Standard Time)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};