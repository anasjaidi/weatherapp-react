import { Weather } from '../../shared/types';

interface IProps {
  weather: Weather;
}

function WeatherCard({ weather }: IProps) {
  return (
    <div className='max-w-sm mx-auto bg-neutral rounded-xl items-center flex flex-col justify-center shadow-lg px-8 p-4 hover:scale-[1.01] w-full'>
      <h2 className='text-3xl font-bold'>{weather.cityName}</h2>
      <img
        src={weather.weatherIcon}
        alt={weather.weatherDescription}
        className='size-20'
      />
      <div className="grid grid-cols-2 "></div>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Weather: {weather.weatherDescription}</p>
      <p>Humidity: {weather.humidity}%</p>
    </div>
  );
}

export default WeatherCard;
