import { Component, OnInit } from '@angular/core';
import { Credit,CreditAndAttachment } from 'src/app/Model/credit';

@Component({
  selector: 'app-collapse-panel',
  templateUrl: './collapse-panel.component.html',
  styleUrls: ['./collapse-panel.component.css']
})
export class CollapsePanelComponent implements OnInit {
  selectedFile:string[]=[];
  constructor() { }

  ngOnInit() {
  }
 panels = [
    {
      active: true,
      disabled: false,
      name: 'This is panel header 1',
      childPanel: [
        {
          active: true,
          name: 'This is panel header 1-1'
        },
        {
          active: false,
          name: 'This is panel header 1-2'
        }
      ]
    },
    {
      active: false,
      disabled: true,
      name: 'This is panel header 2'
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 3'
    }
  ];
  creditAreaData=[
    {
      CreditSegment:'1',
      CreditLimit:'100',
      CurrencyType:'TWD'
    }
  ]
  creditAndAttachmentList:CreditAndAttachment[]=[
    {
      creditList:[
        {
          creditId:'1',
          creditSegment:'房贷',
          creditLimit:100,
          CurrencyType:'RMB' 
        }
      ],
    creditAttachment:[
      {
      dataId:'5BA178E6-F492-471A-804A-9BD822811038',
      dataType:0,
      fileId:'11F5A003-AD8C-4390-AB7B-75E119FCFE95',
      updateBy:'ceo',
      updateTime:new Date('2019-12-20 13:45:59.770'),
      remark:'两梯两户'
    },
    {
      dataId:'98FE6E7D-7929-4AE9-8B38-D73BAC79A75D',
      dataType:0,
      fileId:'EA4422AA-2525-4B4C-9A30-3453AB950402',
      updateBy:'ceo',
      updateTime:new Date('2019-12-20 13:46:24.953'),
      remark:'三室两厅'
    }
  ]
  },
  {
    creditList:[
      {
        creditId:'2',
        creditSegment:'车贷',
        creditLimit:20,
        CurrencyType:'Dollar'
      }
    ],
    creditAttachment:[
      {
        dataId:'D72541CA-3029-4EFD-A763-1DE5ADA92F9A',
        dataType:0,
        fileId:'3B2CDC70-ED63-428D-AD14-1BCA4E111697',
        updateBy:'ceo',
        updateTime:new Date('2019-12-20 13:46:43.897'),
        remark:'买好车上瓜子'       
      },
      {
        dataId:'DBD794D9-9EBB-4D7D-B4D8-72B980722934',
        dataType:0,
        fileId:'BA260FE1-272B-439B-8E2C-7660375D35D2',
        updateBy:'ceo',
        updateTime:new Date('2019-12-20 13:46:59.797'),
        remark:'三千元,新车开回家'
      }
    ]
  }
];
check(dataId,event){
// console.log(dataId);
// console.log(event);
  if(event){
    this.selectedFile.push(dataId);
  }
  else{
    this.selectedFile.splice(this.selectedFile.indexOf(dataId),1);
  }
  console.log(this.selectedFile);
}
}
