import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.story.update({
    where: { slug: 'finding-my-safe-place' },
    data: {
      coverImage: '/images/stories/safe-place/safe-place-cover.jpg'
    }
  })
  console.log('✅ Cover image updated!')
  await prisma.$disconnect()
}

main()