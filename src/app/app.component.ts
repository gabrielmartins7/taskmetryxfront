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

  async click() {
    let response = await new Promise((resolve) => {
      this.dataService.sendGetRequest().subscribe((data: any[]) => {
        this.companies = data;
        resolve(this.companies);
      });
    });
    return response;
  }
  candidate = "Candidato 1";
}
