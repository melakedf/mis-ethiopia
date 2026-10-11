import { createHash, randomUUID } from "node:crypto";
import { prisma } from "@/lib/prisma";
// Fixed windows stored atomically in Postgres, shared across server instances.
export async function allowRequest(scope: string, identity: string, limit: number, windowMs: number) {
 const key = "rate:" + scope + ":" + createHash("sha256").update(identity).digest("hex");
 const now = Date.now();
 const rows = await prisma.$queryRaw<{value:{count:number}}[]>`
 INSERT INTO "SiteSetting" (id,key,value,"createdAt","updatedAt")
 VALUES (${randomUUID()},${key},jsonb_build_object('count',1,'until',${now+windowMs}::bigint),NOW(),NOW())
 ON CONFLICT (key) DO UPDATE SET value = CASE
 WHEN ("SiteSetting".value->>'until')::bigint <= ${now}::bigint
 THEN jsonb_build_object('count',1,'until',${now+windowMs}::bigint)
 ELSE jsonb_set("SiteSetting".value,'{count}',to_jsonb(("SiteSetting".value->>'count')::int+1)) END,
 "updatedAt"=NOW() RETURNING value`;
 return rows[0].value.count <= limit;
}
