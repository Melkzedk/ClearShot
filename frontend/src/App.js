import React from 'react';
import EnhanceForm from './components/EnhanceForm';
import './App.css';
import { FaReact } from 'react-icons/fa';

function App() {
  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center d-flex justify-content-center align-items-center gap-2">
        <FaReact color="#61DBFB" size={40} />
        ClearShot — Image Enhancer
      </h1>
      <EnhanceForm />
    </div>
  );
}

export default App;
