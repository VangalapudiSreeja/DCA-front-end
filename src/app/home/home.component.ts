import { FeedresponseService } from './../feedresponse.service';
import { Feedresponse } from './../feedresponse';
import { FeedService } from './../feed.service';
import { Router } from '@angular/router';
import { Feed } from './../feed';
import { Developer } from './../developer';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { DeveloperService } from '../developer.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  developers:Developer[] = [];
  developerModel:Developer = new Developer(0,"","","",new Date(),new User(1,"","",false),0,0,true,false);

  feeds:Feed[] = [];
  date:Date = new Date();
   latest_date =this.datePipe.transform(this.date, 'yyyy-MM-dd');
   feedModel:Feed = new Feed(0,"",this.latest_date!,this.datePipe.transform(this.date, 'hh:mm:ss a')!.toLowerCase(),"",0,this.developerModel,0,"");
   
   private getTime(date?: Date) {
    return date != null ? date.getTime() : 0;
    }


public sortByDueDate(): void {
    this.feeds.sort((a: Feed, b: Feed) => {
      console.log("in sort")
        return this.getTime(new Date(a.feedDate)) - this.getTime(new Date(b.feedDate));
    });
}
  constructor(private router:Router, private developerService:DeveloperService, private feedService:FeedService, private datePipe:DatePipe, private responseService:FeedresponseService) {

  }
  ngOnInit(): void {
    this.feedService.getFeeds().subscribe((data: Feed[]) => {
      this.feeds=data;
    });
  }
  devId:number=0;
  submit(devId:number)
  {
    console.log(this.devId);
    this.developerService.setId(devId);
    this.router.navigateByUrl('developer')
  }
  answer(feedId:number): void {
    this.responseService.setId(feedId);
        this.router.navigateByUrl('answer');
  }
  askquestion():void{
    this.router.navigateByUrl('postquery');
  }

}
