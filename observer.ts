export interface PayLoad {
  [key: string]: string | number;
}

class Observer {
  public observers: {
    [name: string]: Array<(payload: PayLoad)=>void>;
  } = {};

  subscribe(name: string, cb: (payload: PayLoad)=>void) {
    if (!this.observers[name]) {
      this.observers[name] = [];
    }
    this.observers[name].push(cb);
  }

  unsubscribe(name: string, cb: (payload: PayLoad)=>void) {
    this.observers[name] = this.observers[name].filter((callback) => callback !== cb);
  }

  notify(name: string, payload: PayLoad) {
    this.observers[name].forEach((cb) => {
      cb(payload);
    });
  }
}
export const observer = new Observer();
