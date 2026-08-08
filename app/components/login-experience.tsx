"use client";

import Image from "next/image";
import { useState } from "react";
import type { CSSProperties, SubmitEvent } from "react";
import { accents, backgrounds, type Accent } from "@/app/_lib/workspace-theme";
import { useWorkspacePreferences } from "@/app/_components/providers/workspace-preferences-provider";

const sceneAsset = "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1600";

function EyeIcon({ open }: { open: boolean }) {
  return open ? (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.4-5.5 9.5-5.5S21.5 12 21.5 12 18.1 17.5 12 17.5 2.5 12 2.5 12Z" /><circle cx="12" cy="12" r="2.5" /></svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 3 18 18M10.6 6.7A10.3 10.3 0 0 1 12 6.5c6.1 0 9.5 5.5 9.5 5.5a17.2 17.2 0 0 1-3.1 3.5M6.2 6.3A17 17 0 0 0 2.5 12s3.4 5.5 9.5 5.5c1.1 0 2.1-.2 3-.5" /><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" /></svg>
  );
}

function MailIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5.5" width="17" height="13" rx="2" /><path d="m4.5 7 7.5 5.7L19.5 7" /></svg>;
}

function ThemeIcon({ dark }: { dark: boolean }) {
  return dark ? <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 15.2A8.6 8.6 0 0 1 8.8 4 8.6 8.6 0 1 0 20 15.2Z" /></svg> : <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.5" /><path d="M12 2.5v2M12 19.5v2M21.5 12h-2M4.5 12h-2M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4M18.7 18.7l-1.4-1.4M6.7 6.7 5.3 5.3" /></svg>;
}

function DotLoader() {
  return <span className="three-dot-loader" role="status" aria-label="Signing in"><i /><i /><i /></span>;
}

export default function LoginExperience() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState("");
  const { accent, background, dark, setAccent, setBackground, setDark } = useWorkspacePreferences();
  const currentAccent = accents[accent][dark ? "dark" : "light"];

  function submit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setNotice("");
    window.setTimeout(() => {
      setLoading(false);
      setNotice("You’re signed in. Welcome back to YoruSpace.");
    }, 800);
  }

  return (
    <main
      className={`login-page ${dark ? "theme-dark" : "theme-light"} background-${background}`}
      style={{ "--accent": currentAccent.primary, "--accent-foreground": currentAccent.foreground, "--accent-hover": currentAccent.hover, "--accent-subtle": currentAccent.subtle, "--accent-border": currentAccent.border, "--accent-gradient-start": currentAccent.gradientStart, "--accent-gradient-end": currentAccent.gradientEnd, "--accent-end": currentAccent.gradientEnd, "--nav-gradient-start": currentAccent.navGradientStart, "--nav-gradient-end": currentAccent.navGradientEnd, "--scene-start": currentAccent.gradientStart, "--scene-end": currentAccent.gradientEnd } as CSSProperties}
    >
      <a className="skip-link" href="#login-form">Skip to sign in</a>
      <section className="login-panel" aria-labelledby="welcome-title">
        <a className="brand-mark" href="#login-form" aria-label="YoruSpace home"><span /></a>
        <div className="login-content">
          <p className="welcome-kicker">Welcome to</p>
          <h1 id="welcome-title">YoruSpace</h1>
          <form id="login-form" onSubmit={submit}>
            <div className="field">
              <label htmlFor="email">Email</label>
              <div className="field-control">
                <MailIcon />
                <input id="email" name="email" type="email" autoComplete="email" inputMode="email" placeholder="name@company.com" aria-describedby="email-help" required />
              </div>
              <p id="email-help" className="field-help">Use the email connected to your workspace.</p>
            </div>
            <div className="field">
              <div className="label-row"><label htmlFor="password">Password</label><a href="#forgot">Forgot password?</a></div>
              <div className="password-field">
                <input id="password" name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" placeholder="Enter your password" required />
                <button type="button" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? "Hide password" : "Show password"}><EyeIcon open={showPassword} /></button>
              </div>
            </div>
            <label className="remember"><input type="checkbox" name="remember" /><span>Keep me signed in</span></label>
            <button className="button-yoru button-yoru--primary" type="submit" disabled={loading}>{loading ? <DotLoader /> : "Login"}</button>
            <p className="form-notice" aria-live="polite">{notice}</p>
          </form>
          <p className="signup">Don&apos;t have an account? <a href="#sign-up">Sign up</a></p>
        </div>
      </section>

      <section
        className="scene-panel"
        aria-label="YoruSpace at night illustration"
      >
        <div className="scene-image" aria-hidden="true"><Image src={sceneAsset} alt="" fill priority sizes="(max-width: 900px) 100vw, 58vw" /></div>
        <div className="scene-tint" aria-hidden="true" />
        <div className="theme-toolbar" aria-label="Theme controls">
          <button type="button" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? "light" : "dark"} mode`}><ThemeIcon dark={dark} /></button>
          <fieldset><legend>Canvas</legend>{backgrounds.map((option) => <button key={option} className={background === option ? "selected" : ""} type="button" onClick={() => setBackground(option)} aria-pressed={background === option}>{option}</button>)}</fieldset>
        </div>
        <fieldset className="gradient-picker">
          <legend>Appearance</legend>
          <p>Accent and illustration gradient</p>
          <div className="gradient-options">
            {(Object.keys(accents) as Accent[]).map((option) => {
              const item = accents[option];
              const optionTokens = item[dark ? "dark" : "light"];
              return <button key={option} className={accent === option ? "selected" : ""} type="button" onClick={() => setAccent(option)} aria-pressed={accent === option} aria-label={`Use ${item.label} throughout YoruSpace`} style={{ "--option-start": optionTokens.gradientStart, "--option-end": optionTokens.gradientEnd } as CSSProperties}><i aria-hidden="true" /><span>{item.label}</span></button>;
            })}
          </div>
        </fieldset>
      </section>
    </main>
  );
}
