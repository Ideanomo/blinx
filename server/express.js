import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import Template from './../template';
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';
import productRoutes from './routes/product.routes';
import devBundle from "./devBundle"; //TODO: Remove in production

const app = express();
const CURRENT_WORKING_DIR = process.cwd()

devBundle.compile(app)               // TODO: Remove in production

app.get('/', (req, res) => {
    res.status(200).send(Template())
})

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use('/', userRoutes);
app.use('/', productRoutes);
app.use('/', authRoutes);
app.use(cors())

export default app;