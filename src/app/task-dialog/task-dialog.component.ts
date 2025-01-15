import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../Interfaces/task';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog'; 
import { FormsModule } from '@angular/forms'; 
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-task-dialog',
  imports: [CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
  FormsModule,MatIcon],
  templateUrl: './task-dialog.component.html',
  styleUrl: './task-dialog.component.css'
})
export class TaskDialogComponent {

  public backupTask: Partial<Task> | undefined;
  
  constructor(
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskDialogData
  ) {}
  ngOnInit(): void {
    this.backupTask = { ...this.data.task };
  }
  
  //private backupTask: Partial<Task> = { ...this.data.task };

  public onCancel(): void {
    this.dialogRef.close(this.backupTask);
  }

}

export interface TaskDialogData {
  task: Partial<Task>;
  enableDelete: boolean;
}

export interface TaskDialogResult {
  task: Task;
  delete?: boolean;
}
