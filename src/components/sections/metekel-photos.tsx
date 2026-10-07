import { PhotoCollection } from "./photo-collection";
import { photoCollections } from "@/data/photo-collections";
export function MetekelPhotos() {return <PhotoCollection collection={photoCollections.find(c=>c.id==="metekel")!} preview/>;}
