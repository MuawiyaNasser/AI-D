import React, { useState, useRef, useEffect } from 'react';
import { Send, RefreshCw } from 'lucide-react';
import { ChatMessage } from './ChatMessage';
import { Button } from '../../ui/Button';
import { Badge } from '../../ui/Badge';
import { useChat } from '../../../context/useChat';
import { Difficulty } from '../../../types';

interface ChatInterfaceProps {
  fullScreen?: boolean;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ fullScreen = false }) => {
  const [input, setInput] = useState('');
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const { messages, sendMessage, clearChat, isLoading } = useChat();

  const messagesRef = useRef<HTMLDivElement>(null);
  const [isUserScrolling, setIsUserScrolling] = useState(false);

  const quickPrompts = [
    'How do I perform CPR?',
    'What to do for a burn?',
    'Steps for choking response',
    'How to control bleeding?',
  ];

  useEffect(() => {
    const container = messagesRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = container;
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
      setIsUserScrolling(!isNearBottom);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const container = messagesRef.current;
    if (container && !isUserScrolling) {
      container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, isUserScrolling]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      sendMessage(input.trim(), difficulty);
      setInput('');
    }
  };

  const handleQuickPrompt = (prompt: string) => {
    if (!isLoading) {
      sendMessage(prompt, difficulty);
    }
  };

  return (
    <div className={`flex flex-col bg-white rounded-lg shadow-md dark:bg-prcs-black-800 ${fullScreen ? 'h-[calc(100vh-12rem)]' : 'h-[30rem]'}`}>
      <div className="flex items-center justify-between p-4 border-b border-prcs-black-200 dark:border-prcs-black-700">
        <div className="flex items-center space-x-2">
          <h3 className="font-semibold">AI-D Chat Assistant</h3>
          <Badge
            variant={
              difficulty === 'easy'
                ? 'secondary'
                : difficulty === 'medium'
                ? 'warning'
                : 'danger'
            }
          >
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </Badge>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearChat}
          aria-label="Clear chat"
          leftIcon={<RefreshCw className="h-4 w-4" />}
        >
          Clear
        </Button>
      </div>

      <div
        ref={messagesRef}
        className="flex-1 overflow-y-auto p-4 bg-prcs-black-50 dark:bg-prcs-black-900"
      >
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="bg-accent-100 p-3 rounded-lg dark:bg-accent-700">
              <div className="flex space-x-2 animate-pulse">
                <div className="h-2 w-2 bg-accent-500 rounded-full"></div>
                <div className="h-2 w-2 bg-accent-500 rounded-full"></div>
                <div className="h-2 w-2 bg-accent-500 rounded-full"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-2 border-t border-prcs-black-200 dark:border-prcs-black-700 overflow-x-auto whitespace-nowrap">
        <div className="flex space-x-2">
          {quickPrompts.map((prompt) => (
            <button
              key={prompt}
              onClick={() => handleQuickPrompt(prompt)}
              className="px-3 py-1 text-xs bg-prcs-black-100 text-prcs-black-700 rounded-full hover:bg-prcs-black-200 whitespace-nowrap dark:bg-prcs-black-700 dark:text-prcs-black-200 dark:hover:bg-prcs-black-600"
              disabled={isLoading}
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-prcs-black-200 dark:border-prcs-black-700">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-sm text-prcs-black-600 dark:text-prcs-black-400">Difficulty:</span>
          {(['easy', 'medium', 'critical'] as const).map((level) => (
            <button
              key={level}
              onClick={() => setDifficulty(level)}
              className={`px-2 py-1 text-xs rounded-md ${
                difficulty === level
                  ? level === 'easy'
                    ? 'bg-prcs-green-100 text-prcs-green-800 dark:bg-prcs-green-900 dark:text-prcs-green-100'
                    : level === 'medium'
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100'
                    : 'bg-prcs-red-100 text-prcs-red-800 dark:bg-prcs-red-900 dark:text-prcs-red-100'
                  : 'bg-prcs-black-100 text-prcs-black-600 hover:bg-prcs-black-200 dark:bg-prcs-black-700 dark:text-prcs-black-300 dark:hover:bg-prcs-black-600'
              }`}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </button>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your first aid question..."
            className="flex-1 px-4 py-2 border border-prcs-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-prcs-red-500 focus:border-transparent dark:bg-prcs-black-700 dark:border-prcs-black-600 dark:text-white resize-none overflow-hidden"
            disabled={isLoading}
            rows={1}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = 'auto';
              target.style.height = target.scrollHeight + 'px';
            }}
          />
          <Button
            type="submit"
            disabled={!input.trim() || isLoading}
            rightIcon={<Send className="h-4 w-4" />}
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};
