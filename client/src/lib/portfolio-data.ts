export const personalInfo = {
  name: "Mohan Narasimha",
  fullName: "Mohan Narasimha Kodapaka",
  title: "Data Engineer & GenAI Engineer",
  location: "St. Louis, MO",
  email: "mohannarasimha2001@gmail.com",
  phone: "+1 (314) 398-9474",
  linkedin: "https://linkedin.com/in/mohan-narasimha-kodapaka-b914b8372",
  github: "https://github.com/",
  summary:
    "Data Engineer and Analytics Engineer with hands-on experience designing, implementing, and delivering end-to-end data solutions. Strong in building scalable data pipelines, optimizing analytics workflows, and developing machine learning systems using Python, SQL, Power BI, and cloud platforms.",
  roles: ["Data Engineer", "GenAI Engineer", "Analytics Engineer"],
  highlights: [
    "Built analytics dashboards and insights for job-market & salary trends (Power BI + Python)",
    "Developed prediction models for salary estimation and skill-demand insights",
    "Designed end-to-end pipelines & reporting structures using SQL and data modeling",
    "Delivered scalable, production-ready machine learning solutions with full documentation",
  ],
};

export const projects = [
  {
    id: "futureworks",
    title: "FutureWorks - Employability Analytics Dashboard",
    description:
      "Designed and implemented an end-to-end analytics platform to analyze job postings, salary trends, and in-demand skills. Built scalable ETL pipelines and delivered executive Power BI dashboards using KPIs and data storytelling techniques.",
    tags: ["Power BI", "Python", "Machine Learning", "SQL", "ETL"],
    period: "Aug 2025 - Nov 2025",
    type: "Capstone",
    color: "primary" as const,
  },
  {
    id: "ev-analytics",
    title: "Electric Vehicle Adoption Analytics",
    description:
      "Designed and built analytical workflows to study EV adoption trends across Washington State regions. Implemented data analysis techniques to identify key adoption drivers and patterns, delivering insights through optimized visualizations.",
    tags: ["Python", "Data Analysis", "Visualization", "Pandas"],
    period: "Apr 2025 - May 2025",
    type: "Analytics",
    color: "accent" as const,
  },
  {
    id: "petconnect",
    title: "PetConnect - Lost Pet Reunification Platform",
    description:
      "Designed an end-to-end platform concept leveraging geolocation and community collaboration. Built scalable system architecture and proposed AI-assisted pet identification workflows.",
    tags: ["Product Design", "Geolocation", "AI", "System Architecture"],
    period: "Mar 2025 - Apr 2025",
    type: "System Design",
    color: "primary" as const,
  },
  {
    id: "book-recommender",
    title: "Book Recommendation System",
    description:
      "Built an end-to-end Book Recommendation System web application during a six-month industry internship. Implemented data preprocessing, feature engineering, and ML pipelines with iterative tuning for improved accuracy.",
    tags: ["Python", "Machine Learning", "Web App", "Feature Engineering"],
    period: "Dec 2022 - Jun 2023",
    type: "Internship Project",
    color: "accent" as const,
  },
];

export const skillCategories = [
  {
    title: "Programming & Querying",
    icon: "code",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 88 },
      { name: "PySpark", level: 72 },
      { name: "Pandas / NumPy", level: 85 },
    ],
  },
  {
    title: "Data Engineering",
    icon: "database",
    skills: [
      { name: "ETL / ELT Pipelines", level: 85 },
      { name: "Data Modeling", level: 82 },
      { name: "Data Warehousing", level: 80 },
      { name: "APIs", level: 78 },
    ],
  },
  {
    title: "Cloud & Big Data",
    icon: "cloud",
    skills: [
      { name: "AWS (S3, Glue, Lambda)", level: 80 },
      { name: "Azure (ADF, Databricks)", level: 75 },
      { name: "Redshift / Synapse", level: 72 },
      { name: "Docker", level: 65 },
    ],
  },
  {
    title: "Analytics & BI",
    icon: "chart",
    skills: [
      { name: "Power BI / DAX", level: 88 },
      { name: "Dashboarding", level: 85 },
      { name: "KPI Design", level: 82 },
      { name: "Data Storytelling", level: 80 },
    ],
  },
  {
    title: "GenAI / ML",
    icon: "brain",
    skills: [
      { name: "Machine Learning", level: 78 },
      { name: "NLP / LLM Concepts", level: 72 },
      { name: "RAG Basics", level: 68 },
      { name: "Model Deployment", level: 70 },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: "wrench",
    skills: [
      { name: "Git / GitHub", level: 85 },
      { name: "Jupyter Notebook", level: 88 },
      { name: "VS Code", level: 90 },
      { name: "Agile / Scrum", level: 75 },
    ],
  },
];

export const experience = [
  {
    title: "Data Science Intern",
    company: "iNeuron Intelligence Pvt. Ltd.",
    location: "Bengaluru, India",
    period: "Dec 2022 - Jun 2023",
    bullets: [
      "Designed and built an end-to-end Book Recommendation System web application as part of a six-month industry internship",
      "Implemented data preprocessing, feature engineering, and machine learning pipelines using Python",
      "Optimized model performance through iterative tuning and evaluation to improve recommendation accuracy",
      "Collaborated with mentors and peers to align the solution with industry standards and business requirements",
      "Delivered a scalable, production-ready machine learning solution with full documentation",
    ],
  },
];

export const education = [
  {
    degree: "Master of Science in Information Systems",
    school: "Saint Louis University",
    location: "St. Louis, MO",
    period: "Aug 2023 - Dec 2025",
    focus: "Data Engineering, Database Systems, Big Data Analytics, Cloud Computing, Machine Learning, Data Visualization",
  },
];

export const certifications = [
  "AWS Academy Graduate - Cloud Foundations",
  "Oracle Cloud Infrastructure 2021 Certified Architect Associate",
  "AI-ML Virtual Internship - AWS Academy / EduSkills / AICTE",
  "MongoDB Hands-On Workshop",
];

export const softSkills = [
  "Analytical Thinking",
  "Business Communication",
  "Problem Solving",
  "Stakeholder Collaboration",
  "Ownership",
  "Continuous Learning",
];
