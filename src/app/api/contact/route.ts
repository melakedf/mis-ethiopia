import { NextRequest, NextResponse } from "next/server";
import { hasDatabase, prisma } from "@/lib/prisma";
import { allowRequest } from "@/lib/rate-limit";
const clean=(v:unknown,max:number)=>typeof v==="string"?v.trim().slice(0,max):"";
export async function POST(request:NextRequest){
 if(!hasDatabase())return NextResponse.json({error:"The form is temporarily unavailable. Please email info@miseth.org."},{status:503});
 if(Number(request.headers.get("content-length")||0)>16000)return NextResponse.json({error:"Message too large."},{status:413});
 const raw=await request.text();
 if(raw.length>16000)return NextResponse.json({error:"Message too large."},{status:413});
 let b;try{b=JSON.parse(raw)}catch{return NextResponse.json({error:"Invalid form."},{status:400});}
 const firstName=clean(b?.firstName,80),lastName=clean(b?.lastName,80),email=clean(b?.email,200),phone=clean(b?.phone,40),subject=clean(b?.subject,120),message=clean(b?.message,5000);
 if(!firstName||!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)||!subject||!message||b?.consent!==true)return NextResponse.json({error:"Please complete the required fields and acknowledge the privacy notice."},{status:400});
 try{if(!await allowRequest("contact",email.toLowerCase(),5,60*60*1000))return NextResponse.json({error:"Too many messages. Please try again later."},{status:429});await prisma.submission.create({data:{kind:"CONTACT",data:{firstName,lastName,email,phone,subject,message,consent:true}}});return NextResponse.json({ok:true});}catch{return NextResponse.json({error:"Your message could not be saved. Please email info@miseth.org."},{status:503});}
}
