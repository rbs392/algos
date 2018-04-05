/**
 * Union find disjoint set
 */
class UnionSet {
  constructor(n) {
    this.p = []
    this.r = []
    this.numOfDisjointSet = n

    for(let i=0; i< n; i++){
      this.r[i] = 0
      this.p[i] = i
    }
  }

  findSet(i) {
    return (this.p[i] == i) ? i : this.findSet(this.p[i])
  }

  isSameSet(i, j) {
    return (this.findSet(i) == this.findSet(j))
  }


  union(i, j) {
    if(!this.isSameSet(i, j)) {
      if(this.r[i] > this.r[j]){
        this.p[i] = j
      } else {
        this.p[j] = i
        this.r[j] += 1
      }
      this.numOfDisjointSet--
    }
  }
}

const a = new UnionSet(5)
console.log(a.numOfDisjointSet)
a.union(1,2)
a.union(3,4)
console.log(a.numOfDisjointSet)
console.log(a.isSameSet(1,4))
console.log(a.isSameSet(1,2))
a.union(1,4)
console.log(a.numOfDisjointSet)
console.log(a.isSameSet(1,4))
console.log(a.isSameSet(1,2))