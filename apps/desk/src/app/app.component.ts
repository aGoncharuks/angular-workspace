import { Component } from "@angular/core";

@Component({
  selector: "desk-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  navLinks = [
    {
      path: 'display-server-data',
      label: 'Display Server Data'
    },
    {
      path: 'shared-screen',
      label: 'Shared Screen'
    }
  ];
  constructor() {}
}
