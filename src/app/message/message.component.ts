import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['../app.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public messageService : MessageService) { }

  ngOnInit() {
  }

}
