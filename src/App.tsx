import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ChatProvider } from './context/ChatContext';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { StartPage } from './pages/StartPage';
import { ContactPage } from './pages/ContactPage';
import { TopicsPage } from './pages/TopicsPage';
import { TopicDetailPage } from './pages/TopicDetailPage';
import { SimulatePage } from './pages/SimulatePage';
import { SimulateDetailPage } from './pages/SimulateDetailPage';
import { ChatPage } from './pages/ChatPage';

function App() {
  return (
    <ThemeProvider>
      <ChatProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/start" element={<StartPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/topics" element={<TopicsPage />} />
            <Route path="/topics/:topicId" element={<TopicDetailPage />} />
            <Route path="/simulate" element={<SimulatePage />} />
            <Route path="/simulate/:caseId" element={<SimulateDetailPage />} />
            <Route path="/chat" element={<ChatPage />} />
          </Routes>
        </Router>
      </ChatProvider>
    </ThemeProvider>
  );
}

export default App;