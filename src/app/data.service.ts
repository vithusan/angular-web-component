import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiKey = '246dc581f5af4e4196155a8226f5e747';
  constructor(private httpClient: HttpClient) { }

  get(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.apiKey}`);
  }

}
