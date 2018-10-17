import { Injectable, Output } from '@angular/core';
import { CounterService } from 'src/app/counterserive.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Injectable()

export class UsersService implements OnInit {

  constructor( private counterService: CounterService) {}



activeUsers = ['Max', 'Anna'];
inactiveUsers = ['Chris', 'Manu'];
counter;

ngOnInit() {

}

onSetToActive(id: number) {
this.activeUsers.push(this.inactiveUsers[id]);
this.inactiveUsers.splice(id, 1);
console.log('onSetToActive() deployed. ID received: ' + id);
console.log ('active: ' + this.activeUsers + 'inActive: ' + this.inactiveUsers );
this.counterService.addToActivated();
console.log('activated: ' + this.counterService.counterActivated);
this.counter = this.counterService.counterTotal;
console.log('New counter total: ' + this.counter);

}

onSetToInactive (id: number) {
  this.inactiveUsers.push(this.activeUsers[id]);
  this.activeUsers.splice(id, 1);
  console.log('onSetToInactive() deployed. ID received: ' + id);
  console.log ('active: ' + this.activeUsers + 'inActive: ' + this.inactiveUsers );
  this.counterService.addToDeactived();
  console.log('deactivated: ' + this.counterService.counterDeactivated);
  this.counter = this.counterService.counterTotal;
  console.log('New counter total: ' + this.counter);

}

getCounterTotal () {
return this.counter;
}
}
