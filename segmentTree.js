class SegmentTree {
  constructor(arr = []) {
    this.arr = arr
    this.n = arr.length
    this.heap = new Array(4*this.n).fill(0)
    this._build(1, 0, (this.n-1))
  }

  _left(i) {
    return (i<<1)
  }

  _right(i) {
    return (i<<1) + 1
  }

  _build(index, lpos, rpos) {
    if(lpos == rpos) {
      this.heap[index] = lpos
    } else {
      const midPos = parseInt((lpos + rpos)/2)
      this._build( this._left(index), lpos, midPos )
      this._build( this._right(index), midPos+1, rpos)

      const a = this.heap[this._left(index)]
      const b = this.heap[this._right(index)]

      this.heap[index] = (this.arr[a] < this.arr[b]) ? a : b
    }
  }


  _rmq(index, lpos, rpos, i, j) {
    if(i > rpos || j < lpos) return -1

    if(i <= lpos && j >= rpos) return this.heap[index]

    const midPos = parseInt((lpos+rpos)/2)
    const a = this._rmq( this._left(index), lpos, midPos, i, j)
    const b = this._rmq( this._right(index), (midPos+1),rpos, i, j)

    if(a == -1) return b
    if(b == -1) return a


    return (this.arr[a] < this.arr[b]) ? a : b
  }

  rmq(i, j) {
    return this._rmq(1, 0, this.n-1, i, j)
  }
}

const a = (new Array(10).fill("")).map(x => Math.ceil(Math.random() * 100))
const stree = new SegmentTree(a)
console.log(a.join(", "))
console.log(a[stree.rmq(5,6)])