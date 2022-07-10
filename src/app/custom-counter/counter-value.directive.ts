import { Directive, TemplateRef } from "@angular/core";
import { CounterValueTplContext } from "./custom-counter.component";

@Directive({
  selector: "[appCounterValue]"
})
export class CounterValueDirective {
  constructor(readonly tpl: TemplateRef<CounterValueTplContext>) {}
}
