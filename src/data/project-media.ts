// Replace src with a local /images/... path, write a factual alt, and set placeholder:false
// after the corresponding MIS photograph has been approved for public use.
export const mediaLibrary = {
  community: { src: "/images/community-placeholder.webp", alt: "Temporary stock photograph for the community project image space", placeholder: true },
  education: { src: "/images/education-placeholder.webp", alt: "Temporary stock photograph for the education project image space", placeholder: true },
  support: { src: "/images/support-placeholder.webp", alt: "Temporary stock photograph for the community support image space", placeholder: true },
};
export type MediaItem = {src: string; alt: string; placeholder: boolean};
export const projectMedia: Record<string, MediaItem> = {
 "integrated-child-protection": mediaLibrary.community,
 "kolfe-summer-school": mediaLibrary.education,
 "fenote-selam-child-protection": mediaLibrary.education,
 "school-education-hygiene": mediaLibrary.education,
 "urban-destitute-support": mediaLibrary.support,
};
export function getProjectMedia(slug: string): MediaItem { return projectMedia[slug] || mediaLibrary.support; }
