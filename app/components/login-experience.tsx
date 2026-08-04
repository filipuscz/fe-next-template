"use client";

import { FormEvent, useState } from "react";

type Accent = "violet" | "ocean" | "rose" | "forest" | "amber" | "sky";
type Background = "aurora" | "paper" | "midnight";

const accents: { name: Accent; label: string; color: string }[] = [
  { name: "violet", label: "Violet", color: "#7456d9" },
  { name: "ocean", label: "Ocean", color: "#177e9b" },
  { name: "rose", label: "Rose", color: "#bd5478" },
  { name: "forest", label: "Forest", color: "#377f5a" },
  { name: "amber", label: "Amber", color: "#b8752d" },
  { name: "sky", label: "Sky", color: "#3b83b3" },
];

function ThemeIcon({ dark }: { dark: boolean }) {
  return dark ? (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M12 2.5v2M12 19.5v2M21.5 12h-2M4.5 12h-2M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4M18.7 18.7l-1.4-1.4M6.7 6.7 5.3 5.3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
  );
}

function DotLoader() {
  return <span className="dot-loader" aria-label="Signing you in" role="status"><i /><i /><i /></span>;
}

export default function LoginExperience() {
  const [dark, setDark] = useState(false);
  const [accent, setAccent] = useState<Accent>("violet");
  const [background, setBackground] = useState<Background>("aurora");
  const [compactNav, setCompactNav] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState("");

  const selectedAccent = accents.find((item) => item.name === accent)!;

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setNotice("");
    window.setTimeout(() => {
      setLoading(false);
      setNotice("You’re signed in. Welcome back to Yoru.");
    }, 1100);
  }

  return (
    <div
      className={`yoru-app ${dark ? "theme-dark" : "theme-light"} background-${background}`}
      style={{ "--accent": selectedAccent.color } as React.CSSProperties}
    >
      <a className="skip-link" href="#sign-in">Skip to sign in</a>
      <header className={`site-header ${compactNav ? "nav-compact" : "nav-full"}`}>
        <a className="brand" href="#sign-in" aria-label="Yoru home"><span>Y</span><b>yoru</b></a>
        <div className="header-actions">
          {!compactNav && <p className="header-note">A calmer way to work</p>}
          <button className="icon-button" type="button" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? "light" : "dark"} theme`}>
            <ThemeIcon dark={dark} />
          </button>
          <button className="text-button" type="button" onClick={() => setCompactNav(!compactNav)} aria-pressed={compactNav}>
            {compactNav ? "Expanded nav" : "Compact nav"}
          </button>
        </div>
      </header>

      <main id="sign-in" className="login-layout" tabIndex={-1}>
        <section className="intro" aria-labelledby="welcome-title">
          <p className="eyebrow"><span /> YOUR QUIET SPACE</p>
          <h1 id="welcome-title">Make room for<br /><em>what matters.</em></h1>
          <p className="intro-copy">Yoru gives your work a little more clarity, and your day a little more room to breathe.</p>
          <div className="trust-line"><span className="avatar-stack" aria-hidden="true"><i>J</i><i>M</i><i>S</i></span><span>Thoughtfully made for focused teams</span></div>
        </section>

        <section className="login-card" aria-labelledby="login-title">
          <div className="card-heading"><p className="eyebrow">WELCOME BACK</p><h2 id="login-title">Sign in to continue</h2><p>Enter your details below to pick up where you left off.</p></div>
          <form onSubmit={submit}>
            <div className="field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></div>
            <div className="field"><div className="label-row"><label htmlFor="password">Password</label><a href="#forgot">Forgot password?</a></div><div className="password-wrap"><input id="password" name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" placeholder="Enter your password" required /><button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={`${showPassword ? "Hide" : "Show"} password`}>{showPassword ? "Hide" : "Show"}</button></div></div>
            <label className="check-row"><input type="checkbox" name="remember" /><span>Remember me for 30 days</span></label>
            <button className="btn-yoru" type="submit" disabled={loading}>{loading ? <DotLoader /> : "Sign in"}<span aria-hidden="true">→</span></button>
            <p className="form-notice" aria-live="polite">{notice}</p>
          </form>
          <p className="signup">New to Yoru? <a href="#create-account">Create an account</a></p>
        </section>
      </main>

      <aside className="theme-dock" aria-label="Appearance settings">
        <div className="appearance-heading"><span className="color-orb" aria-hidden="true" /><div><p>Appearance</p><span>Make it yours</span></div></div>
        <fieldset className="accent-picker"><legend>Accent color</legend><div className="swatches">{accents.map((item) => <button key={item.name} className={accent === item.name ? "selected" : ""} style={{ "--swatch": item.color } as React.CSSProperties} type="button" onClick={() => setAccent(item.name)} aria-label={`Use ${item.label} accent`} aria-pressed={accent === item.name}><i /><span>{item.label}</span></button>)}</div></fieldset>
        <fieldset className="canvas-picker"><legend>Canvas mood</legend><div className="canvas-options">{(["aurora", "paper", "midnight"] as Background[]).map((option) => <button className={background === option ? "selected" : ""} key={option} type="button" onClick={() => setBackground(option)} aria-pressed={background === option}><i aria-hidden="true" />{option}</button>)}</div></fieldset>
      </aside>
      <footer><span>© 2025 Yoru Studio</span><a href="#privacy">Privacy</a><a href="#terms">Terms</a><span className="status"><i /> All systems calm</span></footer>
    </div>
  );
}
