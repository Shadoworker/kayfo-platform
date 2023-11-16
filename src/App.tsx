import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ContactPage from './pages/ContactPage';
import GamesPage from './pages/GamesPage';
import GameDetailPage from './pages/GameDetailPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/kayfo-platform" element={<HomePage />} />
          <Route path="/kayfo-platform/games" element={<GamesPage />} />
          <Route path="/kayfo-platform/gamedetail" element={<GameDetailPage />} />
          <Route path="/kayfo-platform/contact" element={<ContactPage />} />

          <Route path="*" element={<NotFoundPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
