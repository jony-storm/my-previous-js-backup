import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers:[Title]
})
export class ContactComponent implements OnInit {
    public pageTitle = "Angular app - Contact Page"
    constructor(private title: Title) {
        this.title.setTitle(this.pageTitle)
    }
    ngOnInit() {}
}
