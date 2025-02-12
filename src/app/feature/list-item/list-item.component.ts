import { Component, OnInit } from '@angular/core';
import { MockServiceService } from 'src/app/core/services/mock-service.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  constructor(private mock:MockServiceService) { }
  items:any[] =[];
  ngOnInit(): void {
    this.getAllList();
  }

  getAllList(){
    this.mock.getList().subscribe((res)=>{
      this.items=res
    },
    (error)=>{
      console.error('Error fetching items', error);
    })
  }
}
