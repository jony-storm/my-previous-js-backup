import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  providers: [Title]
})
export class ErrorComponent implements OnInit {
  pageTitle: string = "Angular app - Error Page"
  constructor(private title: Title) {
    this.title.setTitle(this.pageTitle)
  }

  ngOnInit() {
  }

}
