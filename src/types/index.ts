export interface Topic {
  id: string;
  title: string;
  description: string;
  steps: string[];
  imageUrl: string;
}

export interface Case {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'critical';
  initialPrompt: string;
}

export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export type Difficulty = 'easy' | 'medium' | 'critical';

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export interface ChatContextType {
  messages: Message[];
  sendMessage: (content: string, difficulty: Difficulty) => void;
  clearChat: () => void;
  isLoading: boolean;
}