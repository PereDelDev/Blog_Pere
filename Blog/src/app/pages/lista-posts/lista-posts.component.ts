import { Component, inject } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-lista-posts',
  standalone: true,
  imports: [],
  templateUrl: './lista-posts.component.html',
  styleUrl: './lista-posts.component.css'
})
export class ListaPostsComponent {
  
postServices = inject(PostsService)
arrPost: Post[] = []
ngOnInit(){
  this.arrPost = this.postServices.getAll()
}
}
