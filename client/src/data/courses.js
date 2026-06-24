import list from '../assets/list.png'

export const courses = [

  {
id: 1,
slug: "devops",
title: "DevOps",
location: "Calicut",
desc: "Master the tools and practices that power modern software delivery and cloud infrastructure. Learn Linux, Git, Docker, Kubernetes, CI/CD, cloud platforms, Infrastructure as Code, and monitoring tools through hands-on projects and real-world scenarios to build a successful career in DevOps and Cloud Engineering.",
duration: "6 months",
fee: "₹89,999",
rating: "4.8",
img: list,

whatYouWillLearn: [
{
id: 1,
icon: "🐧",
title: "Linux Fundamentals",
desc: "Discover how to effectively operate Linux systems from the command line and perform essential system administration tasks."
},
{
id: 2,
icon: "🔀",
title: "Git & GitHub",
desc: "Learn version control concepts and collaborate efficiently on projects using Git and GitHub."
},
{
id: 3,
icon: "⚙️",
title: "CI/CD Automation",
desc: "Automate Continuous Integration and Continuous Delivery pipelines to streamline software development and deployment."
},
{
id: 4,
icon: "🐳",
title: "Docker & Containerization",
desc: "Learn how to build, run, and deploy containerized applications using Docker and Docker Compose."
},
{
id: 5,
icon: "☸️",
title: "Kubernetes",
desc: "Understand Kubernetes and learn how to manage, orchestrate, and scale containerized applications effectively."
},
{
id: 6,
icon: "☁️",
title: "AWS Cloud Services",
desc: "Deploy and manage cloud infrastructure, services, networking, and virtual resources using AWS."
},
{
id: 7,
icon: "🏗️",
title: "Infrastructure as Code",
desc: "Learn Infrastructure as Code (IaC) concepts to automate infrastructure provisioning and management using Terraform."
},
{
id: 8,
icon: "📋",
title: "Configuration Management",
desc: "Use industry-standard tools such as Ansible to automate system configuration and deployment processes."
}
],

tools: [
{ name: "Linux", icon: "🐧" },
{ name: "Git", icon: "🔀" },
{ name: "GitHub", icon: "🐙" },
{ name: "Docker", icon: "🐳" },
{ name: "Docker Compose", icon: "📦" },
{ name: "Kubernetes", icon: "☸️" },
{ name: "Jenkins", icon: "⚙️" },
{ name: "AWS", icon: "☁️" },
{ name: "Terraform", icon: "🏗️" },
{ name: "Ansible", icon: "📋" },
{ name: "Nginx", icon: "🌐" },
{ name: "Prometheus", icon: "📈" },
{ name: "Grafana", icon: "📊" },
{ name: "Maven", icon: "🔨" },
{ name: "SonarQube", icon: "🔍" },
{ name: "GitHub Actions", icon: "⚡" }
],

curriculum: [
  {
    module: "Introduction to DevOps & Linux Fundamentals",
    topics: [
      "What is DevOps?",
      "DevOps Lifecycle",
      "Linux Installation",
      "Linux File System",
      "Linux Commands",
      "User & Group Management",
      "Package Management",
      "Shell Scripting Basics"
    ]
  },
  {
    module: "Git & GitHub",
    topics: [
      "Version Control Concepts",
      "Git Installation & Configuration",
      "Git Commands",
      "Branching & Merging",
      "Pull Requests",
      "GitHub Repositories",
      "Git Workflows",
      "Collaborative Development"
    ]
  },
  {
    module: "Containerization with Docker",
    topics: [
      "Introduction to Containers",
      "Docker Architecture",
      "Docker Images & Containers",
      "Dockerfile",
      "Docker Volumes",
      "Docker Networking",
      "Docker Compose",
      "Container Best Practices"
    ]
  },
  {
    module: "Jenkins & CI/CD",
    topics: [
      "CI/CD Concepts",
      "Jenkins Installation",
      "Creating Pipelines",
      "Pipeline as Code",
      "Build Automation",
      "Testing Automation",
      "Deployment Automation",
      "GitHub Integration"
    ]
  },
  {
    module: "Kubernetes (K8s)",
    topics: [
      "Kubernetes Architecture",
      "Pods & Deployments",
      "Services & Networking",
      "ConfigMaps & Secrets",
      "Persistent Volumes",
      "Ingress Controller",
      "Scaling Applications",
      "Rolling Updates"
    ]
  },
  {
    module: "AWS Cloud Services",
    topics: [
      "Cloud Computing Fundamentals",
      "AWS Global Infrastructure",
      "EC2",
      "S3",
      "IAM",
      "VPC",
      "Load Balancer",
      "Auto Scaling"
    ]
  },
  {
    module: "Terraform & Ansible",
    topics: [
      "Infrastructure as Code (IaC)",
      "Terraform Basics",
      "Terraform Providers",
      "Terraform Modules",
      "Ansible Installation",
      "Playbooks",
      "Inventory Management",
      "Configuration Automation"
    ]
  },
  {
    module: "Monitoring with Prometheus & Grafana",
    topics: [
      "Monitoring Fundamentals",
      "Prometheus Setup",
      "Metrics Collection",
      "Alert Manager",
      "Grafana Dashboards",
      "Log Monitoring",
      "Performance Analysis",
      "Incident Management"
    ]
  },
  {
    module: "DevOps Final Project",
    topics: [
      "Project Planning",
      "CI/CD Pipeline Setup",
      "Dockerized Application",
      "Kubernetes Deployment",
      "AWS Hosting",
      "Infrastructure Automation",
      "Monitoring & Alerting",
      "Project Presentation"
    ]
  }
]
},

  {
id: 2,
slug: "data-analyst",
title: "Data Analytics",
desc: "Data Analytics is the process of examining data to uncover insights, identify trends, and support business decision-making. Learn to analyze real-world datasets, create interactive dashboards, generate reports, and visualize data using industry-standard tools to drive informed business outcomes.",
duration: "6 months",
fee: "₹35,000",
rating: "4.8",
img: list,

whatYouWillLearn: [
{
id: 1,
icon: "📊",
title: "Data Analytics Fundamentals",
desc: "Learn the fundamentals of data analytics and business intelligence used to support business decision-making."
},
{
id: 2,
icon: "🧹",
title: "Data Collection & Preparation",
desc: "Collect, clean, transform, and prepare data for analysis and reporting."
},
{
id: 3,
icon: "📈",
title: "Data Analysis & Insights",
desc: "Analyze datasets to identify trends, patterns, and business opportunities through practical analysis techniques."
},
{
id: 4,
icon: "🔍",
title: "Exploratory Data Analysis",
desc: "Perform exploratory data analysis (EDA) to uncover actionable insights and understand data behavior."
},
{
id: 5,
icon: "📉",
title: "Data Visualization & Reporting",
desc: "Create reports, dashboards, and visualizations to communicate data effectively and support decision-making."
},
{
id: 6,
icon: "🗄️",
title: "SQL for Data Analysis",
desc: "Learn SQL for querying, managing, and analyzing data stored in relational databases."
},
{
id: 7,
icon: "📋",
title: "Excel for Analytics",
desc: "Use Excel for data manipulation, reporting, advanced formulas, pivot tables, and analytics."
},
{
id: 8,
icon: "📊",
title: "Power BI & Tableau",
desc: "Build interactive dashboards and visualizations using Power BI and Tableau."
},
{
id: 9,
icon: "📈",
title: "Business Statistics",
desc: "Apply statistical techniques and analytical methods to support business decision-making."
}
],

tools: [
{ name: "Microsoft Excel", icon: "📊" },
{ name: "SQL", icon: "🗄️" },
{ name: "Power BI", icon: "📈" },
{ name: "Tableau", icon: "📉" },
{ name: "Python", icon: "🐍" },
{ name: "Pandas", icon: "🐼" },
{ name: "NumPy", icon: "🔢" },
{ name: "Jupyter Notebook", icon: "📓" },
{ name: "Google Sheets", icon: "📋" }
],

curriculum: [
  {
    module: "Introduction to Data Analytics & Excel Basics",
    topics: [
      "What is Data Analytics?",
      "Analytics Lifecycle",
      "Types of Analytics",
      "Excel Interface & Navigation",
      "Data Entry & Formatting",
      "Basic Formulas & Functions",
      "Sorting & Filtering Data"
    ]
  },
  {
    module: "Advanced Excel for Analytics",
    topics: [
      "Advanced Functions",
      "Lookup Functions (VLOOKUP, XLOOKUP)",
      "Conditional Formatting",
      "Pivot Tables",
      "Pivot Charts",
      "Data Validation",
      "Dashboard Creation"
    ]
  },
  {
    module: "Data Analysis with SQL",
    topics: [
      "Database Fundamentals",
      "SQL Syntax",
      "SELECT Queries",
      "Filtering & Sorting",
      "Joins",
      "Subqueries",
      "Aggregate Functions",
      "Views & Stored Procedures"
    ]
  },
  {
    module: "Visualizing Data in Power BI",
    topics: [
      "Power BI Introduction",
      "Data Import & Transformation",
      "Power Query",
      "Data Modeling",
      "DAX Fundamentals",
      "Interactive Dashboards",
      "Publishing Reports"
    ]
  },
  {
    module: "Building a Tableau Dashboard",
    topics: [
      "Tableau Interface",
      "Connecting Data Sources",
      "Charts & Graphs",
      "Calculated Fields",
      "Filters & Parameters",
      "Dashboard Design",
      "Storytelling with Data"
    ]
  },
  {
    module: "Python for Data Analytics",
    topics: [
      "Python Basics",
      "NumPy Fundamentals",
      "Pandas Data Analysis",
      "Data Cleaning",
      "Data Transformation",
      "Exploratory Data Analysis",
      "Working with CSV & Excel Files"
    ]
  },
  {
    module: "Business Analytics & Statistics",
    topics: [
      "Descriptive Statistics",
      "Probability Concepts",
      "Hypothesis Testing",
      "Correlation Analysis",
      "Regression Basics",
      "Business KPIs",
      "Data-Driven Decision Making"
    ]
  },
  {
    module: "Reporting & Business Intelligence",
    topics: [
      "Business Intelligence Concepts",
      "KPI Reporting",
      "Performance Dashboards",
      "Data Storytelling",
      "Report Automation",
      "Presentation of Insights",
      "Stakeholder Reporting"
    ]
  },
  {
    module: "Capstone Data Analytics Project",
    topics: [
      "Data Collection",
      "Data Cleaning",
      "SQL Analysis",
      "Dashboard Development",
      "Business Insights Generation",
      "Project Documentation",
      "Final Presentation"
    ]
  }
]
},

{
id: 3,
slug: "python-full-stack",
title: "Python Full Stack Development",
desc: "Python Full Stack Development involves building complete web applications by combining front-end and back-end technologies. Master Python, Django, databases, APIs, and web technologies through project-based learning and practical development experience.",
duration: "6 months",
fee: "₹35,000",
rating: "4.8",
img: list,

whatYouWillLearn: [
{
id: 1,
icon: "🐍",
title: "Python Programming Fundamentals",
desc: "Understand the fundamentals of Python programming and object-oriented programming concepts."
},
{
id: 2,
icon: "🎨",
title: "Front-End Development",
desc: "Design and develop responsive and interactive user interfaces using HTML, CSS, and JavaScript."
},
{
id: 3,
icon: "💻",
title: "Modern Web Design",
desc: "Learn front-end development principles and modern web design practices for creating user-friendly applications."
},
{
id: 4,
icon: "⚙️",
title: "Back-End Development with Django",
desc: "Develop robust and scalable back-end applications using Python and the Django framework."
},
{
id: 5,
icon: "🗄️",
title: "Database Management",
desc: "Design, manage, and maintain databases for web applications using relational database systems."
},
{
id: 6,
icon: "🔗",
title: "REST API Development",
desc: "Build REST APIs to enable seamless communication between applications and services."
},
{
id: 7,
icon: "🔐",
title: "Authentication & User Management",
desc: "Implement login systems, user authentication, authorization, and permission management."
},
{
id: 8,
icon: "🔀",
title: "Version Control & Collaboration",
desc: "Work with Git and GitHub to manage code, track changes, and collaborate effectively in development teams."
},
{
id: 9,
icon: "☁️",
title: "Deployment & Cloud Hosting",
desc: "Understand techniques for deploying web applications on cloud platforms and managing production environments."
}
],

tools: [
{ name: "Python", icon: "🐍" },
{ name: "Django", icon: "🌐" },
{ name: "HTML5", icon: "📄" },
{ name: "CSS3", icon: "🎨" },
{ name: "JavaScript", icon: "⚡" },
{ name: "Bootstrap", icon: "🅱️" },
{ name: "MySQL", icon: "🗄️" },
{ name: "SQLite", icon: "💾" },
{ name: "REST API", icon: "🔗" },
{ name: "Git", icon: "🔀" },
{ name: "GitHub", icon: "🐙" },
{ name: "VS Code", icon: "💻" },
{ name: "Postman", icon: "📮" },
{ name: "Linux Basics", icon: "🐧" },
{ name: "Cloud Deployment Tools", icon: "☁️" }
],

curriculum: [
  {
    module: "Python Basics & Introduction to Programming",
    topics: [
      "Introduction to Programming",
      "Python Installation & Setup",
      "Variables & Data Types",
      "Operators",
      "Conditional Statements",
      "Loops",
      "Functions",
      "Modules & Packages"
    ]
  },
  {
    module: "Object-Oriented Programming with Python",
    topics: [
      "Classes & Objects",
      "Constructors",
      "Inheritance",
      "Polymorphism",
      "Encapsulation",
      "Abstraction",
      "Exception Handling",
      "File Handling"
    ]
  },
  {
    module: "HTML, CSS & Responsive Web Design",
    topics: [
      "HTML5 Fundamentals",
      "Forms & Tables",
      "CSS3 Styling",
      "Flexbox & Grid",
      "Responsive Design",
      "Media Queries",
      "Bootstrap",
      "UI Development Best Practices"
    ]
  },
  {
    module: "JavaScript & DOM Manipulation",
    topics: [
      "JavaScript Fundamentals",
      "Functions & Events",
      "Arrays & Objects",
      "ES6 Features",
      "DOM Manipulation",
      "Form Validation",
      "Fetch API",
      "AJAX Basics"
    ]
  },
  {
    module: "Database Management with MySQL",
    topics: [
      "Database Concepts",
      "SQL Fundamentals",
      "CRUD Operations",
      "Joins",
      "Subqueries",
      "Indexes",
      "Stored Procedures",
      "Database Design"
    ]
  },
  {
    module: "Fundamentals of Django Framework",
    topics: [
      "Introduction to Django",
      "Project Structure",
      "Apps & Settings",
      "URLs & Routing",
      "Views",
      "Templates",
      "Static Files",
      "Django Admin"
    ]
  },
  {
    module: "Django Models, ORM & Templates",
    topics: [
      "Models",
      "Migrations",
      "Django ORM",
      "Relationships",
      "Template Language",
      "Forms",
      "CRUD Applications",
      "Class-Based Views"
    ]
  },
  {
    module: "REST API Development with Django REST Framework",
    topics: [
      "REST API Concepts",
      "Serializers",
      "APIView & ViewSets",
      "CRUD APIs",
      "Pagination",
      "Filtering & Search",
      "Permissions",
      "API Testing with Postman"
    ]
  },
  {
    module: "Authentication, Security & Deployment",
    topics: [
      "User Authentication",
      "JWT Authentication",
      "Authorization & Permissions",
      "Password Hashing",
      "Environment Variables",
      "Git & GitHub",
      "Linux Server Basics",
      "Application Deployment"
    ]
  },
  {
    module: "Full Stack Capstone Project",
    topics: [
      "Project Planning",
      "Frontend Development",
      "Backend API Development",
      "Database Integration",
      "Authentication System",
      "Deployment",
      "Testing & Debugging",
      "Project Presentation"
    ]
  }
]
},

{
id: 4,
slug: "data-science",
title: "Data Science",
desc: "Data Science combines statistics, programming, and machine learning to transform data into actionable insights. Learn to collect, analyze, visualize, and interpret data using industry-standard tools and techniques to solve real-world business problems and support data-driven decision-making.",
duration: "6 months",
fee: "₹45,000",
rating: "4.8",
img: list,

whatYouWillLearn: [
{
id: 1,
icon: "🐍",
title: "Python for Data Science",
desc: "Learn Python programming for data analysis, scientific computing, and data-driven problem solving."
},
{
id: 2,
icon: "🧹",
title: "Data Collection & Preparation",
desc: "Learn techniques for data collection, cleaning, transformation, and preprocessing to prepare datasets for analysis."
},
{
id: 3,
icon: "📊",
title: "Data Analysis",
desc: "Analyze structured and unstructured data to identify meaningful patterns, trends, and business insights."
},
{
id: 4,
icon: "📈",
title: "Statistics for Data Science",
desc: "Apply statistical concepts and data-driven techniques to solve real-world business and analytical problems."
},
{
id: 5,
icon: "📉",
title: "Data Visualization",
desc: "Create engaging visualizations, reports, and dashboards to communicate insights effectively."
},
{
id: 6,
icon: "🔍",
title: "Exploratory Data Analysis",
desc: "Perform exploratory data analysis (EDA) on real-world datasets to uncover patterns and hidden insights."
},
{
id: 7,
icon: "🤖",
title: "Machine Learning",
desc: "Develop, train, and evaluate machine learning models for prediction and classification tasks."
},
{
id: 8,
icon: "🧠",
title: "Supervised & Unsupervised Learning",
desc: "Understand the algorithms and techniques used in supervised and unsupervised machine learning."
},
{
id: 9,
icon: "🚀",
title: "Capstone Data Science Project",
desc: "Apply data science concepts, analytics, visualization, and machine learning techniques through a real-world project."
}
],

tools: [
{ name: "Python", icon: "🐍" },
{ name: "Jupyter Notebook", icon: "📓" },
{ name: "NumPy", icon: "🔢" },
{ name: "Pandas", icon: "🐼" },
{ name: "Matplotlib", icon: "📊" },
{ name: "Seaborn", icon: "📈" },
{ name: "Scikit-learn", icon: "🤖" },
{ name: "SQL", icon: "🗄️" },
{ name: "Power BI", icon: "📉" },
{ name: "Tableau", icon: "📊" },
{ name: "TensorFlow", icon: "🧠" },
{ name: "Google Colab", icon: "☁️" },
{ name: "Excel", icon: "📋" },
{ name: "Git", icon: "🔀" },
{ name: "GitHub", icon: "🐙" }
],

curriculum: [
  {
    module: "Introduction to Data Science & Python Basics",
    topics: [
      "What is Data Science?",
      "Data Science Lifecycle",
      "Python Installation & Setup",
      "Variables & Data Types",
      "Conditional Statements",
      "Loops & Functions",
      "Modules & Packages",
      "Jupyter Notebook"
    ]
  },
  {
    module: "Data Analysis with NumPy & Pandas",
    topics: [
      "NumPy Arrays",
      "Array Operations",
      "Pandas Series & DataFrames",
      "Data Cleaning",
      "Data Transformation",
      "Handling Missing Values",
      "Data Aggregation",
      "Working with CSV & Excel Files"
    ]
  },
  {
    module: "Data Visualization",
    topics: [
      "Introduction to Data Visualization",
      "Matplotlib Basics",
      "Seaborn Fundamentals",
      "Line Charts",
      "Bar Charts",
      "Scatter Plots",
      "Histograms",
      "Visualization Best Practices"
    ]
  },
  {
    module: "Statistics for Data Scientists",
    topics: [
      "Descriptive Statistics",
      "Probability Concepts",
      "Sampling Techniques",
      "Hypothesis Testing",
      "Correlation Analysis",
      "Regression Analysis",
      "Statistical Distributions",
      "Business Applications of Statistics"
    ]
  },
  {
    module: "SQL for Data Analysis",
    topics: [
      "Database Fundamentals",
      "SQL Queries",
      "Filtering & Sorting",
      "Joins",
      "Subqueries",
      "Aggregate Functions",
      "Views",
      "Data Extraction Techniques"
    ]
  },
  {
    module: "Machine Learning Fundamentals",
    topics: [
      "Introduction to Machine Learning",
      "ML Workflow",
      "Data Preprocessing",
      "Feature Engineering",
      "Model Training",
      "Model Evaluation",
      "Train-Test Split",
      "Cross Validation"
    ]
  },
  {
    module: "Supervised & Unsupervised Learning",
    topics: [
      "Linear Regression",
      "Logistic Regression",
      "Decision Trees",
      "Random Forest",
      "K-Means Clustering",
      "Hierarchical Clustering",
      "Classification Problems",
      "Model Optimization"
    ]
  },
  {
    module: "Business Intelligence & Visualization Tools",
    topics: [
      "Power BI Fundamentals",
      "Data Modeling",
      "DAX Basics",
      "Interactive Dashboards",
      "Tableau Fundamentals",
      "Storytelling with Data",
      "Business Reporting",
      "KPI Analysis"
    ]
  },
  {
    module: "Data Science Capstone Project",
    topics: [
      "Problem Definition",
      "Data Collection",
      "Data Cleaning & Analysis",
      "Model Development",
      "Model Evaluation",
      "Dashboard Creation",
      "Project Documentation",
      "Final Presentation"
    ]
  }
]
},

{
id: 5,
slug: "cyber-security",
title: "Cyber Security",
desc: "Cyber Security focuses on protecting systems, networks, and data from cyber threats and security breaches. Gain practical expertise in security operations, risk assessment, ethical hacking, and incident response to help safeguard modern digital environments.",
duration: "6 months",
fee: "₹45,000",
rating: "4.8",
img: list,

whatYouWillLearn: [
{
id: 1,
icon: "🛡️",
title: "Cyber Security Fundamentals",
desc: "Understand the basics of cybersecurity, information security, and the principles used to protect digital assets."
},
{
id: 2,
icon: "⚔️",
title: "Cyber Threats & Defense",
desc: "Learn how cyber attacks are carried out and how organizations defend against security threats."
},
{
id: 3,
icon: "🌐",
title: "Network Security",
desc: "Understand network security concepts, protocols, architectures, and methods used to secure communications."
},
{
id: 4,
icon: "🔍",
title: "Vulnerability Assessment",
desc: "Detect vulnerabilities and evaluate security risks in systems, networks, and applications."
},
{
id: 5,
icon: "👨‍💻",
title: "Ethical Hacking & Penetration Testing",
desc: "Learn ethical hacking methodologies and the fundamentals of penetration testing."
},
{
id: 6,
icon: "🦠",
title: "Malware & Threat Analysis",
desc: "Understand malware, ransomware, phishing attacks, and other common cyber threats."
},
{
id: 7,
icon: "🚨",
title: "Security Monitoring & Incident Response",
desc: "Conduct security monitoring activities and respond effectively to security incidents."
},
{
id: 8,
icon: "🔐",
title: "Web Application Security",
desc: "Learn web application security concepts and identify common vulnerabilities and attack vectors."
},
{
id: 9,
icon: "📋",
title: "Risk Management & Compliance",
desc: "Understand cybersecurity frameworks, risk management practices, compliance requirements, and security best practices."
}
],

tools: [
{ name: "Kali Linux", icon: "🐉" },
{ name: "Wireshark", icon: "🦈" },
{ name: "Nmap", icon: "📡" },
{ name: "Burp Suite", icon: "🕷️" },
{ name: "Metasploit", icon: "💥" },
{ name: "Nessus", icon: "🔍" },
{ name: "OWASP ZAP", icon: "⚡" },
{ name: "Splunk", icon: "📊" },
{ name: "Linux", icon: "🐧" },
{ name: "Windows Security Tools", icon: "🪟" },
{ name: "OpenVAS", icon: "🛡️" }
],

curriculum: [
  {
    module: "Introduction to Cyber Security & Network Fundamentals",
    topics: [
      "Introduction to Cyber Security",
      "CIA Triad",
      "Types of Cyber Threats",
      "Networking Basics",
      "OSI & TCP/IP Models",
      "IP Addressing",
      "DNS, HTTP & HTTPS",
      "Network Devices & Protocols"
    ]
  },
  {
    module: "Linux & Windows Security",
    topics: [
      "Linux Fundamentals",
      "Windows Fundamentals",
      "User & Access Management",
      "File Permissions",
      "System Hardening",
      "Security Policies",
      "Patch Management",
      "Endpoint Security"
    ]
  },
  {
    module: "Network Security & Monitoring",
    topics: [
      "Firewalls",
      "IDS & IPS",
      "VPN Technologies",
      "Packet Analysis",
      "Wireshark Fundamentals",
      "Network Monitoring",
      "Traffic Analysis",
      "Security Logging"
    ]
  },
  {
    module: "Ethical Hacking Fundamentals",
    topics: [
      "Ethical Hacking Process",
      "Reconnaissance",
      "Footprinting",
      "Scanning Techniques",
      "Enumeration",
      "Information Gathering",
      "Open Source Intelligence (OSINT)",
      "Reporting Findings"
    ]
  },
  {
    module: "Vulnerability Assessment & Penetration Testing",
    topics: [
      "Vulnerability Assessment",
      "Risk Identification",
      "Nmap Scanning",
      "Nessus Essentials",
      "OpenVAS",
      "Exploitation Basics",
      "Security Testing Methodologies",
      "VAPT Reporting"
    ]
  },
  {
    module: "Web Application Security",
    topics: [
      "Web Application Architecture",
      "OWASP Top 10",
      "SQL Injection",
      "Cross-Site Scripting (XSS)",
      "Cross-Site Request Forgery (CSRF)",
      "Authentication Vulnerabilities",
      "Burp Suite Fundamentals",
      "Secure Coding Practices"
    ]
  },
  {
    module: "Security Operations Center (SOC)",
    topics: [
      "SOC Fundamentals",
      "Security Monitoring",
      "SIEM Concepts",
      "Splunk Basics",
      "Log Analysis",
      "Threat Detection",
      "Alert Management",
      "Incident Escalation"
    ]
  },
  {
    module: "Threat Hunting & Incident Response",
    topics: [
      "Threat Intelligence",
      "Threat Hunting Methodology",
      "Malware Analysis Basics",
      "Phishing Analysis",
      "Digital Forensics Fundamentals",
      "Incident Response Lifecycle",
      "Containment & Recovery",
      "Post-Incident Reporting"
    ]
  },
  {
    module: "Cyber Security Capstone Project",
    topics: [
      "Security Assessment Project",
      "Network Security Audit",
      "Vulnerability Analysis",
      "Penetration Testing Report",
      "Threat Detection Exercise",
      "Incident Response Simulation",
      "Project Documentation",
      "Final Presentation"
    ]
  }
]
},

  {
id: 6,
slug: "mern-stack-development",
title: "MERN Stack Development",
desc: "MERN Stack Development combines front-end and back-end technologies to create dynamic web applications. Gain practical experience in React, Node.js, Express.js, and MongoDB while building real-world applications that reflect modern development practices.",
duration: "6 months",
fee: "₹35,000",
rating: "4.8",
img: list,

whatYouWillLearn: [
{
id: 1,
icon: "⚛️",
title: "React Fundamentals",
desc: "Understand React component architecture, reusable components, and modern front-end development practices."
},
{
id: 2,
icon: "🔄",
title: "State Management",
desc: "Learn state management concepts and build interactive user interfaces using React and Redux."
},
{
id: 3,
icon: "🖥️",
title: "Node.js & Express.js",
desc: "Build scalable server-side applications and APIs using Node.js and Express.js."
},
{
id: 4,
icon: "🍃",
title: "MongoDB Database Management",
desc: "Design, manage, and maintain NoSQL databases using MongoDB."
},
{
id: 5,
icon: "🔗",
title: "REST API Development",
desc: "Design and develop REST APIs for seamless communication between front-end and back-end applications."
},
{
id: 6,
icon: "🔐",
title: "Authentication & Authorization",
desc: "Implement secure authentication, authorization, and user management systems."
},
{
id: 7,
icon: "🎨",
title: "Responsive UI Development",
desc: "Create responsive and modern user interfaces using HTML5, CSS3, Bootstrap, and Tailwind CSS."
},
{
id: 8,
icon: "🔀",
title: "Version Control & Collaboration",
desc: "Use Git and GitHub to manage source code and collaborate efficiently in development teams."
},
{
id: 9,
icon: "☁️",
title: "Deployment & Hosting",
desc: "Learn application deployment, hosting methods, and production-ready development workflows."
}
],

tools: [
{ name: "JavaScript (ES6+)", icon: "⚡" },
{ name: "React.js", icon: "⚛️" },
{ name: "Node.js", icon: "🟢" },
{ name: "Express.js", icon: "🚂" },
{ name: "MongoDB", icon: "🍃" },
{ name: "HTML5", icon: "📄" },
{ name: "CSS3", icon: "🎨" },
{ name: "Bootstrap", icon: "🅱️" },
{ name: "Tailwind CSS", icon: "💨" },
{ name: "Redux", icon: "🔄" },
{ name: "Git", icon: "🔀" },
{ name: "GitHub", icon: "🐙" },
{ name: "Postman", icon: "📮" }
],

curriculum: [
  {
    module: "Introduction to Web Development & JavaScript Basics",
    topics: [
      "Internet & Web Fundamentals",
      "HTML Structure",
      "CSS Basics",
      "JavaScript Syntax",
      "Variables & Data Types",
      "Functions & Loops",
      "DOM Manipulation"
    ]
  },
  {
    module: "HTML, CSS & Responsive Web Design",
    topics: [
      "Semantic HTML",
      "Flexbox & Grid",
      "Responsive Design",
      "Media Queries",
      "Bootstrap",
      "Tailwind CSS"
    ]
  },
  {
    module: "Introduction to React.js",
    topics: [
      "React Fundamentals",
      "JSX",
      "Components",
      "Props",
      "State",
      "Event Handling",
      "React Hooks"
    ]
  },
  {
    module: "Advanced React & State Management",
    topics: [
      "Context API",
      "Redux Toolkit",
      "React Router",
      "API Integration",
      "Custom Hooks",
      "Performance Optimization"
    ]
  },
  {
    module: "Node.js & Express.js",
    topics: [
      "Node.js Fundamentals",
      "Express Framework",
      "Middleware",
      "Routing",
      "MVC Architecture",
      "Error Handling"
    ]
  },
  {
    module: "Managing MongoDB Database",
    topics: [
      "MongoDB Basics",
      "CRUD Operations",
      "Mongoose",
      "Schema Design",
      "Relationships",
      "Aggregation"
    ]
  },
  {
    module: "Building REST APIs",
    topics: [
      "REST Principles",
      "API Development",
      "Postman Testing",
      "Validation",
      "Pagination",
      "Filtering & Search"
    ]
  },
  {
    module: "Security & Authentication",
    topics: [
      "JWT Authentication",
      "Authorization",
      "Password Hashing",
      "Role-Based Access",
      "Security Best Practices"
    ]
  },
  {
    module: "Deployment & Capstone Project",
    topics: [
      "Git & GitHub",
      "Environment Variables",
      "Vercel Deployment",
      "Render Deployment",
      "Production Optimization",
      "Final Project"
    ]
  }
]
}

];
