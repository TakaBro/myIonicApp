import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  public beer = {
    name: "",
    price: "",
    type: "",
    mark: ""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {   
  
  }

  saveBeer(beer){
    console.log(beer);
  }
}
