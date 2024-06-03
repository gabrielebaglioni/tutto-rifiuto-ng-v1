import { Component, OnInit } from '@angular/core';
import {DataService} from "./shared/service/dataService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor( private dataService: DataService) {
  }

  ngOnInit(): void {
    this.preloadAllItems();
  }

  private preloadAllItems() {
    this.dataService.preloadItems();
  }
}
