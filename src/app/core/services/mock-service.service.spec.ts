import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MockServiceService } from './mock-service.service';

describe('MockServiceService', () => {
  let service: MockServiceService;
  let httpMock:HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[MockServiceService]
    });
    service = TestBed.inject(MockServiceService);
    httpMock= TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch list of items from api',()=>{
    const mockData=[
      {id:1,userId:1,title:"description",body:"body details"},
      {id:2,userId:2,title:"description2",body:"body details2"}
    ]

    service.getList().subscribe((data)=>{
      expect(data).toEqual(mockData);
    })

    const req =httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });
});
