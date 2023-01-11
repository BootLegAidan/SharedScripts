Array.prototype.randFrom = function () {
  return this[Math.floor(Math.random() * this.length)]
};
Math.randBetween = function (min, max, int=false) {
  let out = min + ((max - min) * Math.random())
  return (int ? Math.floor(out) : out)
}
Math.dist = function (x1, y1, x2, y2) {
  return Math.hypot(x2-x1, y2-y1)
}
