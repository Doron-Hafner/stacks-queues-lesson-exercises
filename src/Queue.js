class Queue {
    constructor () {
        this.queue = []
    }
    enqueue(x) {
        this.queue.unshift(x)
    }
    isEmpty() {
        return this.queue.length ? false : true
    }
    peek() {
        return this.queue[this.queue.length - 1] || null
    }
    dequeue() {
        return this.queue.splice(0, 1)
    }
    print() {
        console.log(this.queue);
    }
}

let q = new Queue()
console.log(q.isEmpty())    //true
q.print()                   //[]
q.enqueue(2)
console.log(q.isEmpty())    //false
q.enqueue(4)
q.print()                   //[4,2]
console.log(q.peek())       //2
q.dequeue()
q.print() 
q.dequeue()
console.log(q.peek())       //null
console.log(q.isEmpty())    //true

module.exports = Queue