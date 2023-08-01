import express from "express";
import bodyParser from "body-parser";
import * as admin from 'firebase-admin';
import firebaseCredentials from './firebase-credentials.json';
import cors from "cors";
import {protectRoute, routes} from './routes';
import {database} from "./database";
import socketIO from 'socket.io'
import http from 'http'

admin.initializeApp({credential: admin.credential.cert(firebaseCredentials)});

const app = express();

app.use(cors());
app.use(bodyParser.json());

// register routes
routes.forEach(route => {
    app[route.method](route.path, protectRoute, route.requestProcessor);
})

const server = http.createServer(app)
const io = socketIO(server, {
    cors: {
        origin:'*'
    }
})

io.on("connection", async (socket)=> {
    socket.on("sendMessage", async function (data){
        await addMessage(data.message, data.userId, data.chatId)
    })
})

const start = async () => {
    await database.connect('mongodb://127.0.0.1:27017');
    server.listen(8080, () => {
        console.log("Listening on port 8080");
    })
};
start();
