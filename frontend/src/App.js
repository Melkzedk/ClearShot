import React from 'react';
import EnhanceForm from './components/EnhanceForm';
import './App.css';
import { FaMagic } from 'react-icons/fa'; // Magic wand icon

function App() {
  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center d-flex justify-content-center align-items-center gap-2">
        <FaMagic color="#007bff" size={36} />
        ClearShot — Image Enhancer
      </h1>
      <EnhanceForm />
    </div>
  );
}

export default App;
