import { Component, OnInit } from '@angular/core';
import { GetfromexpService } from '../getfromexp.service';
import { Observable } from 'rxjs';
import { SomeClass } from '../model'

@Component({
  selector: 'app-compo',
  templateUrl: './compo.component.html',
  styleUrls: ['./compo.component.css']
})
export class CompoComponent implements OnInit {
  constructor(private obj: GetfromexpService) { }
  results;
  ngOnInit() {
    this.someFunction();
  }

  someFunction() {
    this.obj.getValues().subscribe(result => {
      console.log(JSON.stringify(result['name']));
      this.results = (result["name"]);
    });
  }

}
