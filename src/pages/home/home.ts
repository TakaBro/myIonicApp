import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

import { TestPage } from '../test/test';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private url:string = 'http://localhost:3030/v1'
  public beers: Array<{}>;

  constructor(
      public navCtrl: NavController,
      public http: Http
  ) {
    this.http.get(this.url + '/beers')
             .map(res => res.json())
             .subscribe(data  => {
               console.log(data);
             });
  }

  goToTestPage(){
      this.navCtrl.push(TestPage);
  }

}
