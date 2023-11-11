const mongoose = require('mongoose');
const Student = require('../models/Student');
const Teacher = require('../models/Teacher');
const Profile = require('../models/Profile');
const Project = require('../models/Project');
const Assigned = require('../models/Assigned');
const Applies = require('../models/Applies');
const Funder = require('../models/Funder');
const Topic = require('../models/Topic');

mongoose.connect('mongodb://localhost:27017/myresearch', { useNewUrlParser: true, useUnifiedTopology: true });

// Function to create AUI email from name
const createAUIEmail = (name) => {
  const parts = name.split(' ');
  const email = `${parts[0][0].toLowerCase()}.${parts[1].toLowerCase()}@aui.ma`;
  return email;
};

// Function to create an office number
const createOfficeNumber = () => {
  const buildings = ['4', '5', '6', '7', '8', '8B'];
  const floor = Math.floor(Math.random() * 3); // Random floor 0-2
  const room = floor === 0 ? '001' : `${floor}${String(Math.floor(Math.random() * 13)).padStart(2, '0')}`;
  const building = buildings[Math.floor(Math.random() * buildings.length)];
  return `${building}-${room}`;
};

const seedDatabase = async () => {



  // Projects
  const project1 = new Project({
    title: 'Artificial Intelligence for Social Good',
    field: 'Computer Science',
    description: 'A project focused on using AI to solve social issues.'
    // funders will be added later once funders are created
  });
  await project1.save();

  // Funders
  const funder1 = new Funder({
    name: 'Tech for Good Foundation',
    email: 'contact@techforgood.org',
    phone: '123-456-7890'
  });
  await funder1.save();
  
  // Assign the funder to the project
  project1.funders.push(funder1);
  await project1.save();

  // Topics
  const topic1 = new Topic({
    title: 'Deep Learning Advances',
    description: 'Exploring the latest trends in deep learning technology.',
    type: 'Research',
    period: '2021-2022',
    projects: [project1]
  });
  await topic1.save();


  
  const arabicTeacherNames = ['Violetta Cavalli-Sforza', 'Hamid Harroud'];

  // Teachers with Arabic names
  for (const name of arabicTeacherNames) {
    let profile = new Profile({
        picture: 'https://example.com/photo'+name,
        aboutMe: 'A passionate researcher',
        skills: ['Data Analysis', 'Writing'],
        activities: ['Science Club', 'Debate Team'],
        links: [{ title: 'LinkedIn', url: 'http://linkedin.com/in/example' }]
    });
    profile = await profile.save();

    let teacher = new Teacher({
      FN_LN: name,
      office: createOfficeNumber(),
      email: createAUIEmail(name),
      school: 'Engineering',
      profile: profile._id
    });
    teacher = await teacher.save();
  }

  // Students with Arabic names
  const arabicStudentNames = ['Zakaria El Aouene', 'Yassine El Bouchikhi',];
  for (const name of arabicStudentNames) {

   // Profile
    let profile = new Profile({
    
        picture: 'https://example.com/photo'+name,
        aboutMe: 'A passionate researcher',
        skills: ['Data Analysis', 'Writing'],
        activities: ['Science Club', 'Debate Team'],
        links: [{ title: 'LinkedIn', url: 'http://linkedin.com/in/example' }]
      });
      profile = await profile.save();


    const student = new Student({
      FN_LN: name,
      email: createAUIEmail(name),
      major: 'Computer Science',
      minor: 'Mathematics',
      GPA: '3.8',
      skill: ['Java', 'Python'],
      activities: ['Tech Club', 'Math Society'],
      profile: profile._id
    });

    await student.save();
    // Assigned
  const assigned = new Assigned({
    title: 'Deep Learning Research Assistant',
    date: new Date(),
    status: 'Active',
    topic: topic1,
    student: student
  });
  await assigned.save();
  // Applies
  const applies = new Applies({
    resume: 'https://example.com/resume.pdf',
    proposal: 'Proposal for innovative deep learning applications.',
    date: new Date(),
    student: student,
    topic: topic1
  });
  await applies.save();
   
  }

  

  

  

  
  console.log('Database seeded!');
};

seedDatabase().then(() => {
  mongoose.disconnect();
});
