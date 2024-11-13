const { LinkedList } = require("./linkedlist");

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
	constructor() {
		this._list = new LinkedList();
	}

	/** push(val): add new value to end of the stack. Returns undefined. */

	push(val) {
		this._list.unshift(val);
		this.first = this._list.first;
		this.last = this._list.last;
		this.size = this._list.size;
	}

	/** pop(): remove the node from the top of the stack
	 * and return its value. Should throw an error if the stack is empty. */

	pop() {
		let temp = this._list.shift();
		this.first = this._list.first;
		this.last = this._list.last;
		this.size = this._list.size;
		return temp;
	}

	/** peek(): return the value of the first node in the stack. */

	peek() {
		return this._list.peek();
	}

	/** isEmpty(): return true if the stack is empty, otherwise false */

	isEmpty() {
		return this._list.isEmpty();
	}
}

module.exports = Stack;
