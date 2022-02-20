import { Message } from 'src/app/models/message/message';
//import { MessageServiceMock } from './message.service.mock';

type messageListResponseType = Array<Message>;

const dummyMessageListResponse: messageListResponseType = [];

// const dummyMessageListResponse: messageListResponseType = [
//   { userId: 1, id: 1, title: 'title 1', body: 'body 1' },
//   { userId: 2, id: 2, title: 'title 2', body: 'body 2' },
//   { userId: 3, id: 3, title: 'title 3', body: 'body 3' },
// ];

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

describe('MessageListComponent getMessages() method', () => {
  let messageService: MockedMessageService;
  //let messageService: MessageServiceMock;
  let messageList: any = [];

  beforeEach(() => {
    messageService = new MockedMessageService();
    //messageService = new MessageServiceMock();
  });

  // it('should have "messageList" populated from MockedMessageService', () => {
  //   messageList = messageService.getMessages();
  //   expect(messageList.length).toBeGreaterThan(0);
  // });

  // it('should have "messageList" populated from MessageServiceMock', () => {
  //   messageService.getMessages()
  //     .subscribe(messages => messageList = messages);
  //   expect(messageList.length).toBeGreaterThan(0);
  // });
});
