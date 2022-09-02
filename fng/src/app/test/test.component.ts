import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service'
import { User } from './user'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
    users: User[] = [];

    private locator = (p: User, id: number) => p.id == id;

    constructor(public crudService: CrudService) { }
    
    remove(id) {
        this.crudService.delete(id).subscribe(() => {
            let index = this.users.findIndex(p => this.locator(p, id));
            if (index > -1) {
                this.users.splice(index, 1);
            }
        });
    }

    saveId(id: number) {
        sessionStorage.update_id = id
    }
    
    ngOnInit() {
        this.crudService.getAll().subscribe((data: User[])=>{
            // console.log(data);
            this.users = data;
        })
    }

}
