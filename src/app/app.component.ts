import { Component, OnInit } from '@angular/core';

declare global {

  interface ConsoleTime {
    time(label: string): void;
    timeEnd(label: string): number;
  }

  interface Window {
    __$performace__: ConsoleTime;
    dataLayer: any;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'github-page-demo';

  ngOnInit() {
     const v = window.__$performace__.timeEnd('main')

     const event = {
      "event": "performance_main",
      "value": v
     }

     window.dataLayer.push(event)
  }
}
