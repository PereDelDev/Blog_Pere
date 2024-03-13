import { Component, inject } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-detalle-post',
  standalone: true,
  imports: [],
  templateUrl: './detalle-post.component.html',
  styleUrl: './detalle-post.component.css'
})
export class DetallePostComponent {
postServices = inject(PostsService)
activatedRoute = inject(ActivatedRoute)
id = 0
post: Post = {}
ngOnInit(){
  this.activatedRoute.params.subscribe(params =>{
    this.id = Number(params['idPost'])  
  })
  this.post = this.postServices.getPost(this.id)
}
}