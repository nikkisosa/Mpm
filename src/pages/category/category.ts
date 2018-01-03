import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContentPage } from "../content/content";
import { SessionsProvider } from "../../providers/sessions/sessions";
/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  contents = [
    {
      'title':'Red Cross',
      'subtitle':'blood funds',
      'content':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum illum ducimus debitis! Reprehenderit autem qui eaque minima similique hic iusto dicta quo, nemo ipsum corporis error beatae rerum voluptates soluta?',
    },
    {
      'title': 'Contribution for the deceased.',
      'subtitle': 'school contribution',
      'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum illum ducimus debitis! Reprehenderit autem qui eaque minima similique hic iusto dicta quo, nemo ipsum corporis error beatae rerum voluptates soluta?',
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams,private sessions:SessionsProvider) {
  }

  content(title,subtitle,content){
    this.sessions.set_local_donation(title,subtitle,content);
    this.navCtrl.push(ContentPage);
  }

}
