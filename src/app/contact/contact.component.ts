import { Component, OnInit } from '@angular/core';
import { contact } from '../_models/user.model';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient, private data: DataService) { }

  ngOnInit(): void {
  }

  Sent(postData: contact) {
    // Send Http request
    this.data.Sent(postData);
  }

}
