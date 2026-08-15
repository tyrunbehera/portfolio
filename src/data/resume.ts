export const personal = {
  name: "Tarun N. Behera",
  headline: "DevOps Engineer",
  tagline:
    "AWS Certified · Cisco Cyber Security Certified · Oracle Certified · FinOps Certified ×2",
  location: "India",
  address: "276/Abhirbhav Soc-1, Opp. Chikuwadi, Pandesara, Surat",
  timezone: "IST (UTC+5:30)",
  availability: "Open to Opportunities",
  response: "< 24h",
  email: "tyrunbehera@gmail.com",
  phone: "+91 9574747632",
  dob: "01 October 2000",
  languages: ["English", "Hindi", "Odia", "Gujarati", "Marathi"],
  linkedin: "https://www.linkedin.com/in/tarun-behera-86a343235",
  github: "https://github.com/TarunBehera",
  about: [
    "I am a DevOps Engineer with 4 years of experience building cloud platforms that are secure, automated, and built to scale. My core focus is AWS infrastructure, CI/CD pipelines, container orchestration, and cloud security. I enjoy taking ownership of complex infrastructure problems and turning them into clean, reliable systems.",
    "At every company I have worked with, I have gone deep on the tools that matter most: Terraform for infrastructure as code, Kubernetes for container workloads, GitHub Actions and GitLab CI/CD for delivery pipelines, and Datadog, Grafana, and Prometheus for observability. Security is never bolted on at the end. I embed Trivy, TruffleHog, and OWASP ZAP directly into the pipeline so issues are caught before they reach production.",
    "My results speak for themselves. I have cut cloud costs by 40% through structured FinOps practices, reduced deployment times by 30% through pipeline automation, and maintained 99.9% uptime through proactive monitoring and incident response. I thrive in engineering teams where ownership is expected and automation is the standard.",
  ],
  stats: [
    { label: "Years Experience", value: "4+" },
    { label: "Cost Reduction", value: "40%" },
    { label: "Deploy Time Cut", value: "30%" },
    { label: "Uptime Target", value: "99.9%" },
  ],
};

export const whatIDo = [
  {
    icon: "☁️",
    tag: "CLOUD",
    title: "Cloud Infrastructure",
    description:
      "I design and manage AWS environments built for security and scale. From VPC and IAM setup to multi-region architecture and Landing Zone, I make sure the foundation is solid before anything else is built on top.",
    tools: ["AWS EC2", "AWS ECS", "AWS EKS", "AWS Lambda", "CloudFront", "VPC", "IAM", "GCP"],
  },
  {
    icon: "🔄",
    tag: "CI/CD",
    title: "Pipeline Engineering",
    description:
      "I build delivery pipelines that teams actually trust. PR-based workflows, environment promotion gates, automated test runs, and zero-downtime deployments so engineers can ship with confidence.",
    tools: ["GitHub Actions", "GitLab CI/CD", "ArgoCD", "BitBucket Pipelines", "Bash Scripting"],
  },
  {
    icon: "🔒",
    tag: "SECURITY",
    title: "DevSecOps",
    description:
      "Security belongs in the pipeline, not after it. I integrate container scanning, secret detection, and dynamic testing so vulnerabilities are caught before they reach production.",
    tools: ["Trivy", "TruffleHog", "OWASP ZAP", "AWS Security Hub", "AWS Config", "AWS Shield", "CloudTrail"],
  },
  {
    icon: "📊",
    tag: "OBSERVABILITY",
    title: "Monitoring and Reliability",
    description:
      "I set up observability stacks that give teams real visibility into what is happening. Dashboards, alerts, SLO tracking, and runbooks so incidents are caught early and resolved fast.",
    tools: ["Datadog", "Grafana", "Prometheus", "New Relic", "Sentry", "PostHog", "CloudWatch"],
  },
  {
    icon: "💰",
    tag: "FINOPS",
    title: "Cloud Cost Optimisation",
    description:
      "Cloud bills grow fast without discipline. I bring structure to cost management through tagging, Cost Explorer analysis, Reserved Instance planning, and monthly spend reviews that drive real savings.",
    tools: ["AWS Cost Explorer", "Reserved Instances", "Savings Plans", "Budget Alerts", "Cost Allocation Tags"],
  },
  {
    icon: "🤖",
    tag: "IaC",
    title: "Infrastructure as Code",
    description:
      "Every piece of infrastructure I build is version-controlled, modular, and repeatable. Terraform and CloudFormation for provisioning, Ansible for configuration, Helm for Kubernetes workloads.",
    tools: ["Terraform", "CloudFormation", "Ansible", "Helm", "Docker", "Kubernetes"],
  },
];

