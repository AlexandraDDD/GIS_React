import { Polygon, Popup, useMap } from "react-leaflet";
import { useAppDispatch, useAppSelector } from "../hooks";
import { removePolygon, togglePolygonSelected, clearAllPoints, createGeoObject } from "../store/editor.slice";

const greenOptions = { fillColor: 'green' };
const redOptions = { fillColor: 'red' };

export const MapPolygons = () => {
	const dispatch = useAppDispatch();
	const map = useMap();

	const polygons = useAppSelector(x => x.editor.polygons);

	if (polygons.length === 0) {
		return null;
	}

	return (
		<>
			{
				polygons.map((x, index) => (
					<Polygon
						key={index}
						positions={[x.points.map(point => point.coordinates)]}
						pathOptions={x.selected ? greenOptions : redOptions}
					>
						<Popup>
							<div className="">
								<div className="p-2">
									<label>Полигон: {index}</label>
								</div>
								<div className="p-2">
									<label>Название: </label>
									<input type="text" id="name" className="w-100 border"/>
								</div>
								<div className="p-2">
									<label><input id="ADM" type="radio" name="radio"/>ADM</label>
    								<label><input id="BLDG" type="radio" name="radio"/>BLDG</label>
    								<label><input id="OTHER" type="radio" name="radio"/>OTHER</label>
								</div>
								<div className="p-2">
									<label>Текст: </label><br/>
									<textarea id="text" className="w-100 border" style={{ maxHeight: '100px', height: '100px' }}/>
								</div>
								<div className="btn-group" role="group">
									<button
										type="button"
										className="btn btn-outline-success"
										onClick={(e) => {
											e.stopPropagation();
											return dispatch(createGeoObject(x));
										}}>
										Сохранить
									</button>

									<button
										type="button"
										className="btn btn-outline-danger"
										onClick={(e) => {
											map.closePopup();
											e.stopPropagation();
											return dispatch(removePolygon(x)) && dispatch(clearAllPoints());
										}}
									>
										Удалить
									</button>

									<button
										type="button"
										className="btn btn-outline-primary"
										onClick={(e) => {
											e.stopPropagation();
											return dispatch(togglePolygonSelected(x));
										}}
									>
										{x.selected ? "Снять выделение" : "Выделить"}
									</button>
								</div>
							</div>
						</Popup>
					</Polygon>
				))
			}
		</>
	);
};