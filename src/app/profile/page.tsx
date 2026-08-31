import React from "react";
import ProfileClient from "./ProfileClient";
import { prisma } from "@/lib/db";

export default async function ProfilePage() {
  // Fetch the first user as a mock for the currently logged in user
  const user = await prisma.user.findFirst({
    include: {
      orders: true,
      wishlist: {
        include: {
          product: true
        }
      }
    }
  });

  if (!user) {
    return <div className="p-20 text-center">User not found</div>;
  }

  const wishlistProducts = user.wishlist.map(w => w.product);

  return (
    <ProfileClient 
      user={user} 
      orders={user.orders} 
      wishlistProducts={wishlistProducts} 
    />
  );
}
