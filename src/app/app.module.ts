import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {  HttpModule} from "@angular/http";
import { NgModule, Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataGridModule} from 'primeng/datagrid';
import {DialogModule} from 'primeng/dialog';
import {PanelModule} from 'primeng/panel';
import {TabViewModule} from 'primeng/tabview';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    DialogModule,
    DataGridModule,
    PanelModule,
    TabViewModule,
    CodeHighlighterModule,
    CommonModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
