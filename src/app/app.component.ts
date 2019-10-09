import { Component } from '@angular/core';
import { filter } from 'minimatch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],


})
export class AppComponent {
  title = 'Star Wars';
}

  public filter;
  public order;
  public searchString;

  search(){
      console.log(this.filter);
      console.log(this.order);
      console.log(this.searchString);
  }





