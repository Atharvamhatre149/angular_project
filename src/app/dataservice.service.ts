import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { log } from 'console';
import { Observable, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  jsonFileUrl='../assets/constant.json';
  private searchDataSubject=new Subject<string>;

  constructor(private http: HttpClient) { }

  getFirst100Data(): Observable<any[]>{
    return this.http.get<any[]>(this.jsonFileUrl).pipe(map((response:any)=> response.data));
  }

  searchData(query:string): void{
    this.searchDataSubject.next(query);
  }

  getSearchData(): Observable<string>{
      // console.log("getSearchData:"+this.searchDataSubject);

      return this.searchDataSubject.asObservable();
  }
}
