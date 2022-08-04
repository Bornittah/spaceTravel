import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const RETRIEVE_ROCKET = './rockets/rockets/RETRIEVE_ROCKET';

export const getRockets = createAsyncThunk(RETRIEVE_ROCKET, async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const rockets = await response.json();

  return rockets.map((rocket) => ({
    rocketId: rocket.id,
    rocket_name: rocket.rocket_name,
    description: rocket.description,
    image: rocket.flickr_images[0],
    reserved: false,
  }));
  });

const slice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    reserveRocket(rockets, action) {
      const id = rockets.findIndex(((rocket) => (rocket.rocketId=== action.payload.rocketId)));
      rockets[id].reserved = true;
    },
    cancelReservation(rockets, action) {
      const id = rockets.findIndex(((rocket) => (rocket.rocketId === action.payload.rocketId)));
      rockets[id].reserved = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => action.payload);
  },
});

export const { reserveRocket, cancelReservation } = slice.actions;
export default slice.reducer;