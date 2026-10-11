"use server";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
export async function uploadMedia(form:FormData){
 await requireAdmin();
 const file=form.get("file"),alt=String(form.get("alt")??"").trim();
 if(!(file instanceof File)||file.size===0||file.size>2*1024*1024||!alt||alt.length>300||form.get("approved")!=="on")throw new Error("Choose a file up to 2 MB, describe it, and confirm approval for public use.");
 const bytes=Buffer.from(await file.arrayBuffer());
 const mime=bytes.subarray(0,3).equals(Buffer.from([255,216,255]))?"image/jpeg":bytes.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10]))?"image/png":bytes.subarray(0,4).toString()==="RIFF"&&bytes.subarray(8,12).toString()==="WEBP"?"image/webp":bytes.subarray(0,5).toString()==="%PDF-"?"application/pdf":null;
 if(!mime)throw new Error("Supported formats: JPEG, PNG, WebP and PDF.");
 await prisma.media.create({data:{fileName:file.name.slice(0,200),url:`data:${mime};base64,${bytes.toString("base64")}`,mimeType:mime,type:mime==="application/pdf"?"PDF":"IMAGE",size:bytes.length,altText:alt,provider:"database"}});
 redirect("/admin/media");
}
