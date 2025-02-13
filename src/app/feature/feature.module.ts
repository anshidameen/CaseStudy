import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './list-item/list-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';


  

@NgModule({
  declarations: [
    ListItemComponent,
    EditItemComponent,    
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FeatureModule { }
