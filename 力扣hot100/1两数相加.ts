/**
 * 给你两个非空的链表，表示两个非负的整数。
 * 它们每位数字都是按照逆序的方式存储的，
 * 并且每个节点只能存储一位数字
 * 请你将两个数相加，并以相同形式返回一个表示和的链表
 */

namespace A {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  function addListNumber(l1: ListNode | null, l2: ListNode | null) {
    if (l1 === null && l2 === null) return null;

    let result: number[] = [];
    result.push(l1?.val! + l2?.val!);

    while (l1 !== null || l2 !== null) {
      let curResult: number = 0;
      if (l1?.next !== null) {
        curResult = curResult + l1?.next.val!;
      }
      if (l2?.next !== null) {
        curResult === curResult + l2?.next.val!;
      }
    }
  }
}
