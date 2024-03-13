import { Routes } from '@angular/router';
import { ListaPostsComponent } from './pages/lista-posts/lista-posts.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { DetallePostComponent } from './pages/detalle-post/detalle-post.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/posts'},
    {path: 'posts', component: ListaPostsComponent},
    {path: 'posts/:idPost', component:DetallePostComponent},
    {path: 'new', component: FormularioComponent},
    {path: '**', redirectTo: '/posts'}
];
