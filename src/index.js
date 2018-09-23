class Sorter {
  constructor() {
    // your implementation
    this.mass=[];
    this.compareFunction = function(a, b) {
      return a - b;}
  }

  add(element) {
    // your implementation
    this.mass.push(element);
  }

  at(index) {
    // your implementation
    return this.mass[index];
  }

  get length() {
    // your implementation
    return this.mass.length;
  }

  toArray() {
    // your implementation
    return this.mass;
  }

  sort(indices) {
    // your implementation
    let sortedMas = [];
    
    indices.sort();

    for (var i = 0; i < indices.length; i++) {
      sortedMas.push(this.mass[indices[i]]);
    }

    sortedMas.sort(this.compareFunction);

    sortedMas.sort(this.compareFunction);
    for (var i = 0; i < indices.length; i++) {
      this.mass[indices[i]]=sortedMas[i];
    }

    return this.mass;
  }

  setComparator(compareFunction) {
    // your implementation
    this.compareFunction = compareFunction; 

  }
}

module.exports = Sorter;