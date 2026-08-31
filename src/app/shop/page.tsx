import React from "react";
import ShopClient from "./ShopClient";
import { prisma } from "@/lib/db";

export default async function ShopPage() {
  const products = await prisma.product.findMany();
  
  return <ShopClient products={products} />;
}
