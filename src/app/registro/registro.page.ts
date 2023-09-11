import { Component, OnInit } from '@angular/core';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
}from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioregistro: FormGroup;

  constructor(public fb:FormBuilder,
    public alertController: AlertController) { 
  
  this.formularioregistro = this.fb.group   ({
    'name':new FormControl("",Validators.required),
    'apellido':new FormControl("",Validators.required),
    'rut':new FormControl("",Validators.required),
    'carrera':new FormControl("",Validators.required),
    'contra':new FormControl("",Validators.required)



  })
    
  }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioregistro.value;


    if(this.formularioregistro.invalid){
      const alert = await this.alertController.create({
        header: 'datos incorrectos',
        message: 'faltan datos por rellenar',
        buttons: ['Aceptar'],
      });
  
      await alert.present();
      return;
    }
    var usuario = {
      name: f.name,
      apellido: f.apellido,
      rut: f.rut,
      carrera: f.carrera,
      contra: f.contra
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));

  }

  onPasswordInput(event: any) {
    const input = event.target;
    const value = input.value;

    // Eliminar caracteres no numéricos
    input.value = value.replace(/\D/g, '');
  }





}
