import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListItemComponent } from './feature/list-item/list-item.component';
import { EditItemComponent } from './feature/edit-item/edit-item.component';


const routes: Routes = [
  {path:'',component:ListItemComponent},
  {path:'list',component:ListItemComponent},
  { path: 'edit/:id', component: EditItemComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
