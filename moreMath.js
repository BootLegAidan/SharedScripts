Array.prototype.randFrom = function () {
  return this[Math.floor(Math.random() * this.length)]
};
Array.prototype.last = function () {
  return this[this.length-1]
}
Array.prototype.first = function () {
  return this[0]
}
Array.prototype.shuffle = function () {
  for (let i = this.length - 1; i; i--) {
    const m = Math.floor(Math.random() * i)
    const n = this[i - 1]
    this[i - 1] = this[m]
    this[m] = n
  }
  return this
}

Math.randBetween = function (min, max, int=false) {
  let out = min + ((max - min) * Math.random())
  return (int ? Math.floor(out) : out)
}
Math.dist = function (x1, y1, x2, y2) {
  return Math.hypot(x2-x1, y2-y1)
}
Math.mean = function (arr) {
  let sum = 0;
  for (let i of arr) {
    sum += i
  }
  return sum / arr.length
}
Math.restrain = function(val,low,high) {
  return Math.max(low, Math.min(val, high))
}
