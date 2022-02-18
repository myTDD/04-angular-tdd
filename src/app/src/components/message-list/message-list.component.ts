// //import { Component, Input, OnInit } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
// //import { Observable } from 'rxjs';
// import { Message } from 'src/app/models/message/message';
// import { MessageService } from 'src/app/services/message/message.service';

// @Component({
//   selector: 'app-message-list',
//   templateUrl: './message-list.component.html',
//   styleUrls: ['./message-list.component.css']
// })
// export class MessageListComponent implements OnInit {
//   //@Input() messageList: Message[] = [];
  
//   title = 'angular-tdd';
//   messageList: Message[] = [];
//   messageId!: number;
//   messageText!: string;
//   err_msg: string = "";

//   constructor(public messageService: MessageService) {
//   }

//   ngOnInit() {
//     this.getMessages();
//     // this.messageService.getMessages().subscribe(
//     //   (res) => {
//     //     this.messageList = res;
//     //   },
//     //   (err) => {
//     //     this.err_msg = 'Error while loading User List';
//     //   }
//     // );
//   }

//   getMessages() {
//     this.messageService.getMessages().subscribe(messages => this.messageList = messages);
//   }

//   // addNewMessage(): void {
//   //   this.messageService.addNewMessage(new Message(this.messageId, this.messageText));
//   //   console.log(this.messageText);
//   // }
// }

import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messageList = [];
  err_msg: string = '';

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.getMessages();
  }

  getMessages() {
    this.messageService.getMessages().subscribe(messages => this.messageList = messages);
  }
}

