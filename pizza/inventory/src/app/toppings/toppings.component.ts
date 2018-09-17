import { ToppingsService } from '../toppings.service';
import { Topping } from './topping';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrls: ['./toppings.component.css']
})
export class ToppingsComponent implements OnInit {
  formTopping :Topping = {name:'',quantity : 0, type: "TOPPING"};
  message: string =  "Enter item and click to save";
  constructor(private toppingsService: ToppingsService) { }

  ngOnInit() {
  }
  
  saveTopping() {
    var saved: Observable<Topping> = this.toppingsService.save(this.formTopping);
    this.formTopping =  {name:'',quantity : 0, type: "TOPPING"};
    saved.subscribe(topping => 
    this.message = "Topping " + topping.name + " saved. Check order site to verify");
    
  }

}
