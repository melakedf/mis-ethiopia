import { PhotoCollection } from "./photo-collection";
import { photoCollections } from "@/data/photo-collections";
export function SummerLearningPhotos() {return <PhotoCollection collection={photoCollections.find(c=>c.id==="summer-learning")!} preview/>;}
