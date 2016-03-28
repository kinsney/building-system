const THREE = require('three')
const streetlight = require('./streetlight')
const streetlights = module.exports = window.streetlights =  new THREE.Object3D
streetlights.add(streetlight)
streetlights.position.set(0,0,0)
