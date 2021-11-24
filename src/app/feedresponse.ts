import { Developer } from './developer';
import { Feed } from './feed';
export class Feedresponse {
   
    respId:number = 0;
    answer:string;
    respDate:string;
    respTime:string;
    accuracy:number;
    dev:Developer;
    feed:Feed;

    constructor(respId:number,  answer:string, respDate:string, respTime:string,accuracy:number, dev:Developer,
        feed:Feed) {
    this.respId = respId;
    this.answer = answer;
    this.respDate = respDate;
    this.respTime = respTime;
    this.accuracy = accuracy;
    this.dev = dev;
    this.feed = feed;
}
}
