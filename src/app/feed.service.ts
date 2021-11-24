import { Feed } from './feed';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http:HttpClient){ }
  addFeed(feed:Object):Observable<any>{
    return this.http.post('http://localhost:9012/api/feed',feed);
  }
  getFeeds():Observable<Feed[]>{
    return this.http.get<Feed[]>('http://localhost:9012/api/feeds');
  }
  getFeedById(feedId:number):Observable<Feed>{
    return this.http.get<Feed>('http://localhost:9012/api/feedId/'+feedId);
  }
  deleteFeedById(feedId:number):Observable<Feed>{
    return this.http.delete<Feed>('http://localhost:9012/api/deletefeed/'+feedId);
  }
}
