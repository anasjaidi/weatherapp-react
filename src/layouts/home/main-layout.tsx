import React from 'react';
import WeatherCard from '../../components/home/weather-card';
import useWeather from '../../hooks/use-weather';
import LoadingComponent from '../../components/ui/loading';
import ErrorComponent from '../../components/ui/error';
import Form from '../../components/home/form';

const MainLayout: React.FC = () => {
  const { error, isError, isLoading, weather } = useWeather();

  const errorMessage =
    (error && (typeof error === 'string' ? error : error.message)) ||
    'An error occurred';

  const render = () => {
    if (isLoading) {
      return <LoadingComponent />;
    }
    if (isError) {
      return <ErrorComponent message={errorMessage} />;
    }
    if (weather) {
      return <WeatherCard weather={weather} />;
    }
  };

  return (
    <main className='flex flex-col flex-1 gap-10 px-4 py-10'>
      <Form />
      {render()}
    </main>
  );
};

export default MainLayout;
