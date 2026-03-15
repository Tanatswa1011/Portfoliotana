import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarClock,
  CloudCog,
  Database,
  FileSpreadsheet,
  FlaskConical,
  GitBranch,
  Gauge,
  LayoutDashboard,
  Link2,
  MonitorCog,
  ServerCog
} from "lucide-react";

export const siteConfig = {
  name: "Tanatswa",
  role: "Data Automation Analyst",
  location: "Berlin, Germany",
  email: "hello@tanatswaportfolio.de",
  linkedin: "https://www.linkedin.com/in/tanatswa-data",
  calendly: "https://calendly.com/tanatswa-data/intro-call",
  cvPath: "/Tanatswa-Musonza-CV.pdf",
  website: "https://tanatswaportfolio.de"
};

export const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
] as const;

export const stats = [
  { label: "Documents processed monthly", value: "200+" },
  { label: "Reporting time saved weekly", value: "15+ hrs" },
  { label: "Core focus areas", value: "ETL, BI, Automation" }
];

export const aboutHighlights = [
  "Computer Science foundation with hands-on experience building practical data tools for operations teams.",
  "Focused on Python automation systems that reduce manual work and improve data reliability across business workflows.",
  "Interested in scalable pipelines, analytics engineering, and applied data solutions that help teams move faster."
];

type SkillCategory = {
  title: string;
  description: string;
  skills: Array<{
    name: string;
    icon: LucideIcon;
  }>;
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    description: "Core engineering tools used to build and maintain reliable data workflows.",
    skills: [
      { name: "Python", icon: Bot },
      { name: "SQL", icon: Database },
      { name: "Linux", icon: MonitorCog },
      { name: "Git", icon: GitBranch }
    ]
  },
  {
    title: "Data Engineering",
    description: "Workflow design, ingestion, validation, and orchestration for operational data pipelines.",
    skills: [
      { name: "ETL pipelines", icon: ServerCog },
      { name: "API integration", icon: Link2 },
      { name: "Data validation", icon: Gauge },
      { name: "Scheduling workflows", icon: CalendarClock }
    ]
  },
  {
    title: "Analytics & BI",
    description: "Decision support systems that turn operational data into clear business visibility.",
    skills: [
      { name: "Power BI", icon: LayoutDashboard },
      { name: "Tableau", icon: BarChart3 },
      { name: "Exploratory Data Analysis", icon: Activity },
      { name: "KPI dashboards", icon: FileSpreadsheet }
    ]
  },
  {
    title: "Systems & Tools",
    description: "Practical software used to support production-ready analytics and collaboration.",
    skills: [
      { name: "PostgreSQL", icon: Database },
      { name: "AWS EC2", icon: CloudCog },
      { name: "Flask", icon: FlaskConical },
      { name: "Jira & Confluence", icon: BriefcaseBusiness }
    ]
  }
];

type ExperienceItem = {
  company: string;
  location: string;
  role: string;
  period: string;
  summary: string;
  achievements: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Kloeckner Metals",
    location: "Berlin",
    role: "Data Analyst (Automation)",
    period: "Recent Experience",
    summary:
      "Built automation workflows that improved document handling, data consistency, and reporting speed for internal operations.",
    achievements: [
      "Built Python ETL pipelines processing 200+ business documents monthly.",
      "Automated document ingestion pipelines to reduce repetitive manual handling.",
      "Integrated APIs for document validation and exception handling.",
      "Implemented data quality checks that improved confidence in analytics systems.",
      "Reduced manual reporting work by more than 15 hours per week."
    ]
  },
  {
    company: "Ripples Pure Water",
    location: "Operations & Analytics",
    role: "Operations & Data Analyst",
    period: "Previous Experience",
    summary:
      "Connected operational reporting with analytical insight to support planning, performance tracking, and process improvement.",
    achievements: [
      "Automated recurring reporting workflows for faster operational visibility.",
      "Built forecasting models to improve planning and stock-related decisions.",
      "Identified inefficiencies in day-to-day processes and supported corrective actions."
    ]
  }
];

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  problem: string;
  approach: string[];
  tools: string[];
  outcome: string;
  keyInsights: string[];
  metrics: string[];
};

