import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MessageService } from './message.service';
import { Message } from 'src/app/models/message/message';

//type messageListResponseType = Array<{userId: number, id: number, title: string, body: string}>;
type messageListResponseType = Array<Message>;

const dummyMessageListResponse: messageListResponseType = [
  { userId: 1, id: 1, title: 'title 1', body: 'body 1' },
  { userId: 2, id: 2, title: 'title 2', body: 'body 2' },
  { userId: 3, id: 3, title: 'title 3', body: 'body 3' },
];

describe('MessageService', () => {
  let injector: TestBed;
  let service: MessageService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MessageService],
    });

    injector = getTestBed();
    service = injector.get(MessageService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('getMessages() should return data', () => {
    service.getMessages().subscribe((res) => {
      expect(res).toEqual(dummyMessageListResponse);
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(req.request.method).toBe('GET');
    req.flush(dummyMessageListResponse);
  });
});
