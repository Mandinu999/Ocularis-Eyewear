import React from "react";
import Link from "next/link";
import { prisma } from "@/lib/db";
import ProductClient from "./ProductClient";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = await prisma.product.findUnique({
    where: { id: resolvedParams.id }
  });

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Product not found</h1>
        <Link href="/" className="text-zinc-500 hover:text-zinc-900 underline">Return to shop</Link>
      </div>
    );
  }

  return <ProductClient product={product} />;
}
