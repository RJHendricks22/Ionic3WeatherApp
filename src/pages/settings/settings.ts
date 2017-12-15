import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { LOCALE_DATA } from '@angular/common/src/i18n/locale_data';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  city: string;
  state: string;
  recent: Array<object>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage) {
    // this.storage.get('recent');
    this.storage.set('recent', JSON.stringify([
      {city: "Miami", state: "FL"}
    ]));
    this.storage.get('location').then((val) => {
      if (val != null){
        let location = JSON.parse(val);
        this.city = location.city;
        this.state = location.state;
      } else {
        this.city = 'New York';
        this.state = 'NY';
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  ionViewDidEnter(){
    this.storage.get('recent').then((val) =>{
      this.recent = JSON.parse(val);
    })
  }

  saveForm(){
    let location = {
      city: this.city,
      state: this.state
    }
    this.storage.set('location', JSON.stringify(location))
    // this.storage.set('recent', JSON.stringify(
    //   this.storage.get('recent').then(function(val){
    //     let recent:[object]
    //     recent = JSON.parse(val)
    //     console.log(recent)
    //     recent.push(location)
    //     console.log(recent)
    //     return recent
    //   })
    // ))
    // this.storage.get('recent').then((val) => console.log(val))
    this.navCtrl.push(HomePage)
  }

  logButtonEvent(e, city, state){
    let location = {
      city: city,
      state: state
    }
    this.storage.set('location', JSON.stringify(location))
    // this.storage.set('recent', JSON.stringify([location]))
    this.navCtrl.push(HomePage)
  }

  testOutput(e, city, state){
    console.log(city, state)
  }

  // addToRecents(){
  //   let location = {
  //     city: "Boston",
  //     state: "MA"
  //   }
  //   this.storage.get('recent').then(function(val){
  //     let recent = JSON.parse(val)
  //     recent.push(location)
  //   })
  // }
}
