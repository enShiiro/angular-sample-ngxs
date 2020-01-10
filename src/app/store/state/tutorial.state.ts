import { Tutorial } from 'src/app/model/tutorial.model';
import {State, Selector, Action, StateContext} from '@ngxs/store'
import { AddTutorial, RemoveTutorial } from '../action/tutorial.action';

//state for the tutorial class
//can make any kind of varible that u want.
export class TutorialStateModel{
    tutorials: Tutorial[]
}

//state for tutorial and default value for this state
@State<TutorialStateModel>({
    name:'tutorials',
    defaults:{
      tutorials: []
    }
})

export class TutorialState{

    //selector use for get the current state value 
    @Selector()
    static getTutorials(state : TutorialStateModel){
        return state.tutorials;
    }

    //Here is an action that come from tutorial.action class...
    //make any bisness logic here which can change state or add any value on state
    //from any componnet, just call this action to make an action and write the state value.
    //call any service api layer here and add the value to state this layer.
    //getState() function for get currenty state
    //patchState() function for patch/insert the state with new value; have difference funtion for patchState and setState()..need to gooogle it to confirm
    @Action(AddTutorial)
    addTutorial(ctx: StateContext<TutorialStateModel> , {payload } : AddTutorial){
        const state =  ctx.getState()
        ctx.patchState({
            tutorials : [...state.tutorials , payload]
        })
    }
    @Action(RemoveTutorial)
    removeutorial(ctx: StateContext<TutorialStateModel> , { payload } : RemoveTutorial){
        const state =  ctx.getState()
        ctx.patchState({
            tutorials : state.tutorials.filter(a => a.name != payload)
        })
    }
}