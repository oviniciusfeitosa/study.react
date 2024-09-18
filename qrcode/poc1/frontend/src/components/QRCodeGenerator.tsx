// src/components/HashQRCode.js
import React, { useState } from 'react';
import QRCode from "react-qr-code";

const QRCodeGenerator = ({ hash } :any) => {
  return <QRCode value={hash} />;
};

export default QRCodeGenerator;