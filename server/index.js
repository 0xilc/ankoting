//index.js
const express = require('express');
const dotenv = require('dotenv');
const app = express();
const http = require('http').Server(app);
const cors = require('cors');
const connectDb = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const chatRoutes = require('./routes/chatRoutes')

dotenv.config()

//middlewares
app.use(cors());
app.use(express.json());
app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);


connectDb();
const PORT = process.env.PORT;

const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:300O",
        methods: ["GET", "POST"]
    }
});


socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
    });
});


app.get('/api', (req, res) => {
  res.json({
    response: 'server ok.',
  });
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


