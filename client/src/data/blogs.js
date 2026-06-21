import cyberImg from "../assets/life/dathub.png";
import reactImg from "../assets/life/trainee.png";
import aiImg from "../assets/chorkk.png";
import cloudImg from "../assets/life/cat4.png";
import nthelum from "../assets/promo_thinking.png";
import data from "../assets/datascience.png";
import python from "../assets/python.png";
import ai from "../assets/ai.png";
import mern from "../assets/mern.png";
import analyst from "../assets/analyst.png";
import devops from "../assets/devops.png";
import benaseer from "../assets/mentors/benaseer.jpeg";

export const blogs = [
{
  id: 1,
  courseSlug: "full-stack-web-development",

  // Card Data
  title: "AI and Python Go Hand in Hand",
  description:
    "Discover why Python has become the leading language for Artificial Intelligence and how it powers modern AI applications.",
  date: "May 20, 2026",
  read: "4 min read",
  image: python,

  // Full Blog Page Data
  content: {
    heroTitle: "AI and Python",

    heroDescription:
      "Explore the relationship between Artificial Intelligence and Python, and understand why Python dominates modern AI development.",

    heroImage: ai,

    tableOfContents: [
      "Introduction",
      "What is Artificial Intelligence?",
      "Why Python is Used for AI",
      "Popular Python Libraries for AI",
      "Applications of AI with Python",
      "Benefits of Learning AI with Python",
      "Conclusion"
    ],

    sections: [
      {
        heading: "Introduction",
        text: `
Artificial Intelligence (AI) is transforming the way technology interacts with the world. From smart assistants and recommendation systems to autonomous vehicles and healthcare solutions, AI is changing industries and daily life. Python has emerged as the most popular programming language for AI development because of its simplicity, readability, and powerful ecosystem. The combination of AI and Python enables developers to build intelligent systems efficiently, making advanced technologies more accessible to students, developers, and researchers alike.
        `
      },

      {
        heading: "What is Artificial Intelligence?",
        text: `
Artificial Intelligence refers to the ability of machines and computer systems to simulate human intelligence. AI systems can analyze information, recognize patterns, make predictions, solve problems, and learn from data. Major fields within AI include machine learning, deep learning, natural language processing, computer vision, and robotics.
Python is widely preferred for AI development because of its clean syntax, ease of learning, and extensive collection of libraries. Developers can build complex AI applications without writing excessive code. Python also offers strong community support, cross-platform compatibility, and seamless integration with data analysis and machine learning tools.
`
      },

      {
        heading: "Popular Python Libraries for AI",
        text: `
Python provides several powerful libraries that simplify AI development. NumPy supports mathematical operations and array processing. Pandas helps with data manipulation and analysis. Scikit-learn offers machine learning algorithms for classification, regression, and clustering. TensorFlow and PyTorch are widely used frameworks for deep learning and neural network development.
        `
      },

      {
        heading: "Applications of AI with Python",
        text: `
AI combined with Python is used across numerous industries and applications. It powers chatbots, facial recognition systems, fraud detection software, recommendation engines, medical diagnosis tools, language translation systems, and intelligent automation platforms. Businesses and researchers rely on Python to create innovative AI-driven solutions.
        `
      },

      {
        heading: "Benefits of Learning AI with Python",
        text: `
Learning AI with Python provides valuable career opportunities in data science, machine learning, software development, and automation. Python’s beginner-friendly nature allows students to quickly start building projects while gradually understanding advanced AI concepts. As demand for AI professionals continues to grow, Python remains a highly relevant and practical skill.
        `
      },

      {
        heading: "Conclusion",
        text: `
Artificial Intelligence and Python form a powerful combination in modern technology. Python’s simplicity and extensive AI ecosystem make it the ideal language for building intelligent applications. Whether you are a student, developer, or aspiring data scientist, learning AI with Python can open doors to innovation, problem solving, and future career growth.
        `
      }
    ],

    cta: {
      title: "Ready to Start Learning AI with Python?",
      description:
        "Join our Python Full Stack program and begin building real-world AI and modern software applications.",
      buttonText: "Enroll Now"
    }
  }
},

{
  id: 4,
  courseSlug: "mern-stack",

  // Card Data (used in blog listing)
  title: "React vs Next.js: Which Should You Learn?",
  description:
    "Understand the differences between React and Next.js and choose the right path for modern web development.",
  date: "May 20, 2026",
  read: "3 min read",
  image: mern,

  // Full Blog Page Data
  content: {
    heroTitle: "React vs Next.js: Which Should You Learn?",

    heroDescription:
      "Learn the key differences between React and Next.js and understand when to use each for modern web applications.",

    heroImage: cyberImg,

    tableOfContents: [
      "Introduction",
      "What is React?",
      "What is Next.js?",
      "React vs Next.js Comparison",
      "When Should You Choose React?",
      "When Should You Choose Next.js?",
      "Conclusion"
    ],

    sections: [
      {
        heading: "Introduction",
        text: `
React and Next.js are two popular technologies used for modern web development.
While React is a JavaScript library for building user interfaces,
Next.js is a framework built on top of React.
Choosing the right one depends on your project requirements.
        `
      },

      {
        heading: "What is React?",
        text: `
React is an open-source JavaScript library developed by Meta.
It focuses on creating reusable UI components and dynamic interfaces.
React mainly handles the frontend view layer.
        `
      },

      {
        heading: "What is Next.js?",
        text: `
Next.js is a React framework that adds routing,
server-side rendering, API routes, SEO optimization,
and improved performance capabilities.
        `
      },

      {
        heading: "React vs Next.js Comparison",
        text: `
React provides flexibility and control.
Next.js provides structure, performance optimizations,
and production-ready features out of the box.
        `
      },

      {
        heading: "When Should You Choose React?",
        text: `
Choose React if you need a lightweight frontend library,
custom architecture, or SPA applications.
        `
      },

      {
        heading: "When Should You Choose Next.js?",
        text: `
Choose Next.js when SEO, server rendering,
performance optimization, or full-stack capabilities are important.
        `
      },

      {
        heading: "Conclusion",
        text: `
Both React and Next.js are powerful.
Your choice should depend on project goals,
SEO needs, scalability, and development style.
        `
      }
    ],

    cta: {
      title: "Ready to Start Learning Web Development?",
      description:
        "Join our Full Stack Development program and build real-world applications.",
      buttonText: "Enroll Now"
    }
  }
},

{
  id: 8,
  courseSlug: "data-science-ai",

  // Card Data (used in blog listing)
  title: "What is Data Science and AI? A Beginner's Guide",
  description:
    "Discover how Data Science and Artificial Intelligence are transforming industries and learn the skills needed to start a career in this exciting field.",

  date: "June 8, 2026",
  read: "5 min read",
  image: data,

  // Full Blog Page Data
  content: {
    heroTitle: "What is Data Science and AI? A Beginner's Guide",

    heroDescription:
      "Learn how Data Science and Artificial Intelligence work together to solve real-world problems and drive innovation across industries.",

    heroImage: cyberImg,

    tableOfContents: [
      "Introduction",
      "What is Data Science?",
      "What is Artificial Intelligence?",
      "How Data Science and AI Work Together",
      "Essential Skills to Learn",
      "Career Opportunities",
      "Conclusion"
    ],

    sections: [
      {
        heading: "Introduction",
        text: `
Data has become one of the world's most valuable resources.
Organizations generate massive amounts of information every day,
and they need professionals who can analyze data and build
intelligent systems that make smarter decisions.
This is where Data Science and Artificial Intelligence come in.
        `
      },

      {
        heading: "What is Data Science?",
        text: `
Data Science is the process of collecting, cleaning,
analyzing, and interpreting data to uncover patterns,
trends, and insights. Data Scientists use statistics,
programming, and machine learning techniques to help
organizations make data-driven decisions.
        `
      },

      {
        heading: "What is Artificial Intelligence?",
        text: `
Artificial Intelligence (AI) is a branch of computer science
focused on creating systems that can perform tasks that normally
require human intelligence. These tasks include learning,
problem-solving, decision-making, language understanding,
and image recognition.
        `
      },

      {
        heading: "How Data Science and AI Work Together",
        text: `
Data Science provides the data, analysis, and insights needed
to train intelligent AI systems. Artificial Intelligence uses
that data to make predictions, automate tasks, and improve
decision-making. Together, they power technologies such as
recommendation systems, chatbots, fraud detection, and self-driving vehicles.
        `
      },

      {
        heading: "Essential Skills to Learn",
        text: `
A successful Data Science and AI professional should learn
Python programming, statistics, SQL, data visualization,
machine learning, deep learning, data preprocessing,
and model deployment. Familiarity with tools like Pandas,
NumPy, Scikit-learn, TensorFlow, and Power BI is highly valuable.
        `
      },

      {
        heading: "Career Opportunities",
        text: `
The demand for Data Science and AI professionals continues to grow rapidly.
Popular roles include Data Scientist, AI Engineer,
Machine Learning Engineer, Data Analyst, Business Intelligence Analyst,
Computer Vision Engineer, and NLP Engineer.
These careers offer strong growth opportunities across industries.
        `
      },

      {
        heading: "Conclusion",
        text: `
Data Science and Artificial Intelligence are shaping the future
of technology and business. By learning the right skills and gaining
hands-on experience with real-world projects, you can build a rewarding
career in one of the fastest-growing fields in the world.
        `
      }
    ],

    cta: {
      title: "Ready to Build a Career in Data Science & AI?",
      description:
        "Join our Data Science & AI program and gain hands-on experience with Python, Machine Learning, Deep Learning, and real-world AI projects.",
      buttonText: "Enroll Now"
    }
  }
},

{
  id: 9,
  courseSlug: "devops",

  // Card Data (used in blog listing)
  title: "What is DevOps? A Beginner's Guide to Modern Software Delivery",
  description:
    "Discover how DevOps combines development and operations to build, test, and deploy applications faster and more reliably.",
  date: "June 8, 2026",
  read: "4 min read",
  image: devops,

  // Full Blog Page Data
  content: {
    heroTitle: "What is DevOps? A Beginner's Guide to Modern Software Delivery",

    heroDescription:
      "Learn how DevOps helps organizations automate software delivery, improve collaboration, and build scalable applications.",

    heroImage: cyberImg,

    tableOfContents: [
      "Introduction",
      "What is DevOps?",
      "Why is DevOps Important?",
      "Key DevOps Practices",
      "Popular DevOps Tools",
      "Career Opportunities in DevOps",
      "Conclusion"
    ],

    sections: [
      {
        heading: "Introduction",
        text: `
Modern software development requires faster releases,
better collaboration, and reliable deployments.
DevOps emerged as a solution to bridge the gap between
software development and IT operations.
        `
      },

      {
        heading: "What is DevOps?",
        text: `
DevOps is a culture, methodology, and set of practices
that brings development and operations teams together.
Its goal is to automate processes, improve collaboration,
and deliver software quickly and efficiently.
        `
      },

      {
        heading: "Why is DevOps Important?",
        text: `
Organizations use DevOps to reduce deployment time,
improve software quality, minimize downtime,
and respond quickly to customer needs.
It enables continuous development and faster innovation.
        `
      },

      {
        heading: "Key DevOps Practices",
        text: `
Important DevOps practices include Continuous Integration (CI),
Continuous Deployment (CD), Infrastructure as Code (IaC),
Containerization, Monitoring, and Automation.
These practices help teams build and deploy software reliably.
        `
      },

      {
        heading: "Popular DevOps Tools",
        text: `
DevOps engineers commonly work with tools such as
Git, Jenkins, Docker, Kubernetes, Terraform,
Ansible, Prometheus, Grafana, and AWS.
These tools automate development, deployment,
monitoring, and infrastructure management.
        `
      },

      {
        heading: "Career Opportunities in DevOps",
        text: `
DevOps professionals are highly sought after across industries.
Common roles include DevOps Engineer, Cloud Engineer,
Site Reliability Engineer (SRE), Platform Engineer,
and Infrastructure Automation Engineer.
        `
      },

      {
        heading: "Conclusion",
        text: `
DevOps has become an essential part of modern software development.
By combining automation, collaboration, and cloud technologies,
it enables organizations to deliver high-quality software faster
while creating exciting career opportunities for professionals.
        `
      }
    ],

    cta: {
      title: "Ready to Build a Career in DevOps?",
      description:
        "Join our DevOps training program and gain hands-on experience with Docker, Kubernetes, AWS, Terraform, and CI/CD pipelines.",
      buttonText: "Enroll Now"
    }
  }
}
,
{
  id: 10,
  courseSlug: "data-analyst",

  // Card Data (used in blog listing)
  title: "What is Data Analytics? A Complete Beginner's Guide",
  description:
    "Learn how data analytics helps businesses make smarter decisions and discover the skills required to become a Data Analyst.",

  date: "June 8, 2026",
  read: "4 min read",
  image: analyst,

  // Full Blog Page Data
  content: {
    heroTitle: "What is Data Analytics? A Complete Beginner's Guide",

    heroDescription:
      "Explore the world of data analytics, understand its importance, and learn how to start a successful career as a Data Analyst.",

    heroImage: cyberImg,

    tableOfContents: [
      "Introduction",
      "What is Data Analytics?",
      "Why is Data Analytics Important?",
      "Essential Skills for Data Analysts",
      "Tools Used in Data Analytics",
      "Career Opportunities",
      "Conclusion"
    ],

    sections: [
      {
        heading: "Introduction",
        text: `
Data is generated every second through websites, apps,
business transactions, and customer interactions.
Data Analytics helps organizations transform this raw data
into meaningful insights that drive better decisions.
        `
      },

      {
        heading: "What is Data Analytics?",
        text: `
Data Analytics is the process of collecting, cleaning,
analyzing, and interpreting data to identify patterns,
trends, and opportunities. It helps businesses understand
their performance and make data-driven decisions.
        `
      },

      {
        heading: "Why is Data Analytics Important?",
        text: `
Organizations use data analytics to improve efficiency,
understand customer behavior, reduce costs, identify risks,
and discover new business opportunities. It plays a key role
in strategic planning and growth.
        `
      },

      {
        heading: "Essential Skills for Data Analysts",
        text: `
A successful Data Analyst should understand statistics,
data visualization, SQL, Excel, and programming languages
such as Python. Strong problem-solving and communication
skills are also important.
        `
      },

      {
        heading: "Tools Used in Data Analytics",
        text: `
Popular tools used by Data Analysts include Microsoft Excel,
SQL, Python, Power BI, Tableau, Google Sheets, Pandas,
NumPy, and Jupyter Notebook. These tools help collect,
analyze, and visualize data effectively.
        `
      },

      {
        heading: "Career Opportunities",
        text: `
Data analytics offers excellent career opportunities across
industries. Common roles include Data Analyst, Business Analyst,
Reporting Analyst, Data Visualization Specialist, and Junior Data Scientist.
As organizations become more data-driven, demand for skilled analysts
continues to grow.
        `
      },

      {
        heading: "Conclusion",
        text: `
Data Analytics is one of the most valuable skills in today's
digital economy. By learning the right tools and techniques,
you can help organizations make informed decisions and build
a rewarding career in a rapidly growing field.
        `
      }
    ],

    cta: {
      title: "Ready to Start Your Data Analytics Journey?",
      description:
        "Join our Data Analytics program and gain hands-on experience with Excel, SQL, Python, Power BI, Tableau, and real-world projects.",
      buttonText: "Enroll Now"
    }
  }
},

{
  id: 12,
  courseSlug: "cyber-security",

  // Card Data (used in blog listing)
  title: "What is Cyber Security? A Complete Beginner's Guide",
  description:
    "Learn how cyber security protects systems, networks, and data from cyber threats and explore career opportunities in this fast-growing field.",

  date: "June 8, 2026",
  read: "4 min read",
  image: aiImg,

  // Full Blog Page Data
  content: {
    heroTitle: "What is Cyber Security? A Complete Beginner's Guide",

    heroDescription:
      "Discover the fundamentals of cyber security, common threats, essential skills, and how to start a successful career in protecting digital systems.",

    heroImage: cyberImg,

    tableOfContents: [
      "Introduction",
      "What is Cyber Security?",
      "Why is Cyber Security Important?",
      "Common Cyber Threats",
      "Essential Skills for Cyber Security",
      "Career Opportunities",
      "Conclusion"
    ],

    sections: [
      {
        heading: "Introduction",
        text: `
In today's digital world, businesses, governments,
and individuals rely heavily on technology.
As cyber attacks continue to increase, protecting
sensitive information and digital infrastructure
has become more important than ever.
        `
      },

      {
        heading: "What is Cyber Security?",
        text: `
Cyber Security is the practice of protecting
computers, networks, applications, and data
from unauthorized access, attacks, and damage.
It involves technologies, processes, and best
practices designed to secure digital assets
against evolving cyber threats.
        `
      },

      {
        heading: "Why is Cyber Security Important?",
        text: `
Cyber attacks can lead to financial losses,
data breaches, identity theft, and business disruption.
Strong cyber security measures help organizations
protect customer data, maintain trust, comply with
regulations, and ensure business continuity.
        `
      },

      {
        heading: "Common Cyber Threats",
        text: `
Some of the most common cyber threats include
phishing attacks, malware, ransomware,
social engineering, password attacks,
web application vulnerabilities, and network intrusions.
Understanding these threats is the first step
toward building effective defenses.
        `
      },

      {
        heading: "Essential Skills for Cyber Security",
        text: `
Cyber Security professionals require knowledge of
networking, operating systems, ethical hacking,
web security, cryptography, cloud security,
incident response, and security monitoring.
Hands-on experience with industry tools is equally important.
        `
      },

      {
        heading: "Career Opportunities",
        text: `
Cyber Security offers excellent career opportunities
across various industries. Popular roles include
Cyber Security Analyst, Security Operations Center (SOC) Analyst,
Penetration Tester, Ethical Hacker, Incident Responder,
Security Consultant, and Cloud Security Engineer.
As cyber threats continue to grow, the demand for
skilled professionals remains strong worldwide.
        `
      },

      {
        heading: "Conclusion",
        text: `
Cyber Security is one of the most critical fields
in modern technology. By learning the right skills,
understanding security principles, and gaining
practical experience, you can build a rewarding career
while helping organizations defend against cyber threats.
        `
      }
    ],

    cta: {
      title: "Ready to Start Your Cyber Security Career?",
      description:
        "Join our Cyber Security program and gain hands-on experience in ethical hacking, network security, penetration testing, and industry-standard security tools.",
      buttonText: "Enroll Now"
    }
  }
},{
  id: 13,
  courseSlug: "data-science-ai",

  // Card Data (used in blog listing)
  title: "Course Details",
  description:
    "Discover how Data Science and Artificial Intelligence are transforming industries and learn the skills needed to start a career in this exciting field.",

  date: "June 8, 2026",
  read: "5 min read",
  image: benaseer,

  // Full Blog Page Data
  content: {
    heroTitle: "What is Data Science and AI? A Beginner's Guide",

    heroDescription:
      "Learn how Data Science and Artificial Intelligence work together to solve real-world problems and drive innovation across industries.",

    heroImage: cyberImg,

    tableOfContents: [
      "Introduction",
      "What is Data Science?",
      "What is Artificial Intelligence?",
      "How Data Science and AI Work Together",
      "Essential Skills to Learn",
      "Career Opportunities",
      "Conclusion"
    ],

    sections: [
      {
        heading: "Introduction",
        text: `
Data has become one of the world's most valuable resources.
Organizations generate massive amounts of information every day,
and they need professionals who can analyze data and build
intelligent systems that make smarter decisions.
This is where Data Science and Artificial Intelligence come in.
        `
      },
      {
        heading: "What is Data Science?",
        text: `
Data Science is the process of collecting, cleaning,
analyzing, and interpreting data to uncover patterns,
trends, and insights. Data Scientists use statistics,
programming, and machine learning techniques to help
organizations make data-driven decisions.
        `
      },
      {
        heading: "What is Artificial Intelligence?",
        text: `
Artificial Intelligence (AI) is a branch of computer science
focused on creating systems that can perform tasks that normally
require human intelligence. These tasks include learning,
problem-solving, decision-making, language understanding,
and image recognition.
        `
      },
      {
        heading: "How Data Science and AI Work Together",
        text: `
Data Science provides the data, analysis, and insights needed
to train intelligent AI systems. Artificial Intelligence uses
that data to make predictions, automate tasks, and improve
decision-making. Together, they power technologies such as
recommendation systems, chatbots, fraud detection, and self-driving vehicles.
        `
      },
      {
        heading: "Essential Skills to Learn",
        text: `
A successful Data Science and AI professional should learn
Python programming, statistics, SQL, data visualization,
machine learning, deep learning, data preprocessing,
and model deployment. Familiarity with tools like Pandas,
NumPy, Scikit-learn, TensorFlow, and Power BI is highly valuable.
        `
      },
      {
        heading: "Career Opportunities",
        text: `
The demand for Data Science and AI professionals continues to grow rapidly.
Popular roles include Data Scientist, AI Engineer,
Machine Learning Engineer, Data Analyst, Business Intelligence Analyst,
Computer Vision Engineer, and NLP Engineer.
These careers offer strong growth opportunities across industries.
        `
      },
      {
        heading: "Conclusion",
        text: `
Data Science and Artificial Intelligence are shaping the future
of technology and business. By learning the right skills and gaining
hands-on experience with real-world projects, you can build a rewarding
career in one of the fastest-growing fields in the world.
        `
      }
    ],

    articles: {
      courseDetails: [
        {
          title: "What Is a Data Analyst? Responsibilities, Salary & How to Become One",
        },
        {
          title: "What Does a Data Analyst Do? Career Guide for Students and Freshers",
        }
      ],
      careerAndIndustryInsights: [
        {
          title: "Data Analytics Career in India 2026",
        },
        {
          title: "Top IT Careers After Graduation",
        }
      ],
      skillsAndTools: [
        {
          title: "Excel Skills Every Analyst Should Know",
        },
        {
          title: "SQL for Beginners",
        }
      ]
    },

    faculty: {
      name: "Benaseer P.T.",
      designation: "Data Science Faculty",
      course: "Data Science & Data Analytics",
      bio: "Benaseer P.T. is a Data Science Faculty specializing in Data Analytics, Machine Learning, Artificial Intelligence, and Business Intelligence. She delivers industry-focused training in Python, SQL, Power BI, and AI technologies, while mentoring students through hands-on projects and real-world case studies. Her expertise lies in transforming complex technical concepts into practical learning experiences and preparing aspiring professionals for successful careers in Data Analytics and Data Science.",
      keyAchievements: "Data Analytics, Machine Learning, Artificial Intelligence, Business Intelligence, Python, SQL, Power BI"
    },

    cta: {
      title: "Ready to Build a Career in Data Science & AI?",
      description:
        "Join our Data Science & AI program and gain hands-on experience with Python, Machine Learning, Deep Learning, and real-world AI projects.",
      buttonText: "Enroll Now"
    }
  }
},
  
];