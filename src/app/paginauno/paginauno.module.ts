import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PaginaunoPageRoutingModule } from './paginauno-routing.module';
import { PaginaunoPage } from './paginauno.page';
import { AlertbuttonModule } from '../alertbutton/alertbutton.module';
import { TitleModule } from '../title/title.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaunoPageRoutingModule, 
    AlertbuttonModule,
    TitleModule
  ],
  declarations: [PaginaunoPage]
})
export class PaginaunoPageModule {}
