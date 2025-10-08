import plantRecognitionImage from '../assets/images/plant-recognition.jpg';
import communityPortalImage from '../assets/images/community-portal.jpg';
import productManagementImage from '../assets/images/product-management.jpg';
import trustedClickImage from '../assets/images/trusted-click.jpg';
import valedictorianImage from '../assets/images/Valedictorian.png';

export const portfolioData = {
  personal: {
    name: "William Saunderson",
    title: "Software Engineering Student | AI & Web Dev Enthusiast",
    email: "liamsaunderson2004@gmail.com",
    phone: "+27 67 041 1937",
    location: "Pretoria, South Africa",
    about: "I am a driven and adaptable Software Engineering student at Belgium Campus ITVersity, passionate about using technology to solve real-world problems. I have hands-on experience in Java, Python, web development, and database systems, and have contributed to a range of academic projects, including desktop applications and web-based systems. Outside of tech, I lead a young adults' life group at church, reflecting my commitment to leadership, personal growth, and living with purpose. I'm eager to keep learning, take on new challenges, and make a meaningful impact through my work.",
  },

  socials: {
    github: "https://github.com/3Po1nt",
    linkedin: "https://www.linkedin.com/in/william-saunderson-84427b292/",
  },

  education: [
    {
      degree: "Bachelor of Computing",
      specialization: "Software Engineering",
      institution: "Belgium Campus ITVersity",
      website: "https://www.belgiumcampus.ac.za/",
      location: "Pretoria, South Africa",
      period: "2023 - 2026",
      description: "Currently pursuing a Bachelor of Computing with a specialization in Software Engineering. The program has equipped me with practical experience in object-oriented programming, database management, web development, and software design principles. I've worked on multiple academic projects involving Java, Python, SQL, and modern web technologies, applying both front-end and back-end skills in real-world scenarios.",
    },
    {
      degree: "IEB Matric Certificate",
      institution: "Midstream College",
      website: "https://www.midstreamcollege.co.za/",
      location: "Centurion, South Africa",
      period: "2018 - 2022",
      achievements: [
        "Achieved an A in Computer Applications Technology (CAT)",
        "Achieved a B in Information Technology (IT)",
        "Strong exposure to Java programming and problem-solving",
        "Developed foundational skills in logic and application design"
      ]
    }
  ],

  skills: {
    programmingLanguages: [
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "C#", level: 75 },
      { name: "JavaScript", level: 70 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "SQL", level: 75 }
    ],
    tools: [
      "GitHub",
      "Visual Studio Code",
      "IntelliJ IDEA",
      "MySQL",
      "MongoDB",
      "Node.js",
      "React",
      "Express.js"
    ],
    other: [
      "Object-Oriented Programming",
      "Database Management",
      "Web Development",
      "Software Design Principles",
      "Problem Solving",
      "Team Collaboration",
      "Critical Thinking"
    ]
  },

projects: [
    {
      title: "Plant Recognition System",
      description: "A comprehensive plant recognition system with AI-powered detection, real-time analytics, and interactive mapping capabilities.",
      technologies: ["JavaScript", "Python", "HTML"],
      githubUrl: "https://github.com/StefanLandsberg/PlantRecognition",
      demoUrl: null, // Assuming no separate demo link was provided, only 'View Details' which points to GitHub.
      image: plantRecognitionImage
    },
    {
      title: "Community Portal",
      description: "A Node.js and Express web app using EJS templates for dynamic pages. Lets users browse events, view the team, and send contact forms. Uses modular routes, in-memory form handling, and a responsive UI with Pure.css and Normalize.css.",
      technologies: ["JavaScript", "Node.js", "EJS"],
      githubUrl: "https://github.com/Mc141/community-portal",
      demoUrl: null, // Assuming no separate demo link was provided, only 'View Details' which points to GitHub.
      image: communityPortalImage
    },
    {
      title: "Product Management System",
      description: "A cloud-deployed product-management portal supporting a Capturer/Manager workflow, secure OAuth2 / OIDC authentication, and a Data Lake for quick retrieval of approved products.",
      technologies: ["JavaScript", "C#", "APIs", "HTML/CSS"],
      githubUrl: "https://github.com/3Po1nt/MOYO_ProductManagement",
      demoUrl: null, // Assuming no separate demo link was provided, only 'View Details' which points to GitHub.
      image: productManagementImage
    }
],

projectsInProgress: [
    {
      title: "Learning Platform",
      description: "An innovative tutor-led learning platform designed to provide flexible, accessible academic support to Belgium Campus students.",
      technologies: ["Python", "TensorFlow", "React"],
      githubUrl: "https://github.com/IsFrydag/Valedictorian",
      image: valedictorianImage,
      status: "In Development" // New field for progress status
    },
    {
      title: "Trusted Click – Local Tech Support",
      description: "A small-business site and booking platform for local residents to request on-site troubleshooting, network setup, and PC repair services.",
      technologies: ["Next.js", "Node.js", "MongoDB"],
      githubUrl: null, // Assuming no GitHub URL yet, as it's in the design phase
      image: trustedClickImage,
      status: "Design & Prototype"
    }
],

experience: [
  {
    role: "Young Adults Life Group Leader",
    organization: "Doxa Deo Church",
    website: "https://www.doxadeo.org/midstream/",
    period: "2022 - Present",
    description:
      "Lead a young adults' life group at church, demonstrating commitment to leadership, personal growth, and community building. Responsibilities include organizing meetings, mentoring group members, and coordinating community service activities.",
    achievements: [
      "Developed leadership and communication skills",
      "Organized community outreach programs",
      "Mentored 15+ young adults in personal development"
    ]
  },
  {
    role: "Waiter",
    organization: "Prime View Adventure & Leisure",
    website: "https://prime-view.co.za/",
    period: "Dec 2024 – Feb 2025",
    description:
      "Worked as a waiter in a fast-paced hospitality environment, developing strong communication, multitasking, and customer service skills. Gained hands-on experience handling pressure, resolving issues calmly, and ensuring customer satisfaction.",
    achievements: [
      "Delivered friendly and efficient customer service during peak hours",
      "Learned to stay composed under pressure and resolve customer issues",
      "Enhanced teamwork and adaptability in a busy hospitality setting"
    ]
  }
],

  certifications: [
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "In Progress",
      description: "Foundational cloud computing certification covering AWS core services, security, and architecture best practices."
    },
    {
      name: "AWS Certified DevOps Engineer",
      issuer: "Amazon Web Services",
      date: "In Progress",
      description: "AWS-certified professional skilled in automating, deploying, and managing scalable cloud infrastructure for reliable CI/CD operations."
    },
    
  ],

  achievements: [
    "Led a Young Adults Life Group, building leadership and communication skills",
    "Completed major academic software projects: Java desktop app, Web Login System",
    "Delivered clear technical presentations and documentation, earning positive feedback from lecturers",
    "Recognised for strong problem-solving and debugging skills in collaborative projects"
  ]
};