export const skills = [
  {
    category: "Cloud & Infrastructure",
    items: [
      "AWS EC2", "AWS ECS", "AWS EKS", "AWS Lambda", "AWS S3",
      "AWS RDS", "AWS CloudFront", "AWS VPC", "GCP", "Cloudways",
      "Terraform", "CloudFormation", "Ansible",
    ],
  },
  {
    category: "Containers & Orchestration",
    items: ["Docker", "Kubernetes (K8s)", "Helm", "AWS ECS Fargate", "Container Registry"],
  },
  {
    category: "CI/CD & Version Control",
    items: ["GitHub Actions", "GitLab CI/CD", "ArgoCD", "BitBucket Pipelines", "Bash Scripting", "Git"],
  },
  {
    category: "Observability & Monitoring",
    items: ["Grafana", "Datadog", "New Relic", "Sentry", "Prometheus", "PostHog", "AWS CloudWatch", "Plesk Server"],
  },
  {
    category: "Security & Compliance",
    items: [
      "Trivy", "TruffleHog", "OWASP ZAP",
      "AWS Security Hub", "AWS CloudTrail", "AWS Config",
      "AWS Inspector", "AWS Shield", "IAM Governance",
    ],
  },
  {
    category: "Databases & Storage",
    items: ["MongoDB", "MongoDB Atlas", "PostgreSQL", "Redis", "AWS S3", "AWS Backup"],
  },
  {
    category: "FinOps & Governance",
    items: [
      "AWS Cost Explorer", "Cost Allocation Tags",
      "Reserved Instances", "Savings Plans",
      "Budget Alerts", "FinOps Framework",
    ],
  },
  {
    category: "Languages & Frameworks",
    items: ["Bash", "YAML", "HCL (Terraform)", "Python (scripting)", "Vue.js (pipeline support)"],
  },
];

