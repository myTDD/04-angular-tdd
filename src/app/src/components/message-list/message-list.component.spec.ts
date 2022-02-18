import { Message } from 'src/app/models/message/message';
import { MessageService } from 'src/app/services/message/message.service';
import { MessageListComponent } from './message-list.component';

type messageListResponseType = Array<Message>;

const dummyMessageListResponse: messageListResponseType = [
  { userId: 1, id: 1, title: 'title 1', body: 'body 1' },
  { userId: 2, id: 2, title: 'title 2', body: 'body 2' },
  { userId: 3, id: 3, title: 'title 3', body: 'body 3' },
];

class MockedMessageService {
  getMessages() {
    return dummyMessageListResponse;
  }
}

// class MockedMessageService extends MessageService {
//   getMessages() {
//     return dummyMessageListResponse;
//   }
// }

describe('MessageListComponent', () => {
  let component: MessageListComponent;
  let messageService: MockedMessageService;
  let messageList: any = [];

  beforeEach(() => {
    messageService = new MockedMessageService();
    //component = new MessageListComponent(messageService);
    //messageService.getMessages();
  });

  afterEach(() => {
    //messageService = null;
  });

  it('should have "messageList" populated ', () => {
    messageList = messageService.getMessages();
    expect(messageList.length).toBeGreaterThan(0);
  });
});
