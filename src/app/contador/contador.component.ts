import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h3>La Base es: <strong>{{base}}</strong></h3>
        <button (click)="acumular(base)"> + {{base}} </button>
        <span>{{numero}}</span>
        <button (click)="acumular(-base)"> - {{base}} </button>
    `
})
export class ContadorComponent {
    public title: string = 'Contador App';
    public numero: number = 0;
    public base: number = 5;
  
    acumular(valor: number) {
      this.numero += valor;
    }
}