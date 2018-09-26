import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { createCustomElement } from '@angular/elements'

import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [BrowserModule],
  entryComponents: [HeaderComponent]
})
export class HeaderModule { 
  constructor(private injector: Injector) {
    const customEle = createCustomElement(HeaderComponent, {injector: this.injector});
    customElements.define('custom-header',customEle);
  }

  ngDoBootstrap() {}
}
