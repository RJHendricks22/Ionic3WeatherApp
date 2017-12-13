import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherProvider {
  apiKey = "2973c1b53bfdd5c0";
  url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = `http://api.wunderground.com/api/${this.apiKey}/conditions/q`;
  }

  getWeather(city, state){
    return this.http.get(`${this.url}/${state}/${city}.json`);
  }

}
