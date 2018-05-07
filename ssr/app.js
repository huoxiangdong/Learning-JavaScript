// const Vue = require('vue')
//  module.exports = function createApp (context) {
//     return new Vue({
//         data: {
//             url: context.url
//         },
//         template: `<div> {{ url }}</div>`
//     })
//  }

import Vue from 'vue'
import App from './App.vue'

export function createApp () {
    const app = new Vue({
        render: h => h(App)
    })
    return { app }
}