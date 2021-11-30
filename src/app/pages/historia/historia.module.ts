import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HistoriaPage } from './historia.page';

import { HistoriaPageRoutingModule } from './historia-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoriaPageRoutingModule
  ],
  declarations: [HistoriaPage]
})
export class HistoriaPageModule {}
