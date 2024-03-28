import { useQuery } from '@tanstack/react-query';
import { api } from '../api';
import useLocation from './use-location';
import { Weather } from '../shared/types';
import { useAppSelector } from '../store';

const useWeather = () => {
  const {
    location,
    isLoading: isLocationLoading,
    error: locationError,
  } = useLocation();
  const city = useAppSelector((state) => state.weather.city);

  const queryFn = async () => {
    if (city) {
      return api
        .api()
        .weather.getWeatherWithCity(city, import.meta.env.VITE_APP_WEATHER_KEY);
    } else if (location) {
      return api
        .api()
        .weather.getWeatherWithGeo(
          location.latitude,
          location.longitude,
          import.meta.env.VITE_APP_WEATHER_KEY
        );
    } else {
      throw new Error('No location or city provided');
    }
  };

  const {
    data: weather,
    isLoading: isWeatherLoading,
    isError,
    error,
  } = useQuery<Weather>({
    queryKey: ['weather', location?.latitude, location?.longitude, city],
    queryFn,
    retry: 0,
    retryDelay: 0,
    enabled: !!location || !!city,
  });

  return {
    weather,
    isLoading: isLocationLoading || isWeatherLoading,
    isError,
    error: locationError || error,
  };
};

export default useWeather;
