import { Component } from "@angular/core";
import { DataService } from "./data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "frontend";
  constructor(private dataService: DataService) {}
  companies = [];

  click() {
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.companies = data;
    });
  }
  candidate = "Candidato 1";
}
