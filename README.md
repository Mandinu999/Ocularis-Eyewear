# Ocularis

A modern e-commerce storefront built with Next.js 14, Tailwind CSS, and Prisma.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Icons & Animation:** Lucide React, Framer Motion
- **Database & ORM:** SQLite, Prisma v5
- **State Management:** React Context API

## Features

- **Product Catalog:** Grid layout with sorting (price, rating, newest) and category filtering.
- **Dynamic Search:** Client-side search modal querying a live API route.
- **Cart System:** Context-based cart state with a slide-out sidebar overlay.
- **User Profile:** Dashboard showing personal info, recent mock orders, and wishlist items.
- **Database Integration:** Fully connected to a local SQLite database via Prisma.

## Local Setup

The repository includes a pre-seeded SQLite database (`prisma/dev.db`), so you can get started immediately without setting up external database providers.

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```

3. **Open the app**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/app/` - Next.js App Router pages and API routes.
- `src/components/` - Reusable UI components (ProductCard, Navbar, CartSidebar, etc.).
- `src/lib/` - Context providers, Prisma client instance, and utility functions.
- `prisma/` - Prisma schema, database file, and seed script.

