import { Directive, TemplateRef } from "@angular/core";
import { CounterBtnTplContext } from "./custom-counter.component";

@Directive({
  selector: "[appCounterDecBtn]"
})
export class CounterDecBtnDirective {
  constructor(readonly tpl: TemplateRef<CounterBtnTplContext>) {}
}
