const express = require('express')
const favicon = require('serve-favicon')
const path = require('path')

let requestCount = 0

const app = express()

app.use(favicon(path.join(__dirname, 'favicon.ico')))

app.get('favicon.ico', (request, response) => {
    response.send('Hello')
})

app.get('/', (request, response) => {

    let title

    if (request.url != '/favicon.ico') {
        requestCount++
    }

    switch (request.url) {
        case '/students':
            title = 'Students'
            break
        case '/':
        case '/courses':
            title = 'FRONT + BACKEND'
            break
        default:
            title = 'Not found 404'
    }

    response.send(title + ' - Count = ' + requestCount)

})

app.listen(3003)