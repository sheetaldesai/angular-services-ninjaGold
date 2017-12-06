import { Component, OnInit, Input } from '@angular/core';
import { NinjaService } from 'app/ninja.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() title;
  @Input() description;
  
  constructor(private _ninjaService : NinjaService) { }

  ngOnInit() {
    console.log(this.title, this.description);
  }

  onFormClick(title: string) {
    console.log("onFormClick ", title);
    this._ninjaService.winGold(title);
  }

}
