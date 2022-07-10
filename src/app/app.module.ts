import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CounterComponent } from "./counter/counter.component";
import { CustomCounterComponent } from "./custom-counter/custom-counter.component";
import { CounterValueDirective } from "./custom-counter/counter-value.directive";
import { CounterIncBtnDirective } from "./custom-counter/counter-inc-btn.directive";
import { CounterDecBtnDirective } from "./custom-counter/counter-dec-btn.directive";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    CounterComponent,
    CustomCounterComponent,
    CounterValueDirective,
    CounterIncBtnDirective,
    CounterDecBtnDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
