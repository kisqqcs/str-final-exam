import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = this.userService.getAll();
  user = new User();

  filterPhrase: string = '';
  filterKey: string = 'name';

  columnKey: string = '';

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void { }

  onDelete(user: User): void {
    this.userService.remove(user);
  }

  onColumnSelect(key: string): void {
    this.columnKey = key;
}
}