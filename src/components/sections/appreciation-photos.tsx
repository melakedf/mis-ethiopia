import { PhotoCollection } from "./photo-collection";
import { photoCollections } from "@/data/photo-collections";
export function AppreciationPhotos() {return <PhotoCollection collection={photoCollections.find(c=>c.id==="appreciation")!} preview/>;}
