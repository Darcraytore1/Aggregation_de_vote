import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ɵKeyEventsPlugin } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) { }

  authentificate() {
    let json = this.http.get(`http://127.0.0.1:8000/survey?json=[[{"choice": "toto", "grade": 0.94}, {"choice": "titi", "grade": 0.70}, {"choice": "tata", "grade": 0.5}],
    [{"choice": "tata", "grade": 0.91}, {"choice": "toto", "grade": 0.50}, {"choice": "titi", "grade": 0.15}],
    [{"choice": "titi", "grade": 1.0}, {"choice": "toto", "grade": 0.25}, {"choice": "tata", "grade": 0.0}],
    [{"choice": "titi", "grade": 1.0}, {"choice": "toto", "grade": 0.25}, {"choice": "tata", "grade": 0.0}]]`, {responseType: 'json'});

    return json
  }
}
