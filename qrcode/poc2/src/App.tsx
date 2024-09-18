import "./App.css";
import QRCodeDocument from "./components/QRCodeDocument";
import QRGenerator from "./components/QRGenerator";
import logo from './logo.svg';
import { PDFDownloadLink } from "@react-pdf/renderer";

function App() {
  const qrCodeData = [
    { id: 1234, value: "TEST1" },
    { id: 1235, value: "TEST2" }
  ];
  const qrCodeIds = qrCodeData.map((data) => data.id);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div className="App">
      <h1>Hello CodeSandbox</h1>
      {qrCodeData.map((data) => {
        return <QRGenerator key={data.id} value={data.value} documentId={data.id} />;
      })}
      <h2>Download to see some magic happen!</h2>
      <PDFDownloadLink
        document={<QRCodeDocument ids={qrCodeIds} />}
        fileName="qrcode.pdf"
      >
        {({ loading }) => (loading ? "Loading..." : "Download PDF")}
      </PDFDownloadLink>
    </div>
      </header>
    </div>
  );
}

export default App;
