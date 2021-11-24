import { Developer } from "./developer";

export class Feed {
    feedId:number = 0;
    queryTitle:string;
	  query:string;	
	  topic:string;	
	  relevance:number = 0;
	  totalComments:number = 0;
    feedTime:string;
    feedDate:string;
    dev:Developer;
      constructor(feedId:number,query:string,feedDate:string, feedTime:string,topic:string, relevance:number,dev:Developer,totalComments:number, queryTitle:string){
        this.feedId = feedId;
        this.query = query;
        this.topic = topic;
        this.relevance = relevance;
        this.totalComments = totalComments;
        this.dev = dev;
        this.feedDate = feedDate;
        this.feedTime = feedTime
        this.queryTitle = queryTitle;
      }
}
