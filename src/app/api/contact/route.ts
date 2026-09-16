import { NextResponse } from "next/server";
import { hasDatabase, prisma } from "@/lib/prisma";

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  if (!hasDatabase()) return NextResponse.json({ error: "The contact form is temporarily unavailable." }, { status: 503 });
  const body = await request.json().catch(() => null);
  const firstName = text(body?.firstName, 80);
  const lastName = text(body?.lastName, 80);
  const email = text(body?.email, 200).toLowerCase();
  const phone = text(body?.phone, 40);
  const subject = text(body?.subject, 120);
  const message = text(body?.message, 5000);
  if (!firstName || !lastName || !email.includes("@") || !subject || !message) {
    return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
  }
  await prisma.contactMessage.create({ data: { firstName, lastName, email, phone: phone || null, subject, message } });
  return NextResponse.json({ ok: true }, { status: 201 });
}
