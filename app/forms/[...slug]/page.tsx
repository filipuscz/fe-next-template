import { notFound } from "next/navigation";
import { WorkspaceShell } from "@/app/_components/app-shell/workspace-shell";
import { FormShowcase } from "@/app/components/forms/_components/form-showcase";
import type { FormShowcaseKind } from "@/app/components/forms/_components/form-showcase";

const formRoutes: Record<string, FormShowcaseKind> = {
  "basic/form-control": "form-control",
  "basic/input-group": "input-group",
  "basic/select": "select",
  "basic/checks": "checks",
  "basic/range": "range",
  "basic/floating-labels": "floating-labels",
  "basic/layout": "form-layout",
  "advance/select": "advanced-select",
  "advance/date-picker": "date-picker",
  "advance/editor": "editor",
  "advance/file-uploader": "file-uploader",
  "advance/range": "advanced-range",
  "advance/rating": "rating",
  "advance/emoji-button": "emoji-button",
  validation: "validation",
  wizard: "wizard",
};

export function generateStaticParams() {
  return Object.keys(formRoutes).map((path) => ({ slug: path.split("/") }));
}

export default async function FormPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const path = (await params).slug.join("/");
  const kind = formRoutes[path];
  if (!kind) notFound();
  return <WorkspaceShell mainId="component-content" activePage={kind}><FormShowcase kind={kind} /></WorkspaceShell>;
}
