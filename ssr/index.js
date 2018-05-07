const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./index.template.html','utf-8') // 传入模板
})

const createApp = require('./app')
/* const app = new Vue ({
  template:`<div>hello</div>`
})
renderer.renderToString(app, (err, html) => {
    if(err) throw err
    console.log(html)
}) */

// const context = {
//     title: 'ssr'
// }
server.get('*', (req, res) => {

    // const app = new Vue({
    //     data: {
    //         url: req.url
    //     },
    //     template:`<div>{{ url }}</div>`
    // })
    const context = { url: req.url}
    const app = createApp(context)
    renderer.renderToString(app, context, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error')
            return 
        }
        res.end(html)
    })
})

server.listen(8080)