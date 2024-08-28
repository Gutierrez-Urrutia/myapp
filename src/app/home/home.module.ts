import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { AlertbuttonModule } from '../alertbutton/alertbutton.module';
import { TitleModule } from '../title/title.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AlertbuttonModule, 
    TitleModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
