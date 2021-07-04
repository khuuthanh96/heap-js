const assert = require('assert');
const Heap = require('./index');

describe("Heap", function () {
    it("should return min element", function () {
        const h = new Heap();
        h.add(6)
        h.add(3)
        h.add(1)
        h.add(7)

        assert.strictEqual(h.peek(), 1)
    })

    it("should return max element", function () {
        const h = new Heap((child, parent) => child > parent);
        h.add(6)
        h.add(3)
        h.add(1)
        h.add(7)

        assert.strictEqual(h.peek(), 7)
    })

    it("should delete first element", function () {
        const h = new Heap(null, [6, 3, 2]);

        assert.strictEqual(h.peek(), 2)
        h.remove()
        assert.strictEqual(h.peek(), 3)
    })

    it("should add min element", function () {
        const h = new Heap(null, [6, 3, 2]);

        assert.strictEqual(h.peek(), 2)
        h.add(1)
        assert.strictEqual(h.peek(), 1)
    })

    it("should return min object element", function () {
        const list = [
            { name: "A", key: 5 },
            { name: "B", key: 76 },
            { name: "C", key: 1 }
        ]

        const h = new Heap((child, parent) => child.key < parent.key, list);

        assert.strictEqual(h.peek().key, 1)
    })

    it("should delete min object element", function () {
        const list = [
            { name: "A", key: 5 },
            { name: "B", key: 76 },
            { name: "C", key: 1 }
        ]

        const h = new Heap((child, parent) => child.key < parent.key, list);

        assert.strictEqual(h.peek().key, 1)
        h.remove()
        assert.strictEqual(h.peek().key, 5)
    })

})