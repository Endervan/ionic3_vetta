import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {HttpServiceProvider} from "../../providers/http-service/http-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  extends  HttpServiceProvider{

  constructor(public http: HttpClient, navCtrl: NavController) {
    super(http);
    this.getAll();
  }


}

