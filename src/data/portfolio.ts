import {
  BarChart3,
  BrainCircuit,
  CloudCog,
  Code2,
  Database,
  GitBranch,
  LayoutDashboard,
  ListChecks,
  ServerCog,
  Wrench
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type SkillItem = {
  label: string;
  icon: LucideIcon;
};

export type SkillCategory = {
  title: string;
  skills: SkillItem[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
};

export type ProjectItem = {
  slug: string;
  title: string;
  summary: string;
  tools: string[];
  problem: string;
  approach: string[];
  outcome: string;
  insights: string[];
};

export const skills: SkillCategory[] = [
  {
    title: "Programming",
    skills: [
      { label: "Python", icon: Code2 },
      { label: "SQL", icon: Database },
      { label: "Linux", icon: ServerCog },
      { label: "Git", icon: GitBranch }
    ]
  },
  {
    title: "Data Engineering",
    skills: [
      { label: "ETL Pipelines", icon: CloudCog },
      { label: "API Integration", icon: Wrench },
      { label: "Data Validation", icon: ListChecks },
      { label: "Scheduling Workflows", icon: ServerCog }
    ]
  },
  {
    title: "Analytics & BI",
    skills: [
      { label: "Power BI", icon: LayoutDashboard },
      { label: "Tableau", icon: BarChart3 },
      { label: "Exploratory Data Analysis", icon: BrainCircuit },
      { label: "KPI Dashboards", icon: LayoutDashboard }
    ]
  },
  {
    title: "Systems & Tools",
    skills: [
      { label: "PostgreSQL", icon: Database },
      { label: "AWS EC2", icon: CloudCog },
      { label: "Flask", icon: Code2 },
      { label: "Jira", icon: ListChecks },
      { label: "Confluence", icon: ListChecks }
    ]
  }
];

export const experiences: ExperienceItem[] = [
  {
    role: "Data Analyst (Automation)",
    company: "Kloeckner Metals",
    location: "Berlin, Germany",
    period: "2023 — Present",
    achievements: [
      "Built Python ETL pipelines processing 200+ business documents monthly.",
      "Automated document ingestion workflows from source systems to analytics-ready datasets.",
      "Integrated APIs for document validation and metadata enrichment.",
      "Implemented robust data quality checks used by downstream analytics systems.",
      "Reduced manual reporting work by 15+ hours per week through automation."
    ]
  },
  {
    role: "Operations & Data Analyst",
    company: "Ripples Pure Water",
    location: "Berlin, Germany",
    period: "2021 — 2023",
    achievements: [
      "Automated recurring reporting workflows to improve consistency and delivery speed.",
      "Built forecasting models to support planning decisions across operations.",
      "Identified operational inefficiencies through data analysis and process mapping."
    ]
  }
];

export const projects: ProjectItem[] = [
  {
    slug: "opening-range-breakout-data-pipeline",
    title: "Opening Range Breakout Data Pipeline",
    summary:
      "Python time-series pipeline for intraday trading analytics and performance monitoring.",
    tools: ["Python", "Pandas", "PostgreSQL", "Matplotlib"],
    problem:
      "Market data arrived in fragmented intervals and required repeatable preprocessing before analysts could evaluate opening range breakout patterns.",
    approach: [
      "Built an ingestion pipeline to collect and normalize intraday OHLCV data.",
      "Created transformation steps to standardize trading sessions and calculate breakout metrics.",
      "Implemented validation checks to detect missing intervals and abnormal price spikes.",
      "Persisted cleaned datasets for reuse in dashboards and backtesting workflows."
    ],
    outcome:
      "Delivered a reliable analytical dataset that shortened the setup time for intraday studies and improved consistency in strategy evaluation.",
    insights: [
      "Session-level normalization materially improved comparability across days.",
      "Automated quality controls prevented false trading signals caused by data gaps."
    ]
  },
  {
    slug: "text-sentiment-analysis-pipeline",
    title: "Text Sentiment Analysis Pipeline",
    summary:
      "End-to-end NLP pipeline that processed 30k+ text records for sentiment classification and trend analysis.",
    tools: ["Python", "NLTK", "scikit-learn", "SQL"],
    problem:
      "Teams needed a scalable way to convert large volumes of unstructured feedback into structured sentiment insights.",
    approach: [
      "Designed batch ingestion and preprocessing steps for cleaning and tokenization.",
      "Engineered features and trained baseline sentiment classification models.",
      "Built SQL-ready output tables with sentiment scores, confidence, and topic tags.",
      "Exposed trend metrics for dashboard integration and monthly reporting."
    ],
    outcome:
      "Enabled faster decision-making by turning unstructured feedback into repeatable KPIs and sentiment trends.",
    insights: [
      "Consistent preprocessing had the largest impact on model quality.",
      "Confidence thresholds improved trust in downstream dashboard metrics."
    ]
  },
  {
    slug: "international-football-performance-analysis",
    title: "International Football Performance Analysis",
    summary:
      "Statistical modeling and long-term dataset analysis to identify competitive performance drivers.",
    tools: ["Python", "Pandas", "Seaborn", "Jupyter"],
    problem:
      "The dataset spanned multiple seasons and competitions, making it difficult to compare teams and isolate stable performance indicators.",
    approach: [
      "Built a reproducible EDA workflow to profile performance metrics across seasons.",
      "Applied statistical modeling to evaluate relationships between key indicators and outcomes.",
      "Segmented teams by style and efficiency to improve interpretability.",
      "Documented assumptions and model limitations for transparent analysis."
    ],
    outcome:
      "Produced a robust analytical framework that highlighted high-impact performance indicators and supported scenario-based comparisons.",
    insights: [
      "Shot quality indicators were more predictive than raw volume metrics.",
      "Long-term trends were best interpreted with rolling aggregates rather than point-in-time comparisons."
    ]
  },
  {
    slug: "business-process-consulting-simulation",
    title: "Business Process Consulting Simulation",
    summary:
      "ERP workflow design and operational automation simulation focused on process efficiency.",
    tools: ["Process Mapping", "ERP Concepts", "SQL", "KPI Design"],
    problem:
      "Manual handoffs across departments created delays, inconsistent data entry, and limited reporting visibility.",
    approach: [
      "Mapped current-state processes to identify bottlenecks and rework loops.",
      "Designed target-state ERP workflows with standardized data checkpoints.",
      "Defined KPI structures for cycle time, throughput, and exception tracking.",
      "Simulated automation opportunities for recurring transaction paths."
    ],
    outcome:
      "Created a practical blueprint for reducing operational friction and improving process transparency through workflow standardization.",
    insights: [
      "Data standardization is a prerequisite for scalable workflow automation.",
      "Clear exception handling paths improve both operational speed and data quality."
    ]
  }
];

export const aboutParagraphs = [
  "I have a Computer Science background and focus on solving business problems with reliable data systems.",
  "In my work, I build Python automation solutions that move data from raw operational inputs into structured, decision-ready outputs.",
  "I am especially motivated by improving business operations through scalable pipelines, transparent analytics, and systems that teams can trust over time.",
  "My long-term focus sits at the intersection of data engineering, analytics, and automation."
];
