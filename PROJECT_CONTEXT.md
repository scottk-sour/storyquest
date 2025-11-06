# StoryQuest - Project Context & Strategy

> **Last Updated**: 2025-11-06
> **Status**: In Development (Phase 1: Foundation Complete)
> **Timeline**: 12-18 months to first revenue
> **Approach**: Family-backed social enterprise with insider advantage

---

## 🎯 Project Mission

**Therapeutic interactive stories for children in care** - trauma-informed, professionally guided, and completely free for vulnerable children.

### The Core Problem
- 108,000 children in UK care system
- Limited access to therapeutic support
- Trauma-informed storytelling is proven effective
- No digital platform exists for this specific need

### The Solution
Interactive stories that:
- Use therapeutic principles (safety, trust, empowerment)
- Allow children to make choices (empowerment)
- Track emotional responses
- Provide conversation guides for professionals
- Include safeguarding throughout

---

## ✅ Project Scoring (Anti-Bullshit Framework: 53/60)

### Market Fundamentals (17/20) ✅
- **Pain Severity**: 7/10 - Real trauma support need
- **Market Size**: 5/5 - 339 Local Authorities, £80-100M TAM
- **Willingness to Pay**: 5/5 - £2,500-£10K/year institutional licenses

### Execution Feasibility (20/20) ✅✅✅
- **Time to Build**: 5/5 - Realistic 12-month timeline understood
- **Technical Complexity**: 5/5 - Standard stack + AI content tools
- **Capital Required**: 5/5 - £2-5K total (AI tools, not studios)
- **Your Expertise**: 5/5 - **UNFAIR ADVANTAGE** (see below)

### Revenue Potential (16/20) ✅
- **Pricing Model**: 9/10 - Clear B2B institutional model
- **Customer Acquisition**: 5/5 - **Family insider access**
- **Time to Revenue**: 2/5 - 9-12 months (but expected)

**Verdict**: ✅ **APPROVED** - Strong fundamentals with unfair advantages

---

## 🏆 Unfair Advantages (Why This Will Work)

### 1. **Insider Access to Market**
- ✅ **Partner works with children in care** (user research on tap)
- ✅ **Sister is Chief Inspector at social services** (LA access + credibility)
- ✅ **Partner's sister in social services** (additional network)
- ✅ **Direct warm intros to Local Authorities** (no cold outreach needed)

### 2. **Domain Expertise Built-In**
- ✅ Daily exposure to care system challenges
- ✅ Understanding of social worker workflows
- ✅ Knowledge of safeguarding requirements
- ✅ Direct feedback loop with end users

### 3. **Content Creation Solved**
- ✅ **AI story generation** (Claude can write trauma-informed narratives)
- ✅ **AI audio** (ElevenLabs £20/mo, not £5K studio)
- ✅ **Family review** (partner + sister validate content)
- ✅ **Conversation guides** (AI draft → professional review)

### 4. **Built-In Pilot Program**
- ✅ Sister's LA = first pilot customer (FREE validation)
- ✅ Partner's colleagues = beta testers
- ✅ Chief Inspector testimonial = instant credibility
- ✅ Real usage data before selling to other LAs

---

## 📊 Current Status (November 2025)

### ✅ What's Built (Phase 1 Complete)

**Core Platform**:
- ✅ Complete database schema (Prisma)
- ✅ Authentication system (NextAuth v5)
- ✅ Role-based access (Parent, Professional, Admin)
- ✅ Child profile management
- ✅ Story reader with interactive choices
- ✅ Audio player with speed controls
- ✅ Landing page with mission statement

**Professional Tools** (NEW):
- ✅ Professional dashboard with client tracking
- ✅ Client detail pages with therapeutic profiles
- ✅ Conversation guide component (before/during/after)
- ✅ Therapeutic note-taking form
- ✅ Insights & alerts system
- ✅ Progress tracking

**Admin Panel** (NEW):
- ✅ Platform-wide statistics
- ✅ Story management interface
- ✅ Professional verification queue
- ✅ DBS check review system

**Technical Health**:
- ✅ TypeScript compilation passing
- ✅ All UI components functional (with mock data)
- ✅ Responsive design
- ⚠️ Database not connected (sandbox blocker)

### ⚠️ What's Needed (Phases 2-4)

**Immediate (Phase 2 - Months 1-3)**:
- [ ] Deploy to Vercel (unblocks database)
- [ ] Run Prisma migrations
- [ ] Test with real data
- [ ] Make partner/family admin accounts

**Content Creation (Phase 3 - Months 3-6)**:
- [ ] Generate 5 AI stories (Claude)
- [ ] Create audio narration (ElevenLabs)
- [ ] Partner reviews content (therapeutic accuracy)
- [ ] Sister reviews (professional perspective)
- [ ] Build conversation guides

