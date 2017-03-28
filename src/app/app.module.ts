import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AgendaComponent } from './agenda/agenda.component';
import { SettingsComponent } from './settings/settings.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AuthComponent } from './auth/auth.component';
import { CarouselSettingsComponent } from './settings/carousel-settings.component';
import { AgendaSettingsComponent } from './settings/agenda-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    AgendaComponent,
    SettingsComponent,
    FileUploadComponent,
    AuthComponent,
    CarouselSettingsComponent,
    AgendaSettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
