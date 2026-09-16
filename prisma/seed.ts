import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const entries = [
  {
    type: "project",
    slug: "child-sponsorship-nurturing-nourishment",
    title: "Child Sponsorship, Nurturing and Nourishment Project",
    summary: "Education, nutrition, psychosocial and family support for vulnerable children in Addis Ababa, implemented with the Institute for Global Outreach.",
    location: "Kolfe Keranyo, Addis Ababa",
    status: "PUBLISHED" as const,
    featured: true,
    sortOrder: 1,
  },
  {
    type: "project",
    slug: "humanitarian-nfi-response-benishangul-gumuz",
    title: "Humanitarian NFI Response",
    summary: "Emergency non-food-item assistance delivered with IMO for displacement-affected households in Benishangul-Gumuz.",
    location: "Benishangul-Gumuz",
    status: "PUBLISHED" as const,
    featured: true,
    sortOrder: 2,
  },
  {
    type: "program",
    slug: "education-child-protection",
    title: "Education and Child Protection",
    summary: "School follow-up, learning support, safeguarding, psychosocial care and family engagement for vulnerable children.",
    status: "PUBLISHED" as const,
    sortOrder: 1,
  },
  {
    type: "program",
    slug: "humanitarian-response",
    title: "Humanitarian Response",
    summary: "Locally led emergency support including non-food items, shelter-related assistance and protection-sensitive delivery.",
    status: "PUBLISHED" as const,
    sortOrder: 2,
  },
];

async function main() {
  for (const entry of entries) {
    await prisma.contentEntry.upsert({
      where: { type_slug: { type: entry.type, slug: entry.slug } },
      update: entry,
      create: { ...entry, publishedAt: new Date() },
    });
  }
  await prisma.siteSetting.upsert({
    where: { key: "homepage_notice" },
    update: {},
    create: { key: "homepage_notice", value: "" },
  });
}

main()
  .finally(async () => prisma.$disconnect());
