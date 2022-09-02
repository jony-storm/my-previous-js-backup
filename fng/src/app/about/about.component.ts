import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  title = "Angular app - About Page"
  constructor() { }

  ngOnInit() {
    console.log("This is about component")
  }

}
