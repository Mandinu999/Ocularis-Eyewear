import { PrismaClient } from '@prisma/client'
import { PRODUCTS } from '../src/lib/data'

const prisma = new PrismaClient()

async function main() {
  console.log('Start seeding...')
  
  
  await prisma.orderItem.deleteMany()
  await prisma.order.deleteMany()
  await prisma.wishlist.deleteMany()
  await prisma.product.deleteMany()
  await prisma.user.deleteMany()

  
  const user = await prisma.user.create({
    data: {
      name: 'Alex Doe',
      email: 'alex.doe@example.com',
    }
  })
  console.log(`Created user with id: ${user.id}`)

  
  for (const p of PRODUCTS) {
    const product = await prisma.product.create({
      data: {
        id: p.id,
        name: p.name,
        price: p.price,
        category: p.category,
        image: p.image,
        description: p.description,
        rating: p.rating,
      },
    })
    console.log(`Created product with id: ${product.id}`)
  }

  console.log('Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
