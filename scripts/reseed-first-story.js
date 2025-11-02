const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error('❌ DATABASE_URL not found in environment');
  process.exit(1);
}

async function reseedFirstStory() {
  const client = new Client({
    connectionString: DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    console.log('🌱 Re-seeding Finding My Safe Place story...');

    // Delete the old story
    await client.query(
      'DELETE FROM "Story" WHERE slug = $1',
      ['finding-my-safe-place']
    );
    console.log('✅ Deleted old story');

    // Run the main seed
    const { execSync } = require('child_process');
    execSync('npx tsx prisma/seed.ts', { stdio: 'inherit' });

  } catch (error) {
    console.error('❌ Re-seed failed:', error);
    process.exit(1);
  } finally {
    await client.end();
  }
}

reseedFirstStory();
