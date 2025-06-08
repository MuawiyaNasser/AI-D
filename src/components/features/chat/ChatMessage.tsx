import React from 'react';
import { Message } from '../../../types';
import { MessageSquare, User } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
          isUser ? 'bg-prcs-green-600 ml-2' : 'bg-accent-600 mr-2'
        }`}>
          {isUser ? (
            <User className="h-4 w-4 text-white" />
          ) : (
            <MessageSquare className="h-4 w-4 text-white" />
          )}
        </div>

        <div className={`relative p-3 rounded-lg ${
          isUser ? 'chat-bubble-user' : 'chat-bubble-ai'
        }`}>
          {message.content.split('\n').map((line, index) => {
            const isArabic = /[\u0600-\u06FF]/.test(line);
            return (
              <p
                key={index}
                className={`text-sm mb-2 whitespace-pre-wrap ${isArabic ? 'text-right' : 'text-left'}`}
                dir={isArabic ? 'rtl' : 'ltr'}
                lang={isArabic ? 'ar' : 'en'}
              >
                {line}
              </p>
            );
          })}

          <div className="text-xs mt-1 opacity-70 text-right">
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    </div>
  );
};
