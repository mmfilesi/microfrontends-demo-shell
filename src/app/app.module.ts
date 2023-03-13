import { LazyElementsModule } from '@angular-extensions/elements';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent],
  imports: [BrowserModule, LazyElementsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  /* Seteamos ngZone en window para pisar el de las micro apps */
  constructor(private ngZone: NgZone) {
    (window as any).ngZone = this.ngZone;
  }
}
