/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor (value) {
    // value = [];
    this.value = value;
  }

  push(element) {
    this.value.push(element);
    return this.value;
  }

  pop() {
    return this.value.pop();
  }

  peek() {
    return this.value[this.value.length - 1];
  }
}

module.exports = Stack;
