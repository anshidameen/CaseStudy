import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { MockServiceService } from 'src/app/core/services/mock-service.service';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {


  constructor(private mock:MockServiceService,private router: Router) { }
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

  deleteItems(id:number){
    this.mock.deleteData(id).subscribe((res)=>{
      this.items = this.items.filter(item => item.id !== id);
      alert("are you sure you want delete this row")
      console.log('Item deleted successfully');
    }),
    (error: any) => {
      console.error('Error deleting item:', error);
    }
  }

}
