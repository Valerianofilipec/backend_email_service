import express from "express";
import cors from "cors";
import {EmailRoutes} from "./routes/email";

const server = express();
/*
const corsOptions = {
    credentials: true,
    origin:  /localhost\:5173/,
}
*/

server.use(cors()); //server.use(cors(),corsOptions); 
server.use(express.json());
server.use(EmailRoutes);

server.listen(3000, ()=>{
    console.log('Email service running...');
});