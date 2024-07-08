import { LatLngTuple } from "leaflet";
export interface markerObject {
    name: string;
    type: string;
    coordinates: LatLngTuple;
}