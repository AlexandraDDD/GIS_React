import { FC } from "react";
import { markerObject } from "../models/markerObject";
import { Marker, Popup } from "react-leaflet";

interface Props {
  markers: markerObject[];
  selectedAspect: string | null;
}

export const RenderMarkers: FC<Props> = ({ markers, selectedAspect }) => {
  const markerElements = markers
    .filter((marker) => selectedAspect === null || marker.type === selectedAspect)
    .map((marker) => (
      <Marker key={`marker-${marker.name}`} position={marker.coordinates}>
        <Popup>{marker.name}</Popup>
      </Marker>
    ));

  return <>{markerElements}</>;
};
