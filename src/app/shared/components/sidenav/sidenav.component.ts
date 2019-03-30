import { Component, OnInit, NgZone, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { MediaMatcher } from '@angular/cdk/layout';

const SMALL_WIDTH_BREAKPOINT = 720;


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList 
  = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  private _mediaMatcherListener: () => void;


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {

    this._mediaMatcherListener = () => changeDetectorRef.detectChanges();
    this.mediaMatcher.addListener(this._mediaMatcherListener);

    
   }

   ngOnInit() {
   }

   isScreenSmall():boolean{
    console.log(this.mediaMatcher.matches);
    return this.mediaMatcher.matches;
  }

}
