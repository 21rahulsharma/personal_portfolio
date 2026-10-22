export const profile = {
  name: "Rahul",
  role: "AI/ML Engineer at Deloitte USI Hyderabad",
  email: "rahulsharma72447@gmail.com",
  github: "https://github.com/21rahulsharma",
  linkedin: "https://www.linkedin.com/in/rahul-kumar-sharma-570a7b274/",
  bio: "I build conversational search and custom MCP servers that translate business objectives into measurable, scalable solutions.",
};

export function publicAsset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}

export const experience = [
  {
    role: "AI/ML Engineer",
    org: "Deloitte USI, Hyderabad",
    when: "2024 — Present",
  },
];

export const toolkit = [
  { label: "Tech", value: "AI, Machine learning", note: "Agents, search, evaluation" },
  { label: "Languages", value: "Python, Java, HTML, CSS, JavaScript", note: "Logic" },
  {
    label: "Frameworks",
    value: "LangChain, LangGraph, Ragas, LangSmith, Deep Evals, React, FastAPI, Flask",
    note: "Build & trace",
  },
  {
    label: "Tools & IDEs",
    value: "Git, GitHub, Jira, Cursor, VS Code",
    note: "How the work moves",
  },
  {
    label: "DataBases",
    value: "MySQL, PostgreSQL, Couchbase Capella, vector databases, knowledge graphs",
    note: "Memory of the system",
  },
];

export type Work = {
  slug: string;
  title: string;
  short: string;
  lede: string;
  place: string;
  disciplines: string;
  cover: string;
  alt: string;
  paragraphs: { heading: string; body: string[] }[];
  notes: { title: string; body: string }[];
};

