const THREE = require('three')

const environment = require('./environment')
const buildings = require('./buildings')
const streetlights = require('./streetlights')
// const area = require('./area')

const scene = module.exports = new THREE.Scene()
scene.add(
  environment,
  buildings,streetlights)
