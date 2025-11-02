const { Client } = require('pg');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Simple CUID-like ID generator
function generateId() {
  return 'cl' + crypto.randomBytes(12).toString('base64').replace(/[^a-z0-9]/gi, '').toLowerCase().substring(0, 23);
}

// Read the story data
const storyData = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../prisma/seed-story-finding-safe-place.json'),
    'utf8'
  ).replace(/^\uFEFF/, '')
);

// Read environment from .env.local
const envFile = fs.readFileSync(path.join(__dirname, '../.env.local'), 'utf8');
const DATABASE_URL = envFile.match(/DATABASE_URL="([^"]+)"/)?.[1] || envFile.match(/DATABASE_URL=([^\n]+)/)?.[1];

if (!DATABASE_URL) {
  console.error('❌ DATABASE_URL not found in .env.local');
  process.exit(1);
}

async function seedFirstStory() {
  const client = new Client({
    connectionString: DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    console.log('🌱 Seeding Finding My Safe Place...');

    // Generate a new ID
    const storyId = generateId();

    // Insert story
    await client.query(
      `INSERT INTO "Story" (
        id, title, subtitle, description, "coverImage", slug, author,
        illustrator, narrator, "reviewedBy", "ageGroup", category,
        duration, "wordCount", "therapeuticThemes", "traumaTopics",
        "contentWarnings", "healingGoals", "professionalGuidance",
        content, "audioFiles", status, featured, "freeForCareChildren",
        vocabulary, "emotionalSkills", "copingStrategies",
        "publishedAt", "createdAt", "updatedAt"
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14,
        $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27,
        NOW(), NOW(), NOW()
      )`,
      [
        storyId,
        storyData.story.title,
        storyData.story.subtitle,
        storyData.story.description,
        storyData.story.coverImage,
        storyData.story.slug,
        storyData.story.author,
        storyData.story.illustrator,
        storyData.story.narrator,
        storyData.story.reviewedBy,
        storyData.story.ageGroup,
        storyData.story.category,
        storyData.story.duration,
        storyData.story.wordCount,
        storyData.story.therapeuticThemes,
        storyData.story.traumaTopics,
        storyData.story.contentWarnings,
        storyData.story.healingGoals,
        storyData.story.professionalGuidance,
        JSON.stringify(storyData.story.content),
        JSON.stringify({}),
        storyData.story.status,
        storyData.story.featured,
        storyData.story.freeForCareChildren,
        [],
        [],
        []
      ]
    );

    console.log(`✅ Story created with ID: ${storyId}`);

    // Insert conversation guides
    for (const guide of storyData.story.conversationGuides) {
      const guideId = generateId();
      await client.query(
        `INSERT INTO "ConversationGuide" (
          id, "storyId", title, section, questions, activities,
          observations, responses, "createdAt", "updatedAt"
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW(), NOW())`,
        [
          guideId,
          storyId,
          guide.title,
          guide.section,
          guide.questions,
          guide.activities || [],
          guide.observations || [],
          JSON.stringify({})
        ]
      );
    }

    console.log(`✅ Created ${storyData.story.conversationGuides.length} conversation guides`);
    console.log('');
    console.log('✅ Seed completed successfully!');
    console.log(`🎉 Story "${storyData.story.title}" is now in your database!`);
    console.log('');
    console.log('Refresh your browser to see the complete story!');

  } catch (error) {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  } finally {
    await client.end();
  }
}

seedFirstStory();
