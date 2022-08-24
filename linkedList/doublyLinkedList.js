class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            // this will point to the PREVIOUS NODE
            prev: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        console.log(newNode)
        // only need to add this line to make it a doubly linked list
        // We want to add the PREV property to whatever was at the end (tail) of the list
        newNode.prev = this.tail // this.tail is the very last item in the list.  
        this.tail.next = newNode;
        // update the tail to be the newNode
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        newNode.next = this.head;
        // sets the PREV pointer of the head of the original list to equal the newNode
        this.head.prev = newNode
        this.head = newNode;
        this.length++;
        return this;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array;
    }
    printList2() {
        let current = this.head;
        let str = "";
        while (current) {
            str += current.value + " ";
            current = current.next;
        }
        console.log(str);
    }

    // Insert will take an INDEX as well as a VALUE for that index
    insert(index, value) {
        //Check for proper parameters;
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        // Leader is the node that is before the newNode.  Make the leader.NEXT to equal the newNode
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        // Follower will be the node that is after the newNode.  Make the follower.PREV to eqaul the newNode
        follower.prev = newNode;
        this.length++;
        console.log(this)
        return this.printList();
    }
    remove(index) {
        // Check Parameters      
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList();
    }

    traverseToIndex(index) {
        //Check parameters
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(2, 99)
// myLinkedList.insert(20, 88)
myLinkedList.printList2()
myLinkedList.remove(3)
myLinkedList.printList2()
// myLinkedList.remove(0)
// myLinkedList.printList2()
// myLinkedList.reverse()

