import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { WorkDetail } from "@/components/work-detail";
import { getWorkBySlug, works } from "@/data/work";
import { LocalizedProjectEntry } from "./localized-project-entry";

type WorkPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return works.map((work) => ({
    slug: work.slug,
  }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    return {
      title: "Work not found",
    };
  }

  return {
    title: `${work.title.zh} | CREER Portfolio`,
    description: work.summary.en,
  };
}

export default async function WorkDetailPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  if (work.slug === "taikoo-li-digital-district") {
    redirect("/images/tkl-experience/index.html?v=20260912-media-1");
  }

  if (work.slug === "digital-personality") {
    redirect("/images/digital-personality/index.html?v=20260904-2");
  }

  if (work.liveUrl?.startsWith("/images/")) {
    return <LocalizedProjectEntry href={work.liveUrl} />;
  }

  return <WorkDetail work={work} />;
}
