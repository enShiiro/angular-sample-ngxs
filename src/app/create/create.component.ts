import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTutorial } from '../store/action/tutorial.action';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
  }

  addTutorial(name, desc) {
    //to make an actionm need to use dispatch and create a new action and put they payload that we declare at tutorial.action class.
    this.store.dispatch(new AddTutorial({ name: name, desc: desc }))
}
}
