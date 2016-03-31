const THREE = require('three')

const environment = require('./environment')
const devices = require('./devices')
const floors = require('./floors')
// s
const scene = module.exports  = new THREE.Scene()
scene.add(
  floors,
  environment,devices)

// document.addEventListener('click',(e) => {
//     if (store.hoverEnabled) {
//       store.building.name = store.hoverObjectName
//     }
// })
