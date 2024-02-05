// import { query } from 'express';

import { DataserviceService } from './../../dataservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    pageSize:number=5;
    currentPage:number=1;
    currentCard:number=0;

    constructor(private dataserviceService:DataserviceService, private router:Router){}

    // performSearch(event:Event)
    // {
    //   event.preventDefault();
    //   // console.log("search query: "+this.searchQuery);

    //     this.dataserviceService.searchData(this.searchQuery);
    // }

    get pageData():any[]{

        const startIndex=(this.currentPage-1)*this.pageSize;
        const endIndex=startIndex+this.pageSize;
        this.currentCard=(this.currentPage-1)*5;
        return this.filteredData.slice(startIndex,endIndex);
    }

    ngOnInit(): void {
        this.dataserviceService.getFirst100Data().subscribe(data=>{
          this.jsondata=data;
          this.filteredData=this.jsondata;
        });

        // this.dataserviceService.getSearchData().subscribe(query=>{

        //   this.performSearch(query);
        // });

      }

        performSearch(event:Event){
          event.preventDefault();
            this.filteredData=this.jsondata.filter(card=>
              card.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
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

      calculateEnd():number
      {
          return Math.ceil(this.filteredData.length/this.pageSize);
      }


}
