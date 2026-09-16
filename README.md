# MIS Ethiopia Website

Public website and content-management system for Multi Integrated Support (MIS) Ethiopia.

## Included

- Responsive public website for MIS programs, sponsorship, reports, partners and contact
- Protected `/admin` area with draft/publish workflow
- Editable pages, programs, projects, regions, sponsorship content, stories, partners, reports, news and homepage entries
- Neon/PostgreSQL database through Prisma
- Contact-message inbox
- Cloudinary image and PDF library
- Database-backed featured content and homepage notice

## Local setup

1. Copy `.env.example` to `.env.local` and provide the required values.
2. Run `npm install`.
3. Run `npm run db:generate`.
4. Run `npm run db:deploy`.
5. Run `npm run db:seed`.
6. Run `npm run dev`.

The website is available at `http://localhost:3000` and the admin login at `http://localhost:3000/admin/login`.

## Production settings

Required: `DATABASE_URL`, `DIRECT_URL`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `NEXTAUTH_SECRET`, and `NEXTAUTH_URL`.

For media uploads also add `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET`.

Online donations remain disabled until MIS approves the receiving account, payment processor, receipt procedure, privacy notice and financial-control workflow.
