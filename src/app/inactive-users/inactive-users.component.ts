import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from 'src/app/usersservice.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
  providers: []
})
export class InactiveUsersComponent {

  constructor ( private usersService: UsersService) {}

  users = this.usersService.inactiveUsers;


  onSetToActive (id: number) {
    this.usersService.onSetToActive(id);
    console.log(' inactive-users onSetToActive() working!');
  }
}
