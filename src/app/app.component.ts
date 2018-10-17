import { Component } from '@angular/core';
import { UsersService } from 'src/app/usersservice.service';
import { OnInit, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { CounterService } from 'src/app/counterserive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {

counterTotal: number;
answerCounter: number ;

constructor(private usersService: UsersService, private counterService: CounterService) {
}

ngOnInit() {
}

ngOnChanges() {
this.counterTotal = this.usersService.counter; // redundant
console.log('ngOnChanges() functional');
}


askCounterTotal() {
  this.counterTotal = this.usersService.counter;
  this.answerCounter = this.counterTotal;
  console.log('askCounterTotal() called');
  console.log(this.counterTotal);
}

}
