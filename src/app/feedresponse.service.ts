import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Feedresponse } from './feedresponse';

@Injectable({
  providedIn: 'root'
})
export class FeedresponseService {
   feedId:number = 0;
   devId:number = 0;
   respId:number = 0;
  constructor(private http:HttpClient) { }

  setId(feedId:number){
    this.feedId = feedId;
  }
  getId():number{
   return this.feedId;
  }
  setDevId(devId:number){
    this.devId = devId;
  }
  getDevId():number{
   return this.devId;
  }
  setRespId(respId:number){
    this.respId = respId;
  }
  getRespId():number{
   return this.respId;
  }
  addResponse(resp:object):Observable<any>{
    return this.http.post('http://localhost:9012/api/response',resp);
  }
  getResponsesByFeed(feedId:number):Observable<Feedresponse[]>{
    return this.http.get<Feedresponse[]>('http://localhost:9012/api/getByFeedId/'+feedId);
  }
  deleteResponses(respId:number):Observable<Feedresponse>{
    return this.http.delete<Feedresponse>('http://localhost:9012/api/deleteResponse/'+respId);
  }
  getAllresponses():Observable<Feedresponse[]>{
    return this.http.get<Feedresponse[]>('http://localhost:9012/api/FeedResponses');
  }
}
