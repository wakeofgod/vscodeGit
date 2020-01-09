import { Component, OnInit } from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd/message';
import { isNullOrUndefined } from 'util';
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  inputValue:string;
  //数据源
  options:string[]=[];
  //
  showOptions:string[]=[];
  constructor(private msg:NzMessageService) { }

  ngOnInit() {
  }
  //#region 
  addOption(event){
    if(event.keyCode==13){
      if(this.options.indexOf(this.inputValue)>-1){
        this.msg.warning(`${this.inputValue} exist`);
      }
      else{
        this.options.push(this.inputValue);
      }
      this.inputValue="";
    }

  }
  onInput(value:string):void{
    //this.options=value?[value,value+value,value+value+value]:[];
    if(!isNullOrUndefined(value)){
      this.showOptions=this.options.filter(x=>x.indexOf(value)>-1);
    }
  }
//#endregion
//#region  明确分类类目
optionGroups=[
  {
    title: '话题',
    children: [
      {
        title: 'AntDesign',
        count: 10000
      },
      {
        title: 'AntDesign UI',
        count: 10600
      }
    ]
  },
  {
    title: '问题',
    children: [
      {
        title: 'AntDesign UI 有多好',
        count: 60100
      },
      {
        title: 'AntDesign 是啥',
        count: 30010
      }
    ]
  },
  {
    title: '文章',
    children: [
      {
        title: 'AntDesign 是一个设计语言',
        count: 100000
      }
    ]
  }
];
//#endregion
//#region 不确定类目
inputNoCategory: string;
optionNoCategory: Array<{ value: string; category: string; count: number }> = [];
onChange(e: Event): void {
  const value = (e.target as HTMLInputElement).value;
  this.optionNoCategory = new Array(this.getRandomInt(5, 15))
    .join('.')
    .split('.')
    .map((_item, idx) => ({
      value,
      category: `${value}${idx}`,
      count: this.getRandomInt(200, 100)
    }));
}

private getRandomInt(max: number, min: number = 0): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//#endregion
}
