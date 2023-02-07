let docs = []
let docEls = []

let cont = document.getElementById('container')

String.prototype.syntaxHighlight = function () {
  let snippet = this
  snippet = snippet.replace(/(?<![a-zA-Z])((\d(\.\d+)*)|false|true)/gu, a => '<span c=1>'+a+'</span>')
  snippet = snippet.replace(/(?<=\.)[a-zA-Z]+(?=\()/gu, a => '<span c=2>'+a+'</span>')
  snippet = snippet.replace(/".+"/gu, a => '<span c=3>'+a+'</span>')
  snippet = snippet.replace(/(Math|Array)/gu, a => '<span c=4>'+a+'</span>')
  snippet = snippet.replace(/-|\.{3}/gu, a => '<span c=5>'+a+'</span>')
  return snippet
}
class FunctionDoc {
  constructor (name, desc, use) {
    this.el = document.createElement('details')
    this.el.classList.add('function')
    cont.append(this.el)

    let title = document.createElement('summary')
    title.innerHTML = name
    this.el.append(title)

    let def = document.createElement('p')
    def.innerHTML = desc
    this.el.append(def)

    let func = document.createElement('code')
    this.el.innerHTML += '<br>'
    for (let i of use) {
      let text = i.split('___')
      func.innerHTML += text[0].syntaxHighlight() + (text[1] ? ' ==> ' + text[1].syntaxHighlight() : '') + '<br>'
    }
    this.el.append(func)
  }
}
docs.push(
  ['Random From', 'Returns a random value from an array.', [
    `Array.randFrom()`,
    '[1, 4, 6].randFrom()___4',
    '[1, 4, 6].randFrom()___1',
    '["foo", "bar", ":)"].randFrom()___":)"'
  ]],
  ['Random Between (Array)', 'Returns a random float between 2 numbers. If the optional third argument is true, it will return an integer', [
    'Math.randBetween(min, max, integer*)',
    'Math.randBetween(0,6)___3.76243',
    'Math.randBetween(-6,2,false)___-0.57997',
    'Math.randBetween(6,24,true)___13'
  ]],
  ['Distance', 'Returns the distance between 2 points. The first 2 arguments are the x and y of the first point, and the last 2 arguments are the x and y of the second point.', [
    'Math.distance(x1, y1, x2, y2)',
    'Math.dist(0,0,5,2)___5.385164',
    'Math.dist(1,-5,5,2)___8.062257',
    'Math.dist(2,0.6,0.55,2)___2.0155'
  ]],
  ['Mean', 'Returns the average of an array of numbers.', [
    'Math.mean(array)',
    'Math.mean([1,2,3])___2',
    'Math.mean([1,-5,2,5])___1',
    'Math.mean([5,9,3,7])___6'
  ]],
  ['Restrain', 'Keeps a number between two values.', [
    'Math.restrain(value, minumum, maximum)',
    'Math.restrain(4,1,7)___4',
    'Math.restrain(-5,3,7)___3',
    'Math.restrain(47,37,39)___39'
  ]],
  ['First (Array)', 'returns the first thing in an array.', [
    'Array.first()',
    '[1,2,3,4,5,6,7,8,9].first()___1',
    '["hello",7,[1,2,3]]___"hello"',
    '[0,2,3,4]___0'
  ]],
  ['Last (Array)', 'returns the last thing in an array.', [
    'Array.last()',
    '[4,2,0].last()___0',
    '[..."what?"]___"?"',
    '[61,32,14]___14'
  ]],
  ['Shuffle (Array)', 'randomizes the positions of things in an array.', [
    'Array.shuffle()',
    '[1,2,3,4,5].shuffle()___[4, 1, 3, 2, 5]',
    '[..."mixed"].shuffle()___["x", "e", "i", "m", "d"]',
    '[3,1,4,1,5].shuffle()___[1, 1, 4, 3, 5]'
  ]]
)

docs.sort((a, b) => {return (a[0] > b[0] ? 1 : -1)})

for (let i of docs) {
  docEls.push(new FunctionDoc(...i))
  console.log(i);
}

function syntaxHighlight(snippet) {
  snippet = snippet.replace(/(?<![a-zA-Z])((\d(\.\d+)*)|false|true)/gui, a => '<span c=1>'+a+'</span>')
  snippet = snippet.replace(/(?<=\.)[a-zA-Z]+(?=\()/gui, a => '<span c=2>'+a+'</span>')
  snippet = snippet.replace(/".+"/gui, a => '<span c=3>'+a+'</span>')
  snippet = snippet.replace(/(Math|Array)/gui, a => '<span c=4>'+a+'</span>')
  snippet = snippet.replace(/-</gui, a => '<span c=5>'+a+'</span>')
  return snippet
};

let value, minimum;
Math.randBetween(-6,0.2,false)
Math.dist(0,0,5,2)
;["foo", "bar", "world"].randFrom()
if (value < minimum){}
[..."what?"]+"?"
