import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Elements</h1>
    <div id="container"></div>
    <button (click)="addElements()">Add Elements</button>
  `
})
export class AppComponent {
  addElements() {
    const container = document.getElementById('container');
    container.innerHTML = '<best-elements></best-elements';
  
  }
}
