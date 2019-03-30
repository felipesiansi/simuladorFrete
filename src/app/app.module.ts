import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SalesModule } from './sales/sales.module';

const routes: Routes = [
  { path: 'sales', loadChildren:'./sales/sales.module#SalesModule' },
  { path: 'demo', loadChildren:'./demo/demo.module#DemoModule' },
  { path:'**', redirectTo:'sales' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(routes),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
