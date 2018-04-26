const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()

server.get('*', (req, res) => {
    console.log(req)
    const app = new Vue({
        data: {
            url: req.url
        },
        template:`<div>{{ url }}</div>`
    })
    renderer.renderToString(app, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error')
            return 
        }
        res.end(`
        <!DOCTYPE html>
        <html lang='zh-cn'>
        <head><title>Hello</title></head>
        <body>
            ${html}
        </body>
        </html>`)
    })
})

server.listen(8080)