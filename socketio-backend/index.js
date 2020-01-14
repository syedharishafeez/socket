const express = require('express');
const app = express();

const PORT = "4000";

const server = app.listen(PORT)

const io = require("socket.io")(server);

io.on("connection", (socket) => {
    console.log("new user connected")
    setInterval(() => {
        console.log("connected")
        socket.emit('news', "hello");
        socket.emit('naam', "hassan");

        // res.status(200).json({ 'a': "connected" })
    }, 1000)
})
// let id = setInterval(() => {
//     console.log("connected")
//     // res.status(200).json({ 'a': "connected" })
// }, 1000)


app.get("/create-connection", (req, res) => {
    console.log("connected")
    setInterval(() => {
        console.log("connected")
        // res.status(200).json({ 'a': "connected" })
    }, 100)

})


// var app = require('express')();
// var server = require('http').Server(app);
// var io = require('socket.io')(server);

// server.listen(4000);
// // WARNING: app.listen(80) will NOT work here!

// app.get('/', (req, res) => {
//     console.log("Hello");
// });

// io.on('connection', function (socket) {
//     socket.emit('news', { hello: 'world' });
//     socket.on('my other event', function (data) {
//         console.log(data);
//     });
// });