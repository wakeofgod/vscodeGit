import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.css']
})
export class AccountCardComponent implements OnInit {
  AccountBases:any[];
  previewVisible: boolean = false;
  previewImage: string;
  isempty = false;
  gridLogo = {
    width: '10%',
    textAlign: 'center',
    'box-shadow': 'none'
  };
  gridInfo = {
    width: '90%',
    // textAlign: 'center',
    'box-shadow': 'none'
  };
  gridMore= {
    width: '100%',
    // textAlign: 'center',
    'box-shadow': 'none',
    'margin-top':'2px',
    'padding':'5px',
    'background-color': '#E6E6E6'
  };
  constructor() { }

  ngOnInit() {
  }

}
