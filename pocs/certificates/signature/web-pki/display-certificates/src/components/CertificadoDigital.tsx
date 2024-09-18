import { useEffect, useState } from "react";
import WebPKI, { type CertificateModel } from "web-pki";

const CertificadoDigital = () => {
  const [certificados, setCertificados] = useState<CertificateModel[]>([]);
  const [certificadoSelecionado, setCertificadoSelecionado] = useState<CertificateModel>();

  useEffect(() => {
    const pki = new WebPKI();
    pki.init({
      ready: () => {
        pki.listCertificates().success((callback) => {
          setCertificados(callback);
        });
      },
    });
  }, []);

  return (
    <div>
      <h1>Selecione um Certificado Digital</h1>
      <select id="certificatesSelect" onChange={(e) => {
          const selectedCert = certificados.find((cert) => cert.thumbprint === e.target.value);
          setCertificadoSelecionado(selectedCert);
        }}>
          <option key={"00000"} value={""}>
            -- Selecione um Certificado --
          </option>
          {certificados.map((cert, index) => (
            <option key={index} value={cert.thumbprint}>
              {cert.subjectName}
            </option>
          ))}
        </select>
      {certificadoSelecionado && (
        <div>
          <h2>Informações do Certificado</h2>
          <p>
            <strong>Nome:</strong> {certificadoSelecionado.subjectName}
          </p>
          <p>
            <strong>Email:</strong> {certificadoSelecionado.email}
          </p>
          <p>
            <strong>Emissor:</strong> {certificadoSelecionado.issuerName}
          </p>
          <p>
            <strong>Válido até:</strong> {certificadoSelecionado.validityEnd.toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default CertificadoDigital;
