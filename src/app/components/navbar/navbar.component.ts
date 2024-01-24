import { log } from 'console';
import { DataserviceService } from './../../dataservice.service';
import { Component } from '@angular/core';
// Import Event
// import { Event } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    searchQuery:string="";

    constructor(private dataserviceService:DataserviceService){}

    performSearch(event:Event)
    {
      event.preventDefault();
      // console.log("search query: "+this.searchQuery);

        this.dataserviceService.searchData(this.searchQuery);
    }


}
