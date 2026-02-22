import { notFound } from "next/navigation";
import ProductTemplate from "@/components/ProductTemplate";
import { products } from "@/app/lib/Products";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "xelphrix-outreach-engine" },
    { slug: "xelphrix-fitcore" },
    { slug: "xelphrix-commerce-suite" },
  ];
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = products[slug as keyof typeof products];

  if (!product) {
    notFound();
  }

  return <ProductTemplate {...product} />;
}