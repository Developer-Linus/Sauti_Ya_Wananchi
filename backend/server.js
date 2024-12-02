const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/sauti_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Test the connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define routes here

// Import routes
const forumsRouter = require('./routes/forums');
const petitionsRouter = require('./routes/petitions');
const pollsRouter = require('./routes/polls');
const authRouter = require('./routes/auth');

// Use routes
app.use('/forums', forumsRouter);
app.use('/petitions', petitionsRouter);
app.use('/polls', pollsRouter);
app.use('/auth', authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});