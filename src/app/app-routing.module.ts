import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListItemComponent } from './feature/list-item/list-item.component';
import { FormItemComponent } from './feature/form-item/form-item.component';

const routes: Routes = [
  {path:'list',component:ListItemComponent},
  {path:'add',component:FormItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
