// Replace src with a local /images/... path, write a factual alt, and set placeholder:false
// after the corresponding MIS photograph has been approved for public use.
export const mediaLibrary = {
  community: { src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&auto=format&fit=crop&q=80", alt: "Temporary stock photograph for the community project image space", placeholder: true },
  education: { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&auto=format&fit=crop&q=80", alt: "Temporary stock photograph for the education project image space", placeholder: true },
  support: { src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&auto=format&fit=crop&q=80", alt: "Temporary stock photograph for the community support image space", placeholder: true },
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
