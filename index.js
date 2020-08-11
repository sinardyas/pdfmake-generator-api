import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import generatePdf from './generator';
import pdfContent from './pinjamanOnline';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/ping', (req, res) => res.json({ message: 'Im awake!' }));

app.post('/v1/generate-pdf/pinjaman-online', (req, res) => {
  const docDefinition = pdfContent;

  generatePdf(docDefinition, (response) => res.send(response)); // sends a base64 encoded string to client
});

app.post('/v1/generate-pdf', (req, res) => {
    const docDefinition = req.body;

    generatePdf(docDefinition, (response) => res.send(response)); // sends a base64 encoded string to client
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`); // eslint-disable-line
});