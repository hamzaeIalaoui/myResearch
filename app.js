const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const topicRoutes = require('./routes/topicRoutes');
const assignedRoutes = require('./routes/assignedRoutes');
const appliesRoutes = require('./routes/appliesRoutes');
const funderRoutes = require('./routes/funderRoutes');
const profileRoutes = require('./routes/profileRoutes');
const projectRoutes = require('./routes/projectRoutes');

const app = express();

// Replace 'your_database_uri' with your actual database URI
const mongoURI = 'mongodb://localhost:27017/myresearch';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use(express.json());
app.use('/students', studentRoutes);
app.use('/teachers', teacherRoutes);
app.use('/topics', topicRoutes);
app.use('/assigned', assignedRoutes);
app.use('/applies', appliesRoutes);
app.use('/funders', funderRoutes);
app.use('/profiles', profileRoutes);
app.use('/projects', projectRoutes);




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
