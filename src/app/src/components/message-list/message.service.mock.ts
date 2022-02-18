import { of } from 'rxjs';

export class MessageServiceMock {
  getMessages() {
    return of([
      { userId: 1, id: 1, title: 'title 1', body: 'body 1' },
      { userId: 2, id: 2, title: 'title 2', body: 'body 2' },
      { userId: 3, id: 3, title: 'title 3', body: 'body 3' },
    ]);
  }
}