**Pilot Program (Phase 4 - Months 6-9)**:
- [ ] Launch with sister's LA (free pilot)
- [ ] Onboard 5-10 social workers
- [ ] Track usage & gather feedback
- [ ] Collect testimonials
- [ ] Refine based on real use

**Scale (Phase 5 - Months 9-12+)**:
- [ ] Use pilot data to approach other LAs
- [ ] Build sales materials (case study)
- [ ] Leverage sister's network for intros
- [ ] First paid contract (Month 12 target)

---

## 💰 Revenue Model & Projections

### Pricing Structure
```
FREE TIER:
- Children in care: £0 (core mission)
- Professionals: £0 (access to tools)

INSTITUTIONAL LICENSES:
- Standard (50 seats): £2,500/year
- Large (100 seats): £4,500/year
- Enterprise (250 seats): £9,999/year
- Pilot: FREE for 3 months
```

### Revenue Timeline (Conservative)
```
Year 1 (Months 1-12):
- Focus: Build + pilot
- Revenue: £0-2,500 (maybe 1 LA by end of year)
- Goal: Validation + testimonials

Year 2 (Months 13-24):
- 5-10 Local Authorities
- Revenue: £12,500-£25,000 ARR
- Goal: Prove scalability

Year 3 (Months 25-36):
- 20-30 Local Authorities
- Revenue: £50,000-£75,000 ARR
- Goal: Partner's income replacement ✅

Year 5:
- 50-100 Local Authorities
- Revenue: £150,000-£300,000 ARR
- Goal: Full-time sustainable business
```

### Unit Economics
```
Customer Acquisition Cost (CAC):
- Sister's network: £0 (warm intros)
- Other LAs: £500-1,000 (time cost)

Lifetime Value (LTV):
- Average contract: £4,000/year
- Average length: 5+ years (high switching costs)
- LTV: £20,000+

LTV:CAC Ratio: 20-40x (exceptional)
```

---

## 🏗️ Technical Architecture

### Tech Stack (Production-Ready)
```
Frontend:  Next.js 14 (App Router) + React + TypeScript
Backend:   Next.js API Routes + NextAuth v5
Database:  PostgreSQL via Neon (serverless)
ORM:       Prisma
Auth:      NextAuth.js (role-based)
UI:        Tailwind CSS + shadcn/ui
Audio:     Howler.js
Analytics: Plausible (privacy-first)
Hosting:   Vercel
```

### AI Tools for Content
```
Stories:           Claude 3.5 Sonnet (narrative generation)
Audio:             ElevenLabs (professional narration, £20/mo)
Images:            Midjourney (story illustrations)
Conversation Guides: Claude (draft) → Family review
Therapeutic Review: AI draft → Partner approval
```

### Database Schema Highlights
```
✅ User (roles: Parent, Professional, Admin)
✅ Child (care status, therapeutic profile, triggers)
✅ Professional (DBS verification, client assignments)
✅ Story (therapeutic themes, trauma topics, content warnings)
✅ ReadingSession (choices, emotional responses, progress)
✅ TherapeuticNote (professional observations, confidential)
✅ SafeguardingLog (audit trail for all actions)
✅ ConversationGuide (before/during/after prompts)
✅ InstitutionalLicense (LA seat management)
```

---

## 📋 Detailed Execution Roadmap

### **Phase 1: Foundation** ✅ COMPLETE
**Duration**: 2 hours (AI-assisted)
**Cost**: £0

- [x] Fix TypeScript build errors (14 files)
- [x] Build professional dashboard
- [x] Build admin panel
- [x] Create professional tools (notes, guides)
- [x] Deploy-ready UI (95% complete)

**Result**: Production-ready UI awaiting database connection

---

### **Phase 2: Database & Deployment**
**Duration**: 1-2 days
**Cost**: £0 (free tiers)

**Week 1**:
- [ ] Day 1: Create Neon database (5 mins)
- [ ] Day 1: Deploy to Vercel (30 mins)
- [ ] Day 1: Run Prisma migrations (10 mins)
- [ ] Day 1: Test all user flows (2 hours)
- [ ] Day 2: Create admin account
- [ ] Day 2: Invite partner for testing
- [ ] Day 2: Fix any deployment issues

**Deliverable**: Live, functional app at `storyquest.vercel.app`

---

### **Phase 3: Content Creation with AI**
**Duration**: 4-8 weeks
**Cost**: £100-200

**Story Development Process** (per story):
1. **AI Generation** (1 day per story)
   - Use Claude to generate trauma-informed narrative
   - Create 3-5 choice points
   - Multiple endings (positive/reflective/growth)
   - Age-appropriate language (4-6 or 7-10)

