import {Component} from 'angular2/core'
import {Store} from '@ngrx/store'
import {INCREMENT, DECREMENT, RESET} from './counter'
import {Observable} from 'rxjs/Observable'


@Component({
    selector: 'my-app',
    template: `
      <h1>My First Angular 2 App</h1>
      <div>Current Count: {{ counter | async }}</div>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
    `
})
export class AppComponent { 
  
  counter: Observable<number>
  
  constructor(public store: Store<number>){
      this.counter = store.select('counter')
  }
  
  increment(){
      this.store.dispatch({ type: INCREMENT })
  }
  decrement(){
      this.store.dispatch({ type: DECREMENT })
  }
  reset(){
      this.store.dispatch({ type: RESET })
  }
  
}
