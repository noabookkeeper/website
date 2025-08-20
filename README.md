This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### 1. Environment Setup

Copy the environment variables template and configure your API keys:

```bash
cp .env.local .env.local.example
```

Then edit `.env.local` and add your Resend API key:

```env
RESEND_API_KEY=your_actual_resend_api_key_here
```

**Getting a Resend API Key:**
1. Sign up at [Resend](https://resend.com)
2. Go to [API Keys](https://resend.com/api-keys)
3. Create a new API key
4. Copy it to your `.env.local` file

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Run the Development Server

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Features

### Contact Form
The contact form is fully functional and uses:
- **Resend** for email delivery
- **Server Actions** for form submission
- **Email destination**: noabookkeeper@gmail.com
- **GDPR compliant** with consent checkbox
- **Real-time validation** and error handling
- **Loading states** during submission

When a user submits the contact form, an email is automatically sent to `noabookkeeper@gmail.com` with the user's contact details and message.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
