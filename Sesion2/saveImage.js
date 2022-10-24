const https = require('https')
const fs = require('fs')

function getAPOD() {
    https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
        let data = ""
        resp.setEncoding('utf-8')
        resp.on('data', (chunk) => {
            data += chunk
        })

        resp.on('end', () => {
            let body = JSON.parse(data)
            console.log(body.title)
            console.log(body.explanation)
            console.log(body.url)
            descargarImagen(body.url, __dirname + 'image.jpeg')
        }).on('Error', (err) => {
            console.log(err.message)
        })
    })
}


function descargarImagen(url, localPath) {
    console.log(url)
    var file = fs.createWriteStream(localPath);
    var request = https.get(url, function (response) {
        response.pipe(file);
    });

    request.on('close', () => { console.log("Done!") })
}

getAPOD()