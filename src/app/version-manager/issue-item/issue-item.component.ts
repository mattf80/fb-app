

import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'issue-item',
  styles: [
    require('./issue-item.component.css')
  ],
  template: require('./issue-item.component.html')
})

export class IssueItemComponent {
  @Input() issue: any;
  @Output() remove = new EventEmitter(false);
  @Output() update = new EventEmitter(false);

  editing: boolean = false;
  exam: string = '';

  editTitle(): void {
    this.editing = true;
    this.exam = this.issue.exam;
  }

  saveTitle(): void {
    if (this.editing) {
      const exam: string = this.exam.trim();
      if (exam.length && exam !== this.issue.exam) {
        this.update.emit({exam});
      }
      this.stopEditing();
    }
  }

  stopEditing(): void {
    this.editing = false;
  }

  toggleStatus(): void {
    this.update.emit({
      issued: !this.issue.issued
    });
  }
}