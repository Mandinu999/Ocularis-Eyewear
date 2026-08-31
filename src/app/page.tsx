import EyewearStore from "@/components/EyewearStore";
import { prisma } from "@/lib/db";

export default async function Home() {
  const products = await prisma.product.findMany();
  return <EyewearStore products={products} />;
}
