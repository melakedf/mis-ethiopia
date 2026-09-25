import ContactPage from "./contact-client";
export const metadata={title:"Contact MIS",description:"Contact MIS in Addis Ababa about partnerships, programs and volunteering."};
export default function Contact(){return <ContactPage formAvailable={Boolean(process.env.DATABASE_URL)}/>;}
