import express, { Application } from "express";

import { dev } from "./config";
import {errorHandeler}  from "./middleware/errorHndeler";
import productsRouter from './routes/productsRoute';
import { connectDB } from "./config/db";

const app: Application = express();

const port : number = dev.app.port;
// const PORT = process.env.SERVER_PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/products', productsRouter);
app.use(errorHandeler);

app.listen(port, async()=>{
    console.log(`Server is running at http://localhost:${port}`);
    await connectDB();
});



