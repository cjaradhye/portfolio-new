# Email Setup Guide

This portfolio uses Formspree to send contact form messages directly to your email address.

## Setup Instructions (Formspree - Recommended)

1. **Sign up for Formspree**:
   - Go to [Formspree](https://formspree.io/) and create a free account
   - The free plan allows 50 submissions per month

2. **Create a New Form**:
   - In your Formspree dashboard, click "New Form"
   - Give it a name like "Portfolio Contact Form"
   - Copy the form endpoint URL (it will look like: `https://formspree.io/f/xaybcdjk`)

3. **Configure Email Settings**:
   - In the form settings, set your email address: `aradhye.swarup@gmail.com`
   - You can customize the email template and subject line
   - Enable spam protection if needed

4. **Add to Your Project**:
   - Create a `.env` file in the root directory:
   ```env
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
   ```

## How it Works

- When someone submits the contact form, Formspree sends an email to `aradhye.swarup@gmail.com`
- The email includes the sender's name, email, and message
- The form shows loading, success, and error states
- No backend required - Formspree handles everything
- Built-in spam protection and email validation

## Benefits of Formspree

- ✅ No API keys needed
- ✅ No complex setup
- ✅ Built-in spam protection
- ✅ Email validation
- ✅ Customizable email templates
- ✅ Works immediately after setup
- ✅ Free tier available

## Alternative: EmailJS

If you prefer more control over email templates, you can use EmailJS instead:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Get your API keys
4. Update the environment variables

The current implementation uses Formspree as it's the simplest solution for most use cases. 