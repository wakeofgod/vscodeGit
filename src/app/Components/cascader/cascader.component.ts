// tslint:disable:no-any
import { Component, OnInit } from '@angular/core';

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

  ngOnInit() {
    //这里写定时器是为什么?
    // setTimeout(() => {
    //   this.nzOptions = options;
    // }, 100);
    this.nzOptions=options;
  }
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
}
