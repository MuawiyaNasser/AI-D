import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { Layout } from '../components/common/Layout';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { cases } from '../data/cases';
import { useChat } from '../context/useChat';
import { ChatInterface } from '../components/features/chat/ChatInterface';

export const SimulateDetailPage: React.FC = () => {
  const { caseId } = useParams<{ caseId: string }>();
  const caseItem = cases.find((c) => c.id === caseId);
  const { sendMessage, clearChat } = useChat();
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    // Reset chat when component mounts
    clearChat();
    // Reset simulation state
    setIsStarted(false);
  }, [clearChat, caseId]);

  const startSimulation = () => {
    if (caseItem) {
      clearChat();
      setTimeout(() => {
        sendMessage(caseItem.initialPrompt, caseItem.difficulty);
        setIsStarted(true);
      }, 500);
    }
  };

  if (!caseItem) {
    return (
      <Layout>
        <div className="page-container section text-center">
          <h1 className="text-3xl font-bold mb-4">Case Not Found</h1>
          <p className="mb-8">The simulation case you're looking for doesn't exist.</p>
          <Link to="/simulate">
            <Button>Back to Simulations</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const getDifficultyColor = () => {
    switch (caseItem.difficulty) {
      case 'easy':
        return 'secondary';
      case 'medium':
        return 'warning';
      case 'critical':
        return 'danger';
      default:
        return 'default';
    }
  };

  return (
    <Layout hideChat>
      <div className="page-container section">
        <Link to="/simulate" className="inline-flex items-center text-prcs-red-600 hover:text-prcs-red-700 mb-8 dark:text-prcs-red-500 dark:hover:text-prcs-red-400">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Simulations
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8 dark:bg-prcs-black-800">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold">{caseItem.title}</h1>
                <Badge variant={getDifficultyColor()}>
                  {caseItem.difficulty.charAt(0).toUpperCase() + caseItem.difficulty.slice(1)}
                </Badge>
              </div>
              
              <div className="flex items-center space-x-2 mb-4 text-prcs-black-500 dark:text-prcs-black-400">
                <AlertTriangle className="h-4 w-4" />
                <span className="text-sm">Simulation case</span>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Scenario Description</h3>
                <p className="text-prcs-black-700 dark:text-prcs-black-300">{caseItem.description}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Instructions</h3>
                <p className="text-prcs-black-700 mb-4 dark:text-prcs-black-300">
                  This simulation will help you practice your first aid skills. Start the simulation and use the chat interface to:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-prcs-black-700 dark:text-prcs-black-300">
                  <li>Assess the situation</li>
                  <li>Ask for more information about the patient</li>
                  <li>Describe the actions you would take</li>
                  <li>Receive feedback on your approach</li>
                </ul>
              </div>
              
              {!isStarted && (
                <Button className="w-full" onClick={startSimulation}>
                  Start Simulation
                </Button>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <ChatInterface fullScreen />
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};