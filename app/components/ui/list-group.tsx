import type { ReactNode } from "react";
import Link from "next/link";

export type ListGroupBackground = "default" | "primary" | "success" | "warning" | "danger";

export type ListGroupItem = {
  id: string;
  title: ReactNode;
  description?: ReactNode;
  badge?: ReactNode;
  href?: string;
  active?: boolean;
  background?: ListGroupBackground;
};

export type ListGroupProps = {
  items: readonly ListGroupItem[];
  variant?: "default" | "flush";
  label: string;
};

export function ListGroup({ items, variant = "default", label }: ListGroupProps) {
  return (
    <ul className={`list-group-yoru list-group-yoru--${variant}`} aria-label={label}>
      {items.map((item) => {
        const className = [
          "list-group-yoru-item",
          item.active ? "is-active" : "",
          `list-group-yoru-item--${item.background ?? "default"}`,
        ].filter(Boolean).join(" ");
        const content = <><span className="list-group-yoru-copy"><span className="list-group-yoru-title">{item.title}</span>{item.description ? <span className="list-group-yoru-description">{item.description}</span> : null}</span>{item.badge ? <span className="list-group-yoru-badge">{item.badge}</span> : null}</>;

        return <li className={className} key={item.id}>{item.href ? <Link href={item.href} aria-current={item.active ? "page" : undefined}>{content}</Link> : <div aria-current={item.active ? "true" : undefined}>{content}</div>}</li>;
      })}
    </ul>
  );
}
