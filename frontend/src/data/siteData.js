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