2. **Professional Review** (2-3 days per story)
   - Partner reviews therapeutic accuracy
   - Sister reviews from professional perspective
   - Adjust based on feedback
   - Finalize narrative

3. **Audio Production** (1 day per story)
   - Generate narration with ElevenLabs
   - Multiple voice options
   - Adjustable speed (built into player)
   - Cost: £20/mo for 200,000 characters

4. **Conversation Guide Creation** (1 day per story)
   - AI generates draft questions
   - Before/during/after structure
   - Partner validates therapeutic approach
   - Sister validates practical usability

**Initial Content Goal**: 5 complete stories

**Story Topics** (validated by partner):
1. Finding a Safe Place (safety, security)
2. Understanding Big Feelings (emotional regulation)
3. Building Trust (attachment, relationships)
4. When Things Change (transitions, resilience)
5. Who Am I? (identity, belonging)

**Deliverable**: 5 complete therapeutic stories with audio + guides

---

### **Phase 4: Family Pilot Program**
**Duration**: 3 months
**Cost**: £0

**Month 1: Setup**
- [ ] Week 1: Sister identifies pilot LA team (5-10 social workers)
- [ ] Week 2: Onboarding session (demo platform)
- [ ] Week 3: Create accounts for social workers
- [ ] Week 4: Assign first children (5-10 profiles)

