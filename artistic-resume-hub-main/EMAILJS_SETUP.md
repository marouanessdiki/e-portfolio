# EmailJS Setup Guide for Contact Form

Your contact form is now fully configured to work with EmailJS! Follow these simple steps to make it functional:

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** and create a free account
3. Verify your email address

## Step 2: Set Up Email Service

1. After logging in, go to **"Email Services"** in the dashboard
2. Click **"Add New Service"**
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. For **Gmail**:
   - Click "Connect Account"
   - Sign in with your Gmail (use: marouanessdiki@gmail.com)
   - Allow EmailJS to access your account
5. Your **Service ID** will be shown - **copy it** (looks like: `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template content:

**Template Name:** Portfolio Contact Form

**Subject:** New Portfolio Contact from {{from_name}}

**Content:**
```
Hello Marouane,

You have received a new message from your portfolio website!

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Save the template
5. Your **Template ID** will be shown - **copy it** (looks like: `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **"Account"** tab in the dashboard
2. Find **"API Keys"** section
3. Copy your **Public Key** (looks like: `xxxxxxxxxxxxxx`)

## Step 5: Configure Your Project

1. In your project root, create a `.env` file:
   ```bash
   # Create the file
   touch .env
   ```

2. Add your EmailJS credentials to the `.env` file:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxx
   ```

3. **IMPORTANT:** Make sure `.env` is in your `.gitignore` file (it should be by default)

## Step 6: Test Your Contact Form

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Open your portfolio in the browser
3. Scroll to the Contact section
4. Fill out the form with test data
5. Click "Send Message"
6. You should receive an email at marouanessdiki@gmail.com!

## Troubleshooting

### Error: "Failed to send message"
- Check that all three credentials are correct in your `.env` file
- Make sure you restarted the dev server after creating `.env`
- Verify your EmailJS account is verified

### Not receiving emails?
- Check your spam folder
- Verify the email service is connected in EmailJS dashboard
- Make sure the template is saved and active

### Environment variables not working?
- File must be named exactly `.env` (not `.env.txt`)
- Must be in the project root directory
- Must restart dev server after changes

## Free Tier Limits

- **200 emails/month** free
- Perfect for a portfolio website
- Upgrade available if needed

## Security Notes

- Never commit your `.env` file to GitHub
- The `.env.example` file shows the format but uses placeholder values
- Your actual credentials are safe in the `.env` file

## Alternative: Hardcode Credentials (Not Recommended)

If you're having trouble with environment variables, you can temporarily hardcode them in `Contact.tsx`:

```typescript
const SERVICE_ID = "service_xxxxxxx";
const TEMPLATE_ID = "template_xxxxxxx";
const PUBLIC_KEY = "xxxxxxxxxxxxxx";
```

**Note:** This is not recommended for production, especially if you're pushing to a public GitHub repo.

---

## Next Steps After Setup

Once configured, your contact form will:
- ✅ Send real emails to your Gmail
- ✅ Show success/error notifications
- ✅ Clear the form after successful submission
- ✅ Display proper loading states
- ✅ Work in both English and French

Good luck! 🚀
