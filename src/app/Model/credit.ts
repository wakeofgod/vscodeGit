import { CreditAttachment } from './creditAttachment';

export class Credit {
    creditId:string;
    creditSegment:string;
    creditLimit:number;
    CurrencyType:string;
    //creditAttachment:CreditAttachment[];
    // constructor(){
    //     this.creditAttachment=[];
    // }
}
export class CreditAndAttachment{
    creditList:Credit[];
    creditAttachment:CreditAttachment[];
    constructor(){
        this.creditList=[];
        this.creditAttachment=[];
    }
}
export class CreditExpand {
    creditId:string;
    creditSegment:string;
    creditLimit:number;
    CurrencyType:string;
    showExpand:boolean;
}
export class CreditExpandAttachment{
    creditList:CreditExpand;
    creditAttachment:CreditAttachment[];
}
