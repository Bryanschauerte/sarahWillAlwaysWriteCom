import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';


  // use this to set correct theme class on app holder
  // eg: <div [class]="themeClass">...</div>
  themeClass: string;

  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('sarah-will-always-theme');
  }
  // constructor(
  //   private overlayContainer: OverlayContainer
  // ) { }

  ngOnInit(): void {
    // subscribe to some source of theme change events, then...
    // this.themeClass = newThemeClass;
    // this.overlayContainer.themeClass = newThemeClass;
  }
}
