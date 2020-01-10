import { Tutorial } from '../../model/tutorial.model';

//here is the list of action for tutorial 
export class AddTutorial{
    static readonly type = '[TUTORIAL] Add Tutorial'
    constructor(public payload: Tutorial){}
}
export class RemoveTutorial{
    static readonly type = '[TUTORIAL] Remove Tutorial'
    constructor(public payload: string){}
}