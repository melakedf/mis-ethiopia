import { NextRequest, NextResponse } from "next/server";
import { hasDatabase, prisma } from "@/lib/prisma";
const clean=(v:unknown,max:number)=>typeof v==="string"?v.trim().slice(0,max):"";
export async function POST(request:NextRequest){
 if(!hasDatabase())return NextResponse.json({error:"The form is temporarily unavailable. Please email info@miseth.org."},{status:503});
 const b=await request.json().catch(()=>null);
 const firstName=clean(b?.firstName,80),lastName=clean(b?.lastName,80),email=clean(b?.email,200),phone=clean(b?.phone,40),subject=clean(b?.subject,120),message=clean(b?.message,5000);
 if(!firstName||!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)||!subject||!message||b?.consent!==true)return NextResponse.json({error:"Please complete the required fields and acknowledge the privacy notice."},{status:400});
 try{await prisma.submission.create({data:{kind:"CONTACT",data:{firstName,lastName,email,phone,subject,message,consent:true}}});return NextResponse.json({ok:true});}catch{return NextResponse.json({error:"Your message could not be saved. Please email info@miseth.org."},{status:503});}
}
