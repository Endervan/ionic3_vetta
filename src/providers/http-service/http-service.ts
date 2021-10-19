import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";


@Injectable()
export class HttpServiceProvider {

  public items: any;

  constructor(public http: HttpClient) {
  }

  // carrega tudo endpoint
  getAll() {
    let data: Observable<any>;
    data = this.http.get('https://jsonplaceholder.typicode.com/users/5/posts');
    data.subscribe(result => {
      this.items = result;
      console.log(result)
    });
  }

  // carrega item individualmente
  getItem(item: any) {
    console.log(item)
  }
}
