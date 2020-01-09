import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { MyFileUploadComponent } from './Components/my-file-upload/my-file-upload.component';
import { CollapsePanelComponent } from './Components/collapse-panel/collapse-panel.component';
import { AccountCardComponent } from './Components/account-card/account-card.component';
import {NestedTableComponent} from './Components/nested-table/nested-table.component';
import {TreeComponent} from './Components/tree/tree.component';
import { BreadcrumbComponent } from './Components/breadcrumb/breadcrumb.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';

registerLocaleData(zh);

@NgModule({
   declarations: [
      AppComponent,
      MyFileUploadComponent,
      CollapsePanelComponent,
      AccountCardComponent,
      NestedTableComponent,
      TreeComponent,
      BreadcrumbComponent,
      AutocompleteComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      IconsProviderModule,
      NgZorroAntdModule,
      FormsModule,
      HttpClientModule,
      BrowserAnimationsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
