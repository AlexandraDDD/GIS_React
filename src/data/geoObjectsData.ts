import { GeoObject } from "../models/geoObject";

// Массив GeoObjects
export const geoObjects: GeoObject[] = [
  {
    type: "BLDG",
    name: "Polygon 1",
    id: 1,
    polygon: {
      id: "1",
      points: [
        { id: "1", coordinates: [59.939, 30.316] },
        { id: "2", coordinates: [59.939, 30.32] },
        { id: "3", coordinates: [59.943, 30.32] },
        { id: "4", coordinates: [59.943, 30.316] },
      ],
      selected: false,
    },
    properties: {},
  },
  {
    type: "ADM",
    name: "Polygon 2",
    id: 2,
    polygon: {
      id: "2",
      points: [
        { id: "1", coordinates: [59.937, 30.318] },
        { id: "2", coordinates: [59.937, 30.322] },
        { id: "3", coordinates: [59.941, 30.322] },
        { id: "4", coordinates: [59.941, 30.318] },
      ],
      selected: false,
    },
    properties: {},
  },
  {
    type: "ADM",
    name: "Polygon 3",
    id: 3,
    polygon: {
      id: "3",
      points: [
        { id: "1", coordinates: [59.949, 30.326] },
        { id: "2", coordinates: [59.949, 30.33] },
        { id: "3", coordinates: [59.953, 30.33] },
        { id: "4", coordinates: [59.953, 30.326] },
      ],
      selected: false,
    },
    properties: {},
  },
  {
    type: "geoObject",
    name: "Polygon 4",
    id: 4,
    polygon: {
      id: "4",
      points: [
        { id: "1", coordinates: [59.959, 30.326] },
        { id: "2", coordinates: [59.959, 30.33] },
        { id: "3", coordinates: [59.963, 30.33] },
        { id: "4", coordinates: [59.963, 30.326] },
      ],
      selected: false,
    },
    properties: {},
  },
];


// Ф-ция отправляющая данные о GeoObject
export const getGeoObjects = (): GeoObject[] => {
    return geoObjects;
  };