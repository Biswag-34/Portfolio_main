"use client";

import { useLayoutEffect, useRef, useState, type FormEvent } from "react";
import { FiCheck, FiCode, FiLayers, FiMail, FiMessageSquare, FiPhone, FiSend, FiTrendingUp, FiX } from "react-icons/fi";
import { profile } from "@/portfolio";

const topics = [
  { label: "Web development", Icon: FiCode },
  { label: "Digital marketing", Icon: FiTrendingUp },
  { label: "Both", Icon: FiLayers },
  { label: "Something else", Icon: FiMessageSquare },
] as const;

const steps = ["Focus", "Your brief"];
const initialBrief = { name: "", email: "", message: "" };
const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();

export default function Contact() {
  const [topic, setTopic] = useState<(typeof topics)[number]["label"]>("Web development");
  const [brief, setBrief] = useState(initialBrief);
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [toastDismissed, setToastDismissed] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const moveFocus = useRef(false);
  const sending = useRef(false);

  useLayoutEffect(() => {
    if (moveFocus.current) {
      heading.current?.focus();
      moveFocus.current = false;
    }
  }, [step, status]);

  function goTo(next: number) {
    moveFocus.current = true;
    setStep(next);
    setStatus("idle");
  }

  const subject = `Portfolio enquiry: ${topic}`;
  const message = brief.message.trim();
  const emailDraft = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Project focus: ${topic}\n\n${message}\n\n${brief.name.trim()}\n${brief.email.trim()}`)}`;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step === 0) {
      goTo(1);
      return;
    }
    if (sending.current || status === "sent") return;
    if (!accessKey) {
      setStatus("error");
      return;
    }

    const botcheck = new FormData(event.currentTarget).has("botcheck");

    sending.current = true;
    setToastDismissed(false);
    setStatus("sending");

    try {
      const [response] = await Promise.all([
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          signal: AbortSignal.timeout(15_000),
          body: JSON.stringify({
            access_key: accessKey,
            from_name: `${profile.name} Portfolio`,
            subject,
            name: brief.name.trim(),
            email: brief.email.trim(),
            project_focus: topic,
            message,
            botcheck,
          }),
        }),
        new Promise((resolve) => window.setTimeout(resolve, 850)),
      ]);
      if (!response.ok || (await response.json())?.success !== true) {
        setStatus("error");
        return;
      }
      moveFocus.current = true;
      setStatus("sent");
    } catch {
      setStatus("error");
    } finally {
      sending.current = false;
    }
  }

  const showToast = !toastDismissed && (status === "sending" || status === "sent");

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="shell contact-layout">
        <div className="contact-copy">
          <p className="eyebrow"><span className="spark" aria-hidden="true">✦</span> CONTACT</p>
          <h2 id="contact-title">What are we<br /><em>building next?</em></h2>
          <p className="section-intro">Tell me what you’re building, who it’s for and what you want to achieve.</p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}><FiMail aria-hidden="true" /> {profile.email}</a>
            <a href={profile.phoneHref}><FiPhone aria-hidden="true" /> {profile.phone}</a>
          </div>
        </div>

        <div className="contact-card">
          {status === "sent" ? (
            <div className="contact-success">
              <span className="success-icon"><FiCheck aria-hidden="true" /></span>
              <h3 ref={heading} tabIndex={-1}>Message sent.</h3>
              <p>Thanks for sharing your brief. I’ll reply to {brief.email.trim()}.</p>
              <button className="button button-quiet" type="button" onClick={() => {
                setBrief(initialBrief);
                setTopic("Web development");
                goTo(0);
              }}>Start a new brief</button>
            </div>
          ) : (
            <form onSubmit={submit} aria-label="Project enquiry" aria-busy={status === "sending"}>
              <input type="checkbox" name="botcheck" hidden tabIndex={-1} />
              <ol className="form-progress" aria-label="Enquiry progress">
                {steps.map((name, index) => (
                  <li key={name} aria-current={step === index ? "step" : undefined} data-complete={step > index}>
                    <span>{step > index ? <FiCheck aria-label="Complete" /> : index + 1}</span>{name}
                  </li>
                ))}
              </ol>
              <div className="form-main" key={step}>
                <h3 ref={heading} tabIndex={-1}>{step === 0 ? "What can I help with?" : "Tell me a bit more."}</h3>
                {step === 0 ? (
                  <fieldset className="topic-grid">
                    <legend className="sr-only">Project focus</legend>
                    {topics.map(({ label, Icon }) => (
                      <label className="topic" key={label}>
                        <input type="radio" name="topic" checked={topic === label} onChange={() => setTopic(label)} />
                        <span><Icon aria-hidden="true" /> {label}</span>
                      </label>
                    ))}
                  </fieldset>
                ) : (
                  <div className="fields">
                    <label>Your name
                      <input name="name" autoComplete="name" required maxLength={100} pattern={".*\\S.*"}
                        readOnly={status === "sending"} value={brief.name}
                        onChange={(event) => setBrief({ ...brief, name: event.target.value })} />
                    </label>
                    <label>Email address
                      <input name="email" type="email" autoComplete="email" required maxLength={254}
                        readOnly={status === "sending"} value={brief.email}
                        onChange={(event) => setBrief({ ...brief, email: event.target.value })} />
                    </label>
                    <label className="message-field">Your project brief
                      <textarea name="message" required rows={4} maxLength={1500}
                        placeholder="What do you need, and what would success look like?"
                        readOnly={status === "sending"} value={brief.message} onChange={(event) => {
                          event.target.setCustomValidity(event.target.value && !event.target.value.trim() ? "Please enter a project brief." : "");
                          setBrief({ ...brief, message: event.target.value });
                        }} />
                      <span className="character-count">{brief.message.length} / 1500</span>
                    </label>
                  </div>
                )}
              </div>
              {status === "error" && (
                <p className="form-error" role="alert">
                  {accessKey ? "The message couldn’t be sent. Try again or " : "The online form is currently unavailable. You can "}
                  <a href={emailDraft}>open it in your email app</a>.
                </p>
              )}
              <div className="form-actions">
                {step === 1 && <button className="button button-quiet" type="button" disabled={status === "sending"}
                  onClick={() => goTo(0)}>Back</button>}
                <button className="button button-primary" type="submit" disabled={status === "sending"}>
                  {step === 1 && <FiSend aria-hidden="true" />}
                  {step === 0 ? "Continue" : status === "sending" ? "Sending…" : "Send message"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <div className="contact-toast-region">
        <span className="sr-only" role="status">{status === "sending" ? "Sending your brief." : ""}</span>
        {showToast && (
          <div className="contact-toast" data-status={status}>
            <div className="toast-emblem" key={status} aria-hidden="true">
              {status === "sending" ? <FiSend /> : (
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" pathLength="1" />
                  <path d="m7.5 12 3 3 6-6" pathLength="1" />
                </svg>
              )}
            </div>
            <div className="toast-copy" key={`copy-${status}`}>
              <strong>{status === "sending" ? "Sending your brief…" : "Message sent"}</strong>
              <p>{status === "sending" ? "Connecting to the contact service." : "Thanks for reaching out."}</p>
            </div>
            {status === "sent" && (
              <button type="button" className="icon-button toast-close" aria-label="Dismiss confirmation"
                onClick={() => { setToastDismissed(true); heading.current?.focus(); }}>
                <FiX />
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
