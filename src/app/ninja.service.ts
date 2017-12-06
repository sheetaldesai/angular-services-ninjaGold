import { Injectable } from '@angular/core';
import { Form } from './form';

@Injectable()
export class NinjaService {

  totalGold = {total:0};
  messages: string[] = [];
  forms : Form[] = [];

  constructor() { 
    this.forms.push(new Form("Farm", 2, 5, "Earn upto 2 - 5 Gold"));
    this.forms.push(new Form("Cave", 5, 10, "Earn upto 5 - 10 Gold"));
    this.forms.push(new Form("Casiono", -100, 100, "Earn upto or Loose upto 100 Gold"));
    this.forms.push(new Form("House", 7, 15, "Earn upto 7 - 15 Gold"));
  }

  winGold(sender) {

    let form = this.forms.find(obj => obj.title === sender);
    console.log(form);

  
    //console.log(`Sender: ${sender} Min: ${min} Max: ${max}`);

    let rand = Math.floor(Math.random() * (form.maxGold-form.minGold)) + form.minGold;  
     
    this.totalGold.total += rand;
    
    console.log(`Gold: ${rand} Total: ${this.totalGold.total}`);
    this.addMessage(sender, rand);
  }

  addMessage(sender:string, rand:number) {
    let message = `You ${rand >= 0?"earned":"lost"} ${Math.abs(rand)} gold at the ${sender}`;
    console.log(message)
    this.messages.push(message);
    console.log(this.messages);
  }

  getForms() {
    return this.forms;
  }
}
