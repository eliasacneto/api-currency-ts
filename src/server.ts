import express, { Application } from 'express';
import bodyParser from 'body-parser';
import currencyRoutes from './routes/currency';

const app: Application = express();
const port: number = 3000;

app.use(bodyParser.json());

app.use('/api', currencyRoutes);

app.listen(port, () => {
    console.log(`Currency converter API listening at http://localhost:${port}`);
});
