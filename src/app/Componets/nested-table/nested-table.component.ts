import { Component, OnInit } from '@angular/core';
import {CreditExpandAttachment} from 'src/app/Model/credit';
import {CreditAttachment} from 'src/app/Model/creditAttachment'
interface ParentItemData {
  key: number;
  name: string;
  platform: string;
  version: string;
  upgradeNum: number | string;
  creator: string;
  createdAt: string;
  expand: boolean;
}

interface ChildrenItemData {
  key: number;
  name: string;
  date: string;
  upgradeNum: string;
}
@Component({
  selector: 'app-nested-table',
  templateUrl: './nested-table.component.html',
  styleUrls: ['./nested-table.component.css']
})
export class NestedTableComponent implements OnInit {
  listOfParentData: ParentItemData[] = [];
  listOfChildrenData: ChildrenItemData[] = [];
  showExpand1:boolean=false;
  selectedFile:CreditAttachment[]=[];
  CreditExpandAttachmentlist:CreditExpandAttachment[]=[
    {
      creditList:
      {
        creditId:'1',
        creditSegment:'房贷',
        creditLimit:100,
        CurrencyType:'RMB' ,
        ShowExpand:false  ,
        CheckedAll:false,
    }
    ,
    creditAttachment:[
      {
        dataId:'5BA178E6-F492-471A-804A-9BD822811038',
        dataType:0,
        fileId:'11F5A003-AD8C-4390-AB7B-75E119FCFE95',
        updateBy:'ceo',
        updateTime:new Date('2019-12-20 13:45:59.770'),
        remark:'两梯两户',
        checkedFile:false
      },
      {
        dataId:'98FE6E7D-7929-4AE9-8B38-D73BAC79A75D',
        dataType:0,
        fileId:'EA4422AA-2525-4B4C-9A30-3453AB950402',
        updateBy:'ceo',
        updateTime:new Date('2019-12-20 13:46:24.953'),
        remark:'三室两厅',
        checkedFile:false
      }
    ]
    },
    {
      creditList:
      {
        creditId:'2',
        creditSegment:'车贷',
        creditLimit:20,
        CurrencyType:'Dollar',
        ShowExpand:false  ,
        CheckedAll:false,
    }
    ,
    creditAttachment:[
      {
        dataId:'D72541CA-3029-4EFD-A763-1DE5ADA92F9A',
        dataType:0,
        fileId:'3B2CDC70-ED63-428D-AD14-1BCA4E111697',
        updateBy:'ceo',
        updateTime:new Date('2019-12-20 13:46:43.897'),
        remark:'买好车上瓜子'  ,
        checkedFile:false     
      },
      {
        dataId:'DBD794D9-9EBB-4D7D-B4D8-72B980722934',
        dataType:0,
        fileId:'BA260FE1-272B-439B-8E2C-7660375D35D2',
        updateBy:'ceo',
        updateTime:new Date('2019-12-20 13:46:59.797'),
        remark:'三千元,新车开回家',
        checkedFile:false
      }
    ]
    }
  ]
  ngOnInit(): void {
    for (let i = 0; i < 3; ++i) {
      this.listOfParentData.push({
        key: i,
        name: 'Screem',
        platform: 'iOS',
        version: '10.3.4.5654',
        upgradeNum: 500,
        creator: 'Jack',
        createdAt: '2014-12-24 23:12:00',
        expand: false
      });
    }
    for (let i = 0; i < 3; ++i) {
      this.listOfChildrenData.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56'
      });
    }
  }
  checkAll(data:CreditAttachment[],event:boolean):void{
    data.forEach(item=>{
      item.checkedFile=event;
      if(event){
        if(this.selectedFile.indexOf(item)<0){
          this.selectedFile.push(item);
        }
       // this.selectedFile.push(item);
      }
      else{
        //this.selectedFile=[];
        if(this.selectedFile.indexOf(item)>-1){
          this.selectedFile.splice(this.selectedFile.indexOf(item),1);
        }
        //this.selectedFile.splice(this.selectedFile.indexOf(item),1);
      }
    });
    console.log(this.selectedFile);
   }
   checkSingle(attach:CreditAttachment,event:boolean){
    if(event){
      this.selectedFile.push(attach);
    }
    else{
      //删除选中文件
      this.selectedFile.splice(this.selectedFile.indexOf(attach),1);
      //取消父级全选中状态
      this.CreditExpandAttachmentlist.forEach(item=>{
        if(item.creditAttachment.indexOf(attach)>-1){
          item.creditList.CheckedAll=false;
        }
      })
    }
    console.log(this.selectedFile);
   }
}