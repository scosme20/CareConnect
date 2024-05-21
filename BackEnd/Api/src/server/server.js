import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import conn from '../database/conn.js';
import router from '../routes/router.js';
import logger from '../logs/logger.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', router);


app.post('/logs', (req, res) => {
  const { level, message } = req.body;
  logger.log(level, message);
  res.status(200).send('Log received');
});


conn().then(() => {
  const PORT = process.env.PORT || 8555;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to connect to the database:', err);
  process.exit(1);
});
