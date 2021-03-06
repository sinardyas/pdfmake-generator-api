import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import generatePdf from './generator';
import pinjamanOnline from './pinjamanOnline';
import pendaftaranOnline from './pendaftaranOnline';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/wake-me-up', (req, res) => res.json({ message: 'Im awake!' }));

app.use((req, res, next) => {
  // -----------------------------------------------------------------------
  // authentication middleware

  const auth = { login: 'admin', password: 'supersecretpassw000rd' }; // change this

  // parse login and password from headers
  const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
  const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

  // Verify login and password are set and correct
  if (login && password && login === auth.login && password === auth.password) {
    // Access granted...
    return next();
  }

  // Access denied...
  res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
  return res.status(401).json({ status: 401, message: 'Authentication required.' }); // custom message
});


app.post('/v1/generate-pdf/pinjaman-online', (req, res) => {
  const docDefinition = pinjamanOnline(req.body);

  const { downloadable } = req.query;

  generatePdf(docDefinition, (response) => {
    if (downloadable) {
      res.header('content-type', 'application/pdf');
      return res.send(response);
    }
    return res.json({
      status: 200,
      data: response
    });
  }); // sends a base64 encoded string to client
});

app.post('/v1/generate-pdf/pendaftaran-anggota', (req, res) => {
  const docDefinition = pendaftaranOnline(req.body);

  const { downloadable } = req.query;

  generatePdf(docDefinition, (response) => {
    if (downloadable) {
      res.header('content-type', 'application/pdf');
      return res.send(response);
    }
    return res.json({
      status: 200,
      data: response
    });
  }); // sends a base64 encoded string to client
});

app.post('/v1/generate-pdf', (req, res) => {
    const docDefinition = req.body;

    const { downloadable } = req.query;

    generatePdf(docDefinition, (response) => {
      if (downloadable) {
        res.header('content-type', 'application/pdf');
        return res.send(response);
      }
      return res.json({
        status: 200,
        data: response
      });
    }); // sends a base64 encoded string to client
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`); // eslint-disable-line
});