let docs = []
let docEls = []

let cont = document.getElementById('container')
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

      text[0] = text[0].replace(/(\d|false|true)/gui, a => '<span c=1>'+a+'</span>')
      text[0] = text[0].replace(/(?<=\.)[a-zA-Z]+(?=\()/gui, a => '<span c=2>'+a+'</span>')
      text[0] = text[0].replace(/".+"/gui, a => '<span c=3>'+a+'</span>')
      text[0] = text[0].replace(/Math/gui, a => '<span c=4>'+a+'</span>')

      func.innerHTML += text[0] + ' → ' + text[1] + '<br>'
    }
    this.el.append(func)
  }
}

docs.push(
  ['Random From', 'Returns a random value from an array.', [
    '[1, 4, 6].randFrom()___4',
    '[1, 4, 6].randFrom()___1',
    '["foo", "bar", "world"].randFrom()___"world"'
  ]],
  ['Random Between', 'Returns a random float between 2 numbers. If the optional third argument is true, it will return an integer', [
    'Math.randBetween(0,6)___3.76243',
    'Math.randBetween(-6,2,false)___-0.57997',
    'Math.randBetween(6,24,true)___13'
  ]],
  ['Distance', 'Returns the distance between 2 points. The first 2 arguments are the x and y of the first point, and the last 2 arguments are the x and y of the second point.', [
    'Math.dist(0,0,5,2)___5.385164',
    'Math.dist(1,-5,5,2)___8.062257',
    'Math.dist(2,0.6,0.55,2)___2.0155'
  ]]
)

docs.sort((a, b) => {console.log(a[0]);return (a[0] > b[0] ? 1 : -1)})

for (let i of docs) {
  docEls.push(new FunctionDoc(...i))
  console.log(i);
}
Math.dist(0,6,true)
