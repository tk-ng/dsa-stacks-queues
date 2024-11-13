const { DoublyLinkedList } = require("./doublylinkedlist");

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Deque {
	constructor() {
		this._list = new DoublyLinkedList();
	}

	/** appendleft(val): add new value to start of the deque. Returns undefined. */

	appendleft(val) {
		this._list.unshift(val);
		this.first = this._list.first;
		this.last = this._list.last;
		this.size = this._list.size;
	}

	/** appendright(val): add new value to end of the deque. Returns undefined. */

	appendright(val) {
		this._list.append(val);
		this.first = this._list.first;
		this.last = this._list.last;
		this.size = this._list.size;
	}

	/** popleft(): remove the node from the start of the deque
	 * and return its value. Should throw an error if the deque is empty. */

	popleft() {
		let temp = this._list.shift();
		this.first = this._list.first;
		this.last = this._list.last;
		this.size = this._list.size;
		return temp;
	}

	/** popleft(): remove the node from the start of the deque
	 * and return its value. Should throw an error if the deque is empty. */

	popright() {
		let temp = this._list.pop();
		this.first = this._list.first;
		this.last = this._list.last;
		this.size = this._list.size;
		return temp;
	}

	/** peekleft(): return the value of the first node in the stack. */

	peekleft() {
		return this._list.peek();
	}

	/** peekright(): return the value of the first node in the stack. */

	peekright() {
		return this._list.peekright();
	}

	/** isEmpty(): return true if the stack is empty, otherwise false */

	isEmpty() {
		return this._list.isEmpty();
	}
}

module.exports = Deque;
