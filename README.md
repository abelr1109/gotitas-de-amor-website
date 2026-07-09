# Gotitas de Amor Daycare Website

Spanish-first, mobile-friendly daycare website for Gotitas de Amor Daycare in Merrick, NY.

## Files

- `index.html` — main website page
- `styles.css` — all styling
- `script.js` — mobile menu and footer year
- `contact.php` — optional Hostinger PHP contact form handler
- `assets/logo.svg` — simple editable logo placeholder
- `assets/social-card.svg` — social preview image

## Before publishing

1. Replace placeholder gallery/hero areas with real daycare photos.
2. Open `contact.php` and change:

```php
$to = "your-email@example.com";
```

to the real email address that should receive form submissions.

3. Confirm the exact wording you want for licensing and transportation.
4. Add real parent reviews only. Do not invent testimonials.

## Upload to GitHub

From the folder containing these files:

```bash
git init
git add .
git commit -m "Initial Gotitas de Amor website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your GitHub info.

## Deploy on Hostinger with Git

Hostinger's official Git deployment flow is generally:

1. Log in to Hostinger hPanel.
2. Go to **Websites**.
3. Click **Dashboard** next to the website.
4. Go to **Advanced → Git**.
5. Connect GitHub and authorize the repository.
6. Set the branch to `main`.
7. Set the deployment directory to your domain's web root, usually `public_html`.
8. Deploy.

Because this is plain HTML/CSS/JS/PHP, there is no build command required.

## Notes about the contact form

The form posts to `contact.php`. On Hostinger shared hosting, PHP is usually supported, but the `mail()` function may require the domain email/DNS to be configured correctly. If the form does not send, use Hostinger email setup, SMTP, or a form service such as Formspree.

## Editing colors

Open `styles.css` and change the values inside `:root`:

```css
--cream: #fff8ea;
--gold: #f6c96d;
--coral: #f58f7c;
--sage: #88bfa3;
--blue: #8ecae6;
```

## Business info currently used

- Gotitas de Amor Daycare
- 1109 Merrick Ave, Merrick, NY 11566
- (516) 804-6365
- Monday–Friday, 7:00 AM–6:00 PM
- NYS OCFS licensed daycare
- CPR and First-Aid certified staff
- Spanish-first, English-friendly
- Meals/snacks provided
- Transportation available
