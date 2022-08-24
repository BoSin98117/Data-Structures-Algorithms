// // add a method prepend() to the linked list that adds a node to the beginning of the list

// class LinkedList {
//     constructor(value) {
//         this.head = {
//             value: value,
//             next: null
//         };
//         this.tail = this.head;
//         this.length = 1;
//     }
//     append(value) {
//         const newNode = {
//             value: value,
//             next: null
//         }
//         console.log(newNode)
//         // makes the NEXT in our const newNode equal to newNode
//         this.tail.next = newNode;
//         // now we reference the tail to be equal to newNode
//         this.tail = newNode;
//         // increase the length of list by 1
//         this.length++;
//         return this;
//     }
//     prepend(value) {
//         const newNode = {
//             value: value,
//             next: null
//         }
//         // this is making the NEXT value in our const newNode = this.head
//         newNode.next = this.head;
//         // this.head = newNode from our CONSTRUCTOR
//         this.head = newNode;
//         // increase the length by 1
//         this.length++;
//         return this;
//     }
// }

// let myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16); myLinkedList.prepend(1)










// add a method prepend() to the linked list that adds a node to the beginning of the list

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        console.log(newNode)
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList);











