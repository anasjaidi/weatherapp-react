import type { AxiosInstance } from 'axios';
import axios from 'axios';
import { API_URL } from '../shared/constants';
import { Weather, WeatherResponseType } from '../shared/types';

class Api {
  private httpClient: AxiosInstance;

  constructor(private readonly baseUrl: string = API_URL) {
    this.httpClient = this.initializeHttpClient();
  }

  private initializeHttpClient() {
    return axios.create({
      baseURL: this.baseUrl,
      timeout: 10000,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  api = () => ({
    weather: {
      getWeatherWithGeo: async (lat: number, lon: number, apiKey: string) => {
        const url = `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

        const { data } = await this.httpClient.get<WeatherResponseType>(url);

        return <Weather>{
          cityName: data.name,
          temperature: data.main.temp,
          weatherDescription: data.weather[0].main,
          weatherIcon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
          humidity: data.main.humidity,
        };
      },
      getWeatherWithCity: async (city: string, apiKey: string) => {
        const url = `/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const { data } = await this.httpClient.get<WeatherResponseType>(url);

        return <Weather>{
          cityName: data.name,
          temperature: data.main.temp,
          weatherDescription: data.weather[0].main,
          weatherIcon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
          humidity: data.main.humidity,
        };
      },
    },
  });
}

export const api = new Api();
