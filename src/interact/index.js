const Vue = require('vue')
const store = require('../store')

var vm = module.exports = new Vue({
  el: '#interact',
  components: {
    interact: require('./index.vue')
  }
})
