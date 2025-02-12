import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemComponent } from './list-item.component';
import { MockServiceService } from 'src/app/core/services/mock-service.service';
import {HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;
  let mockService:MockServiceService;
  let httpMock:HttpTestingController

  const mockData=[
    {id:1,userId:1,title:"description",body:"body details"},
    {id:2,userId:2,title:"description2",body:"body details2"}
  ]
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemComponent ],
      imports:[HttpClientTestingModule],
      providers:[MockServiceService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
    mockService = TestBed.inject(MockServiceService);
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch items from the service and update items list', () => {

    component.getAllList();
    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
    httpMock.verify();
    expect(component.items).toEqual(mockData);
    
  });
});

