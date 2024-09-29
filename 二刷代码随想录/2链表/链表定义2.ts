namespace A {
  class LinkNode {
    public val: number;
    public next: LinkNode | null = null;
    constructor(value: number) {
      this.val = value;
      this.next = null;
    }
  }
}
