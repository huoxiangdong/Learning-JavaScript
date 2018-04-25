const Vue = require('vue')
const app = new Vue({
    template: `<div>Hello World</div>`
})

const renderer = require('vue-server-renderer').createRenderer()

const server = require('express')()

server.get('*', (req, res) => {

    renderer.renderToString(app, (err,html) => {
        if (err) throw err
        res.end(html)
    })
     
})

server.listen(8080)