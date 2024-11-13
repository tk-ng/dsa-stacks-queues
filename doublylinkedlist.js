/** Node: node for a queue or a stack. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	// Remove a node from the end of the list
	pop() {
		if (!this.first) throw new Error("The list is empty.");

		let lastNode = this.last;
		// If the list only has one item
		if (this.first === this.last) {
			this.first = null;
			this.last = null;
			this.size--;
			return lastNode.val;
		}

		this.last = lastNode.prev;
		this.last.next = null;

		this.size--;
		return lastNode.val;
	}

	// Add a new node to the end of the list
	append(val) {
		const newNode = new Node(val);

		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			newNode.prev = this.last;
			this.last.next = newNode;
			this.last = newNode;
		}

		this.size++;
	}

	// Remove a node from the start of the list
	shift() {
		if (!this.first) throw new Error("The list is empty.");

		const temp = this.first;

		if (this.first == this.last) this.last = null;

		this.first = this.first.next;
		this.first.prev = null;
		this.size--;
		return temp.val;
	}

	// Add to the start (for stack push operation)
	unshift(val) {
		const newNode = new Node(val);

		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.first.prev = newNode;
			let temp = this.first;
			this.first = newNode;
			this.first.next = temp;
		}

		this.size++;
	}

	/** peek(): return the value of the first node in the stack. */

	peek() {
		if (this.isEmpty()) {
			throw new Error("the list is empty!");
		}
		return this.first.val;
	}

	/** peek(): return the value of the first node in the stack. */

	peekright() {
		if (this.isEmpty()) {
			throw new Error("the list is empty!");
		}
		return this.last.val;
	}

	/** isEmpty(): return true if the stack is empty, otherwise false */

	isEmpty() {
		return this.size === 0;
	}
}

module.exports = { DoublyLinkedList };
