/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {

    if (l1 === null || l2 === null) return null

    let carry = 0;
    let sum = 0;
    let head = new ListNode(0);
    let result = head;

    while (l1 || l2 || carry) {
        sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = sum > 9 ? 1 : 0;
        head.next = new ListNode(sum % 10);
        head = head.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    return result.next;

};