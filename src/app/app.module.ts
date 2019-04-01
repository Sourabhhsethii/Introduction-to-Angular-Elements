import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ElementComponent } from './element.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AppComponent, ElementComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [ElementComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(ElementComponent, { injector: injector });
    customElements.define('best-elements', el);
  }
}
