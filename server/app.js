import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import { createTables } from './utils/createTables.js';
//import { errorMiddleware } from "./middlewares/errorMiddleware.js";



export const app = express();
config({path: './config/config.env'});

app.use(
    cors({
    origin: [process.env.FRONTEND_URL,process.env.DASHBOARD_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    
})
);

app.use(cookieParser()); //To parse cookies from incoming requests
app.use(express.json()); //To parse JSON data from incoming requests
app.use(express.urlencoded({ extended: true })); //To parse URL-encoded data from incoming requests example:which kind of data is sent by forms array,string,object etc..

app.use(
    fileUpload({
        tempFileDir: "./uploads/",
        useTempFiles: true,
    })
);

createTables();
//app.use(errorMiddleware);

export default app;

