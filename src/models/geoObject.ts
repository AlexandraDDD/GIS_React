import { GeoInfo } from "./geoInfo";
import { Polygon } from "./polygon";

export interface GeoObject {
	type: string;
	name: string;
	geoInfo?: GeoInfo;
	id: number;
	polygon: Polygon;
	properties: object;
	GeoObjects?: GeoObject[];
}