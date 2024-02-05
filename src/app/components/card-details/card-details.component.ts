import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from './../../dataservice.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css'
})
export class CardDetailsComponent implements OnInit{

    jsondata:any[]=[];
    cardData:any;

    constructor(private route:ActivatedRoute,private dataserviceService:DataserviceService){}

    ngOnInit(): void {
        this.route.params.subscribe(params =>{
            const cardIndex= +params['index'];
           
            this.dataserviceService.getFirst100Data().subscribe(data=>{
            this.jsondata=data;    
        })
            this.cardData=this.jsondata[cardIndex];
    });

}

}
