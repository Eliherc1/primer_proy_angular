import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';
import { TiempoComponent } from './componentes/tiempo/tiempo.component';

const routes: Routes = [   //aqui van las rutas
  {path: 'main', component: MainComponent} ,
  {path: 'tiempo', component: TiempoComponent} ,
  {path: '',redirectTo:'/main', pathMatch: 'full'}, //si el usuario no indica ruta redigira a main
  {path:'**', component: MainComponent} //si el usuario indica cualquier ruta llamara a main
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
