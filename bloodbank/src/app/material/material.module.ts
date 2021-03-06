import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DragDropModule } from '@angular/cdk/drag-drop';

const material = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  DragDropModule
]

@NgModule({
  imports: [material],
  exports:[material]
})
export class MaterialModule { }
