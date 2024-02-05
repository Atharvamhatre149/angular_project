import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from './../../dataservice.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css'
})
export class CardDetailsComponent implements OnInit{

    cardData:any;

    constructor(private route:ActivatedRoute,private dataserviceService:DataserviceService){}

    ngOnInit(): void {
        this.route.params.subscribe(params =>{
            const cardIndex= +params['index'];
            
        })
    }

}
