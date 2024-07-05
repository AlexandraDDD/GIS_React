import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { MapPoints } from "./MapPoints";
import { MapPolygons } from "./MapPolygons";
import { MapService } from "./MapService";
import { RenderPolygons } from "./RenderPolygons" 
import { useAppSelector } from "../hooks";
import { GeoObject } from "../models/geoObject";

export const MapBox = () => {
	const editor = useAppSelector(x => x.editor);
	const geoObjects: GeoObject[] = [
		{
		  type: "geoObject",
		  name: "Polygon 1",
		  id: 1,
		  polygon: {
			id: "1",
			points: [
			  { id: "1", coordinates: [59.939, 30.316] },
			  { id: "2", coordinates: [59.939, 30.32] },
			  { id: "3", coordinates: [59.943, 30.32] },
			  { id: "4", coordinates: [59.943, 30.316] },
			  { id: "5", coordinates: [59.939, 30.316] },
			],
			selected: false,
		  },
		  properties: {},
		},
		{
		  type: "geoObject",
		  name: "Polygon 2",
		  id: 2,
		  polygon: {
			id: "2",
			points: [
			  { id: "1", coordinates: [59.937, 30.318] },
			  { id: "2", coordinates: [59.937, 30.322] },
			  { id: "3", coordinates: [59.941, 30.322] },
			  { id: "4", coordinates: [59.941, 30.318] },
			  { id: "5", coordinates: [59.937, 30.318] },
			],
			selected: false,
		  },
		  properties: {},
		},
	  ];
	return (
		<MapContainer
			className="h-100 w-100"
			center={[59.939, 30.316]}
			zoom={15}
			scrollWheelZoom={true}
		>
			<MapService />

			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>

			<MapPoints />

	{/* 		{editor.isPolygonsVisible && <MapPolygons />} */}
			{editor.isPolygonsVisible && <RenderPolygons polygons={geoObjects.map((geoObject) => geoObject.polygon)} />}

		</MapContainer>
	);
};