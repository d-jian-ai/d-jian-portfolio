import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TaikooVoxelEditor } from "./taikoo-voxel-editor";

type EditorPageProps = {
  params: Promise<{ slug: string }>;
};

export const metadata: Metadata = {
  title: "Taikoo Li Voxel Editor | CREER Portfolio",
  description: "Interactive voxel editor for the Taikoo Li digital district reconstruction.",
};

export function generateStaticParams() {
  return [{ slug: "taikoo-li-digital-district" }];
}

export default async function VoxelEditorPage({ params }: EditorPageProps) {
  const { slug } = await params;
  if (slug !== "taikoo-li-digital-district") notFound();
  return <TaikooVoxelEditor />;
}

