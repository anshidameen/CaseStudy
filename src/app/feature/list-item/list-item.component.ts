import { Component, OnInit } from '@angular/core';
import { MockServiceService } from 'src/app/core/services/mock-service.service';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  constructor(private mock:MockServiceService) { }
  items: any[]=[] ;
  currentItem = {  name: '', email: '', address: { city: '', street: '', zipcode: '' } };
  isFormVisible: boolean = false;
  ngOnInit(): void {
    this.getAllList();
  }

  getAllList(){
    this.mock.getList().subscribe((data)=>{
      this.items=data
    },
    (error)=>{
      console.error('Error fetching items', error);
    })
  }
  onSubmit(){
    this.mock.addList(this.currentItem).subscribe((data)=>{
      alert("form sumitted");
      console.log(this.currentItem);
      this.items.push(data);
      this.toggleForm();
    },
    (error)=>{
      console.log("error occured");
    }
  )
  }
  toggleForm() {
    this.isFormVisible = !this.isFormVisible; 
  }


}
