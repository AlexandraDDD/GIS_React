import { FC } from "react";
import { markerObject } from "../models/markerObject";
import { markers } from "../data/markerData";
import { Marker, Popup } from "react-leaflet";

interface Props {
    markers: markerObject[];
}

export const RenderMarkers: FC<Props> = ({ markers }) => {
  const markerElements = markers.map((marker) => (
    <Marker position={marker.coordinates}>
      <Popup>{marker.name}</Popup> 
    </Marker> 
  ));

  return <>{markerElements}</>;
};