import Image from "next/image";
const photos = [
  { alt: "Campaign participants standing beside a 16 Days of Activism banner in Bambasi", caption: "Coming together for the 16 Days of Activism against Gender-Based Violence." },
  { alt: "Participants gathered around boxes of supplies during the Bambasi activity", caption: "Practical assistance alongside community advocacy." },
  { alt: "A community member taking part in the Bambasi gathering", caption: "A moment from the community gathering." },
  { alt: "A participant holding a campaign frame in front of the MIS banner", caption: "Sharing the campaign’s message of inclusion." },
  { alt: "Community members and campaign participants beside boxes of supplies", caption: "Staff-contributed supplies supported the distribution activity." },
  { alt: "Participants gathered beside supplies at the Bambasi event", caption: "Solidarity with communities displaced from Mao Komo." },
];
export function BambasiPhotos() {
  return <section className="mt-12" aria-labelledby="bambasi-photos-title">
    <p className="giving-kicker">From the field · 2023</p>
    <h2 id="bambasi-photos-title" className="section-title">Inclusion and solidarity in action.</h2>
    <div className="mt-8 grid items-start gap-6 md:grid-cols-2">{photos.map((photo, index) => <figure key={photo.alt} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <Image src={`/images/bambasi-${index + 1}.jpg`} alt={photo.alt} width={1536} height={1024} sizes="(max-width: 768px) 100vw, 50vw" className="h-auto w-full" />
      <figcaption className="p-5 text-sm leading-7 text-slate-600">{photo.caption}</figcaption>
    </figure>)}</div>
  </section>;
}
