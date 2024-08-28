import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PaginadosPageRoutingModule } from './paginados-routing.module';
import { PaginadosPage } from './paginados.page';
import { AlertbuttonModule } from '../alertbutton/alertbutton.module';
import { TitleModule } from '../title/title.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginadosPageRoutingModule,
    AlertbuttonModule,
    TitleModule
  ],
  declarations: [PaginadosPage]
})
export class PaginadosPageModule {}
