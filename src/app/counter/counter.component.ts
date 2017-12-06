import { Component, OnInit } from '@angular/core';
import { NinjaService } from 'app/ninja.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  totalCount:{total:number};
  forms : {};
 
  constructor(private _ninjaService : NinjaService) { 
    this.totalCount = _ninjaService.totalGold;
    this.forms = _ninjaService.getForms();
  }

  ngOnInit() {
  }


}
