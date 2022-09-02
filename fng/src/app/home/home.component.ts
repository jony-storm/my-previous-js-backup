import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [Title],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
    public pageTitle: string = "Angular app - Home Page"
    constructor(private title: Title, public userService: UserService) {
        this.title.setTitle(this.pageTitle)
    }

    ngOnInit() {
    }

}
