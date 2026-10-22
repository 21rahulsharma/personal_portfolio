import { Link } from "@tanstack/react-router";
import { nextWork, workBySlug } from "@/data/content";
import { SiteFrame } from "@/components/site-frame";

export function CaseStudy({ slug }: { slug: string }) {
  const work = workBySlug(slug);

  if (!work) {
    return (
      <SiteFrame>
        <main className="wrap missing">
          <h1>That page is not here.</h1>
          <Link to="/" className="back">
            ← Back home
          </Link>
        </main>
      </SiteFrame>
    );
  }

  const upcoming = nextWork(work.slug);

  return (
    <SiteFrame>
      <article className="wrap page">
        <Link to="/" className="back">
          ← Selected systems
        </Link>
        <h1 className="study-title">{work.title}</h1>
        <p className="study-lede">{work.lede}</p>
        <div className="meta">
          <div>
            <small>Place</small>
            <p>{work.place}</p>
          </div>
          <div>
            <small>Disciplines</small>
            <p>{work.disciplines}</p>
          </div>
        </div>
        <div className="cover-xl">
          <img src={work.cover} alt={work.alt} />
        </div>
        <div className="prose">
          {work.paragraphs.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
          <h2>What I keep</h2>
          <div className="learn">
            {work.notes.map((note) => (
              <article key={note.title}>
                <h3>{note.title}</h3>
                <p>{note.body}</p>
              </article>
            ))}
          </div>
        </div>
        <Link to="/work/$slug" params={{ slug: upcoming.slug }} className="next-work">
          <span>
            <small>Next</small>
            <strong>{upcoming.title}</strong>
          </span>
          <span aria-hidden="true">→</span>
        </Link>
      </article>
    </SiteFrame>
  );
}
