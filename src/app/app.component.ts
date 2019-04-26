import { Component } from "@angular/core";

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {}
