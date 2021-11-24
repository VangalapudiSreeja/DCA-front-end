import { Developer } from './../developer';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { FeedService } from './../feed.service';
import { QuestionComponent } from './../question/question.component';
import { FeedresponseService } from './../feedresponse.service';
import { Component, OnInit } from '@angular/core';
import { Feedresponse } from '../feedresponse';
import { Feed } from '../feed';
import { User } from '../user';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  responses:Feedresponse[] = [];
  devId:number = 101;
  respDevId:number = 100;
  date:Date = new Date();
  latest_date =this.datePipe.transform(this.date, 'yyyy-MM-dd');
  
  developer:Developer = new Developer(0,"","","",new Date(),new User(1,"","",false),0,0,true,false);
  feedModel:Feed = new Feed(0,"",this.latest_date!,this.datePipe.transform(this.date, 'hh:mm:ss a')!.toLowerCase(),"",0,this.developer,0,"");
  
  respDev:Developer = new Developer(100,"","m.s.sreeja@gmail.com","",new Date(),new User(1,"","",false),0,0,true,false);
  
  feedResponseModel:Feedresponse = new Feedresponse(0,"",this.latest_date!,this.datePipe.transform(this.date, 'hh:mm:ss a')!.toLowerCase(),0,this.respDev,this.feedModel);



  constructor(private responseService:FeedresponseService,private feedService:FeedService, private router:Router, private datePipe:DatePipe) { }
  feedId:number = 0;
  
  ngOnInit(): void {
    this.responseService.getResponsesByFeed(this.responseService.getId()).subscribe((data: Feedresponse[]) =>{
      this.responses = data;
  })
    this.feedService.getFeedById(this.responseService.getId()).subscribe((data:Feed)=>
    {this.feedModel = data})
  }
  onSubmit(answer:string){
  this.respDev = new Developer(100,"sreeja","m.s.sreeja@gmail.com","beginner",new Date(),new User(1,"","",false),0,0,true,false);
  
  this.feedResponseModel= new Feedresponse(0,answer,this.latest_date!,this.datePipe.transform(this.date, 'hh:mm:ss a')!.toLowerCase(),0,this.respDev,this.feedModel);

    this.responseService.addResponse(this.feedResponseModel).subscribe(data =>{
      this.router.navigateByUrl('question');
    })
  }
  userProfile(devId:number){
    this.responseService.setDevId(devId);
    this.router.navigateByUrl('developer');
  } 

}

