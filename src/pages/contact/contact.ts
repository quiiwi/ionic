import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Contact} from "../../shared/models/task";

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  contatcs: Contact[] = [
    {
      id: 1,
      name: 'aze'
    },

    {
      id: 2,
      name: 'eza'
    },

    {
      id: 3,
      name: 'zae'
    },

    {
      id: 4,
      name: 'zea'
    },

    {
      id: 5,
      name: 'aez'
    },

    {
      id: 6,
      name: 'eaz'
    },

    {
      id: 7,
      name: 'aaa'
    },

    {
      id: 8,
      name: 'aaz'
    },

    {
      id: 9,
      name: 'aae'
    },

    {
      id: 10,
      name: 'aza'
    },

    {
      id: 11,
      name: 'aze'
    },

    {
      id: 12,
      name: 'ezz'
    }
  ]

  itemSelected(item: Contact) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Hello',
      buttons: [{
        text: 'Ok',
        handler: () => {
          // user has clicked the action sheet button
          // begin the action sheet's dimiss transition
          let navTransition = actionSheet.dismiss();

          // start some async method
          someAsyncOperation().then(() => {
            // once the async operation has completed
            // then run the next nav transition after the
            // first transition has finished animating out

            navTransition.then(() => {
              this.nav.pop();
            });
          });
          return false;
        }
      }]
    });

    actionSheet.present();
  }
}
