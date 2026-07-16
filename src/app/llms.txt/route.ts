import { SITE_ORIGIN } from "../../lib/site";
import { caseStudies } from "../content";

export const dynamic = "force-static";

const DESCRIPTION =
  "Full-stack engineer who ships AI-integrated products end to end — from a WhatsApp bot doing real-time fraud detection to platforms that clone Webflow/Framer sites into production React code.";

export function GET() {
  const origin = SITE_ORIGIN || "https://anesundoro.me";
  const caseStudyLines = caseStudies
    .map((study) => `- [${study.title}](${origin}/work/${study.slug}) - ${study.oneLiner}`)
    .join("\n");

  const body =
    `# Anesu Ndoro — Full-Stack Engineer\n\n` +
    `${DESCRIPTION}\n\n` +
    `## Routes\n\n` +
    `- [Home](${origin}/) - Portfolio overview: selected work, other builds, about, and contact.\n` +
    `${caseStudyLines}\n`;

  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
