import { observer, PayLoad } from './observer';

export default class Emitter {
  observer = observer;

  constructor() {
    this.emit();
  }

  emit(): void {
    this.observer.notify('event', {key: 'value'});
  }
}
