import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FrequencyType } from 'app/interfaces/meds/FrequencyType.enum';
import { IMedication } from 'app/interfaces/meds/IMedication';
import { ITimes } from 'app/interfaces/meds/ITimes';
import { log } from 'console';

@Component({
  selector: 'app-med-list',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './med-list.component.html',
  styleUrl: './med-list.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MedListComponent {
  @Input() med!: IMedication;

  FrequencyType = FrequencyType;

  public isActive(start: Date, end: Date): boolean {
    var today = new Date();
    var start = new Date(this.med.start);
    var end = new Date(this.med.end);

    return (
      start.getTime() <= today.getTime() && end.getTime() >= today.getTime()
    );
  }

  public formatDate(dateString: string): string {
    const date = new Date(dateString);

    return isNaN(date.getTime())
      ? 'Data inválida'
      : date.toLocaleString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        });
  }
}
