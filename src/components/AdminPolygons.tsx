import { FC } from "react";
import { Polygon as LeafletPolygon, Popup } from "react-leaflet";
import { GeoObject } from "../models/geoObject";

interface Props {
  geoObjects: GeoObject[];
  selectedAspect: string | null;
  onAspectChange: (aspect: string | null) => void;
}

export const AdminPolygons: FC<Props> = ({ geoObjects, selectedAspect, onAspectChange }) => {
  const polygonElements = geoObjects
    .filter((geoObject) => selectedAspect === null || geoObject.type === selectedAspect)
    .filter((geoObject) => geoObject.type === "ADM")
    .map((geoObject) => (
      <LeafletPolygon
        key={geoObject.id}
        positions={geoObject.polygon.points.map((point) => point.coordinates)}
        color="red"
        fillColor="red"
        fillOpacity={0.5}
      >
        <Popup>{geoObject.name}</Popup>
      </LeafletPolygon>
    ));

  return <>{polygonElements}</>;
};
