import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
  @Input() value = 0;
  @Output() changed = new EventEmitter<number>();

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
