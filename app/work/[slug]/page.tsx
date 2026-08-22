import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkDetail } from "@/components/work-detail";
import { getWorkBySlug, works } from "@/data/work";
import { TaikooLiCaseStudy } from "./taikoo-li-case-study";

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
    return <TaikooLiCaseStudy work={work} />;
  }

  return <WorkDetail work={work} />;
}
