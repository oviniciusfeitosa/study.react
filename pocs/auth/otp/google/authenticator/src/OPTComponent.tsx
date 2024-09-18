import QRCode from 'qrcode.react';
import React, { useEffect, useState } from 'react';
import OTPInput from 'react-otp-input';

const OTPComponent: React.FC = () => {
  const [otpSecret, setOTPSecret] = useState('');
  const [otpValue, setOTPValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // Função para gerar um segredo aleatório para o OTP
    const generateOTPSecret = () => {
      const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
      let secret = '';
      for (let i = 0; i < 16; i++) {
        secret += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      setOTPSecret(secret);
    };

    generateOTPSecret();
  }, []);

  const handleOTPChange = (value: string) => {
    setOTPValue(value);
  };

  const validateOTP = () => {
    // Implemente a validação do OTP aqui.
    // Você pode usar a biblioteca 'speakeasy' para validar o OTP com base no segredo gerado.
    // Lembre-se de configurar o Google Authenticator ou um aplicativo semelhante com o mesmo segredo.
    // Aqui está um exemplo simples de validação (não seguro):
    if (otpSecret && otpValue) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className='container'>
      <div>
        <QRCode value={`otpauth://totp/MyApp:${otpSecret}?secret=${otpSecret}`} />
      </div>
      <div>
        <p>Escaneie o QR Code usando o Google Authenticator</p>
      </div>
      <div>
        <OTPInput
          value={otpValue}
          onChange={handleOTPChange}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
        />
      </div>
      <div>
        <button onClick={validateOTP}>Validar OTP</button>
        {isValid ? <p>OTP válido!</p> : <p>OTP inválido!</p>}
      </div>
    </div>
  );
};

export default OTPComponent;
