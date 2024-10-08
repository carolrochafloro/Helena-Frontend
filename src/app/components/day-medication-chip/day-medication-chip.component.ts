import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

import { IMedDayTime } from 'app/interfaces/meds/IMedDayTime';

@Component({
  selector: 'app-day-medication-chip',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './day-medication-chip.component.html',
  styleUrl: './day-medication-chip.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DayMedicationChipComponent {
  @Input() med!: IMedDayTime;
}
