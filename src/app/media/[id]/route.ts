import { prisma,hasDatabase } from "@/lib/prisma";
export async function GET(_request:Request,{params}:{params:Promise<{id:string}>}){
 if(!hasDatabase())return new Response("Unavailable",{status:503});
 const {id}=await params;
 const item=await prisma.media.findFirst({where:{id,provider:"database"}});
 if(!item||!item.url.startsWith("data:"))return new Response("Not found",{status:404});
 const bytes=Buffer.from(item.url.slice(item.url.indexOf(",")+1),"base64");
 return new Response(bytes,{headers:{"Content-Type":item.mimeType,"Content-Length":String(bytes.length),"X-Content-Type-Options":"nosniff","Cache-Control":"public, max-age=86400","Content-Disposition":item.type==="PDF"?'attachment; filename="mis-document.pdf"':"inline"}});
}
