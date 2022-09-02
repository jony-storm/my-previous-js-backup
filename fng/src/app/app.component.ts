import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Title]
})
export class AppComponent {

    constructor(private title: Title) {
        this.title.setTitle('Angular app')
    }
}
