import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private service:DataService){}

  getData(){
    this.service.getData().subscribe();
  }

  getUsers(){
    this.service.getUsers().subscribe()
  }
}
