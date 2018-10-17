import { Injectable } from '@angular/core';

@Injectable()

export class CounterService {

counterActivated = 0;
counterDeactivated = 0;
counterTotal: number;

addToActivated() {
this.counterActivated = this.counterActivated + 1;
this.counterTotal = this.counterActivated + this.counterDeactivated;
console.log ('From CounterService, counterTotal: ' + this.counterTotal);

}

addToDeactived () {
  this.counterDeactivated = this.counterDeactivated + 1;
  this.counterTotal = this.counterDeactivated + this.counterActivated;
  console.log ('From CounterService, counterTotal: ' + this.counterTotal);
}

}
