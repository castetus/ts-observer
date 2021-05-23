import { observer, PayLoad } from './observer';

export default class Subscriber {
  observer = observer;

  constructor() {
    this.observer.subscribe('event', this.callback);
  }

  public callback(payload: PayLoad): void {
    console.log(payload);
  }
}