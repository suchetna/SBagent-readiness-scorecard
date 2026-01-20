# Deployment Guide

This guide walks you through deploying the Agent Readiness Scorecard to various platforms.

## GitHub Pages (Easiest)

### Step 1: Create Repository
1. Create a new repository on GitHub named `agent-readiness-scorecard`
2. Upload all files from this project
3. Commit and push

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **main** branch
4. Click **Save**
5. Your site will be live at: `https://yourusername.github.io/agent-readiness-scorecard/`

### Step 3: Custom Domain (Optional)
1. Add a `CNAME` file to your repository with your domain name
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

---

## Netlify

### Quick Deploy
1. Sign up at [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Build settings:
   - Build command: (leave empty)
   - Publish directory: `/` (root)
5. Click "Deploy site"

### Custom Domain
1. Go to Site settings → Domain management
2. Add custom domain
3. Configure DNS as instructed

---

## Vercel

### Quick Deploy
1. Sign up at [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Framework Preset: **Other**
5. Build settings:
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
6. Click "Deploy"

---

## Self-Hosted (Apache/Nginx)

### Requirements
- Web server (Apache, Nginx, or similar)
- No PHP, database, or backend needed

### Apache
1. Upload files to your web root (e.g., `/var/www/html/scorecard/`)
2. Ensure `.htaccess` allows file access (if using one)
3. Access via `https://yourdomain.com/scorecard/`

### Nginx
1. Upload files to your web root (e.g., `/usr/share/nginx/html/scorecard/`)
2. Configure nginx.conf if needed:
```nginx
location /scorecard {
    try_files $uri $uri/ /scorecard/index.html;
}
```
3. Reload nginx: `sudo systemctl reload nginx`

---

## Content Delivery Network (CDN)

### Cloudflare Pages
1. Log into Cloudflare
2. Go to Pages → Create a project
3. Connect to GitHub repository
4. Deploy with default settings
5. Site will be live on `*.pages.dev` subdomain

### AWS S3 + CloudFront
1. Create S3 bucket with public read access
2. Enable static website hosting
3. Upload all files
4. Create CloudFront distribution pointing to S3
5. Configure custom domain if needed

---

## Testing Locally

### Simple Python Server
```bash
cd agent-readiness-scorecard
python3 -m http.server 8000
```
Visit: `http://localhost:8000`

### Node.js http-server
```bash
npx http-server -p 8000
```
Visit: `http://localhost:8000`

---

## Environment-Specific Customizations

### Development
- Add console logging to `script.js` for debugging
- Enable source maps if you add a build process

### Production
- Minify CSS and JS (optional)
- Add analytics tracking code to `index.html`
- Configure caching headers for better performance
- Enable HTTPS (required for GitHub Pages, automatic on Netlify/Vercel)

---

## Post-Deployment Checklist

- [ ] Test scorecard functionality (check/uncheck boxes)
- [ ] Verify mobile responsiveness
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Check page load speed (should be <1 second)
- [ ] Verify CTA button links to correct destination
- [ ] Test accessibility with screen reader
- [ ] Add to Google Search Console (optional)
- [ ] Set up uptime monitoring (optional)

---

## Troubleshooting

### Styles not loading
- Check file paths are relative (no leading `/`)
- Ensure `style.css` and `script.js` are in same directory as `index.html`

### JavaScript not working
- Open browser console (F12) to check for errors
- Verify `script.js` is loading (Network tab)
- Check for syntax errors

### GitHub Pages 404
- Ensure branch is set correctly (usually `main` or `gh-pages`)
- Check that `index.html` is in repository root
- Wait up to 10 minutes for first deployment

---

## Performance Optimization

### Optional Enhancements
1. **Minify files**:
   - Use online tools or build process to minify CSS/JS
   - Reduces file size by ~30-40%

2. **Add meta tags** (already in index.html):
   ```html
   <meta name="description" content="...">
   <meta name="keywords" content="...">
   ```

3. **Enable compression**:
   - Gzip/Brotli compression (automatic on most platforms)

4. **Add favicon**:
   ```html
   <link rel="icon" type="image/png" href="favicon.png">
   ```

---

## Support

Having issues? Check:
1. Browser console for errors
2. File paths and permissions
3. Platform-specific documentation
4. Open an issue on GitHub

Happy deploying! 🚀