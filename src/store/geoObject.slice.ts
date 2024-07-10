import { createSlice } from "@reduxjs/toolkit";
// хранит состояние выбранного объекта
interface SelectedGeoObjectState {
  selectedGeoObjectId: number | null;
}

const initialState: SelectedGeoObjectState = {
  selectedGeoObjectId: null,
};

const selectedGeoObjectSlice = createSlice({
  name: "selectedGeoObject",
  initialState,
  reducers: {
    SetselectGeoObject(state, action) {
      state.selectedGeoObjectId = action.payload;
    },
  },
});

export const { SetselectGeoObject } = selectedGeoObjectSlice.actions;
export default selectedGeoObjectSlice;