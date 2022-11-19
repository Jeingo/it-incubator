const http = require('http')

let requestCount = 0

const server = http.createServer((request, response) => {
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
    response.end()
})

server.listen(3003)