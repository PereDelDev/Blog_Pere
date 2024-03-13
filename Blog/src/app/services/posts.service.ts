import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { POSTS } from '../data/posts.data';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
    
  arrPost: Post[]= POSTS

  create(post: Post){
    this.arrPost.push(post)
  }
  getAll(){
    return this.arrPost
  }
  getByCategoria(cat: string){
    return this.arrPost.filter(post => post.categoria === cat)
  }
}
