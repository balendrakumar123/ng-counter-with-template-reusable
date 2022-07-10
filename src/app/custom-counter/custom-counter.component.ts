import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ContentChild,
  TemplateRef
} from "@angular/core";

import { CounterValueDirective } from "./counter-value.directive";
import { CounterIncBtnDirective } from "./counter-inc-btn.directive";
import { CounterDecBtnDirective } from "./counter-dec-btn.directive";

export interface CounterValueTplContext {
  $implicit: number;
}

export interface CounterBtnTplContext {
  $implicit: () => void;
}

@Component({
  selector: "app-custom-counter",
  templateUrl: "./custom-counter.component.html",
  styleUrls: ["./custom-counter.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomCounterComponent {
  // @ContentChild(CounterValueDirective, { static: true, read: TemplateRef })
  // counterValueTpl: TemplateRef<CounterValueTplContext>;
  // @ContentChild(CounterIncBtnDirective, { static: true, read: TemplateRef })
  // counterIncBtnTpl: TemplateRef<CounterBtnTplContext>;
  // @ContentChild(CounterDecBtnDirective, { static: true, read: TemplateRef })
  // counterDecBtnTpl: TemplateRef<CounterBtnTplContext>;

  @ContentChild(CounterValueDirective, { static: true })
  counterValueDir: CounterValueDirective;
  @ContentChild(CounterIncBtnDirective, { static: true })
  counterIncBtnDir: CounterIncBtnDirective;
  @ContentChild(CounterDecBtnDirective, { static: true })
  counterDecBtnDir: CounterDecBtnDirective;

  @Input() title = "Counter";
  @Input() value = 0;
  @Output() changed = new EventEmitter<number>();

  get counterValueTpl(): TemplateRef<CounterValueTplContext> {
    return this.counterValueDir?.tpl;
  }

  get counterIncBtnTpl(): TemplateRef<CounterBtnTplContext> {
    return this.counterIncBtnDir?.tpl;
  }

  get counterDecBtnTpl(): TemplateRef<CounterBtnTplContext> {
    return this.counterDecBtnDir?.tpl;
  }

  get counterValueTplContext(): CounterValueTplContext {
    return { $implicit: this.value };
  }

  get counterIncBtnTplContext(): CounterBtnTplContext {
    return { $implicit: () => this.increment() };
  }

  get counterDecBtnTplContext(): CounterBtnTplContext {
    return { $implicit: () => this.decrement() };
  }

  increment() {
    this.updateValue("inc");
  }

  decrement() {
    this.updateValue("dec");
  }

  private updateValue(action: "inc" | "dec") {
    const delta = action === "inc" ? 1 : -1;
    this.value += delta;
    this.changed.emit(this.value);
  }
}
