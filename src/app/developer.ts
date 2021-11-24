import { User } from './user';
export class Developer {
    devId:number;
    name: string;
    email:string;
    skillLevel:string;
    memberSince:Date;
    user:User;
    totalFeeds:number;
    reputation:number;
    isVerified:boolean;
    isBlocked:boolean;
    constructor( devId:number,
        name: string,
        email:string,
        skillLevel:string,
        memberSince:Date,
        user:User,
        totalFeeds:number,
        reputation:number,
        isVerified:boolean,
        isBlocked:boolean){
            this.devId = devId;
            this.name = name;
            this.email = email;
            this.skillLevel = skillLevel;
            this.memberSince = memberSince;
            this.user = user;
            this.totalFeeds = totalFeeds;
            this.reputation = reputation;
            this.isVerified = isVerified;
            this.isBlocked = isBlocked;
        }
    
}
