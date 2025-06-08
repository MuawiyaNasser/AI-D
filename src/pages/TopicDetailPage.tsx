import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { Layout } from '../components/common/Layout';
import { Button } from '../components/ui/Button';
import { Accordion, AccordionItem } from '../components/ui/Accordion';
import { topics } from '../data/topics';

export const TopicDetailPage: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const topic = topics.find((t) => t.id === topicId);

  if (!topic) {
    return (
      <Layout>
        <div className="page-container section text-center">
          <h1 className="text-3xl font-bold mb-4">Topic Not Found</h1>
          <p className="mb-8">The topic you're looking for doesn't exist.</p>
          <Link to="/topics">
            <Button>Back to Topics</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="page-container section">
        <Link to="/topics" className="inline-flex items-center text-prcs-red-600 hover:text-prcs-red-700 mb-8 dark:text-prcs-red-500 dark:hover:text-prcs-red-400">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Topics
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="sticky top-24"
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img src={topic.imageUrl} alt={topic.title} className="w-full h-auto object-cover" />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm dark:bg-prcs-black-800">
                <h3 className="text-lg font-semibold mb-2">About this Topic</h3>
                <p className="text-sm text-prcs-black-600 mb-4 dark:text-prcs-black-300">{topic.description}</p>
                <Link to="/chat">
                  <Button className="w-full" leftIcon={<BookOpen className="h-4 w-4" />}>
                    Ask AI-D about {topic.title}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{topic.title}</h1>
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8 dark:bg-prcs-black-800">
              <h2 className="text-xl font-semibold mb-4">Step-by-Step Guide</h2>
              <div className="space-y-4">
                {topic.steps.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-prcs-red-100 flex items-center justify-center mr-3 text-prcs-red-600 font-semibold dark:bg-prcs-red-900">
                      {index + 1}
                    </div>
                    <div className="pt-1">
                      <p className="text-prcs-black-800 dark:text-prcs-black-200">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm dark:bg-prcs-black-800">
              <h2 className="text-xl font-semibold mb-4">Common Questions</h2>
              <Accordion>
                <AccordionItem title="When should I use this technique?">
                  <p className="text-prcs-black-700 dark:text-prcs-black-300">
                    This technique should be used in emergency situations where the patient shows specific symptoms related to {topic.title.toLowerCase()}. Always assess the situation first and ensure it's safe to approach the patient.
                  </p>
                </AccordionItem>
                <AccordionItem title="What are the most common mistakes?">
                  <p className="text-prcs-black-700 dark:text-prcs-black-300">
                    Common mistakes include improper technique, hesitation, and not following the proper sequence of steps. Practice regularly to build confidence and muscle memory.
                  </p>
                </AccordionItem>
                <AccordionItem title="When should I call emergency services?">
                  <p className="text-prcs-black-700 dark:text-prcs-black-300">
                    Always call emergency services immediately for severe cases. For {topic.title.toLowerCase()}, call immediately if the patient shows signs of severe distress, loss of consciousness, or if you're unsure about how to proceed.
                  </p>
                </AccordionItem>
              </Accordion>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};