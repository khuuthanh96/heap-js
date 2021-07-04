module.exports = class Heap {
    constructor(comparator, heap) {
        const defaultComparator = (child, parent) => child < parent

        this.h = heap || []
        this.comparator = comparator || defaultComparator
        this.buildHeap()
    }

    remove() {
        if (this.size() === 0) return
        const val = this.h[0]
        this.h[0] = this.h[this.size() - 1]
        this.h.pop()
        this.heapify(0)

        return val
    }

    peek() {
        return this.h[0]
    }

    add(v) {
        this.h.push(v)
        let i = this.size() - 1

        while (i != 0) {
            const parent = parseInt((i - 1) / 2, 10)
            if (!this.comparator(this.h[i], this.h[parent])) break

            [this.h[i], this.h[parent]] = [this.h[parent], this.h[i]]
            i = parseInt((i - 1) / 2, 10)
        }
    }

    size() {
        return this.h.length
    }

    buildHeap() {
        const len = this.h.length
        const n = parseInt(len / 2 - 1, 10)
        for (let i = n; i >= 0; i--) {
            this.heapify(i)
        }
    }

    heapify(i) {
        let parent = i

        const left = i * 2 + 1
        const right = i * 2 + 2

        if (left < this.size() && this.comparator(this.h[left], this.h[parent])) parent = left
        if (right < this.size() && this.comparator(this.h[right], this.h[parent])) parent = right

        if (parent !== i) {
            [this.h[i], this.h[parent]] = [this.h[parent], this.h[i]]
            this.heapify(parent)
        }
    }
}
