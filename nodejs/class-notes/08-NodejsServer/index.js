"use strict"
/* -------------------------------------- *

        NODEJS

/* -------------------------------------- */
// HTTPSERVER:

const http = require('node:http') // BuiltIn Module.

/* -------------------------------------- *

// http.createServer( (request, response) => { ... } )

const app = http.createServer((request, response) => {

    response.end('Hello World')
    console.log('Console Print')

})

// Default server domain (local domain) = localhost
// Default server IP (local IP) = 127.0.0.1
app.listen(8000, () => console.log('Server started: http://127.0.0.1:8000'))

/* -------------------------------------- *

const app = http.createServer((req, res) => {

    // console.log(req)
    // console.log(res)
    // console.log(req.url)

    if (req.url == '/') {

        res.end('Main Page')

    } else if (req.url == '/second') {

        res.end('second page')

    } else {

        res.end('any page')
    }

})

app.listen(8000, () => console.log('http://127.0.0.1:8000'))

/* -------------------------------------- */

const app = http.createServer((req, res) => {

    if (req.url == '/api') {

        // res.end('API') // res.end işlemi blocklar. devam eden kodlar çalışmaz.

        // res.write('Yazı-1')
        // res.write('Yazı-2')
        // res.write('Yazı-3')
        // res.write('Yazı-4')
        // res.end()
        
        if (req.method == 'GET') {

            //single header
            res.setHeader('title', 'value')

            //writehead status code ve muti headers
            res.writeHead(400, {
                'content-encoding':'utf-8'
                
            })

            const obj = {
                result: true,
                message: 'Hello World'
            }

            res.write(JSON.stringify(obj))
            res.end()

        } else {
            res.end('wrong method')
        }

    } else {

        res.end('HTML')
    }

}).listen(8000, () => console.log('http://127.0.0.1:8000'))

/* -------------------------------------- */
/* -------------------------------------- */
/* -------------------------------------- */