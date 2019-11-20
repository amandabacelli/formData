let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
let FormData = require("xmlhttprequest").FormData
const answer = require("./model/answer")
const url = 'https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=fa452203efa6d2b31f94fee053fa11ed02635606'

// const enviarDesafio = async () => {
//     try {
//         const response = await fetch(url, {
//             method: 'POST',
//             body: form(answer),
//             headers: {
//                 "Content-type": "multipart/form-data"
//             }
//         })
//         const json = await response.json()
//         console.log("Success: ", JSON.stringify(json))
//     } catch (error) {
//         console.log("Error: ", error)
//     }
// }

const formData = new FormData()
formData.append(answer)
let options = {content: formData}

const postAPI = new XMLHttpRequest()

postAPI.open("POST", url)

postAPI.setRequestHeader("Content-type", "multipart/form-data")

postAPI.send(formData)

postAPI.onreadystatechange = function () {
    if (postAPI.readyState === 4 && postAPI.status == 200) {
        let answer = postAPI.responseText
        console.log(answer)
    }
}


