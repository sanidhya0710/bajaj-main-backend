const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

app.post('/bfhl', (req, res) => {
  try {
    const { data } = req.body;

    // Input validation
    if (!Array.isArray(data)) {
      return res.status(400).json({ error: 'Data must be an array' });
    }

    const numbers = [];
    const alphabets = [];
    for (const item of data) {
      if (!isNaN(item)) {
        numbers.push(parseInt(item));
      } else if (typeof item === 'string') {
        alphabets.push(item.toUpperCase());
      }
    }

    // Replace this with your actual data processing logic
    const userId = 'john_doe_17091999';
    const email = 'john@xyz.com';
    const rollNumber = 'ABCD123';

    let highestAlphabet = '';
    for (const alphabet of alphabets) {
      if (alphabet > highestAlphabet) {
        highestAlphabet = alphabet;
      }
    }

    const response = {
      is_success: true,
      user_id: userId,
      email,
      roll_number: rollNumber,
      numbers,
      alphabets,
      highest_alphabet: highestAlphabet ? [highestAlphabet] : [],
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});