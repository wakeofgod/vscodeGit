import { Component, OnInit } from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd/message';
import {NzUploadComponent,UploadChangeParam,UploadFile, UploadXHRArgs} from 'ng-zorro-antd/upload';
import {HttpClient,HttpResponse,HttpRequest} from '@angular/common/http';
import {filter} from 'rxjs/operators';
import {NzModalComponent,NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-my-file-upload',
  templateUrl: './my-file-upload.component.html',
  styleUrls: ['./my-file-upload.component.css']
})
export class MyFileUploadComponent implements OnInit {
   url:string="";
   uploading=false;
   fileList:UploadFile[]=[];
  //
  isVisible:boolean=false;
  modalContext:string='我是修改前的内容';
  clickCount:number=0;
  //
  selectedProvince="Zhejiang";
  selectedCity="Hangzhou";
  provinceData=['please select','Zhejiang','Jiangsu'];
  cityData:{[place:string]:string[]}={
    'please select':['please select'],
    Zhejiang:['Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu:['Nanjing', 'Suzhou', 'Zhenjiang']
  };
  public arr = [{ name: 'lina', age: 25 }, { name: 'ben', age: 22 }, { name: 'xiaoling', age: 33 }, { name: 'jun', age: 18 }];
  constructor(private msg:NzMessageService,
              private http:HttpClient,
              private modalService:NzModalService) { }
//#region upload
  beforeUpload=(file:UploadFile):boolean=>{
    debugger;
    this.fileList=this.fileList.concat(file);
    //false手动上传，true自动上传
    //return false;
    return true;
  }
  handleUpload():void{
    const formData=new FormData();
    this.fileList.forEach((file:any)=>{
      formData.append('files[]',file);
    });
    formData.append('config', 'CRM');
    this.uploading=true;
    const req=new HttpRequest('POST','http://localhost:9003/api/FileServer/UploadFile',formData,{});
    this.http.request(req)
    .pipe(filter(e=>e instanceof HttpResponse))
    .subscribe(
      result=>{
        debugger;
        this.uploading=false;
        this.fileList=[];
        this.msg.success('upload successfully');
      }
    )
  }
  // autoUpload(){
  //   debugger;
  //   console.log(this.fileList)
  // }
  autoUpload=(item:UploadXHRArgs)=>{
    debugger;
    const formData=new FormData();
    this.fileList.forEach((file:any)=>{
      formData.append('files[]',file);
    });
    formData.append('config', 'CRM');
  }
  //#endregion
  ngOnInit() {
    this.print();
  }
//#region modal
handleOk():void{
  this.modalService.confirm({
    nzTitle:"Confirm",
    nzContent:'Bla bla ...',
    nzOkText:'OK',
    nzCancelText:'Cancel',
    nzOnOk:()=>{
      alert(123);
      this.modalContext="我是修改后的内容";
      this.clickCount++;
      //this.isVisible=false;
    }
  });
}
handleCancel():void{
  this.isVisible=false;
}
showConfirm():void{
  this.modalService.confirm({
    nzTitle:"Confirm",
    nzContent:'Bla bla ...',
    nzOkText:'OK',
    nzCancelText:'Cancel'
  });
}
showModal():void{
this.isVisible=true;
}
//#endregion

//#region 
provinceChange(value:string):void{
  this.selectedCity=this.cityData[value][0];
}
//#endregion
//#region 
sortBy(key:string):any{
  return ((a:any,b:any)=>{
    if(a[key]<b[key]){
      return -1;
    }else if(a[key]>b[key]){
      return 1;
    }
    else{
      return 0;
    }
  })
}
print():void{
  console.log(this.arr);
  
  console.log(this.arr.sort(this.sortBy('name')));
}
//#endregion
}