export const projects: Project[] = [
  {
    slug: "opening-range-breakout-data-pipeline",
    title: "Opening Range Breakout Data Pipeline",
    shortDescription:
      "Python time-series pipeline for intraday trading analytics and repeatable signal evaluation.",
    overview:
      "A structured market-data workflow designed to collect, clean, and analyze intraday price movement around the opening range for strategy research.",
    problem:
      "Manual market analysis made it difficult to compare sessions consistently, measure signal quality, and build a repeatable research process.",
    approach: [
      "Designed a Python pipeline to ingest intraday price data, align timestamps, and normalize market sessions.",
      "Created transformation logic for opening range calculations, breakout detection, and signal labeling.",
      "Added validation steps to reduce noisy inputs and improve consistency across trading days.",
      "Packaged outputs for downstream visual analysis and strategy review."
    ],
    tools: ["Python", "Pandas", "Time-series analysis", "Jupyter", "Data validation"],
    outcome:
      "Produced a repeatable research workflow that made it faster to compare trading sessions, test assumptions, and evaluate intraday behavior at scale.",
    keyInsights: [
      "Time normalization is critical when comparing intraday signals across many sessions.",
      "Reliable preprocessing often contributes more to signal quality than adding more indicators.",
      "Structured outputs make research easier to review and extend."
    ],
    metrics: ["Repeatable session-based analysis", "Cleaner signal labeling", "Faster research turnaround"]
  },
  {
    slug: "text-sentiment-analysis-pipeline",
    title: "Text Sentiment Analysis Pipeline",
    shortDescription:
      "End-to-end NLP pipeline processing 30k+ text records for sentiment classification and trend analysis.",
    overview:
      "A text-processing workflow built to move from raw unstructured feedback to analyzable sentiment outputs for reporting and monitoring.",
    problem:
      "Large volumes of text feedback were difficult to summarize manually, which delayed insight generation and made recurring trend analysis inconsistent.",
    approach: [
      "Built ingestion and preprocessing steps for cleaning, tokenization, and feature preparation.",
      "Processed more than 30,000 text records through a structured sentiment pipeline.",
      "Created reporting outputs to segment trends by theme, polarity, and volume over time.",
      "Documented the workflow for repeatability and future model iteration."
    ],
    tools: ["Python", "NLP", "Pandas", "Scikit-learn", "Data visualization"],
    outcome:
      "Turned unstructured feedback into a consistent analysis workflow that supports faster reviews, recurring reporting, and better trend visibility.",
    keyInsights: [
      "Cleaning and standardizing text inputs had a major impact on model usefulness.",
      "Operational teams benefit most when NLP outputs are translated into simple reporting views.",
      "Batch processing made recurring analysis much easier to maintain."
    ],
    metrics: ["30k+ records processed", "Repeatable NLP workflow", "Clearer feedback trend reporting"]
  },
  {
    slug: "international-football-performance-analysis",
    title: "International Football Performance Analysis",
    shortDescription:
      "Statistical modeling project focused on long-term football performance patterns and match outcomes.",
    overview:
      "A multi-year sports analytics project exploring performance indicators, trend behavior, and comparative team evaluation across historical datasets.",
    problem:
      "Historical sports data is often fragmented, making it hard to draw reliable comparisons or test analytical questions over longer time horizons.",
    approach: [
      "Consolidated and cleaned long-term datasets to create a usable analytical base.",
      "Explored trend behavior using descriptive statistics and visual analysis.",
      "Tested performance relationships and built interpretable models around match outcomes.",
      "Summarized findings in a presentation-friendly format."
    ],
    tools: ["Python", "SQL", "Statistical modeling", "Tableau", "Exploratory analysis"],
    outcome:
      "Delivered a structured analytical view of football performance trends and demonstrated how statistical modeling can support evidence-based interpretation.",
    keyInsights: [
      "Dataset consistency strongly affects long-term sports analysis.",
      "Feature selection matters more than model complexity in many exploratory use cases.",
      "Visual storytelling helps non-technical audiences understand analytical findings."
    ],
    metrics: ["Multi-year dataset analysis", "Interpretable performance modeling", "Presentation-ready outputs"]
  },
  {
    slug: "business-process-consulting-simulation",
    title: "Business Process Consulting Simulation",
    shortDescription:
      "ERP workflow design exercise focused on operational automation, process mapping, and system improvement.",
    overview:
      "A process analysis simulation built around identifying workflow bottlenecks, redesigning operational steps, and aligning data flow with business objectives.",
    problem:
      "Disconnected processes and manual handoffs created delays, inconsistent records, and unnecessary operational overhead.",
    approach: [
      "Mapped the current-state workflow to identify pain points and redundant steps.",
      "Designed improved ERP-oriented process flows with clearer ownership and data checkpoints.",
      "Recommended automation opportunities for approvals, reporting, and operational tracking.",
      "Translated the redesign into practical implementation recommendations."
    ],
    tools: ["Process mapping", "ERP concepts", "Workflow analysis", "Documentation", "Operational reporting"],
    outcome:
      "Created a practical process redesign that demonstrated how better system structure and automation can improve operational efficiency.",
    keyInsights: [
      "Good process design reduces data problems before they reach reporting.",
      "Automation works best when workflow ownership is clear.",
      "Operational improvements need both technical and business context."
    ],
    metrics: ["Workflow bottlenecks identified", "Automation opportunities defined", "Improved reporting structure"]
  }
];

export const projectSlugs = projects.map((project) => project.slug);
