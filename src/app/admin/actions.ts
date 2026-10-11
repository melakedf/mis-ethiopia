"use server";
import { compare } from "bcryptjs";
import { allowRequest } from "@/lib/rate-limit";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { clearAdminSession, createAdminSession, requireAdmin } from "@/lib/auth";
import { hasDatabase, prisma } from "@/lib/prisma";
const val=(f:FormData,k:string)=>String(f.get(k)??"").trim();

const publicUrl=(value:string)=>{if(!value)return null;if(value.startsWith("/")&&!value.startsWith("//")&&!value.includes("\\"))return value;try{const u=new URL(value);if(u.protocol==="https:")return value;}catch{}throw new Error("Use a local path or an HTTPS URL");};
const slugify=(s:string)=>s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
const status=(s:string)=>s==="PUBLISHED"?"PUBLISHED" as const:s==="HIDDEN"?"HIDDEN" as const:"DRAFT" as const;
export async function loginAction(f:FormData){
 const email=val(f,"email").toLowerCase(),password=String(f.get("password")??"");
 if(!hasDatabase()||!process.env.NEXTAUTH_SECRET)redirect("/admin/login?error=unavailable");
 let accepted=false;
 try {
  if(email.length<=254&&password.length<=256&&await allowRequest("login",email,5,15*60*1000)){
   const user=await prisma.user.findUnique({where:{email}});
   accepted=Boolean(user?.role==="ADMIN"&&await compare(password,user.passwordHash));
  }
 }catch{redirect("/admin/login?error=unavailable");}
 if(!accepted)redirect("/admin/login?error=1");
 await createAdminSession(email);redirect("/admin");
}
export async function logoutAction(){await clearAdminSession();redirect("/admin/login");}
export async function saveProgramAction(f:FormData){await requireAdmin();if(!hasDatabase())throw new Error("Database not configured");const id=val(f,"id"),title=val(f,"title"),slug=slugify(val(f,"slug")||title);const data={title,slug,shortDescription:val(f,"shortDescription"),fullDescription:val(f,"fullDescription")||null,category:val(f,"category")||null,featuredImage:publicUrl(val(f,"featuredImage")),buttonText:val(f,"buttonText")||"Learn More",buttonLink:publicUrl(val(f,"buttonLink")),displayOrder:Number(val(f,"displayOrder"))||0,showOnHomepage:f.get("showOnHomepage")==="on",status:status(val(f,"status"))};if(id)await prisma.program.update({where:{id},data});else await prisma.program.create({data});revalidatePath("/");revalidatePath("/programs");redirect("/admin?tab=programs");}
export async function saveProjectAction(f:FormData){await requireAdmin();if(!hasDatabase())throw new Error("Database not configured");const id=val(f,"id"),title=val(f,"title"),slug=slugify(val(f,"slug")||title);const data={label:val(f,"label")||null,title,slug,description:val(f,"description"),location:val(f,"location")||null,image:publicUrl(val(f,"image")),buttonText:val(f,"buttonText")||"Learn More",buttonLink:publicUrl(val(f,"buttonLink")),featured:f.get("featured")==="on",displayOrder:Number(val(f,"displayOrder"))||0,status:status(val(f,"status"))};if(id)await prisma.project.update({where:{id},data});else await prisma.project.create({data});revalidatePath("/");revalidatePath("/news");revalidatePath("/content/project/[slug]","page");redirect("/admin?tab=projects");}
export async function saveSettingAction(f:FormData){await requireAdmin();if(!hasDatabase())throw new Error("Database not configured");const key=val(f,"key"),raw=val(f,"value");if(key.startsWith("rate:"))throw new Error("Reserved setting");let parsed:unknown;try{parsed=JSON.parse(raw)}catch{throw new Error("Setting must be valid JSON")}await prisma.siteSetting.upsert({where:{key},update:{value:parsed as object},create:{key,value:parsed as object}});revalidatePath("/");redirect("/admin?tab=settings");}