import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: BehaviorSubject<User[]> = this.userService.list$;
  user = new User();

  filterPhrase: string = '';
  filterKey: string = 'name';

  columnKey: string = '';

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getAll()
  }

  onDelete(user: User): void {
    this.userService.remove(user);
  }

  onColumnSelect(key: string): void {
    this.columnKey = key;
}

setUsertoDelete(user: User): void {
  this.user = user;
  $('#confirmationDialog').on('shown.bs.modal', function () {
    $('#cancelButton').trigger('focus')
    let deleteIcon = document.querySelector(".fa-spinner");
    if (deleteIcon !== null) {
      deleteIcon.classList.remove("fa-spinner", "fa-pulse");
      deleteIcon.classList.add("fa-trash");
    }
  })
}
}