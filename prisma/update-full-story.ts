import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const content = {
    nodes: [
      {
        id: 'start',
        type: 'story',
        title: 'A New Place',
        content: 'Luna the little bunny arrived at a new house. Everything felt big and different. She didn\'t know where anything was, or who these new people were. Her ears drooped down, and her little heart beat fast.',
        image: '/images/stories/safe-place/scene-01-luna-worried.jpg',
        choices: [
          { text: 'Explore the house', nextNode: 'scene-02a' },
          { text: 'Find a quiet corner', nextNode: 'scene-02b' }
        ]
      },
      {
        id: 'scene-02a',
        type: 'story',
        title: 'Looking Around',
        content: 'Luna hopped slowly through the rooms. She saw a soft rug, some colorful toys, and a big comfy chair. By the window, someone was reading a book. They looked up and smiled gently at Luna.',
        image: '/images/stories/safe-place/scene-02a-exploring.jpg',
        choices: [
          { text: 'Go closer to the person', nextNode: 'scene-03' },
          { text: 'Watch from here', nextNode: 'ending-peaceful' }
        ]
      },
      {
        id: 'scene-02b',
        type: 'story',
        title: 'A Safe Spot',
        content: 'Luna found a quiet corner with soft cushions. She curled up small and watched everything from her safe spot. It was okay to take her time. Nobody rushed her.',
        image: '/images/stories/safe-place/scene-02b-quiet-corner.jpg',
        choices: [
          { text: 'Stay here a bit longer', nextNode: 'ending-peaceful' },
          { text: 'Look for the person', nextNode: 'scene-03' }
        ]
      },
      {
        id: 'scene-03',
        type: 'story',
        title: 'Meeting Someone Kind',
        content: 'The caregiver got down on the floor, so they were closer to Luna\'s size. "Hello, little one," they said softly. "You\'re safe here. Would you like to come a bit closer?"',
        image: '/images/stories/safe-place/scene-03-meet-caregiver.jpg',
        choices: [
          { text: 'Move a little closer', nextNode: 'ending-trusting' },
          { text: 'Watch from where I am', nextNode: 'ending-peaceful' }
        ]
      }
    ],
    endings: [
      {
        id: 'ending-peaceful',
        type: 'ending',
        title: 'Finding Peace',
        content: 'Luna curled up in her special blanket. She felt calm inside. Her new home was safe. She could rest here. She could be peaceful here. Everything was going to be okay.',
        image: '/images/stories/safe-place/ending-01-peaceful.jpg'
      },
      {
        id: 'ending-trusting',
        type: 'ending',
        title: 'Learning to Trust',
        content: 'Luna sat close to the caregiver, their warmth next to her. She had learned that this person would keep their promises. She could trust them. She wasn\'t alone anymore.',
        image: '/images/stories/safe-place/ending-02-trusting.jpg'
      }
    ]
  }

  await prisma.story.update({
    where: { slug: 'finding-my-safe-place' },
    data: { content: content }
  })
  
  console.log('✅ Story updated with', content.nodes.length, 'nodes and', content.endings.length, 'endings!')
  await prisma.$disconnect()
}

main()