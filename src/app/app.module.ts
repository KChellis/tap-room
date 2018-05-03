import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AddKegComponent } from './add-keg/add-keg.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { AlcoholPipe } from './alcohol.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AddKegComponent,
    EditKegComponent,
    KegListComponent,
    AlcoholPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
