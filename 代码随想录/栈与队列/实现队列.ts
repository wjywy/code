class queue {
  private stackIn: number[];
  private stackOut: number[];

  constructor() {
    this.stackIn = [];
    this.stackOut = [];
  }

  push(arg: number) {
    this.stackIn.push(arg);
  }
}
