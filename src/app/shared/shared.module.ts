import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
    MainContentComponent,
    SidenavComponent,
    ToolbarComponent
  ],
  exports:[

    MainContentComponent,
    SidenavComponent,
    ToolbarComponent
  ]
  
})
export class SharedModule { }
