// import { query } from 'express';

import { DataserviceService } from './../../dataservice.service';
import { Component, OnInit } from '@angular/core';
// import json from "../../../assets/constant.json"
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements OnInit{
    jsondata:any[]=[];
    filteredData:any[]=[];
    searchQuery="";

    constructor(private dataserviceService:DataserviceService){}

    ngOnInit(): void {
        this.dataserviceService.getFirst100Data().subscribe(data=>{
          this.jsondata=data.slice(0,100);
          this.filteredData=this.jsondata;
        });

        this.dataserviceService.getSearchData().subscribe(query=>{

          this.performSearch(query);
        });

      }

        performSearch(query:String){
            this.filteredData=this.jsondata.filter(card=>
              card.title.toLowerCase().includes(query.toLowerCase()))
        }

}
