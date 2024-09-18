const path = require('path');
const { fromPath, fromBuffer } = require('pdf2pic');
const { PNG } = require('pngjs');
const jsQR = require('jsqr');

async function getQRCodeFromPDF (filename) {
  try {
    const pdfFilePath = path.resolve(__dirname, `../${filename}`);

    const pdf2picOptions = {
      quality: 100,
      // density: 300,
      format: 'png',
      // width: 2000,
      // height: 2000,
    };

    const base64Response = await fromPath(pdfFilePath, pdf2picOptions)(1, true);
    // (
    //   1, // page number to be converted to image
    //   true // returns base64 output
    // );
    
    const dataUri = base64Response?.base64;

    if (!dataUri)
      throw new Error('PDF could not be converted to Base64 string');

    const buffer = Buffer.from(dataUri, 'base64');
    const png = PNG.sync.read(buffer);
    // const png = PNG.sync.read(pdfBuffer);

    const code = jsQR(Uint8ClampedArray.from(png.data), png.width, png.height);
    // const code = jsQR(Uint8ClampedArray.from(png.data), png.width, png.height);
    const qrCodeText = code?.data;

    if (!qrCodeText)
      throw new Error('QR Code Text could not be extracted from PNG image');

    return qrCodeText;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getQRCodeFromPDF
}