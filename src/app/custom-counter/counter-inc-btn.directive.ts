import { Directive, TemplateRef } from "@angular/core";
import { CounterBtnTplContext } from "./custom-counter.component";

@Directive({
  selector: "[appCounterIncBtn]"
})
export class CounterIncBtnDirective {
  constructor(readonly tpl: TemplateRef<CounterBtnTplContext>) {}
}
