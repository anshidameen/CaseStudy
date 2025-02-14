import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MockServiceService } from 'src/app/core/services/mock-service.service';


@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  currentItem: any = {
    id: null,
    name: '',
    email: '',
    address: {
      city: '',
      street: '',
      zipcode: ''
    }
  };

  constructor(private route: ActivatedRoute, private router: Router,private mock: MockServiceService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; 
    this.fetchItem(id);
  }

  fetchItem(id: number): void {
    this.mock.getList().subscribe(
      (data: any[]) => {
        const item = data.find(item => item.id === id);
        if (item) {
          this.currentItem = item;
        } else {
          console.error('Item not found');
        }
      },
      (error: any) => {
        console.error('Error fetching item:', error);
      }
    );
  }

  onSubmit(): void {
  this.mock.updateData(this.currentItem).subscribe((data)=>{
    console.log(this.currentItem)
    this.router.navigate(['/list']); 
  },
  (error) => {
    console.error('Error updating item:', error);
  }
)
  }
}
