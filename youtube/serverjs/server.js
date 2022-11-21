const http = require('http')
const favicon = require('serve-favicon')
const finalhandler = require('finalhandler')
const path = require('path')

let requestCount = 0

let _favicon = favicon(path.join(__dirname, 'favicon.ico'))

const server = http.createServer((request, response) => {
    let done = finalhandler(request, response)
    if (request.url != '/favicon.ico') {
        requestCount++
    }

    switch (request.url) {
        case '/students':
            response.write('Students')
            break
        case '/':
        case '/courses':
            response.write('FRONT + BACKEND')
            break
        default:
            response.write('Not found 404')
    }
    response.write(' - Count: ' + (requestCount))
    _favicon(request, response, function onNext (err) {
        if (err) return done(err)

        // continue to process the request here, etc.

        response.statusCode = 404
        response.end('oops')
    })
    response.end()


})

server.listen(3003)