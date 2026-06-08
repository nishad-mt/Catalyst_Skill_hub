import list from '../assets/list.png'

export const courses = [
  {
  id: 1,
  slug: "devops",
  title: "DevOps",
  location: "Calicut",
  desc: "Master modern DevOps practices through hands-on projects, cloud deployments, CI/CD pipelines, and infrastructure automation.",
  duration: "6 months",
  fee: "₹89,999",
  rating: "4.8",
  img: list,

  whatYouWillLearn: [
    {
      id: 1,
      icon: "🐧",
      title: "Linux Administration",
      desc: "Learn Linux fundamentals, shell scripting, user management, file systems, and server administration."
    },
    {
      id: 2,
      icon: "🔀",
      title: "Git & Version Control",
      desc: "Master Git workflows, branching strategies, pull requests, and collaborative development practices."
    },
    {
      id: 3,
      icon: "⚙️",
      title: "CI/CD Pipelines",
      desc: "Build automated pipelines using Jenkins and GitHub Actions for testing, building, and deployment."
    },
    {
      id: 4,
      icon: "🐳",
      title: "Containerization with Docker",
      desc: "Create, manage, and deploy containerized applications using Docker and Docker Compose."
    },
    {
      id: 5,
      icon: "☸️",
      title: "Kubernetes Orchestration",
      desc: "Deploy and manage scalable containerized applications using Kubernetes."
    },
    {
      id: 6,
      icon: "☁️",
      title: "Cloud Computing",
      desc: "Work with cloud services, virtual machines, networking, storage, and cloud security concepts."
    },
    {
      id: 7,
      icon: "🏗️",
      title: "Infrastructure as Code",
      desc: "Automate infrastructure provisioning using Terraform and configuration management tools."
    },
    {
      id: 8,
      icon: "📊",
      title: "Monitoring & Logging",
      desc: "Implement monitoring, alerting, and centralized logging using industry-standard tools."
    },
    {
      id: 9,
      icon: "🚀",
      title: "DevOps Project & Career Preparation",
      desc: "Build real-world deployment projects and prepare for DevOps Engineer and Cloud Engineer roles."
    }
  ],

  tools: [
    { name: "Linux", icon: "🐧" },
    { name: "Git", icon: "🔀" },
    { name: "GitHub Actions", icon: "⚡" },
    { name: "Jenkins", icon: "⚙️" },
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "☸️" },
    { name: "Terraform", icon: "🏗️" },
    { name: "Ansible", icon: "📦" },
    { name: "Prometheus", icon: "📈" },
    { name: "Grafana", icon: "📊" },
    { name: "AWS", icon: "☁️" },
    { name: "NGINX", icon: "🌐" }
  ]
},
  {
    id: 2,
    slug: "full-stack-web-development",
    title: "Python Full Stack",
    desc: "Master React, Node.js, MongoDB & more. Build production-grade apps from scratch.",
    duration: "6 months",
    fee: "₹45,000",
    rating:"4.8",
    img: list,
    whatYouWillLearn: [
      { id: 1, icon: "🌐", title: "Frontend Mastery", desc: "Deep dive into HTML5, CSS3, and modern JavaScript (ES6+)." },
      { id: 2, icon: "⚛️", title: "React & Redux", desc: "Build dynamic, high-performance UIs with React and state management." },
      { id: 3, icon: "⚙️", title: "Backend with Node.js", desc: "Learn server-side programming with Node and Express." },
      { id: 4, icon: "🗄️", title: "Database Management", desc: "Master MongoDB for NoSQL and PostgreSQL for relational data." },
      { id: 5, icon: "🚀", title: "Deployment & DevOps", desc: "Deploy apps using AWS, Docker, and CI/CD pipelines." },
    ],
    tools: [
      { name: "VS Code", icon: "💻" },
      { name: "GitHub", icon: "🐙" },
      { name: "Postman", icon: "🚀" },
      { name: "Docker", icon: "🐳" },
      { name: "MongoDB", icon: "🍃" },
      { name: "React", icon: "⚛️" },
    ]
  },
  {
    id: 3,
    slug: "data-science-ai",
    title: "Data Science",
    desc: "Python, ML, deep learning, and real-world datasets with live industry projects.",
    duration: "6 months",
    fee: "₹50,000",
    rating:"4.9",
    img: list,
    whatYouWillLearn: [
      { id: 1, icon: "🐍", title: "Python for Data Science", desc: "Master Python libraries like Pandas, NumPy, and Matplotlib." },
      { id: 2, icon: "📊", title: "Statistical Analysis", desc: "Learn probability, statistics, and hypothesis testing." },
      { id: 3, icon: "🤖", title: "Machine Learning", desc: "Implement supervised and unsupervised learning algorithms." },
      { id: 4, icon: "🧠", title: "Deep Learning", desc: "Build neural networks using TensorFlow and PyTorch." },
      { id: 5, icon: "📈", title: "Data Visualization", desc: "Create compelling stories with Tableau and PowerBI." },
    ],
    tools: [
      { name: "Python", icon: "🐍" },
      { name: "Jupyter", icon: "📓" },
      { name: "TensorFlow", icon: "🧠" },
      { name: "PyTorch", icon: "🔥" },
      { name: "Tableau", icon: "📊" },
      { name: "Pandas", icon: "🐼" },
    ]
  },
    {
    id: 4,
    slug: "cyber-security",
    title: "Cyber Security",
    location: "Calicut",
    desc: "Learn in-demand tech skills through hands-on training, real-world projects, and expert mentorship designed",
    duration: "6 months",
    fee: "₹89,999",
    rating:"4.8",
    img: list,
    whatYouWillLearn: [
      { id: 1, icon: "🛡️", title: "Fundamentals of Cyber Security", desc: "Understand core concepts like threats, vulnerabilities, risk management, and security principles." },
      { id: 2, icon: "🌐", title: "Network Security & Protocols", desc: "Learn how networks operate, common attack methods, and how to secure them using firewalls, VPNs, and IDS/IPS." },
      { id: 3, icon: "🕵️", title: "Ethical Hacking & Testing", desc: "Learn the methodology of penetration testing and how to identify system weaknesses legally." },
      { id: 4, icon: "💻", title: "Web Application Security", desc: "Gain hands-on knowledge of securing websites against attacks like SQL injection, XSS, and CSRF." },
      { id: 5, icon: "🔑", title: "Cryptography Basics", desc: "Understand encryption, hashing, and secure communication methods used to protect sensitive data." },
      { id: 6, icon: "🖥️", title: "Operating System Security", desc: "Learn to secure Windows and Linux systems, manage permissions, and detect system-level threats." },
      { id: 7, icon: "🛠️", title: "Security Tools & Technologies", desc: "Work with industry tools like Wireshark, Metasploit, Nmap, and Burp Suite." },
      { id: 8, icon: "☁️", title: "Cloud & Data Security", desc: "Understand how to protect data in cloud environments and follow best practices for secure storage." },
      { id: 9, icon: "💼", title: "Career Preparation", desc: "Get guidance for certifications like CEH, CompTIA Security+, and real-world job readiness." },
    ],
    tools: [
      { name: "Nmap", icon: "🔍" },
      { name: "Wireshark", icon: "📡" },
      { name: "Metasploit", icon: "💣" },
      { name: "Burp Suite", icon: "🕷️" },
      { name: "Hydra", icon: "🐉" },
      { name: "John the Ripper", icon: "💀" },
      { name: "Aircrack-ng", icon: "📶" },
      { name: "OWASP ZAP", icon: "⚡" },
      { name: "Snort", icon: "👃" },
      { name: "Splunk", icon: "📊" },
    ]
  },
{
  id: 5,
  slug: "data-analyst",
  title: "Data Analatics",
  desc: "Learn Excel, SQL, Python, Power BI, and data visualization to turn data into actionable insights.",
  duration: "6 months",
  fee: "₹35,000",
  rating: "4.8",
  img: list,

  whatYouWillLearn: [
    {
      id: 1,
      icon: "📊",
      title: "Data Analysis Fundamentals",
      desc: "Understand data collection, cleaning, transformation, and analysis techniques."
    },
    {
      id: 2,
      icon: "📈",
      title: "Excel & Advanced Excel",
      desc: "Master formulas, pivot tables, dashboards, and data visualization in Excel."
    },
    {
      id: 3,
      icon: "🗄️",
      title: "SQL for Data Analysis",
      desc: "Query, filter, join, and analyze data stored in relational databases."
    },
    {
      id: 4,
      icon: "🐍",
      title: "Python for Analytics",
      desc: "Use Pandas, NumPy, and Matplotlib to analyze and visualize datasets."
    },
    {
      id: 5,
      icon: "📉",
      title: "Power BI & Dashboards",
      desc: "Create interactive dashboards and reports for business decision-making."
    }
  ],

  tools: [
    { name: "Microsoft Excel", icon: "📊" },
    { name: "SQL", icon: "🗄️" },
    { name: "Python", icon: "🐍" },
    { name: "Power BI", icon: "📈" },
    { name: "Tableau", icon: "📉" },
    { name: "Google Sheets", icon: "📋" }
  ]
},
  {
    id: 6,
    slug: "mern-stack",
    title: "Mern Stack",
    desc: "Javascript, Node js, Type Script, React, Mongo DB , and PSQL.",
    duration: "7 months",
    fee: "₹59,000",
    rating:"4.7",
    img: list,
    whatYouWillLearn: [
      { id: 1, icon: "🍃", title: "MongoDB Mastery", desc: "Deep dive into NoSQL database design and aggregation." },
      { id: 2, icon: "🚂", title: "Express.js", desc: "Build robust APIs and middleware with Express." },
      { id: 3, icon: "⚛️", title: "React Development", desc: "Create interactive frontends with React and Hooks." },
      { id: 4, icon: "📦", title: "Node.js Runtime", desc: "Understand event loop and asynchronous programming in Node." },
      { id: 5, icon: "🛡️", title: "Authentication", desc: "Implement JWT, OAuth, and secure session management." },
    ],
    tools: [
      { name: "MongoDB", icon: "🍃" },
      { name: "Express", icon: "🚂" },
      { name: "React", icon: "⚛️" },
      { name: "Node.js", icon: "📦" },
      { name: "TypeScript", icon: "📘" },
      { name: "Redux", icon: "⚛️" },
    ]
  },
];
