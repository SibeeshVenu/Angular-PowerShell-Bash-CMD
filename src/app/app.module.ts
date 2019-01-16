import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReleaseComponent } from './components/release/release.component';
import { Http, HttpModule } from '@angular/http';
import { ReleaseService } from './services/release.service';

@NgModule({
  declarations: [
    AppComponent,
    ReleaseComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ ReleaseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
