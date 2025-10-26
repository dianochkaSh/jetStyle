import express, { Express } from 'express';
import connectDB from  './db/indes';
import subscribeRoot from './routes/subscribe';
import cors from 'cors';
const  app: Express = express();

const port = 8081;

connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.get('/', (req, res) => {
    res.send("Hello express");
});
app.use('/api', subscribeRoot);

app.listen(port, () => {
  console.log("lister port" + port);
});
