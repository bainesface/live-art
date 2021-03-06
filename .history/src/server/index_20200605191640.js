const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.json());

app.use(express.static('build'));

// const path = require("path");
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "build", "index.html"));
// });

io.on('connection', (socket) => {
  socket.on('join', (data) => {
    console.log(data);
    socket.join(data.room);
    if (data.paymentPointer) {
      io.in(data.room).emit('paymentPointer', data.paymentPointer);
    }
  });

  socket.on('drawing', (data) => {
    socket.in(data.room).broadcast.emit('drawingFromServer', data);
  });
});

const PORT = process.env.PORT || 8080;

server.listen(PORT);

console.log(`server listening on ${PORT}`);
