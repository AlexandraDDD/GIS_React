import { markerObject } from "../models/markerObject";

export const markers: markerObject[] = [
    {
        name:"1",
        coordinates:[59.939, 30.316],
    },
    {
        name:"2",
        coordinates:[59.959, 30.336],
    }
];

export const getMarkerObjects = (): markerObject[] => {
    return markers;
};