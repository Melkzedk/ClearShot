import React from 'react';
import EnhanceForm from './components/EnhanceForm';
import './App.css';
import { FaMagic } from 'react-icons/fa'; // example icon

function App() {
  return (
    <div className="container py-5 d-flex flex-column min-vh-100">
      <h1 className="mb-4 text-center d-flex justify-content-center align-items-center gap-2">
        <FaMagic color="#007bff" size={36} />
        ClearShot — Image Enhancer
      </h1>

      <div className="flex-grow-1">
        <EnhanceForm />
      </div>

      <footer className="text-center mt-5 py-3 border-top">
        <small>© {new Date().getFullYear()} Designed by MelkTech — All rights reserved.</small>
      </footer>
    </div>
  );
}

export default App;
