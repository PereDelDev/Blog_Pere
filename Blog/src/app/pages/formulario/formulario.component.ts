import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

postServices = inject(PostsService)

formulario: FormGroup = new FormGroup({
  titulo: new FormControl(null, Validators.required),
  texto: new FormControl(null, Validators.required),
  autor: new FormControl(null, Validators.required),
  imagen: new FormControl(null, Validators.required),
  fecha: new FormControl(null, Validators.required),
  categoria: new FormControl(null, Validators.required)
})

onSubmit(){
this.postServices.create(this.formulario.value)
console.log(this.formulario.value)
}
}
