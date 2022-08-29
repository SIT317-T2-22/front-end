import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './app';
import { CssBaseline } from '@mui/material';
import Settings from './routes/settings';


const root = ReactDOM.createRoot(
  document.getElementById("root")
);


root.render(
  <BrowserRouter>
  <CssBaseline />
    <Routes>
      <Route path="/" element={
        <App />
      } />
      <Route path="/settings" element={
        <Settings />
      } />
    </Routes>
  </BrowserRouter>
);
