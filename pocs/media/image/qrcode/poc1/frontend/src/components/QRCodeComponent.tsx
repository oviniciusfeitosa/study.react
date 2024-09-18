// HashQRCodeComponent.js
import React, { useState } from 'react';
import QRCodeGenerator from './QRCodeGenerator';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const QRCodeComponent = () => {
  const [hash, setHash] = useState('Hello QRCode'); // Defina o hash aqui

  const generatePDF = async () => {
    const input = document.getElementById('qrcode-container');
    if(!input) return;
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 10, 10, 180, 180);
    pdf.text("Signature. : ____________________", 20, 200);
    pdf.text("Hash : " + hash, 20, 220);
    pdf.save('qrcode.pdf');
  };

  return (
    <div>
      <h1>Generate QRCode PDF File</h1>
      <div id="qrcode-container">
        <QRCodeGenerator hash={hash} />
      </div>
      <div>
        <label>Hash:</label> <input type="text" value={hash} onChange={(e) => setHash(e.target.value)} />
      </div>
      <div>
        <button onClick={generatePDF}>Baixar PDF</button>
      </div>
    </div>
  );
};

export default QRCodeComponent;
