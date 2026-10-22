import {
  createContext,
  useContext,
  useEffect,
  useId,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { Link } from "@tanstack/react-router";
import { profile } from "@/data/content";

const ContactContext = createContext<() => void>(() => {});

export function useContact() {
  return useContext(ContactContext);
}

export function SiteFrame({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      setShowTop(window.scrollY > 640);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <ContactContext.Provider value={() => setOpen(true)}>
      <div className={scrolled ? "veil on" : "veil"} aria-hidden="true" />
      <header className="site-header">
        <Link to="/" aria-label="Rahul, home" className="smiley">
          <span className="eye l" />
          <span className="eye r" />
          <span className="mouth" />
        </Link>
        <button type="button" className="pill" onClick={() => setOpen(true)}>
          Get in touch
        </button>
      </header>
      {children}
      {showTop ? (
        <button
          type="button"
          className="to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to top
        </button>
      ) : null}
      {open ? <ContactDialog onClose={() => setOpen(false)} /> : null}
    </ContactContext.Provider>
  );
}

function ContactDialog({ onClose }: { onClose: () => void }) {
  const titleId = useId();
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [note, setNote] = useState({ name: "", message: "" });

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  function writeNote(event: FormEvent) {
    event.preventDefault();
    const subject = note.name ? `Hello from ${note.name}` : "Hello Rahul";
    const body = note.message || "I would like to talk about a system.";
    setSent(true);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="dialog-back" onClick={onClose}>
      <div
        className="dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="dialog-head">
          <h2 id={titleId}>
            Get in <em>touch</em>
          </h2>
          <button type="button" className="x" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <p className="role-line">{profile.role}</p>
        <div className="contact-list">
          <button type="button" className="linkish" onClick={copyEmail}>
            <span>{profile.email}</span>
            <span className="hint">{copied ? "Copied" : "Copy"}</span>
          </button>
          <a href={`mailto:${profile.email}`}>
            <span>Email</span>
            <span className="hint">Opens mail</span>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <span>GitHub</span>
            <span className="hint">↗</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <span>LinkedIn</span>
            <span className="hint">↗</span>
          </a>
        </div>
        <form className="note" onSubmit={writeNote}>
          <label htmlFor="who">Name</label>
          <input
            id="who"
            name="name"
            autoComplete="name"
            value={note.name}
            onChange={(event) => setNote({ ...note, name: event.target.value })}
            placeholder="Your name"
          />
          <label htmlFor="msg">Note</label>
          <textarea
            id="msg"
            name="message"
            value={note.message}
            onChange={(event) => setNote({ ...note, message: event.target.value })}
            placeholder="What should we build?"
          />
          <button type="submit" className="pill">
            {sent ? "Opening mail…" : "Send a note"}
          </button>
        </form>
      </div>
    </div>
  );
}
