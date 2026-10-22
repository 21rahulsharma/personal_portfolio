import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy } from "@/components/case-study";
import { workBySlug } from "@/data/content";

export const Route = createFileRoute("/work/$slug")({
  head: ({ params }) => {
    const work = workBySlug(params.slug);
    return {
      meta: [
        {
          title: work ? `${work.title} — Rahul` : "Rahul",
        },
        {
          name: "description",
          content: work?.lede ?? "Work by Rahul, AI/ML Engineer.",
        },
      ],
    };
  },
  component: StudyRoute,
});

function StudyRoute() {
  const { slug } = Route.useParams();
  return <CaseStudy slug={slug} />;
}
