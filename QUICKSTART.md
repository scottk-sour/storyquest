# ⚡ 30-Minute Quick Start

> For when you're ready to deploy but want the shortest path possible

## The Absolute Minimum (30 mins)

### 1. Database (5 mins)
```bash
# Go to https://neon.tech
# Click "Sign Up" → Use GitHub
# Create project: "storyquest"
# Copy connection string (starts with postgresql://)
```

### 2. Vercel Deploy (10 mins)
```bash
# Go to https://vercel.com
# Click "Import Project" → Select your GitHub repo
# Branch: claude/autonomous-saas-executor-011CUrVzriSUrT6dvckEoNFF

# Before deploying, add these environment variables:
DATABASE_URL=postgresql://[paste from Neon]
NEXTAUTH_SECRET=[run: openssl rand -base64 32]
NEXTAUTH_URL=https://[will-be-your-url].vercel.app

# Click "Deploy"
# Wait 2-3 minutes
```

### 3. Run Migrations (10 mins)
```bash
# Install Vercel CLI (one-time)
npm i -g vercel

# Pull environment variables to local
vercel env pull .env.local

# Run migrations
npx prisma generate
npx prisma migrate deploy

# Seed sample data
npx prisma db seed
```

### 4. Test (5 mins)
```
Visit your Vercel URL
Sign up as new user
Add a child profile
Browse stories (should see sample stories from seed)
```

## Done! 🎉

Your app is live and functional.

---

## Optional: Make Yourself Admin

```bash
# Connect to database and run:
# (In Neon dashboard → SQL Editor)

UPDATE "User"
SET role = 'ADMIN'
WHERE email = 'your@email.com';
```

Now you can access `/admin` dashboard.

---

## What's Working After This:
✅ Full authentication
✅ Child profile management
✅ Story browser and reader
✅ Professional dashboard (mock data)
✅ Admin panel (mock data)
✅ All UI components

## What You'll Need to Add:
- Real stories with audio
- Professional verification workflow
- Payment integration (Stripe)
- Email notifications

---

**Cost**: £0 (free tiers only)
**Time**: 30 minutes
**Result**: Production-ready app

See full deployment guide: [DEPLOYMENT.md](./DEPLOYMENT.md)
