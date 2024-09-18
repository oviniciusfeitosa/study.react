// components/QRCodeReaderComponent.tsx

import React, { useState } from 'react';

export function QRCodeReader () {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      console.error('Nenhum arquivo selecionado.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', selectedFile, selectedFile.name);

      const response = await fetch('http://localhost:3200/read-pdf', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        
        setResult(data.qrCodeText);
      } else {
        console.error('Erro ao enviar o arquivo PDF.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  return (
    <div>
      <h1>Read PDF File</h1>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button onClick={handleUpload}>Enviar PDF</button>
      {result && <p>Resultado:</p>}
      {result && <p>{result}</p>}
    </div>
  );
};

export default QRCodeReader;