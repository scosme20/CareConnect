import express from 'express';
import conn from '../database/conn.js'
import cors from 'cors'
import dotenv from 'dotenv'
import router from '../Routes/router.js'; 

dotenv.config()

const app = express();


app.use(express.json());

app.use(cors())

app.use('/api', router);

await conn();


const PORT = process.env.PORT || 8555;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
