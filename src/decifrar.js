const answer = require('./model/answer')
let txtCifrado = (answer.cifrado).toLowerCase()
let decifrado = ''
    for (let i = 0; i < txtCifrado.length; i++) {
        let x = txtCifrado.charCodeAt([i])
        if (x >= 97) {
            x = x - 4
            if (x > 122) {
                x = (x - 122) + 97
            } else if (x < 97) {
                x = 123 - (97 - x)
            }

            decifrado += String.fromCharCode(x)

        } else decifrado += String.fromCharCode(x)
        console.log(decifrado)
    } return decifrado

