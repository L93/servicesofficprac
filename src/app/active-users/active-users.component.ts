import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersService } from 'src/app/usersservice.service';


@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  constructor( private usersService: UsersService) {}

  users = [];

  ngOnInit() {
    this.users = this.usersService.activeUsers;
  }

  // @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
    console.log('active-users onSetToInactive() working!');
  }
}
