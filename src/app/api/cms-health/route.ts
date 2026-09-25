import { NextResponse } from "next/server";
import { hasDatabase, prisma } from "@/lib/prisma";

export async function GET() {
  const config = {
    databaseConfigured: hasDatabase(),
    adminEmailConfigured: Boolean(process.env.ADMIN_EMAIL),
    adminPasswordConfigured: Boolean(process.env.ADMIN_PASSWORD),
    sessionSecretConfigured: Boolean(process.env.NEXTAUTH_SECRET),
  };

  if (!config.databaseConfigured) {
    return NextResponse.json({ ...config, databaseConnected: false });
  }

  try {
    await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json({ ...config, databaseConnected: true });
  } catch {
    return NextResponse.json({ ...config, databaseConnected: false }, { status: 503 });
  }
}
