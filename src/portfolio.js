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
    name: 'Cryptoning',
    description:
      'A simple website to track top 10 crytocurrencies, their price movements and their socials.',
    stack: ['React.js', 'Netlify', 'Bootstrap'],
    sourceCode: 'https://github.com/prabhumarappan/cryptoning',
    livePreview: 'https://vibrant-liskov-fc7f33.netlify.app/',
  },
  {
    name: 'Music Creator Economy',
    description:
      'Created a smart contract and web app where musicians can upload their music and earn ETH based on the number of playbacks their music gets.',
    stack: ['Vyper', 'Python', 'Node.js', 'Ethereum', 'Javascript'],
    sourceCode: null,
    livePreview: null,
  },
  {
    name: 'Reverse Proxy',
    description:
      'A generic reverse proxy service built with Go uses go-routines to serve requests. Added the functionality to specify timeouts and also an in-memory rate limiter.',
    stack: ['Go', 'Gin'],
    sourceCode: null,
    livePreview: null,
  }
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
