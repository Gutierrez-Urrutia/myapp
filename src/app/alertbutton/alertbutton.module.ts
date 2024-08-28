import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AlertbuttonComponent } from './alertbutton.component';



@NgModule({
  declarations: [AlertbuttonComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    AlertbuttonComponent
  ]
})
export class AlertbuttonModule { }
