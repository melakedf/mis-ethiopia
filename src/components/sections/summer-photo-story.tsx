import { PhotoCollection } from "./photo-collection";
import { photoCollections } from "@/data/photo-collections";
export function SummerPhotoStory() {return <PhotoCollection collection={photoCollections.find(c=>c.id==="summer-completion")!} preview/>;}
