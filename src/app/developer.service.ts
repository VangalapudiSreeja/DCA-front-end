import { Feed } from './feed';
import { Developer } from './developer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedresponse } from './feedresponse';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
  devId:number = 0;
  setId(devId:number)
  {
    this.devId = devId;
  }
  getId():number{
    return this.devId;
  }
  constructor(private http:HttpClient) { }
  getDeveloperById(devId:number):Observable<Developer>{
    return this.http.get<Developer>('http://localhost:9012/api/getdeveloper/'+devId);
  }
  getDevelopersFeeds(devId:number):Observable<Feed[]>{
    return this.http.get<Feed[]>('http://localhost:9012/api/DevelopersFeed/'+devId);
  }
  getDeveloperResponses(devId:number):Observable<Feedresponse[]>{
    return this.http.get<Feedresponse[]>('http://localhost:9012/api/getByDeveloperId/'+devId);
  }
  getAllDevelopers():Observable<Developer[]>{
    return this.http.get<Developer[]>('http://localhost:9012/api/developers')
  }
  addDeveloper(developer: Object):Observable<any>{
    return this.http.post('http://localhost:9012/api/developer',developer);
}
}
