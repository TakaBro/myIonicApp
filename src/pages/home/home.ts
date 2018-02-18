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

  private url:string = 'http://beer.symfonycasts.com.br/v1'
  /* private url:string = 'https://raw.githubusercontent.com/' */
  public beers: Array<{}>;

  constructor(
      public navCtrl: NavController,
      public http: Http
  ) {
    this.http.get(this.url + '/beers')
    /* this.http.get(this.url + 'abraaoan/iOS-NeemuChallenge/master/challenge.json') */
             .map(res => res.json())
             .subscribe(data  => {
               this.beers = data; 
               /* console.log(data['result']['products']);
               this.beers = data['result']['products']; */
             });             
  }  

  getBeerInfo(id){
    this.navCtrl.push(TestPage,
    {
      'beer_id': id,
      'api_url': this.url
    });
  }
}
