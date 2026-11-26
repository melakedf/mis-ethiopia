import ContactPage from "./contact-client";
export const metadata={title:"Contact MIS",description:"Contact MIS in Addis Ababa about partnerships, programs and volunteering."};
import { hasDatabase, prisma } from "@/lib/prisma";
export const dynamic = "force-dynamic";
export default async function Contact(){let available=false;if(hasDatabase()){try{await prisma.$queryRaw`SELECT 1`;available=true}catch{}}return <ContactPage formAvailable={available}/>;}
