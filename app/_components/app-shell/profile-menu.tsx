"use client";

import { useCallback, useState } from "react";
import { ChevronDown, CircleHelp, LogOut, MoreHorizontal, Settings, UserRound } from "lucide-react";
import { useDismissiblePopover } from "./_hooks/use-dismissible-popover";

const profileActions = [
  { label: "View profile", icon: UserRound },
  { label: "Account settings", icon: Settings },
  { label: "Help & support", icon: CircleHelp },
] as const;

export function ProfileMenu({ placement = "nav" }: { placement?: "nav" | "sidebar" }) {
  const [open, setOpen] = useState(false);
  const dismiss = useCallback(() => setOpen(false), []);
  const controlRef = useDismissiblePopover(open, dismiss);
  const menuId = `dashboard-profile-menu-${placement}`;
  const isSidebar = placement === "sidebar";

  return <div className={`profile-control profile-control--${placement}`} ref={controlRef}>{isSidebar ? <button type="button" className="side-nav-user side-nav-profile-trigger" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls={menuId}><span className="user-avatar">YP</span><span><b>Yorupus</b><small>Workspace owner</small></span><MoreHorizontal /></button> : <button type="button" className="profile-trigger" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls={menuId}>Hi, Yorupus<ChevronDown /></button>}{open && <section id={menuId} className="profile-popover" role="dialog" aria-label="Profile menu"><div className="profile-summary"><span className="profile-avatar">YP</span><div><b>Yorupus</b><span>yorupus@yoruspace.co</span></div></div><div className="profile-actions">{profileActions.map(({ label, icon: Icon }) => <button type="button" key={label} onClick={dismiss}><Icon />{label}</button>)}</div><button type="button" className="profile-sign-out" onClick={dismiss}><LogOut />Sign out</button></section>}</div>;
}