**Month 2: Active Usage**
- [ ] Weekly check-ins with social workers
- [ ] Track usage metrics (logins, stories read, notes created)
- [ ] Gather feedback (what works, what doesn't)
- [ ] Quick fixes based on feedback

**Month 3: Evaluation**
- [ ] Collect testimonials from social workers
- [ ] Gather data (engagement, completion rates)
- [ ] Sister provides official evaluation
- [ ] Create case study

**Success Metrics**:
- ✅ 5+ social workers actively using platform
- ✅ 10+ children engaged with stories
- ✅ 80%+ story completion rate
- ✅ Positive testimonials from professionals
- ✅ Chief Inspector (sister) endorsement

**Deliverable**: Case study + testimonials for LA sales

---

### **Phase 5: Scale & First Revenue**
**Duration**: Months 9-12+
**Cost**: £500-1,000 (marketing materials)

**Months 9-10: Sales Preparation**
- [ ] Create sales deck (pilot results)
- [ ] Build case study page
- [ ] Record demo video (sister walkthrough)
- [ ] Prepare pricing/contracts
- [ ] Identify target LAs (sister's network)

**Months 10-11: Outreach**
- [ ] Sister provides warm intros (5-10 LAs)
- [ ] Schedule discovery calls
- [ ] Demo platform
- [ ] Offer pilot programs (3 months free)

**Month 12: First Contracts**
- [ ] Close first paid LA (target: £2,500)
- [ ] Onboard new customers
- [ ] Gather more testimonials
- [ ] Refine sales process

**Deliverable**: First revenue + validated sales model

---

## 🎯 Success Metrics (KPIs to Track)

### Platform Health
- User accounts created
- Active social workers (weekly logins)
- Children profiles created
- Stories completed
- Average session length
- Completion rates

### Professional Engagement
- Therapeutic notes created
- Conversation guides used
- Client progress tracked
- Professional return rate

### Business Metrics
- Pilot programs launched
- Conversion rate (pilot → paid)
- MRR (Monthly Recurring Revenue)
- Churn rate
- Customer acquisition cost
- Testimonials collected

### Content Metrics
- Stories published
- Average story rating
- Most popular themes
- Audio usage rate
- Emotional response data

---

## 🚨 Risks & Mitigation

### Risk 1: Content Quality
**Risk**: AI-generated stories lack therapeutic depth
**Mitigation**:
- Partner + sister review EVERY story
- Only publish after professional approval
- Test with pilot users first
- Iterate based on feedback

### Risk 2: Slow Sales Cycles
**Risk**: LA procurement takes 6-12 months
**Mitigation**:
- This is expected, not a surprise
- Use pilot to validate demand
- Build pipeline of 10+ LAs
- Focus on sister's network first (faster)

### Risk 3: Safeguarding Concerns
**Risk**: Something goes wrong, children at risk
**Mitigation**:
- Safeguarding logs on ALL actions
- Professional oversight required
- DBS verification for all professionals
- Clear escalation procedures
- Sister advises on policies

### Risk 4: Competitor Enters Market
**Risk**: Larger company builds similar platform
**Mitigation**:
- First-mover advantage (relationships)
- High switching costs (annual contracts)
- Content is unique (family-validated)
- Mission-driven brand (hard to copy)

---

## 💡 Why This Will Succeed

### 1. **Genuine Need**
- 108,000 children need support
- Limited digital therapeutic tools exist
- LAs have budgets for this
- Social workers want better tools

### 2. **Unfair Advantages**
- Chief Inspector sister = LA access
- Partner's care experience = content validation
- AI tools = cheap content creation
- Built-in pilot = free validation

### 3. **Strong Economics**
- Low CAC (warm intros)
- High LTV (£20K+ lifetime)
- Predictable revenue (annual contracts)
- Sticky product (high switching costs)

### 4. **Mission-Driven**
- Free for vulnerable children
- Social workers love the mission
- Charities want to partner
- Grant funding potential

### 5. **Defensible Position**
- Content reviewed by professionals
- Relationships with LAs
- Therapeutic expertise embedded
- Safeguarding built-in from day 1

---

## 📞 Key Contacts & Resources

### Family Network
- **Partner**: User research, therapeutic review, beta testing
- **Sister (Chief Inspector)**: LA access, pilot program, testimonials
- **Partner's Sister**: Additional social services network

### Technical Resources
- **AI Story Generation**: Claude 3.5 Sonnet
- **Audio**: ElevenLabs (£20/mo)
- **Hosting**: Vercel (free tier)
- **Database**: Neon (free tier)
- **Images**: Midjourney (£10/mo)

### Validation Resources
- **Pilot LA**: Sister's Local Authority
- **Beta Testers**: Partner's colleagues (5-10 social workers)
- **Content Reviewers**: Partner + sister

---

## 🎓 Lessons Learned

### What We Know Now
1. **This is NOT a 90-day sprint** - It's a 12-18 month build (and that's OK)
2. **AI tools solve content bottleneck** - No need for £10K psychologist fees
3. **Family network is the secret weapon** - Warm intros >>> cold outreach
4. **Mission matters** - Free for children = competitive advantage
5. **Slow sales OK** - One LA = £2,500/year with low churn

### What Makes This Different
- NOT trying to be a VC-backed unicorn
- NOT rushing to revenue in 90 days
- NOT bootstrapping alone
- NOT ignoring domain complexity

INSTEAD:
- ✅ Building sustainably with family support
- ✅ Validating properly with real pilot
- ✅ Leveraging insider advantages
- ✅ Using AI to reduce costs
- ✅ Planning for 12-18 month timeline

---

## 🚀 Next Session Checklist

**If starting a new Claude session**, do this:

1. **Read this file first** (PROJECT_CONTEXT.md)
2. **Check current branch**: `claude/autonomous-saas-executor-011CUrVzriSUrT6dvckEoNFF`
3. **Review recent commits**: `git log --oneline -5`
4. **Check deployment status**: Is it live on Vercel yet?
5. **Ask**: "What phase are we in? What's the next priority?"

**Don't assume**:
- ❌ This is a 90-day sprint
- ❌ We need to rush to revenue
- ❌ We're bootstrapping alone
- ❌ Content needs expensive production

**Do understand**:
- ✅ This is a 12-18 month build
- ✅ Family network is key advantage
- ✅ AI tools solve content creation
- ✅ Partner's insight guides everything
- ✅ Mission-driven = strategic advantage

---

## 📊 Current Branch Status

**Branch**: `claude/autonomous-saas-executor-011CUrVzriSUrT6dvckEoNFF`

**Recent Commits**:
```
1800d0c - docs: Add 30-minute quick start guide
b37f746 - feat: Complete professional tools and admin dashboard UI
2bbceb1 - fix: Resolve TypeScript and build configuration errors
```

**Files Changed**: 19 files, 1,630+ lines added

**What's Ready**:
- ✅ All UI components
- ✅ Professional dashboard
- ✅ Admin panel
- ✅ Therapeutic tools
- ⚠️ Database needs connection

**Next Step**: Deploy to Vercel (follow QUICKSTART.md)

---

## 🎯 The Bottom Line

**StoryQuest is a perfect fit for you because**:

1. You have **unfair advantages** (family insider access)
2. You have **realistic timeline** (12-18 months is fine)
3. You have **domain expertise** (partner + sister)
4. You have **built-in pilot** (sister's LA)
5. You have **AI tools** (cheap content)
6. You're building for **someone you love** (partner)

**This isn't a side hustle - it's a mission-driven business with £50-100K ARR potential by Year 3.**

Build it right. Take the time. Leverage your advantages.

---

**Last Updated**: 2025-11-06
**Next Review**: After deployment (Phase 2)
**Owner**: You + Partner
**Timeline**: 12-18 months to first revenue
**Status**: ✅ Foundation complete, ready to deploy

🚀 Let's build something that matters.
