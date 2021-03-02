import { Component, VERSION } from "@angular/core";
import { NgxPrinterService } from "ngx-printer";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  constructor(private printerService: NgxPrinterService) {}

  onPrint() {
    this.printerService.printDiv("ngx-printer");
  }
}
