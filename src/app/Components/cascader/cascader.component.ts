// tslint:disable:no-any
import { Component, OnInit } from '@angular/core';
import { NzCascaderOption } from 'ng-zorro-antd';
import { isNullOrUndefined } from 'util';

//#region 初始数据，使用children
const options = [
  {
    value:'zhejiang',
    label:'zhejiang',
    children:[
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            isLeaf: true
          }
        ]
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
        isLeaf: true
      }     
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            isLeaf: true
          }
        ]
      }
    ]
  } 
];
const otherOptions = [
  {
    value: 'fujian',
    label: 'Fujian',
    children: [
      {
        value: 'xiamen',
        label: 'Xiamen',
        children: [
          {
            value: 'Kulangsu',
            label: 'Kulangsu',
            isLeaf: true
          }
        ]
      }
    ]
  },
  {
    value: 'guangxi',
    label: 'Guangxi',
    children: [
      {
        value: 'guilin',
        label: 'Guilin',
        children: [
          {
            value: 'Lijiang',
            label: 'Li Jiang River',
            isLeaf: true
          }
        ]
      }
    ]
  }
];

//#endregion
//#region 尝试修改数据结构，不使用children
//  const options=[
//    {
//      value:'zhejiang',
//      label:'zhejiang',
//      city:[
//        {
//         value:'hangzhou',
//         label:'hangzhou',
//         region:[
//           {
//             value: 'xihu',
//             label: 'West Lake',
//             isLeaf: true          
//           }
//         ]
//        },
//        {
//          value:'ningbo',
//          label:'ningbo',
//          isLeaf:true,
//        }
//      ]
//    }
//  ];
//  const otherOptions=[
//   {
//     value:'jiangsu',
//     label:'jiangsu',
//     city:[
//       {
//        value:'nanjing',
//        label:'nanjing',
//        region:[
//          {
//            value: 'zhonghuamen',
//            label: 'zhonghuamen',
//            isLeaf: true          
//          }
//        ]
//       }
//     ]
//   } 
//  ];
//#endregion
@Component({
  selector: 'app-cascader',
  templateUrl: './cascader.component.html',
  styleUrls: ['./cascader.component.css']
})
export class CascaderComponent implements OnInit {

  nzOptions:any[]|null=null;
  values:any[]|null=null;
  constructor() { }
  // public IsCreditSendToSapDisabled:boolean=true;
  // public creditSendToSap:boolean=undefined;

  ngOnInit() {
    //这里写定时器是为什么?
    // setTimeout(() => {
    //   this.nzOptions = options;
    // }, 100);
    this.nzOptions=options;
    //#region 
    // console.log(this.IsCreditSendToSapDisabled);
    // console.log(this.creditSendToSap);
    // console.log(this.IsCreditSendToSapDisabled&&!this.creditSendToSap);
    //#endregion
    console.log(`testBool: ${this.testBool}`);
    console.log(`testBool: ${!this.testBool}`);
    console.log(`testBool: ${true}`);
    console.log(`testBool: ${false}`);
    console.log(`testBool: ${isNullOrUndefined(this.testBool)}`);
    console.log(`testBool: ${!isNullOrUndefined(this.testBool)}`);
    console.log(`testBool: ${null}`);
    console.log(`testBool: ${!null}`);
  }
  //#region  基本省市级连
  changeNzOptions(): void {
    if (this.nzOptions === options) {
      this.nzOptions = otherOptions;
    } else {
      this.nzOptions = options;
    }
  }
  onChanges(values: any): void {
    console.log(values, this.values);
  }
  //#endregion
  //#region  
  arrayOptions:NzCascaderOption=options;
  onArrayChanges(values: string[]): void {
    console.log(values, this.values);
  }
  //#endregion
  //#region 自定义
  defineOptions:NzCascaderOption=options;
  defineValues: string[] | null = null;
  text = 'Unselect';

  onDefineChanges(values: string[]): void {
    console.log(values, this.values);
  }

  onDefineSelectChanges(selectedOptions: NzCascaderOption[]): void {
    this.text = selectedOptions.map(o => o.label).join(', ');
  }
  //#endregion
  //#region 
  public isShowTestDiv:boolean=this.checkDoSomething(true,1);
  checkDoSomething(aaa:boolean,num:number){
    console.log(`${aaa} ${num}`);
    return true;
  }
  public testBool:boolean;
  //#endregion
}
