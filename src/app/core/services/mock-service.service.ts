import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockServiceService {
  updateItem(currentItem: any) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private storedItemsKey = 'storedItems';
  constructor(private http:HttpClient) { }

  getList():Observable<any[]>{  
      return this.http.get<any[]>(this.apiUrl);    
  }

  addList(data:any):Observable<any>{
    return this.http.post(this.apiUrl,data);
  }

  updateData( data: any):Observable<any> {
    return this.http.put(`${this.apiUrl}/${data.id}`, data);
  }

  deleteData(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
