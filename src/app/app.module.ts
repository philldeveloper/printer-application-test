import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { NgxPrinterModule } from "ngx-printer";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgxPrinterModule.forRoot({ printOpenWindow: false })
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
