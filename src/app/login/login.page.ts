import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController) { 

    this.formularioLogin = this.fb.group({
      'name': new FormControl("",Validators.required),
      'contra': new FormControl("",Validators.required)
    })

  }

  ngOnInit() {
  }

  async ingresar(){
    var f = this.formularioLogin.value;
    //esta wea deberia funcionar de modo normal pero el modo stricto de angular no deja tomar null por eso el signo de exclamacion al final//
    var usuario = JSON.parse(localStorage.getItem('usuario')!);

    if(usuario.name == f.name && usuario.contra == f.contra){
      console.log('Ingresado');
    }
    else if(usuario !== null){
      const alert = await this.alertController.create({
        header: 'No hay usuarios',
        message: 'Crear usuario primero',
        buttons: ['Aceptar']
      });
  
      await alert.present();
    }
    else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos.',
        buttons: ['Aceptar']
      });
  
      await alert.present();
    }
  }


  onPasswordInput(event: any) {
    const input = event.target;
    const value = input.value;

    // Eliminar caracteres no numéricos
    input.value = value.replace(/\D/g, '');
  }
}