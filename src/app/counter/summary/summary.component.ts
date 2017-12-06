import { Component, OnInit } from '@angular/core';
import { NinjaService } from 'app/ninja.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  
  messages : string[] = [];

  constructor(private _ninjaService : NinjaService) {
    this.messages = _ninjaService.messages;
  }

  ngOnInit() {
  }

}
