import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockServiceService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private storedItemsKey = 'storedItems';
  constructor(private http:HttpClient) { }

  getList():Observable<any[]>{  
      return this.http.get<any[]>(this.apiUrl);    
  }

  addList(data:any):Observable<any>{
    return this.http.post(this.apiUrl,data);
  }

  updateData(id: number, data: any) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deleteData(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
