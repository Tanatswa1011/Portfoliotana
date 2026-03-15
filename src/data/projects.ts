export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  approach: string;
  tools: string[];
  outcome: string;
  insights: string[];
  tags: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "opening-range-breakout",
    title: "Opening Range Breakout Data Pipeline",
    subtitle: "Python time-series pipeline for intraday trading analytics",
    description:
      "Designed and built a Python-based data pipeline that processes intraday financial time-series data, identifies opening range breakout patterns, and generates structured analytical output for trading strategy evaluation.",
    problem:
      "Manual analysis of intraday price data was time-consuming and prone to inconsistency. Traders needed a systematic way to identify opening range breakouts across multiple instruments and timeframes without relying on subjective chart reading.",
    approach:
      "Built a modular Python pipeline using pandas for time-series manipulation, with configurable parameters for opening range windows and breakout thresholds. The pipeline ingests raw OHLCV data, calculates opening ranges, detects breakouts, and exports structured results for downstream analysis.",
    tools: ["Python", "pandas", "NumPy", "Matplotlib", "CSV/JSON processing"],
    outcome:
      "Delivered a reusable pipeline capable of processing months of intraday data in seconds, enabling consistent backtesting of opening range breakout strategies across multiple assets.",
    insights: [
      "Time-series data requires careful handling of market hours and timezone conversions",
      "Parameterized pipelines allow rapid iteration on strategy thresholds",
      "Clean data output structure is critical for downstream analytical consumption",
      "Modular design enables easy extension to new instruments and timeframes",
    ],
    tags: ["Python", "Time-Series", "Data Pipeline", "Financial Analytics"],
    featured: true,
  },
  {
    id: "text-sentiment-analysis",
    title: "Text Sentiment Analysis Pipeline",
    subtitle: "End-to-end NLP pipeline processing 30k+ text records",
    description:
      "Built a complete natural language processing pipeline that ingests, cleans, and analyzes sentiment across 30,000+ text records, delivering structured sentiment scores and trend analysis.",
    problem:
      "A large corpus of unstructured text data needed systematic sentiment classification to identify patterns and trends. Manual review was impossible at scale, and existing off-the-shelf tools lacked the customization needed for the specific domain.",
    approach:
      "Developed a multi-stage pipeline: data ingestion and cleaning, text preprocessing (tokenization, stopword removal, lemmatization), sentiment scoring using both lexicon-based and machine learning approaches, and results aggregation with visualization.",
    tools: [
      "Python",
      "NLTK",
      "scikit-learn",
      "pandas",
      "Matplotlib",
      "Seaborn",
    ],
    outcome:
      "Successfully processed 30,000+ records with 85%+ classification accuracy, revealing previously hidden sentiment trends and enabling data-driven content strategy decisions.",
    insights: [
      "Text preprocessing quality directly impacts model accuracy",
      "Combining lexicon-based and ML approaches provides more robust results",
      "Batch processing architecture is essential for large-scale NLP workloads",
      "Visualization of sentiment trends over time reveals patterns invisible in raw data",
    ],
    tags: ["Python", "NLP", "Machine Learning", "Data Pipeline"],
    featured: true,
  },
  {
    id: "football-performance-analysis",
    title: "International Football Performance Analysis",
    subtitle: "Statistical modeling and long-term dataset analysis",
    description:
      "Conducted comprehensive statistical analysis of international football performance data spanning multiple decades, identifying key performance indicators and building predictive models.",
    problem:
      "Historical football performance data existed in fragmented formats across multiple sources. There was no unified analytical framework to identify long-term performance trends and the statistical factors most correlated with match outcomes.",
    approach:
      "Aggregated and cleaned datasets from multiple sources into a unified schema. Applied statistical methods including regression analysis, correlation studies, and feature importance ranking to identify the most significant performance predictors.",
    tools: [
      "Python",
      "pandas",
      "scikit-learn",
      "Matplotlib",
      "Statistical modeling",
    ],
    outcome:
      "Produced a comprehensive analytical report with statistically significant findings on performance predictors, along with interactive visualizations that communicate complex trends to non-technical stakeholders.",
    insights: [
      "Long-term datasets require careful handling of schema evolution and missing data",
      "Feature engineering from domain knowledge significantly improves model relevance",
      "Statistical rigor in methodology prevents spurious correlations",
      "Effective data storytelling is as important as the analysis itself",
    ],
    tags: ["Python", "Statistics", "Data Analysis", "Visualization"],
    featured: true,
  },
  {
    id: "business-process-consulting",
    title: "Business Process Consulting Simulation",
    subtitle: "ERP workflow design and operational automation",
    description:
      "Designed and simulated business process improvements for an ERP system, focusing on workflow optimization, operational automation, and measurable efficiency gains.",
    problem:
      "An organization faced inefficiencies in its core business processes, with manual handoffs, redundant data entry, and lack of standardized workflows leading to delays and errors in operations.",
    approach:
      "Mapped existing workflows using process modeling techniques, identified bottlenecks through data analysis, designed optimized workflows with automation touchpoints, and simulated the impact of proposed changes on key operational metrics.",
    tools: [
      "Process Modeling",
      "ERP Systems",
      "Python",
      "Excel/VBA",
      "Data Analysis",
    ],
    outcome:
      "Delivered a comprehensive process improvement plan with projected 30% reduction in processing time and elimination of redundant manual steps, supported by simulation data validating the proposed changes.",
    insights: [
      "Process mapping before optimization prevents solving the wrong problems",
      "Quantifying inefficiencies in monetary terms helps stakeholder buy-in",
      "Incremental automation is more sustainable than big-bang transformations",
      "Change management is as critical as technical implementation",
    ],
    tags: ["Process Optimization", "ERP", "Automation", "Consulting"],
    featured: true,
  },
];
