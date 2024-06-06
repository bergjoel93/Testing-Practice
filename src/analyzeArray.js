class AnalyzeArray {
  constructor(array) {
    this.array = array;
  }

  average() {
    let sum = this.array.reduce(
      (accumulator, current) => accumulator + current,
      0
    );
    return sum / this.array.length;
  }

  min() {
    return Math.min(...this.array);
  }

  max() {
    return Math.max(...this.array);
  }

  getLength() {
    return this.array.length;
  }
}

export default AnalyzeArray;
