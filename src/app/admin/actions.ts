"use server";

import { createHash, timingSafeEqual } from "node:crypto";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { clearAdminSession, createAdminSession, requireAdmin } from "@/lib/auth";
import { hasDatabase, prisma } from "@/lib/prisma";

function sameValue(value: string, expected: string) {
  const a = Buffer.from(value);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

function value(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

export async function loginAction(formData: FormData) {
  const email = value(formData, "email").toLowerCase();
  const password = value(formData, "password");
  const expectedEmail = process.env.ADMIN_EMAIL?.toLowerCase() ?? "";
  const expectedPassword = process.env.ADMIN_PASSWORD ?? "";
  if (!expectedEmail || !expectedPassword || !sameValue(email, expectedEmail) || !sameValue(password, expectedPassword)) {
    redirect("/admin/login?error=1");
  }
  await createAdminSession(email);
  redirect("/admin");
}

export async function logoutAction() {
  await clearAdminSession();
  redirect("/admin/login");
}

export async function saveContentAction(formData: FormData) {
  await requireAdmin();
  if (!hasDatabase()) throw new Error("Database is not configured");
  const id = value(formData, "id");
  const status = value(formData, "status") === "PUBLISHED" ? "PUBLISHED" : "DRAFT";
  const data = {
    type: value(formData, "type") || "page",
    title: value(formData, "title"),
    slug: value(formData, "slug").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    summary: value(formData, "summary") || null,
    body: value(formData, "body") || null,
    imageUrl: value(formData, "imageUrl") || null,
    documentUrl: value(formData, "documentUrl") || null,
    location: value(formData, "location") || null,
    featured: formData.get("featured") === "on",
    sortOrder: Number(value(formData, "sortOrder")) || 0,
    status,
    publishedAt: status === "PUBLISHED" ? new Date() : null,
  } as const;
  if (!data.title || !data.slug) throw new Error("Title and slug are required");
  if (id) await prisma.contentEntry.update({ where: { id }, data });
  else await prisma.contentEntry.create({ data });
  revalidatePath("/");
  revalidatePath("/admin");
  redirect("/admin?type=" + encodeURIComponent(data.type));
}

export async function deleteContentAction(formData: FormData) {
  await requireAdmin();
  if (!hasDatabase()) throw new Error("Database is not configured");
  const id = value(formData, "id");
  if (id) await prisma.contentEntry.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function saveSettingAction(formData: FormData) {
  await requireAdmin();
  if (!hasDatabase()) throw new Error("Database is not configured");
  const key = value(formData, "key");
  const settingValue = value(formData, "value");
  if (!key) throw new Error("Setting key is required");
  await prisma.siteSetting.upsert({ where: { key }, update: { value: settingValue }, create: { key, value: settingValue } });
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function markMessageReadAction(formData: FormData) {
  await requireAdmin();
  if (!hasDatabase()) return;
  const id = value(formData, "id");
  if (id) await prisma.contactMessage.update({ where: { id }, data: { isRead: true } });
  revalidatePath("/admin");
}

export async function uploadMediaAction(formData: FormData) {
  await requireAdmin();
  if (!hasDatabase()) throw new Error("Database is not configured");
  const file = formData.get("file");
  if (!(file instanceof File) || file.size === 0) throw new Error("Choose a file to upload");
  if (file.size > 12 * 1024 * 1024) throw new Error("File must be smaller than 12 MB");
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  if (!cloudName || !apiKey || !apiSecret) throw new Error("Cloudinary is not configured");
  const timestamp = Math.floor(Date.now() / 1000);
  const folder = "mis-ethiopia";
  const signature = createHash("sha1").update(`folder=${folder}&timestamp=${timestamp}${apiSecret}`).digest("hex");
  const upload = new FormData();
  upload.set("file", file);
  upload.set("api_key", apiKey);
  upload.set("timestamp", String(timestamp));
  upload.set("folder", folder);
  upload.set("signature", signature);
  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, { method: "POST", body: upload });
  if (!response.ok) throw new Error("Media upload failed");
  const result = await response.json();
  await prisma.mediaAsset.create({ data: { title: value(formData, "title") || file.name, url: result.secure_url, publicId: result.public_id, mimeType: file.type || result.resource_type, altText: value(formData, "altText") || null } });
  revalidatePath("/admin");
  redirect("/admin#media");
}
