require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/contactdb';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'contact-company-api' });
});

const demandRout = require('./routes/routeDemands');
app.use('/', demandRout);

const agentRout = require('./routes/routeAgent');
app.use('/agent', agentRout);

const projectRout = require('./routes/routeProject');
app.use('/project', projectRout);

mongoose
  .connect(MONGO_URI)
  .then(async () => {
    console.log('MongoDB connected successfully');
    try {
      const { ensureDefaultAdmin } = require('./models/agent.model');
      await ensureDefaultAdmin();
    } catch (error) {
      console.error('Admin bootstrap error:', error.message);
    }

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  });

/*comment*/