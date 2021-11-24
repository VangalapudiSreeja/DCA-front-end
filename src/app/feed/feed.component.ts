import { FeedService } from './../feed.service';
import { Feed } from './../feed';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Developer } from '../developer';
import { User } from '../user';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  feeds:Feed[] = [];

  date:Date = new Date();

  latest_date =this.datePipe.transform(this.date, 'yyyy-MM-dd');
 

  constructor(private router:Router, private feedService:FeedService, private datePipe: DatePipe) 
  { 

  }

  developer:Developer = new Developer(0,"","","",new Date(),new User(2,"","",false),0,0,true,false);

   feedModel:Feed = new Feed(0,"",this.latest_date!,this.datePipe.transform(this.date, 'hh:mm:ss a')!.toLowerCase(),"",0,this.developer,0,"");
  

  ngOnInit(): void {
  }
  onSubmit(){
    this.feedService.addFeed(this.feedModel).subscribe(data =>{
      this.router.navigateByUrl("app");
    })
  }
  
}
