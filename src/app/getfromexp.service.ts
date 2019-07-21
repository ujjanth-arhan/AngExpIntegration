import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GetfromexpService {

  private someUrl = "http://localhost:3000/some";

  constructor(
    private http: HttpClient,
  ) { }

  getValues() {

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
      };
    console.log("connecting to 3000");
    return this.http.post("http://127.0.0.1:3000/some", {"name": "Customer004"}, httpOptions);
    //  this.http.get(this.someUrl);
  }
}
