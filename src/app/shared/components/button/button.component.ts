import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-btn',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class ButtonComponent {
  @Input() btnName!: string;
  @Input() type: string = 'button';
  @Output() onClickEvent = new EventEmitter<void>();

  constructor() {}

  public onClick(): void {
    this.onClickEvent.emit();
  }
}
