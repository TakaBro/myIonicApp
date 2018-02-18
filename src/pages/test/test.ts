import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  public beer: any = {};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public alertCtrl: AlertController,
              public http: Http) {
            
                let url = this.navParams.get('api_url');
                let beer_id = this.navParams.get('beer_id');

                this.http.get(url + '/beers/' + beer_id)
                /* this.http.get(url + 'abraaoan/iOS-NeemuChallenge/master/challenge.json')     */
                .map(res => res.json())
                .subscribe(data  => {
                this.beer = data;
                /* console.log(data['result']['products']);
                this.beer = data['result']['products'][beer_id]; */
                });
                
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }
}
