const THREE = require('three')

const environment = require('./environment')
const buildings = require('./buildings/')
const streetlights = require('./streetlights')
const area = require('./area')
const scene = module.exports = window.scene = new THREE.Scene()
console.log(buildings)
scene.add(
  environment,
  buildings,streetlights)
document.addEventListener('click',(e) => {
    if (store.hoverEnabled) {
      store.currentObjectName = store.hoverObjectName
    }
})
