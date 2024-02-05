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
    

    constructor(private dataserviceService:DataserviceService){}

 


}
