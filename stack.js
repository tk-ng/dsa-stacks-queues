/** Node: node for a stack. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	/** push(val): add new value to end of the stack. Returns undefined. */

	push(val) {
		const node = new Node(val);

		// if the stack is empty
		if (!this.first) {
			this.first = node;
			this.last = node;
		}
		// update the stack's last item if it exists
		if (this.last) {
			let temp = this.first;
			this.first = node;
			this.first.next = temp;
		}

		this.size += 1;
	}

	/** pop(): remove the node from the top of the stack
	 * and return its value. Should throw an error if the stack is empty. */

	pop() {
		// if the stack is empty
		if (this.first == null && this.last == null && this.size === 0) {
			throw new Error("The stack is empty.");
		}

		const node = this.first;

		// if there is only one item in the stack
		if (this.first == this.last && this.size === 1) {
			this.last = null;
		}

		this.first = this.first.next;
		this.size -= 1;

		return node.val;
	}

	/** peek(): return the value of the first node in the stack. */

	peek() {
		if (this.first == null && this.last == null && this.size === 0) {
			throw new Error("the queue is empty!");
		}
		return this.first.val;
	}

	/** isEmpty(): return true if the stack is empty, otherwise false */

	isEmpty() {
		return this.size === 0;
	}
}

module.exports = Stack;
