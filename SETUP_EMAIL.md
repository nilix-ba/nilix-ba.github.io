# Email Setup Guide - EmailJS

Your contact form is now connected to send emails via **EmailJS**. Follow these steps to set it up:

## Step 1: Sign Up for EmailJS
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Click "Sign Up Free"
3. Create an account (use your preferred email)

## Step 2: Create an Email Service
1. In EmailJS Dashboard, go to **Email Services** 
2. Click **Add Service**
3. Choose your email provider:
   - **Gmail** (recommended)
   - Outlook/Hotmail
   - Yahoo Mail
   - Custom email service
4. Follow the connection steps
5. Copy the **Service ID** and save it

## Step 3: Create an Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Name it (e.g., "Contact Form")
4. Use this template structure:

```
To Email: {{to_email}}
From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}
```

5. Save and copy the **Template ID**

## Step 4: Get Your Public Key
1. Go to **Account** > **API Keys**
2. Copy your **Public Key**

## Step 5: Add Credentials to Your Project
Edit `.env.local` in your project root:

```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
```

## Step 6: Test the Form
1. Run `npm run dev`
2. Go to your Contact page
3. Fill out and submit the form
4. Check your email inbox for the test message

## Security Notes
- `NEXT_PUBLIC_*` variables are visible in the browser (this is okay for EmailJS)
- Never commit `.env.local` to git (already in .gitignore)
- EmailJS has a free tier with 200 emails/month

## Troubleshooting
- **Form doesn't send**: Check that all three env variables are correctly filled
- **Email not received**: Verify your email template matches the field names in the form
- **CORS errors**: This shouldn't happen with EmailJS; clear browser cache and try again

## Need Help?
- EmailJS Documentation: https://www.emailjs.com/docs/
- Contact template setup: https://www.emailjs.com/docs/template-syntax/