export const works: Work[] = [
  {
    slug: "conversational-search",
    title: "Conversational search",
    short: "Answers with a paper trail",
    lede: "Search that keeps the conversation, cites what it used, and refuses to invent the rest.",
    place: "Deloitte USI, Hyderabad",
    disciplines: "Retrieval, ranking, knowledge graphs, UX of answers",
    cover: publicAsset("images/meadow.jpg"),
    alt: "Sunlit meadow used as the cover for conversational search",
    paragraphs: [
      {
        heading: "The job",
        body: [
          "People do not want a search box. They want the next right fact, in the language of the question they actually asked. I build conversational search that sits on top of documents, structured records, and knowledge graphs — then answers with sources a reviewer can open.",
          "The work at Deloitte USI is to turn a business question into a path: understand the ask, retrieve with intent, ground the reply, and leave a trail.",
        ],
      },
      {
        heading: "How it is put together",
        body: [
          "Python services, usually FastAPI, own the boundary. LangChain helps compose retrievers, while the memory of the system lives in vector databases alongside PostgreSQL, MySQL, or Couchbase Capella when the source of truth is already there. A knowledge graph carries the relationships a flat index will smear.",
          "Answers are short on purpose. Citations, filters, and a visible “what I looked at” beat a confident paragraph that cannot be checked.",
        ],
      },
    ],
    notes: [
      {
        title: "Faithfulness first",
        body: "If a sentence cannot point at a source, it does not ship. Ragas checks that habit so it does not depend on a good day.",
      },
      {
        title: "Conversation is state",
        body: "Follow-ups only work when the system remembers what was already resolved — and what was refused.",
      },
    ],
  },
  {
    slug: "agentic-systems",
    title: "Agentic systems",
    short: "Multi-step work, with a pause",
    lede: "Agents that plan, call tools, and stop when a person should be the one to decide.",
    place: "Deloitte USI, Hyderabad",
    disciplines: "LangGraph, tool use, orchestration, guardrails",
    cover: publicAsset("images/langraph.jpg"),
    alt: "Quiet studio interior used as the cover for agentic systems",
    paragraphs: [
      {
        heading: "The job",
        body: [
          "A useful agent is not a chat window with extra steps. It is a small organization: a planner, a set of tools, a memory, and a rule for when to hand the work back. I design those systems so a business objective becomes a run you can inspect.",
          "LangGraph is the spine. Nodes stay boring and explicit. Edges are where policy lives — retry, branch, or escalate.",
        ],
      },
      {
        heading: "What I refuse to hide",
        body: [
          "Every tool call is logged. LangSmith is how I read a run the way an engineer reads a trace, not the way a demo reads a transcript. When the stakes are high, the graph pauses. A person approves. The agent continues from that exact state, not from a rewritten story.",
          "Interfaces for this work are in React when a person needs to watch the run, and in Python when the run should simply finish.",
        ],
      },
    ],
    notes: [
      {
        title: "Tools over talent",
        body: "The model is not the system. The tools, their schemas, and the stop conditions are.",
      },
      {
        title: "Measurable on purpose",
        body: "A run is successful when the objective moved — not when the prose sounded sure.",
      },
    ],
  },
  {
    slug: "mcp-servers",
    title: "MCP servers",
    short: "Business systems, as tools",
    lede: "Custom MCP servers that let agents reach the systems of record without scraping the process.",
    place: "Deloitte USI, Hyderabad",
    disciplines: "MCP, FastAPI, schemas, integration",
    cover: publicAsset("images/mcp-server.jpg"),
    alt: "Painted mountain ridge used as the cover for MCP servers",
    paragraphs: [
      {
        heading: "The job",
        body: [
          "Models get useful when they can touch the work. I build custom MCP servers that expose a narrow, typed surface over the systems a team already trusts — records, search, graphs — instead of a wide door and a hope.",
          "Each server is a contract. Inputs are schemas. Outputs are small. Side effects are named. If a tool can change something, the description says so in the same sentence as the name.",
        ],
      },
      {
        heading: "How it stays operable",
        body: [
          "FastAPI or a small Python service hosts the tool. Git and review keep the contract honest. Jira tracks the business objective the tool is supposed to move, so a server does not outlive its reason.",
          "The same server can feed a LangGraph agent, a conversational search flow, or a person in Cursor. One implementation, several careful callers.",
        ],
      },
    ],
    notes: [
      {
        title: "Narrow on purpose",
        body: "A server that can do twelve things vaguely will be used for the wrong one. Fewer tools, clearer names.",
      },
      {
        title: "Auth is part of the design",
        body: "If the system of record has a permission, the tool inherits it. Agents do not get a back door.",
      },
    ],
  },
  {
    slug: "evaluation",
    title: "Evaluation studio",
    short: "Quality you can regress",
    lede: "Ragas and LangSmith as a studio: datasets, judges, and a gate before a change reaches anyone.",
    place: "Deloitte USI, Hyderabad",
    disciplines: "Ragas, Deep Evals, LangSmith, datasets, regression",
    cover: publicAsset("images/flowers.jpg"),
    alt: "Yellow wildflowers used as the cover for the evaluation studio",
    paragraphs: [
      {
        heading: "The job",
        body: [
          "Agentic systems drift. A prompt that was careful on Tuesday is casual by Friday. I treat evaluation as part of the product: a set of questions we already know the answer to, scored the same way every time.",
          "Ragas covers faithfulness, relevance, and the unglamorous failure where the model answered a neighbor of the question. LangSmith holds the traces so a bad score can be opened, not just counted.",
        ],
      },
      {
        heading: "What “measurable” means here",
        body: [
          "A change ships when the set holds: grounded answers stay grounded, tool choice stays stable, and latency stays inside the budget the workflow can tolerate. The score is not a trophy. It is a diff.",
          "Datasets live next to the code. PostgreSQL or a plain store keeps the cases. The point is that a business objective — faster resolution, fewer invented facts, a cleaner handoff — has a number attached before the demo.",
        ],
      },
    ],
    notes: [
      {
        title: "Judges need a job",
        body: "An LLM-as-judge is only useful with a rubric a person would sign. Otherwise it flatters the draft.",
      },
      {
        title: "Read the trace",
        body: "A score without the run is gossip. LangSmith is where the argument gets specific.",
      },
    ],
  },
];

export function workBySlug(slug: string) {
  return works.find((work) => work.slug === slug);
}

export function nextWork(slug: string) {
  const index = works.findIndex((work) => work.slug === slug);
  if (index < 0) return works[0];
  return works[(index + 1) % works.length];
}
