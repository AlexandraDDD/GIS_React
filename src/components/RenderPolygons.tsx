import { FC, useContext, useState } from "react";
import { Polygon as LeafletPolygon, Popup } from "react-leaflet";
import { GeoObject } from "../models/geoObject";
import Aspects from "./main/aspects";
import { useDispatch } from "react-redux";
import { SidebarContext } from "../context/SidebarContext";
import { SetselectGeoObject } from "../store/geoObject.slice";
import { Button } from "react-bootstrap";

interface Props {
  geoObjects: GeoObject[];
}



// отрисовка полигона GeoObject
export const RenderPolygons: FC<Props> = ({ geoObjects }) => {
  const [selectedAspect, setSelectedAspect] = useState<string | null>(null);
  //sidebar//
  const dispatch = useDispatch();

  const { isSidebarOpen, handleOpenSidebar, handleCloseSidebar } = useContext(SidebarContext);

  const handleMarkerClick = (geoObjectId: number) => {
    dispatch(SetselectGeoObject(geoObjectId));
    handleOpenSidebar()
    console.log('handle');
    console.log(isSidebarOpen);
  }



  return (
    <>
      {/*   <Aspects onAspectChange={handleAspectChange} /> */}
      {geoObjects.map((geoObject) => (
        <LeafletPolygon
          key={`polygon-${geoObject.id}`}
          positions={geoObject.polygon.points.map((point) => point.coordinates)}
          color={getColor(geoObject)}
          fillColor={getColor(geoObject)}
          fillOpacity={0.5}
        >

          <Popup>
            <div className="d-flex flex-column">
              <h6 className="pb-2">  {geoObject.name} </h6>
              <Button onClick={() => handleMarkerClick(geoObject.id)}>show info</Button>
            </div>
          </Popup>

        </LeafletPolygon>
      ))}
    </>
  );
};

const getColor = (geoObject: GeoObject) => {
  const colorsAdm = ["red", "brown", "pink", "magenta", "purple"];
  const colorsBldg = ["orange", "green", "blue", "yellow", "lime"];

  if (geoObject.type === "ADM") {
    return colorsAdm[geoObject.id % colorsAdm.length];
  } else if (geoObject.type === "BLDG") {
    return colorsBldg[geoObject.id % colorsBldg.length];
  }

  // Можно добавить дополнительные условия для других типов объектов
  return "gray";
};