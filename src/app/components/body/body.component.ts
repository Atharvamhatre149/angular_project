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
    pageSize:number=4;
    currentPage:number=1;

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

      setPage(pageNumber:number)
      {
        this.currentPage=pageNumber;
      }

      decrementPage()
      {
        if(this.currentPage>1)
        {
          this.currentPage--;
        }
      }

      incrementPage()
      {
        const totalPages=Math.ceil(this.filteredData.length/this.pageSize);
        if(this.currentPage<totalPages)
        {
          this.currentPage++;
        }
      }

}
