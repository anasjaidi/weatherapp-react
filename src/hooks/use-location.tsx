import { useEffect, useState, useCallback } from 'react';

interface LocationState {
  location: GeolocationCoordinates | null;
  error: string | null;
  isLoading: boolean;
}

const useLocation = (options?: PositionOptions) => {
  const [state, setState] = useState<LocationState>({
    location: null,
    error: null,
    isLoading: true,
  });

  const successHandler = useCallback((position: GeolocationPosition) => {
    setState({ location: position.coords, error: null, isLoading: false });
  }, []);

  const errorHandler = useCallback((error: GeolocationPositionError) => {
    setState({ location: null, error: error.message, isLoading: false });
  }, []);

  useEffect(() => {
    if ('geolocation' in navigator) {
      const watchId = navigator.geolocation.watchPosition(
        successHandler,
        errorHandler,
        options
      );

      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    } else {
      setState({
        location: null,
        error: 'Geolocation is not supported by this browser.',
        isLoading: false,
      });
    }
  }, [successHandler, errorHandler, options]);

  return state;
};

export default useLocation;
