# Setting Up GitHub Pages

To make the prototype viewable at a live URL, follow these steps:

## Enable GitHub Pages

1. Go to your repository: https://github.com/stephencalvillo-stripe/SBPHome

2. Click on **Settings** (top navigation)

3. In the left sidebar, click **Pages**

4. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select "main"
   - **Folder**: Select "/ (root)"

5. Click **Save**

6. Wait 1-2 minutes for GitHub to build and deploy your site

7. Refresh the Pages settings page - you'll see a message like:
   "Your site is live at https://stephencalvillo-stripe.github.io/SBPHome/"

## Share the Prototype

Once GitHub Pages is enabled, share these links with your team:

- **Live Prototype**: https://stephencalvillo-stripe.github.io/SBPHome/prototype/
- **Repository**: https://github.com/stephencalvillo-stripe/SBPHome
- **Documentation**: https://github.com/stephencalvillo-stripe/SBPHome/blob/main/home-modules-proposal.md

## Making Updates

After enabling GitHub Pages, any time you push changes to the main branch:

```bash
cd "/Users/stephencalvillo/Stripe Home Redesign"
git add .
git commit -m "Your commit message"
git push
```

GitHub Pages will automatically rebuild and deploy within 1-2 minutes.

