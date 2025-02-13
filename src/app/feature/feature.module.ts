import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './list-item/list-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';




@NgModule({
  declarations: [
    ListItemComponent,
    EditItemComponent,    
  ],
  imports: [
    CommonModule
  ]
})
export class FeatureModule { }
