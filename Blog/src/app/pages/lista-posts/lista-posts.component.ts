import { Component, inject } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/post.interface';
import { Router } from '@angular/router';
import { CutTextPipe } from '../../cut-text.pipe';


@Component({
  selector: 'app-lista-posts',
  standalone: true,
  imports: [CutTextPipe],
  templateUrl: './lista-posts.component.html',
  styleUrl: './lista-posts.component.css'
})
export class ListaPostsComponent {
  
  postServices = inject(PostsService)
  route = inject(Router)
  
  
  arrPost: Post[] = []
  arrCategorias: string[] = []
textoCortado:string = ''
categoriaJson: string = ''
arrPostLocalStorage: Post[]=[]


ngOnInit(){
  this.arrPost = this.postServices.getAll()
  this.arrCategorias = this.postServices.getCategories()
 
 console.log(this.arrPostLocalStorage)
 

  
}
onClick(categoria: string){
  this.arrPost = this.postServices.getByCategoria(categoria)
}
onClickPost(id: string){
this.route.navigate([id])
}
onClickGetAll(){
  this.arrPost = this.postServices.getAll()
}

}
