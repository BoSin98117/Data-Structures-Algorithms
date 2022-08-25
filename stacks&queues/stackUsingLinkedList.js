class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            // points to the node that is under the node that is on top
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
    pop() {
        // check to see if there is a node at the top.  If there isn't, we return null
        if (!this.top) {
            return null;
        }
        // make this.bottom null if there is only one node.  If the stack has 2 nodes left and we remove one, that means there will be only one node in the stack so we need to make this.bottom = null.
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        // if we did not reference the initial top value in the stack, there would be no reference to it and JavaScript, being a garbage collection language, will remove the initial top value.  So we set the initial top value in the stack to a temporary variable HOLDINGPOINTER
        // We only do this so that JavaScript will not delete the node that we are popping out of the stack.  If we had no need for that node then we DO NOT need to declare a temporary variable HOLDINGPOINTER
        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return this;
    }
    //isEmpty
}

const myStack = new Stack();
myStack.peek();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();


  //Discord
  //Udemy
  //google