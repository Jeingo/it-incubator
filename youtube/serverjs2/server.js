const http = require('http')
const path = require('path')
const fs = require('fs')

const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const server = http.createServer(async (req, res) => {
    switch(req.url) {
        case '/home': {
            try {
                const data = await readFile(path.join(__dirname, 'home.html'))
                res.write(data)
                res.end()
            } catch (err) {
                res.write('500')
                res.end()
            }
            break
        }
        default: {
            res.write('404')
            res.end()
        }
    }
})

server.listen(3003)