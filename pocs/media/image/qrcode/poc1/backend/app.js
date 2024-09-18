const express = require('express');
const { getQRCodeFromPDF } = require('./services/QRCode');
const fs = require('fs');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });

const app = express();
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000'
}));
// app.use(fileUpload());
// app.use(express.raw({ type: 'application/pdf' }));

app.post('/read-pdf', upload.single('file'), async (req, res, next) => {
  try {
    const { buffer, originalname } = req.file;
    console.log(req.file);
    if (!req.file || Object.keys(req.file).length === 0) {
      return res.status(400).send('No file were uploaded.');
    }

    const writeStream = fs.createWriteStream(originalname, { flags: 'a' });
    writeStream.write(buffer);
    writeStream.end();

    writeStream.on('finish', async () => {
      const result = await getQRCodeFromPDF(originalname);
      res.status(200).send({qrCodeText: result});
    });

    // Event listener for any errors during the write operation
    writeStream.on('error', (err) => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });


  } catch (error) {
    next(error);
  }
});

app.listen(3200, function () {
  console.log('App listening on port 3200!');
});
