import { Hero } from "@/components/sections/hero";
import { GalleryExplorer } from "@/components/sections/gallery-explorer";
export const metadata={title:"Project photo gallery",description:"Original MIS photographs from education, sponsorship, social inclusion and emergency-response projects."};
export default function Gallery(){return <><Hero title="Our work, in focus." subtitle="MIS photo collections" description="Explore original project photographs by activity and year. Select a photo to view the complete image." compact ctaText="Browse photos" ctaHref="#gallery" ctaSecondaryText="Project portfolio" ctaSecondaryHref="/projects"/><section id="gallery" className="site-section"><div className="site-wrap"><GalleryExplorer/></div></section></>;}
