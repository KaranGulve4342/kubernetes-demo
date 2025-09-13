import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: "Hello from a container!",
    service: 'hello-node',
    pod: process.env.POD_NAME || 'unknown',
    time: new Date().toISOString(),
  })
});

app.get('/ready', (req, res) => {
    res.status(200).send('ready');
});

app.get('/healthy', (req, res) => {
    res.status(200).send('healthy');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});