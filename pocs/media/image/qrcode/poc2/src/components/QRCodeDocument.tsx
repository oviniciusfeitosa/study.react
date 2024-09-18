import React from "react";
import { Document, Page, Image, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    // display: "block"
  },
  view: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%"
  },
  qrImage: {
    width: "100%",
    height: "100%"
  }
});

function QRCodePage({ id }) {
  const dataUrl = document.getElementById(id).toDataURL();
  return (
    <Page key={`page_${id}`} size="B8" style={styles.page}>
      <View style={styles.view}>
        <Image allowDangerousPaths src={dataUrl} style={styles.qrImage} />
      </View>
    </Page>
  );
}

function QRCodeDocument({ ids }) {
  return (
    <Document>
      {ids.map((id) => (
        <QRCodePage id={id} />
      ))}
    </Document>
  );
}

export default QRCodeDocument;
