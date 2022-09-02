import { Component, OnInit } from '@angular/core';
import { ProfileListService } from '../services/profile-list.service'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css'],
  providers: [Title]
})

export class ProfileListComponent implements OnInit {
    public pageTitle: string = 'Angular app - Profiles Page'
    public profiles = [];
    // public userInfo: any;

    constructor(private proListService: ProfileListService, private title: Title) {
        this.title.setTitle(this.pageTitle)
    }
    
    ngOnInit() {
        this.proListService.getUsersInfo().subscribe((data) => {
            this.profiles = Array.from(Object.keys(data), (k) => data[k])
        })
    }
}
