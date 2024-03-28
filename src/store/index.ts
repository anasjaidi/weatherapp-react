import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { Weather } from '../shared/types';

interface WeatherSliceType {
  weather: Weather | null;
  city?: string;
  location?: GeolocationCoordinates;
}

const inititlaState: WeatherSliceType = {
  weather: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState: inititlaState,
  reducers: {
    setWeather: (state, { payload }: PayloadAction<Weather>) => {
      state.weather = payload;
    },
    setCity: (state, { payload }: PayloadAction<string | undefined>) => {
      state.city = payload;
    },
    setLocation: (
      state,
      { payload }: PayloadAction<GeolocationCoordinates | undefined>
    ) => {
      state.location = payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    weather: weatherSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const { setCity, setLocation, setWeather } = weatherSlice.actions;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
