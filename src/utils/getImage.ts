import { imageURLS } from "@/data/imageUrls";

export function getImage() {
	return imageURLS[Math.floor(Math.random() * imageURLS.length)];
}
