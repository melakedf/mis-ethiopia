"use server";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export async function saveReport(f:FormData){
 await requireAdmin();const title=String(f.get("title")||"").trim(),description=String(f.get("description")||"").trim(),fileUrl=String(f.get("fileUrl")||"").trim(),year=Number(f.get("year"));
 if(!title||title.length>200||!description||description.length>3000||!/^\/media\/[a-zA-Z0-9-]+$/.test(fileUrl)||!Number.isInteger(year)||year<1990||year>2100)throw new Error("Provide a title, summary, year and uploaded PDF path.");
 const media=await prisma.media.findFirst({where:{id:fileUrl.split("/").pop(),provider:"database",type:"PDF"}});if(!media)throw new Error("Upload the approved PDF first.");
 const published=f.get("approved")==="on";
 await prisma.$transaction(async tx=>{const r=await tx.report.create({data:{title,slug:crypto.randomUUID(),year,reportType:"Public document",shortDescription:description,fileUrl,status:published?"PUBLISHED":"DRAFT"}});if(published)await tx.siteSetting.create({data:{key:"reviewed-report:"+r.id,value:true}});});
 revalidatePath("/reports");redirect("/admin/reports");
}

export async function setReportStatus(f:FormData){await requireAdmin();const id=String(f.get("id")||"");const publish=f.get("publish")==="yes";await prisma.$transaction(async tx=>{await tx.report.update({where:{id},data:{status:publish?"PUBLISHED":"HIDDEN"}});await tx.siteSetting.upsert({where:{key:"reviewed-report:"+id},create:{key:"reviewed-report:"+id,value:publish},update:{value:publish}});});revalidatePath("/reports");redirect("/admin/reports");}
