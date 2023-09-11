import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  onPasswordInput(event: any) {
  const input = event.target;
  const value = input.value;

  // Eliminar caracteres no numéricos
  input.value = value.replace(/\D/g, '');
}}
