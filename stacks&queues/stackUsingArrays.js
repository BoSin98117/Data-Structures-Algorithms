class Stack {
    constructor() {
        // create an empty array.  We DO NOT need the LENGTH property because that comes BUILT IN with ARRAYS in JavaScript
        this.array = [];
    }
    // with Stack (LIFO), peek is used to see the last item in the stack.
    peek() {
        return this.array[this.array.length - 1];
    }
    // push is a built in method in ARRAYS
    push(value) {
        this.array.push(value);
        return this;
    }
    // pop is a built in method in ARRAYS
    pop() {
        this.array.pop();
        return this;
    }
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