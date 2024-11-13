const { LinkedList } = require("./linkedlist");

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
	constructor() {
		this._list = new LinkedList();
	}

	/** enqueue(val): add new value to end of the queue. Returns undefined. */

	enqueue(val) {
		this._list.append(val);
		this.first = this._list.first;
		this.last = this._list.last;
		this.size = this._list.size;
	}

	/** dequeue(): remove the node from the start of the queue
	 * and return its value. Should throw an error if the queue is empty. */

	dequeue() {
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

module.exports = Queue;
