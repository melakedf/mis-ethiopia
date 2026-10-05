// Replace src with a local /images/... path, write a factual alt, and set placeholder:false
// after the corresponding MIS photograph has been approved for public use.
export const mediaLibrary = {
  summerClassroom: { src: "/images/summer-2026-classroom.jpg", alt: "Summer Scholars taking part in classroom activities with teaching support", placeholder: false },
  appreciation: { src: "/images/sponsor-appreciation-community.jpg", alt: "Children and families at the MIS and IGO Sponsor Appreciation Day gathering", placeholder: false, fit: "contain" as const },
  summerGroup: { src: "/images/summer-2026-scholars-certificates.jpg", alt: "Summer Scholars holding completion certificates with families and the program team", placeholder: false, fit: "contain" as const },
  summerCelebration: { src: "/images/summer-2026-scholars-celebration.jpg", alt: "Summer Scholars celebrating around a cake between MIS and IGO banners", placeholder: false },
  summerFamilies: { src: "/images/summer-2026-families-ceremony.jpg", alt: "Children and family members gathered for the Summer Scholars completion ceremony", placeholder: false },
  summerTeacher: { src: "/images/summer-2026-teacher-appreciation.jpg", alt: "An appreciation certificate presented during the Summer Scholars celebration", placeholder: false, fit: "contain" as const },
  community: { src: "/images/community-placeholder.webp", alt: "Temporary stock photograph for the community project image space", placeholder: true },
  education: { src: "/images/education-placeholder.webp", alt: "Temporary stock photograph for the education project image space", placeholder: true },
  support: { src: "/images/support-placeholder.webp", alt: "Temporary stock photograph for the community support image space", placeholder: true },
};
export type MediaItem = {src: string; alt: string; placeholder: boolean; fit?: "contain" | "cover"};
export const projectMedia: Record<string, MediaItem> = {
 "integrated-child-protection": mediaLibrary.appreciation,
 "sponsor-appreciation-day": mediaLibrary.appreciation,
 "kolfe-summer-school": mediaLibrary.summerGroup,
 "summer-scholars-opening": mediaLibrary.summerClassroom,
 "fenote-selam-child-protection": mediaLibrary.education,
 "student-led-school-sanitation-hygiene": mediaLibrary.education,
 "urban-destitute-support": mediaLibrary.support,
};
export function getProjectMedia(slug: string): MediaItem { return projectMedia[slug] || mediaLibrary.support; }

export const summerPhotos = [
  { media: mediaLibrary.summerGroup, width: 1536, height: 774, caption: "Summer Scholars celebrate completion with their certificates, families and the program team." },
  { media: mediaLibrary.summerCelebration, width: 1536, height: 1152, caption: "A shared cake marks the completion of the six-week IGO–MIS summer program." },
  { media: mediaLibrary.summerFamilies, width: 1536, height: 906, caption: "Children and families come together for the completion ceremony." },
  { media: mediaLibrary.summerTeacher, width: 1536, height: 1536, caption: "Appreciation certificates recognize the contribution of teachers and volunteers." },
];
