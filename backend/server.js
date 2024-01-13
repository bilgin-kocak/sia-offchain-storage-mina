const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001; // You can choose any available port

app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.get('/offchain', async (req, res) => {
  try {
    const username = ''; // Replace with your username
    const password = '123456'; // Replace with your password
    const auth = Buffer.from(`${username}:${password}`).toString('base64');

    // Define the URL and headers
    const url =
      'http://localhost:9880/api/worker/objects/offchain.json?bucket=voting';
    const headers = {
      Authorization: `Basic ${auth}`,
    };

    // Forward the PUT request
    const response = await axios.get(url, { headers: headers });

    // Send back the response from the target server
    res.status(response.status).send(response.data);
  } catch (error) {
    console.error('Error forwarding PUT request:', error);
    res.status(500).send('Error forwarding request');
  }
});

// PUT endpoint
app.put('/offchain', async (req, res) => {
  try {
    // Extract data from the incoming request
    const data = req.body;

    // // Your object
    // const obj = {
    //   voters: [
    //     '4858060760719592737905497813249980962237688763740004316685311851052356036041',
    //     '4858060760719592737905497813249980962237688763740004316685311851052356036041',
    //     '4858060760719592737905497813249980962237688763740004316685311851052356036041',
    //     '4858060760719592737905497813249980962237688763740004316685311851052356036041',
    //   ],
    //   voterCounts: [0, 0],
    //   nullifiers: [],
    // };

    // // Convert the object to a JSON string
    // const data = JSON.stringify(obj);

    const username = ''; // Replace with your username
    const password = '123456'; // Replace with your password
    const auth = Buffer.from(`${username}:${password}`).toString('base64');

    // Define the URL and headers
    const url =
      'http://localhost:9880/api/worker/objects/offchain.json?bucket=voting';
    const headers = {
      'Content-Type': 'text/plain',
      Authorization: `Basic ${auth}`,
    };

    // Forward the PUT request
    const response = await axios.put(url, data, { headers: headers });

    // Send back the response from the target server
    res.status(response.status).send('success');
  } catch (error) {
    console.error('Error forwarding PUT request:', error);
    res.status(500).send('Error forwarding request');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
