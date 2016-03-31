const THREE = require('three')

const environment = require('./environment')
const buildings = require('./buildings/')
const streetlights = require('./streetlights')
const area = require('./area')
document.addEventListener('click',(e) => {
    if (store.hoverEnabled) {
      store.currentObjectName = store.hoverObjectName
    }
})
const myAxes = require('./arrow.js');
// const area = require('./area')

const scene = module.exports = new THREE.Scene()
scene.add(environment,buildings,streetlights,myAxes)

