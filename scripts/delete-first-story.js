const { Client } = require('pg');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Simple CUID-like ID generator
function generateId() {
  return 'cl' + crypto.randomBytes(12).toString('base64').replace(/[^a-z0-9]/gi, '').toLowerCase().substring(0, 23);
}

// Read environment from .env.local
const envFile = fs.readFileSync(path.join(__dirname, '../.env.local'), 'utf8');
const DATABASE_URL = envFile.match(/DATABASE_URL="([^"]+)"/)?.[1] || envFile.match(/DATABASE_URL=([^\n]+)/)?.[1];

if (!DATABASE_URL) {
  console.error('❌ DATABASE_URL not found in .env.local');
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

    // Delete the old story and its guides
    const result = await client.query(
      'DELETE FROM "Story" WHERE slug = $1 RETURNING id',
      ['finding-my-safe-place']
    );
    
    if (result.rows.length > 0) {
      console.log('✅ Deleted old story');
    } else {
      console.log('ℹ️  Story did not exist');
    }

    console.log('✅ Ready to re-seed. Now run: npx tsx prisma/seed.ts');

  } catch (error) {
    console.error('❌ Failed:', error.message);
    process.exit(1);
  } finally {
    await client.end();
  }
}

reseedFirstStory();
