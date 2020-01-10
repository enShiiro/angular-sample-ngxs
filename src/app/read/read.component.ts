import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { TutorialState, TutorialStateModel } from '../store/state/tutorial.state';
import { Observable } from 'rxjs';
import { Tutorial } from '../model/tutorial.model';
import { RemoveTutorial } from '../store/action/tutorial.action';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  // tutorials$ : Observable<Tutorial>

  //this is observable for get the toturial from selector decoration in tutorialState class
  //the state value will put on tutorial$ by observable when this component is loaded.
  //to bind on html, just call "tutorial | async"on ngfor; bcause itsreturn a list.
  @Select(TutorialState.getTutorials) tutorials$: Observable<Tutorial>;

  constructor(private store : Store) { }

  ngOnInit() {

  }
  check(value){
    //to make an actionm need to use dispatch and create a new action and put they payload that we declare at tutorial.action class.
    this.store.dispatch(new RemoveTutorial(value));
    
  }
}
