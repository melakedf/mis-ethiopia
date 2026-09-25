import { PrismaClient } from "@prisma/client";
import { projects } from "../src/data/projects";
const prisma=new PrismaClient();
async function main(){for(const p of projects){await prisma.project.upsert({where:{slug:p.slug},update:{},create:{title:p.title,slug:p.slug,label:p.status,description:p.body,location:p.location,status:"DRAFT",stats:[{value:p.figure,label:p.unit,qualifier:p.qualifier}],keyOutcomes:[p.period,p.partner],buttonLink:`/projects/${p.slug}`}});}}
main().finally(()=>prisma.$disconnect());
