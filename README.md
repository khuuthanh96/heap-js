# heap-js


Works with strings, numbers or objects. Default compare function is min heap. Replace default comparator if you want max heap or work with object.

```js
const h = new Heap();
h.add(3)
h.add(1)
h.add(2)

h.peek() // 1
h.remove() // remove 1

const objList = [
    { name: "Luffy", key: 10 },
    { name: "Zoro", key: 9 },
    { name: "Sanji", key: 8 },
]

const objectMaxHeap = new Heap((child, parent) => child.key > parent.key), objList)

objectMaxHeap.peek() // {  name: "Luffy", key: 10 }


```