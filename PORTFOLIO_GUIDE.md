# Product Designer Portfolio - Setup Guide

Your minimalist Product Designer portfolio is ready! This guide will help you customize and deploy your site.

## 🚀 Quick Start

1. **Run the development server:**
   ```bash
   cd "/Users/anchala/Personal Visual Studio Projects/portfolio"
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

2. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## 📝 Customization

### 1. Personal Information

**Update your name and details:**
- `src/app/layout.tsx` - Update metadata (title, description, social links)
- `src/components/layout/Header.tsx` - Change "Your Name" to your actual name
- `src/components/layout/Footer.tsx` - Update social links and name
- `src/data/about.ts` - Update all personal information, bio, skills, experience

### 2. Projects & Case Studies

**Add/Edit your projects:**
- Edit `src/data/projects.ts`
- Each project needs:
  - Basic info (title, subtitle, category, year)
  - Images (thumbnail, hero image)
  - Content (overview, challenge, process, solution, outcomes)

**Example project structure:**
```typescript
{
  id: '1',
  slug: 'your-project-slug',
  title: 'Project Title',
  subtitle: 'Short description',
  category: 'Product', // 'UX' | 'UI' | 'Branding' | 'Product'
  heroImage: '/images/projects/your-project/hero.jpg',
  thumbnail: '/images/projects/your-project/thumbnail.jpg',
  year: 2024,
  // ... rest of the fields
}
```

### 3. Images

**Add your project images:**
1. Place images in `public/images/projects/[project-name]/`
2. Recommended image sizes:
   - Hero images: 1920x1080px (16:9)
   - Thumbnails: 800x600px (4:3)
   - Process images: 1200x800px
3. Use JPG for photos, PNG for UI screenshots
4. Keep images under 500KB for best performance

**Replace placeholder images:**
- Currently, the portfolio shows SVG placeholders
- Replace image paths in `src/data/projects.ts` with your actual image paths
- Update `src/components/sections/ProjectCard.tsx` to use actual images:

```typescript
<Image
  src={project.thumbnail}
  alt={project.title}
  fill
  className="object-cover transition-transform duration-300 group-hover:scale-105"
/>
```

### 4. Contact Form Setup

**Configure email delivery with Resend:**

1. **Sign up for Resend:**
   - Visit [resend.com](https://resend.com)
   - Create a free account (100 emails/day free)

2. **Get your API key:**
   - Go to API Keys in Resend dashboard
   - Create a new API key

3. **Update environment variables:**
   Edit `.env.local`:
   ```bash
   RESEND_API_KEY=re_your_actual_api_key_here
   CONTACT_EMAIL=your-email@example.com
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Verify domain (optional, for production):**
   - In Resend dashboard, add your custom domain
   - Update the `from` address in `src/app/api/contact/route.ts`:
   ```typescript
   from: 'Portfolio Contact <hello@yourdomain.com>'
   ```

### 5. Color Scheme

**Customize colors:**
Edit `src/app/globals.css`:
```css
:root {
  --background: #ffffff;      /* Page background */
  --foreground: #0a0a0a;      /* Text color */
  --muted: #f5f5f5;           /* Subtle backgrounds */
  --muted-foreground: #737373; /* Secondary text */
  --accent: #0a0a0a;          /* Accent color */
  --border: #e5e5e5;          /* Border color */
}
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Product Designer Portfolio"
   git branch -M main
   git remote add origin your-github-repo-url
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Add environment variables in Vercel:**
   - Go to Project Settings → Environment Variables
   - Add:
     - `RESEND_API_KEY`
     - `CONTACT_EMAIL`
     - `NEXT_PUBLIC_SITE_URL` (your production URL)

4. **Deploy:**
   - Click "Deploy"
   - Your site will be live at `your-project.vercel.app`

5. **Add custom domain (optional):**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Alternative: Deploy to Netlify

1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Add environment variables in Site Settings
7. Deploy!

## 🎨 Design Tips

### Adding More Projects
1. Take high-quality screenshots of your work
2. Write compelling case studies focusing on:
   - The problem you solved
   - Your design process
   - Measurable outcomes
3. Use consistent image dimensions
4. Add new projects to `src/data/projects.ts`

### Updating Your Bio
- Keep it concise (2-3 paragraphs)
- Focus on your unique value
- Update skills as you learn new tools
- Add recent experience

### Optimizing Images
```bash
# Install sharp for better image optimization
npm install sharp

# Or use online tools:
# - TinyPNG (tinypng.com)
# - Squoosh (squoosh.app)
```

## 📱 Testing

### Local Testing
```bash
# Run development server
npm run dev

# Test production build locally
npm run build
npm start
```

### Browser Testing
Test your portfolio in:
- Chrome/Edge
- Safari
- Firefox
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Testing
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run audit for:
   - Performance
   - Accessibility
   - Best Practices
   - SEO

Target scores: 90+ in all categories

## 🔧 Troubleshooting

### Contact form not working?
1. Check `.env.local` has correct `RESEND_API_KEY`
2. Verify email in Resend dashboard
3. Check browser console for errors
4. Test API route: `curl -X POST http://localhost:3000/api/contact`

### Images not showing?
1. Verify image paths match file locations
2. Check images are in `public/` directory
3. Restart dev server after adding images
4. Clear browser cache

### Build fails?
1. Run `npm install` to ensure all dependencies are installed
2. Check for TypeScript errors: `npm run build`
3. Fix any errors shown in terminal
4. Delete `.next` folder and rebuild

## 📚 Project Structure

```
portfolio/
├── src/
│   ├── app/              # Pages and routing
│   │   ├── page.tsx      # Home page
│   │   ├── about/        # About page
│   │   ├── work/         # Work gallery & case studies
│   │   ├── contact/      # Contact page
│   │   └── api/contact/  # Email API
│   │
│   ├── components/       # Reusable components
│   │   ├── ui/           # Button, Input, etc.
│   │   ├── layout/       # Header, Footer
│   │   ├── sections/     # Hero, ProjectCard, etc.
│   │   └── animations/   # FadeIn, SlideIn
│   │
│   ├── data/             # Your content
│   │   ├── projects.ts   # Project data
│   │   └── about.ts      # About page content
│   │
│   ├── lib/              # Utilities
│   ├── types/            # TypeScript types
│   └── hooks/            # Custom React hooks
│
└── public/
    └── images/           # Your images
```

## 🎯 Next Steps

1. **Customize content:**
   - Update personal information in `src/data/about.ts`
   - Add your projects in `src/data/projects.ts`
   - Replace placeholder images with your actual work

2. **Set up email:**
   - Create Resend account
   - Add API key to `.env.local`
   - Test contact form

3. **Deploy:**
   - Push to GitHub
   - Deploy to Vercel
   - Add custom domain (optional)

4. **Share:**
   - Add portfolio link to LinkedIn
   - Share on Behance/Dribbble
   - Update resume with portfolio URL

## 💡 Enhancement Ideas

After initial launch, consider adding:
- Blog section for design articles
- Dark mode toggle
- Case study templates for consistency
- Analytics (Vercel Analytics, Plausible, or Google Analytics)
- CMS integration (Sanity, Contentful) for easier content updates
- Resume download functionality
- Testimonials section
- More animations and micro-interactions

## 🆘 Need Help?

- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS:** [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Framer Motion:** [framer.com/motion](https://www.framer.com/motion/)
- **Resend Docs:** [resend.com/docs](https://resend.com/docs)

---

**Good luck with your portfolio! 🚀**
