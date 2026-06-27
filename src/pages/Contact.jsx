import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SOCIAL_LINKS } from "@/lib/siteConfig";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // UI-only for now - hook this up to a backend/email service when ready
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-2xl py-10">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Get in <span className="text-primary neon-text">Touch</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          Have feedback or want to collaborate? Send a message.
        </p>
      </div>

      {/* Social links */}
      <div className="mb-10 flex justify-center gap-4">
        <a
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-xl border border-white/10 bg-card/60 px-5 py-3 text-sm font-medium backdrop-blur-md transition-all hover:border-primary/40 hover:text-primary"
        >
          <FiGithub className="h-4 w-4" />
          GitHub
        </a>
        <a
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-xl border border-white/10 bg-card/60 px-5 py-3 text-sm font-medium backdrop-blur-md transition-all hover:border-secondary/40 hover:text-secondary"
        >
          <FiLinkedin className="h-4 w-4" />
          LinkedIn
        </a>
      </div>

      {/* Form */}
      <div className="rounded-2xl border border-white/10 bg-card/60 p-7 backdrop-blur-md md:p-9">
        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <CheckCircle2 className="h-12 w-12 text-primary" />
            <h2 className="text-xl font-bold">Message received!</h2>
            <p className="text-muted-foreground">
              Thanks for reaching out — I&apos;ll get back to you soon.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({ name: "", email: "", message: "" });
              }}
              className="mt-2 text-sm font-medium text-primary hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-muted-foreground">
                Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-muted-foreground">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="What's on your mind?"
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_18px_color-mix(in_oklch,var(--primary),transparent_45%)]"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
