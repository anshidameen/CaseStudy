import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './list-item/list-item.component';
import { FormItemComponent } from './form-item/form-item.component';



@NgModule({
  declarations: [
    ListItemComponent,
    FormItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeatureModule { }
