import { prisma, hasDatabase } from "@/lib/prisma";
export async function getHomepagePrograms(){
 if(!hasDatabase()) return [];
 try { return await prisma.program.findMany({where:{status:"PUBLISHED",showOnHomepage:true},orderBy:[{displayOrder:"asc"},{title:"asc"}],take:6,select:{title:true,shortDescription:true,slug:true}}); }
 catch { return []; }
}