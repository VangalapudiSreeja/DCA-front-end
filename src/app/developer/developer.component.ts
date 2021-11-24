import { DatePipe } from '@angular/common';
import { FeedService } from './../feed.service';
import { Router } from '@angular/router';
import { Feed } from './../feed';
import { DeveloperService } from './../developer.service';
import { Component, OnInit } from '@angular/core';
import { FeedresponseService } from '../feedresponse.service';
import { Developer } from '../developer';
import { User } from '../user';
import { Feedresponse } from '../feedresponse';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
   developerModel:Developer = new Developer(0,"","","",new Date(),new User(1,"","",false),0,0,true,false);
   developer:Developer = new Developer(0,"","","",new Date(),new User(1,"","",false),0,0,true,false);
   
   developersFeed:Feed[] = [];
   responses:Feedresponse[] = [];
   
   date:Date = new Date();
   latest_date =this.datePipe.transform(this.date, 'yyyy-MM-dd');
   feedModel:Feed = new Feed(0,"",this.latest_date!,this.datePipe.transform(this.date, 'hh:mm:ss a')!.toLowerCase(),"",0,this.developerModel,0,"");
  
   feedResponseModel:Feedresponse = new Feedresponse(0,"",this.latest_date!,this.datePipe.transform(this.date, 'hh:mm:ss a')!.toLowerCase(),0,this.developer,this.feedModel);

   constructor(private developerService:DeveloperService,private responseService:FeedresponseService, private router:Router, private feedService:FeedService,private datePipe:DatePipe) { }

  ngOnInit(): void {
    this.developerService.getDeveloperById(this.responseService.getDevId()).subscribe((data:Developer)=>{
     this.developerModel = data;
    })
    this.developerService.getDevelopersFeeds(this.responseService.getDevId()).subscribe((data:Feed[])=>
    {
      this.developersFeed = data;
      console.log(this.developersFeed[0].queryTitle)
    })
    this.developerService.getDeveloperResponses(this.responseService.getDevId()).subscribe((data:Feedresponse[])=>{
      this.responses = data;
    })
  }
  getQuestion(devId:number){
    this.responseService.setId(devId);
     this.router.navigateByUrl('answer')
  }
  deleteFeed(feedId:number){
    console.log("delete"+feedId)
    this.feedService.deleteFeedById(feedId).subscribe((data:Feed)=>{
      this.feedModel = data;
    })
  }
  getResponses(devId:number){
    this.responseService.setId(devId);
    this.router.navigateByUrl('answer')
  }
}
