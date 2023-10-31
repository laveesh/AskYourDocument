import React, { useState } from 'react';
import './App.css';
import FileUpload from './FileUpload';
import MessageInput from './MessageInput';

function App() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileUpload = (file: File) => {
    setSelectedFile(file);
  };

  return (
    <div className="App">
      <h1>PDF Upload and API Integration</h1>
      <FileUpload onFileUpload={handleFileUpload} />
      <MessageInput />
      {selectedFile && <p>Selected PDF file: {selectedFile.name}</p>}
    </div>
  );
}

export default App;
