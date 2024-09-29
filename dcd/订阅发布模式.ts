type EventHandle = (...args: string[]) => void;
class EventEmitter {
  private events: { [eventName: string]: EventHandle[] } = {};
  //   订阅事件
  subscribe(eventName: string, eventHandle: EventHandle) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(eventHandle);
  }

  //   取消订阅
  unSubscribe(eventName: string, handle: EventHandle) {
    if (!this.events[eventName]) throw Error("请输入正确的订阅者名单");
    this.events[eventName] = this.events[eventName].filter(
      (itemEvent) => itemEvent !== handle
    );
  }

  //   发布事件
  emit(eventName: string, ...arg: string[]) {
    if (!this.events[eventName]) throw Error("请输入正确的订阅者名单");
    this.events[eventName].forEach((itemEvent) => {
      return itemEvent(...arg);
    });
  }
}
