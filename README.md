This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Overview

This is a starter template using the following stack:

- Framework - [Next.js 14](https://nextjs.org/)
- Language - [TypeScript](https://www.typescriptlang.org)
- Auth - [Auth.js](https://authjs.dev)
- Database - [Postgres](https://vercel.com/postgres)
- Deployment - [Vercel](https://vercel.com/docs/concepts/next.js/overview)
- Styling - [Tailwind CSS](https://tailwindcss.com)
- Components - [Shadcn UI](https://ui.shadcn.com/)
- Analytics - [Vercel Analytics](https://vercel.com/analytics)
- Formatting - [Prettier](https://prettier.io)

## Getting Started

** Data access is connected to the local postgres database.

First, install the pg module:
```bash
yarn add pg
# or
npm install pg
```
Step 2, install '@types/pg'
```bash
npm install --save-dev @types/pg
# or
yarn add --dev @types/pg

```
Create a new Local Postgres database and excute the clients.sql file.

install 'tailwind-merge' to merge the tailwind.config.js files
```bash
npm install tailwind-merge
# or
yarn add tailwind-merge
```
install 'clsx' to merge the tailwind.config.js files
```bash
npm install clsx
# or
yarn add clsx
```
install class-variance-authority 
```bash
npm install class-variance-authority
# or
yarn add class-variance-authority
```
install @radix-ui/react-slot module 
```bash
npm install @radix-ui/react-slot
# or
yarn add @radix-ui/react-slot
```
install @vercel/analytics 
```bash
npm install @vercel/analytics
# or
yarn add @vercel/analytics
```
Run the development server:
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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
