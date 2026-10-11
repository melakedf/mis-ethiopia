import { hasDatabase, prisma } from "@/lib/prisma";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const COOKIE_NAME="mis_admin_session";
function secret(){ const v=process.env.NEXTAUTH_SECRET; if(!v) throw new Error("NEXTAUTH_SECRET is not configured"); return new TextEncoder().encode(v); }
export async function createAdminSession(email:string){ const token=await new SignJWT({email,role:"admin"}).setProtectedHeader({alg:"HS256"}).setIssuedAt().setExpirationTime("12h").sign(secret()); (await cookies()).set(COOKIE_NAME,token,{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"lax",path:"/",maxAge:43200}); }
export async function clearAdminSession(){ (await cookies()).delete(COOKIE_NAME); }
export async function getAdminSession(){ const token=(await cookies()).get(COOKIE_NAME)?.value; if(!token) return null; try{ const {payload}=await jwtVerify(token,secret()); if(payload.role!=="admin"||typeof payload.email!=="string"||!hasDatabase())return null; const user=await prisma.user.findUnique({where:{email:payload.email},select:{role:true}});return user?.role==="ADMIN"?payload:null; }catch{return null;} }
export async function requireAdmin(){ const s=await getAdminSession(); if(!s) redirect("/admin/login"); return s; }