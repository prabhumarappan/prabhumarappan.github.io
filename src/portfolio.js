const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://prabhumarappan.github.io',
  title: 'Py|Go',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Prabhu Marappan',
  role: 'Backend/Infrastructure Engineer',
  description:
    "I'm currently doing my Master of Science in Computer Science from Portland State University.\nBefore this I worked as a Software Engineer for 5 years in Backend Development, Infrastructure, System Design and Architecture for distributed web applications.\nEngineer looking to solve interesting engineering and data problems.",
  resume: 'https://www.dropbox.com/s/83tivkrljlye361/Prabhu%20Marappan.pdf?dl=0',
  social: {
    linkedin: 'https://linkedin.com/in/prabhumarappan',
    github: 'https://github.com/prabhumarappan/',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Go',
  'Javascript',
  'Java',
  'SQL',
  'C',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'InfluxDB',
  'Node.js',
  'Express.js',
  'Flask',
  'RESTful',
  'Vue.js',
  'Amazon Web Services (AWS)',
  'Google Cloud Platform (GCP)',
  'Prometheus',
  'ElasticSearch',
  'Kibana',
  'FluentD',
  'Git',
  'Docker'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'prabhu@pdx.edu',
}

export { header, about, projects, skills, contact }