export const experience = [
  {
    role: "Senior DevOps Engineer",
    company: "Logicwind",
    location: "Surat, Gujarat",
    period: "Mar 2026 – Present",
    current: true,
    summary: "Full ownership of DevOps infrastructure across multiple AI and SaaS product platforms.",
    bullets: [
      "Own the entire DevOps infrastructure across all company projects, covering architecture decisions, security posture, and cloud cost governance.",
      "Manage end-to-end CI/CD pipelines with integrated security scanning, automated testing gates, and environment-specific deployment controls.",
      "Deployed and operate the company's AI automation workloads on AWS including LLM-based services, with GPU instance management, auto-scaling groups, and cost guardrails.",
      "Architect multi-tenant Kubernetes clusters with namespace isolation, RBAC, and network policies for secure separation of workloads.",
      "Lead FinOps practices including cost visibility dashboards, anomaly alerting, and Reserved Instance planning.",
      "Implemented a zero-trust security model across AWS accounts using SCPs, IAM permission boundaries, and VPC micro-segmentation.",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "GemGem",
    location: "Surat, Gujarat",
    period: "Nov 2024 – Feb 2026",
    current: false,
    summary: "Sole DevOps owner for a high-traffic e-commerce platform running on AWS ECS and Cloudways.",
    bullets: [
      "Owned and operated the full DevOps setup across AWS ECS on EC2 and Cloudways Linux infrastructure.",
      "Designed CI/CD pipelines in GitHub Actions with PR-based workflows, environment promotion gates, and Slack deployment notifications.",
      "Managed all production deployments, release pipelines, rollback strategies, and environment stability.",
      "Set up full-stack observability using Datadog, New Relic, Sentry, and PostHog, cutting mean time to resolution by 40%.",
      "Integrated security scanning into pipelines using Trivy for containers, TruffleHog for secrets, and OWASP ZAP for dynamic testing.",
      "Led cloud cost optimisation through FinOps practices, achieving a 20% reduction in monthly AWS spend.",
      "Supported frontend engineering teams with Vue.js build and deployment pipeline setup and maintenance.",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "CirrOps",
    location: "Surat, Gujarat",
    period: "Jan 2022 – Oct 2024",
    current: false,
    summary: "Built and maintained cloud infrastructure and CI/CD pipelines across multiple client projects.",
    bullets: [
      "Built and maintained CI/CD pipelines using GitLab CI/CD and GitHub Actions, cutting average deployment time by 30%.",
      "Provisioned and managed AWS infrastructure using CloudFormation for scalable, reliable application environments.",
      "Ran containerised workloads on Docker and Kubernetes across both staging and production environments.",
      "Integrated Grafana and AWS CloudWatch monitoring to improve system visibility and reduce incident response times.",
      "Performed cloud cost optimisation reviews across AWS accounts, delivering a consistent 20% reduction in operational costs.",
      "Managed source code and branching workflows using Git across GitHub, GitLab, and BitBucket.",
      "Set up and maintained MongoDB Atlas clusters with automated backups and point-in-time recovery.",
      "Configured AWS security services including Config, CloudTrail, IAM policies, and Security Hub across client environments.",
    ],
  },
];

export const certifications = [
  {
    tag: "AWS",
    name: "AWS Certified Cloud Practitioner",
    code: "CLF-C02",
    color: "orange" as const,
    // badge ID: 64880d89-22b7-4c3e-9cd3-c0eeec92a971
    badgeUrl: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    credlyUrl: "https://www.credly.com/badges/64880d89-22b7-4c3e-9cd3-c0eeec92a971/public_url",
  },
  {
    tag: "AWS",
    name: "AWS Certified Solutions Architect – Associate",
    code: "SAA-C03",
    color: "orange" as const,
    // badge ID: 9e96edb6-4188-4165-aa8e-8065fe79a86a
    badgeUrl: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
    credlyUrl: "https://www.credly.com/badges/9e96edb6-4188-4165-aa8e-8065fe79a86a/public_url",
  },
  {
    tag: "Cisco",
    name: "Introduction to Cybersecurity",
    code: "Cisco Networking Academy",
    color: "blue" as const,
    // badge ID: 889db125-1898-4963-9378-aba631f8c507
    badgeUrl: "https://images.credly.com/size/340x340/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
    credlyUrl: "https://www.credly.com/badges/889db125-1898-4963-9378-aba631f8c507/public_url",
  },
  {
    tag: "Oracle",
    name: "Oracle Cloud Certified",
    code: "OCI Foundation",
    color: "red" as const,
    badgeUrl: "/assets/oracle.avif",
    credlyUrl: "https://catalog-education.oracle.com",
    local: true,
  },
  {
    tag: "FinOps",
    name: "FinOps Certified Practitioner",
    code: "FOCP ×2",
    color: "teal" as const,
    badgeUrl: "/assets/finops.png",
    credlyUrl: "https://www.credly.com/badges/7cea3216-63d1-40e0-b883-a51576b53d63/public_url",
    local: true,
  },
];

export const education = [
  {
    degree: "B.Tech — Computer Engineering",
    institution: "Gujarat Technological University (GTU)",
    year: "2022",
    score: "82.04%",
  },
  {
    degree: "H.S.C. — Science (12th)",
    institution: "HSC Board, Gujarat",
    year: "2018",
    score: "52.23%",
  },
  {
    degree: "S.S.C. — Secondary (10th)",
    institution: "SSC Board, Gujarat",
    year: "2016",
    score: "70.26%",
  },
];
