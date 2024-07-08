import { markerObject } from "../models/markerObject";

export const markers: markerObject[] = [
  {
    name: "Marker 1",
    type: "ADM",
    coordinates: [59.939, 30.316],
  },
  {
    name: "Marker 2",
    type: "BLDG",
    coordinates: [59.959, 30.336],
  },
];

export const getMarkerObjects = (): markerObject[] => {
  return markers;
};