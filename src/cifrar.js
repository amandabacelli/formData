const sha1 = require("js-sha1")

let msg = "Nao existem dificuldades que nao possam ser superadas quando se confia em si mesmo e nos demais a sua volta. A paciencia e a boa vontade andam juntas, com isso podemos aprender coisas novas todos os dias e multiplicar o conhecimento adquirido. Basta apenas uma oportunidade."
let hash = sha1(msg)

console.log(hash)