import { Component, inject } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/post.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-posts',
  standalone: true,
  imports: [],
  templateUrl: './lista-posts.component.html',
  styleUrl: './lista-posts.component.css'
})
export class ListaPostsComponent {
  
  postServices = inject(PostsService)
  route = inject(Router)
  
  
  arrPost: Post[] = []
  arrCategorias: string[] = []


ngOnInit(){
  this.arrPost = this.postServices.getAll()
  this.arrCategorias = this.postServices.getCategories()
}
onClick(categoria: string){
  this.arrPost = this.postServices.getByCategoria(categoria)
}
onClickPost(id: string){
this.route.navigate([id])
}
}
