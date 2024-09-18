import React from "react";
import QRCode from "qrcode.react";

function QRGenerator(props: any) {
  const { value, documentId } = props;
  return (
    <QRCode
      id={documentId}
      value={value}
      size={144}
      bgColor="#FFF"
      fgColor="#000"
      includeMargin
      level={"H"}
    />
  );
}

export default QRGenerator;
