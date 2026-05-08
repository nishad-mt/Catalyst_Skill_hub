// =============================================
//  CATALYST TECH HUB — CENTRALIZED SITE DATA
// =============================================

export const courses = [
  {
    id: 1,
    slug: "full-stack-web-development",
    tag: "Development",
    title: "Full Stack Web Development",
    desc: "Master React, Node.js, MongoDB & more. Build production-grade apps from scratch.",
    duration: "6 months",
    fee: "₹45,000",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
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
    id: 2,
    slug: "data-science-ai",
    tag: "AI & Data",
    title: "Data Science & AI",
    desc: "Python, ML, deep learning, and real-world datasets with live industry projects.",
    duration: "6 months",
    fee: "₹50,000",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
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
    id: 3,
    slug: "digital-marketing",
    tag: "Marketing",
    title: "Digital Marketing",
    desc: "SEO, SEM, social media strategy, analytics, and high-performance campaigns.",
    duration: "3 months",
    fee: "₹25,000",
    img: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=600&q=80",
    whatYouWillLearn: [
      { id: 1, icon: "🔍", title: "SEO Optimization", desc: "Master on-page and off-page SEO to rank higher on Google." },
      { id: 2, icon: "📱", title: "Social Media Marketing", desc: "Build brand presence on Instagram, LinkedIn, and Facebook." },
      { id: 3, icon: "📧", title: "Email Marketing", desc: "Design high-converting email campaigns and automation." },
      { id: 4, icon: "📊", title: "Google Analytics", desc: "Track user behavior and optimize marketing ROI." },
      { id: 5, icon: "💰", title: "Paid Advertising", desc: "Master Google Ads and Meta Ads for lead generation." },
    ],
    tools: [
      { name: "Google Ads", icon: "🎯" },
      { name: "Meta Ads", icon: "📱" },
      { name: "Mailchimp", icon: "🐒" },
      { name: "SEMrush", icon: "📈" },
      { name: "Canva", icon: "🎨" },
      { name: "Ahrefs", icon: "🔗" },
    ]
  },
  {
    id: 4,
    slug: "ui-ux-design",
    tag: "Design",
    title: "UI/UX Design",
    desc: "Figma, user research, wireframing, and building modern design systems.",
    duration: "4 months",
    fee: "₹35,000",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    whatYouWillLearn: [
      { id: 1, icon: "🎨", title: "Design Principles", desc: "Learn color theory, typography, and visual hierarchy." },
      { id: 2, icon: "👥", title: "User Research", desc: "Conduct interviews and usability testing to understand users." },
      { id: 3, icon: "📝", title: "Wireframing", desc: "Create low-fidelity and high-fidelity wireframes in Figma." },
      { id: 4, icon: "🔄", title: "Prototyping", desc: "Build interactive prototypes to test user flows." },
      { id: 5, icon: "📏", title: "Design Systems", desc: "Create scalable UI kits and component libraries." },
    ],
    tools: [
      { name: "Figma", icon: "🎨" },
      { name: "Adobe XD", icon: "💎" },
      { name: "Sketch", icon: "💎" },
      { name: "InVision", icon: "👓" },
      { name: "Miro", icon: "📝" },
      { name: "Zeplin", icon: "🚀" },
    ]
  },
  {
    id: 5,
    slug: "python-programming",
    tag: "Programming",
    title: "Python Programming",
    desc: "From basics to advanced: automation, scripting, APIs, and data processing.",
    duration: "3 months",
    fee: "₹20,000",
    img: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&q=80",
    whatYouWillLearn: [
      { id: 1, icon: "📜", title: "Core Python", desc: "Master variables, loops, functions, and data structures." },
      { id: 2, icon: "🧩", title: "OOPs Concepts", desc: "Learn object-oriented programming for scalable code." },
      { id: 3, icon: "🌐", title: "Web Scraping", desc: "Extract data from websites using Beautiful Soup and Selenium." },
      { id: 4, icon: "🔌", title: "API Development", desc: "Build RESTful APIs with Flask and FastAPI." },
      { id: 5, icon: "🤖", title: "Automation", desc: "Automate repetitive tasks with Python scripts." },
    ],
    tools: [
      { name: "PyCharm", icon: "🐍" },
      { name: "VS Code", icon: "💻" },
      { name: "Anaconda", icon: "🧪" },
      { name: "Git", icon: "🐙" },
      { name: "Docker", icon: "🐳" },
      { name: "SQLite", icon: "🗄️" },
    ]
  },
  {
    id: 6,
    slug: "aws-cloud-computing",
    tag: "Cloud",
    title: "AWS Cloud Computing",
    desc: "Cloud fundamentals, EC2, S3, Lambda, DevOps essentials, and certifications.",
    duration: "4 months",
    fee: "₹40,000",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    whatYouWillLearn: [
      { id: 1, icon: "☁️", title: "Cloud Fundamentals", desc: "Understand IaaS, PaaS, and SaaS models on AWS." },
      { id: 2, icon: "🖥️", title: "EC2 & S3", desc: "Master virtual servers and scalable object storage." },
      { id: 3, icon: "🔐", title: "IAM & Security", desc: "Manage user access and secure your cloud infrastructure." },
      { id: 4, icon: "⚡", title: "Serverless (Lambda)", desc: "Build event-driven applications without managing servers." },
      { id: 5, icon: "🚢", title: "DevOps on AWS", desc: "Implement CI/CD using AWS CodePipeline and CodeDeploy." },
    ],
    tools: [
      { name: "AWS Console", icon: "☁️" },
      { name: "Terraform", icon: "🏗️" },
      { name: "Docker", icon: "🐳" },
      { name: "Jenkins", icon: "🤵" },
      { name: "Kubernetes", icon: "☸️" },
      { name: "CloudWatch", icon: "📊" },
    ]
  },
  {
    id: 7,
    slug: "cyber-security",
    tag: "Security",
    title: "Cyber Security",
    location: "Calicut",
    desc: "Learn in-demand tech skills through hands-on training, real-world projects, and expert mentorship designed",
    duration: "8 months",
    fee: "₹89,999",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
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
    id: 8,
    slug: "mern-stack",
    tag: "Mern",
    title: "Mern Stack",
    desc: "Javascript, Node js, Type Script, React, Mongo DB , and PSQL.",
    duration: "7 months",
    fee: "₹59,000",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
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

export const centers = [
  {
    id: 1,
    icon: "🏢",
    name: "Kozhikode Main Center",
    desc: "Our flagship campus with labs, career center, and dedicated placement cell.",
    badge: "Main Campus",
  },
  {
    id: 2,
    icon: "🏫",
    name: "Calicut University Road",
    desc: "Convenient location for university students with flexible evening batches.",
    badge: "Evening Batches",
  },
  {
    id: 3,
    icon: "🏙️",
    name: "Kannur Center",
    desc: "Fully equipped facility serving the students of North Kerala.",
    badge: "Weekend Batches",
  },
  {
    id: 4,
    icon: "🏬",
    name: "Malappuram Center",
    desc: "Modern facility with industry-standard hardware, software, and mentors.",
    badge: "Fast Growing",
  },
];

export const stats = [
  { id: 1, num: "1000+", label: "Students Trained" },
  { id: 2, num: "95%",   label: "Placement Rate"   },
  { id: 3, num: "20+",   label: "Expert Courses"   },
  { id: 4, num: "4",     label: "Centers"           },
  { id: 5, num: "50+",   label: "Hiring Partners"  },
];

export const testimonials = [
  {
    id: 1,
    stars: 5,
    text: "Catalyst completely changed my career trajectory. The Full Stack program was intense but incredibly rewarding. I got placed at a startup within 2 months of completing the course.",
    name: "Akhil Menon",
    role: "React Developer, Bangalore",
    initials: "AM",
  },
  {
    id: 2,
    stars: 5,
    text: "The mentors here actually care about your growth. They went out of their way to help me prep for interviews. Now I'm working at a top digital agency in Kerala.",
    name: "Fathima Rashid",
    role: "Digital Marketer, Kozhikode",
    initials: "FR",
  },
  {
    id: 3,
    stars: 5,
    text: "I had zero coding experience. Catalyst's Python course made me job-ready in just 3 months. The placement support was exceptional and the community is incredible.",
    name: "Sreeja Nair",
    role: "Data Analyst, Remote",
    initials: "SN",
  },
];

export const contactDetails = [
  { id: 1, icon: "📞", label: "Phone",   value: "+91 98765 43210"                           },
  { id: 2, icon: "✉️", label: "Email",   value: "info@catalysttechhub.in"                   },
  { id: 3, icon: "📍", label: "Address", value: "Mavoor Road, Kozhikode, Kerala – 673001"   },
  { id: 4, icon: "⏰", label: "Hours",   value: "Monday – Saturday, 9:00 AM – 6:00 PM"      },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Offline Centers", href: "/#centers" },
  { label: "Success Stories",  href: "/#stories"   },
];

export const courseOptions = [
  "Full Stack Web Development",
  "Data Science & AI",
  "Digital Marketing",
  "UI/UX Design",
  "Python Programming",
  "AWS Cloud Computing",
  "Other / Not Sure Yet",
];

export const alumni = [
  { id: 1, name: "Arjun Das", role: "Software Engineer", company: "Google", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { id: 2, name: "Sneha Nair", role: "UX Designer", company: "Meta", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { id: 3, name: "Rahul Krishnan", role: "Data Scientist", company: "Amazon", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
  { id: 4, name: "Anjali P", role: "Frontend Developer", company: "Flipkart", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
  { id: 5, name: "Vikas M", role: "Backend Developer", company: "Zomato", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80" },
  { id: 6, name: "Meera S", role: "Product Designer", company: "Adobe", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80" },
  { id: 7, name: "Karthik R", role: "DevOps Engineer", company: "Microsoft", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { id: 8, name: "Pooja V", role: "Full Stack Developer", company: "Freshworks", img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&q=80" },
  { id: 9, name: "Siddharth K", role: "AI Research", company: "OpenAI", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
  { id: 10, name: "Divya M", role: "Mobile Dev", company: "Apple", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80" },
];

