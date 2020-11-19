import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBookComponent } from './create-book/create-book.component';
import { DeleteFormComponent } from './delete-form/delete-form.component';
import { DetailComponent } from './detail/detail.component';
import { ShowAllComponent } from './show-all/show-all.component';



const routes: Routes = [
  {path:'',component: ShowAllComponent},
  {path:'create', component: CreateBookComponent},
  {path:'detail/:id',component:DetailComponent},
  {path:'delete/:id', component: DeleteFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
