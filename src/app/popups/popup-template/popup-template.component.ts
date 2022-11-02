import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'popup-template',
  templateUrl: './popup-template.component.html',
  styleUrls: ['./popup-template.component.scss']
})
export class PopupTemplateComponent {
  @Input() matIcon: string = 'home';

  @Input() label: string = 'Label';

  @Input() subLabel: string = 'Sub Label';

  @Input() disabledSubmit: boolean = false;

  @Output() closedEvent: EventEmitter<void> = new EventEmitter();

  @Output() submitEvent: EventEmitter<void> = new EventEmitter();

  constructor() { }

  onClose(): void {
    this.closedEvent.emit();
  }

  onSubmit(): void {
    this.submitEvent.emit();
  }
}
