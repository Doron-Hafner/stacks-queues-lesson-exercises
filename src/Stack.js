class Stack {
    constructor () {
        this.stack = []
    }
    push (x) {
        this.stack[this.stack.length] = x
    }
    isEmpty () {
        return this.stack.length ? false : true
    }
    peek () {
        return this.stack[this.stack.length -1] || null
    }
    pop () {
        return this.stack.splice(this.stack.length - 1, 1) || null
    }
    print () {
        console.log(this.stack);
    }
}

let myStack = new Stack()
console.log(myStack.isEmpty())    //true
myStack.print()                    //[]
myStack.push(2)      
console.log(myStack.isEmpty())     //false
myStack.push(4)      
myStack.print()                    //[2,4]
console.log(myStack.peek())        //4
myStack.pop()
myStack.pop()
console.log(myStack.peek())       //null
console.log(myStack.isEmpty())    //true

module.exports = Stack