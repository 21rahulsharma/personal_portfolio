import { Link } from "@tanstack/react-router";
import { profile, publicAsset, toolkit, works } from "@/data/content";
import { SiteFrame } from "@/components/site-frame";

export function HomePage() {
  const [search, agents, mcp, evaluation] = works;

  return (
    <SiteFrame>
      <main className="page">
        <section className="wrap hero">
          <h1 className="display">
            Hello, I’m Rahul! I build
            <br />
            <span className="mark">agentic systems</span> that carry
            <br />
            <em>intent</em> <span className="flourish">✻</span> into <em>outcomes</em>{" "}
            <span className="flourish">✻</span>
          </h1>
          <p className="lede">
            {profile.role}. {profile.bio}
          </p>
          <a className="chip" href="#work">
            Selected systems
          </a>
        </section>

        <section className="wrap mosaic" id="work">
          <div className="col">
            <Link
              to="/work/$slug"
              params={{ slug: search.slug }}
              className="shot ratio-a"
              aria-label={search.title}
            >
              <img className="cover" src={search.cover} alt={search.alt} />
              <div className="float-ui ui-search">
                <div className="ui-kicker">Conversational search</div>
                <p className="ui-q">Which clause still governs after the vendor changes terms?</p>
                <div className="ui-row">
                  <span>3 sources · grounded</span>
                  <span>Ragas</span>
                </div>
              </div>
              <span className="shot-cap">
                <span>{search.title}</span>
              </span>
            </Link>

            <Link
              to="/work/$slug"
              params={{ slug: mcp.slug }}
              className="shot ratio-c"
              aria-label={mcp.title}
            >
              <img className="cover" src={mcp.cover} alt={mcp.alt} />
              <div className="wordmark">
                <span className="tick" />
                <strong>MCP</strong>
                <em>custom servers</em>
              </div>
              <span className="studio-tag studio-tag-top">MCP · plug into context</span>
              <span className="shot-cap">
                <span>{mcp.title}</span>
              </span>
            </Link>
          </div>

          <div className="col">
            <Link
              to="/work/$slug"
              params={{ slug: agents.slug }}
              className="shot ratio-b"
              aria-label={agents.title}
            >
              <img className="cover" src={agents.cover} alt={agents.alt} />
              <span className="studio-tag">LangGraph · pause when it matters</span>
              <span className="shot-cap">
                <span>{agents.title}</span>
              </span>
            </Link>

            <Link
              to="/work/$slug"
              params={{ slug: evaluation.slug }}
              className="shot ratio-d"
              aria-label={evaluation.title}
            >
              <img className="cover" src={evaluation.cover} alt={evaluation.alt} />
              <div className="float-ui ui-eval">
                <div className="ui-kicker">Evaluation studio</div>
                <div className="metrics">
                  <div className="metric">
                    <b>Hold</b>
                    <span>Faithfulness</span>
                  </div>
                  <div className="metric">
                    <b>Diff</b>
                    <span>Every change</span>
                  </div>
                  <div className="metric">
                    <b>Trace</b>
                    <span>LangSmith</span>
                  </div>
                </div>
                <div className="bars">
                  <div className="bar alt">
                    <i />
                  </div>
                  <div className="bar mid">
                    <i />
                  </div>
                  <div className="bar low">
                    <i />
                  </div>
                </div>
              </div>
              <span className="shot-cap">
                <span>{evaluation.title}</span>
              </span>
            </Link>
          </div>
        </section>

        <section className="wrap">
          <div className="section-title">
            <Spark />
            <h2>
              <em>Skills</em>
            </h2>
          </div>
          <div className="rows">
            {toolkit.map((item) => (
              <div className="row" key={item.label}>
                <span>{item.label}</span>
                <span>{item.value}</span>
                <span>{item.note}</span>
              </div>
            ))}
          </div>

          <p className="pixel-label">
            <i /> Projects I built
          </p>

          <div className="loose">
            <div className="phone-row">
              <article className="phone">
                <div className="phone-top">
                  <span className="blob" aria-hidden="true">
                    <Dot light={false} />
                  </span>
                  <p>
                    Created a XG-Boost based regressor model to forecast weekly Retail sales at the
                    store/department using historic sales and economic feature data.
                  </p>
                </div>
                <div className="art" />
                <div className="phone-actions">
                  <a
                    href="https://github.com/21rahulsharma/Retail-Sales-Predictor"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </article>
              <article className="phone dark">
                <div className="phone-top">
                  <span className="blob" aria-hidden="true">
                    <Dot light />
                  </span>
                  <p>
                    Engineered an AI-powered voice assistant using Python, Google Speech-to-Text,
                    and OpenAI to interpret natural language commands and execute automated tasks.
                  </p>
                </div>
                <div className="art" />
                <div className="phone-actions">
                  <a
                    href="https://github.com/21rahulsharma/AI_Desktop_Assistant"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <s aria-hidden="true">↑</s>
                </div>
              </article>
            </div>

            <Link
              to="/work/$slug"
              params={{ slug: "evaluation" }}
              className="frame thermal shot"
              aria-label="Evaluation traces"
            >
              <img
                src={publicAsset("images/thermal.jpg")}
                alt="Abstract heat map of evaluation traces"
              />
            </Link>

            <section className="story">
              <h2>Built to be checked</h2>
              <div>
                <p>
                  Languages I write in: Python, Java, HTML, CSS, and JavaScript. Interfaces, when a
                  person needs one, are in React. Services are FastAPI or Flask. The editors are
                  Cursor and VS Code. The work moves through Git, GitHub, and Jira.
                </p>
                <p>
                  Memory lives in MySQL, PostgreSQL, Couchbase Capella, vector databases, and
                  knowledge graphs. Quality lives in Ragas and LangSmith — so a change can be
                  measured before it is praised.
                </p>
              </div>
            </section>

            <div className="frame triptych">
              <img
                src={publicAsset("images/triptych.jpg")}
                alt="Three studies: static, ink mountains, and a brush mark"
              />
            </div>
          </div>

          <section className="experience-story" aria-labelledby="experience-title">
            <figure className="experience-portrait">
              <img src={publicAsset("my_pic.jpg")} alt="Rahul in a blue suit" />
            </figure>
            <div className="experience-content">
              <div className="experience-heading">
                <Spark />
                <h2 id="experience-title">
                  <em>Experience</em>
                </h2>
              </div>
              <article className="experience-entry">
                <div className="experience-meta">
                  <h3>Deloitte USI, Hyderabad</h3>
                  <span>2024 — Current</span>
                </div>
                <p className="experience-role">AI/ML Engineer</p>
                <ul>
                  <li>
                    - Engineered the Multi-flow Manual Asset Operations into an AI capability.
                  </li>
                  <li>
                    - Worked on Marriott Custom MCP Server to integrate the system with ChatGPT.
                  </li>
                  <li>- Worked on Marriott natural-language hotel & amenities search.</li>
                </ul>
              </article>
              <article className="experience-entry experience-internal">
                <h3>Deloitte Internal</h3>
                <ul>
                  <li>
                    - Developed an Agentic RAG- Smart Intake Agent for the Commerce Team, , driving
                    operational efficiency and accelerating project delivery timelines.
                  </li>
                  <li>
                    - Engineered Agentic System POCs for multiple clients, successfully converting
                    strategic business discussions into full time engagement
                  </li>
                </ul>
              </article>
            </div>
          </section>

          <hr className="rule" />
          <p className="mission">
            Ship work with <em>intention</em>
          </p>
          <nav className="footer-links" aria-label="Contact">
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </nav>
        </section>
      </main>
    </SiteFrame>
  );
}

function Spark() {
  return (
    <svg className="spark" viewBox="0 0 80 80" aria-hidden="true">
      <path
        d="M8 58c18-4 28-20 34-40"
        fill="none"
        stroke="#0f1111"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M46 14l8 6-10 2 2-8z" fill="#0f1111" />
      <path d="M18 46l14-6" stroke="#0f1111" strokeWidth="2" strokeLinecap="round" />
      <circle cx="62" cy="22" r="2.2" fill="#0f1111" />
    </svg>
  );
}

function Dot({ light }: { light: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <circle cx="7" cy="7" r="5" fill="none" stroke={light ? "#111" : "#fff"} strokeWidth="1.4" />
      <circle cx="7" cy="7" r="1.4" fill={light ? "#111" : "#fff"} />
    </svg>
  );
}
