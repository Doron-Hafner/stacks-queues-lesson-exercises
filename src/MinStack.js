class MinStack {
    constructor () {
        this.minStack = []
        this.min = null
        this.prevMin = null
    }
    push (x) {
        this.minStack[this.minStack.length] = x
        this.getMin(this.min.lastIndexOf(x))
    }
    isEmpty () {
        return this.minStack.length ? false : true
    }
    peek () {
        return this.minStack[this.minStack.length -1] || null
    }
    pop () {
        const poped = this.minStack.splice(this.minStack.length - 1, 1)[0]  || null
        if (poped === this.min) {
            this.getMin(lastIndexOf(poped))
        }
        return poped
    }
    print () {
        return this.minStack;
    }
    getMin (x) {
        if (x-1) {
            console.log(x-1);
        }




    //     const first = this.minStack[0]

    //     if (first && this.minStack.length-2) {
    //         this.peek() <= this.minStack[this.minStack.length -2] ?
    //         this.min = this.peek() : ''
    //     } else {
    //         this.min = first || null
    //     }
    //     return this.min
    }
}
//[17,12,31,    10,10,42]
let ms = new MinStack()
ms.push(17)
ms.push(12)
ms.push(31)
console.log(ms.getMin())    //12
ms.pop()
ms.pop()
ms.pop()
console.log(ms.getMin())    //null
ms.push(19)
ms.push(21)
console.log(ms.getMin())    //19
ms.push(3)
console.log(ms.getMin())    //3
ms.pop()
ms.pop()
console.log(ms.getMin())    //19

module.exports = MinStack