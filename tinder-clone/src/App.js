import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import ChatScreen from './ChatScreen';

function App() {
  return (
    <div className="app">
        <Routes>
          <Route
            path="/"
            element={<><Header /><TinderCards /><SwipeButtons /></>}
          />
          <Route
            path="/chats/:person"
            element={<><Header /><ChatScreen /></>}
          />
          <Route
            path="/chats"
            element={<><Header /><Chats /></>}
          />
          <Route
            path="*"
            element={<><Header /><p>404</p></>}
          />
        </Routes>
        
      
    </div>
  );
}

export default App;
