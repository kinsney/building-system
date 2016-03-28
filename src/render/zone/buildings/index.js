const THREE = require('three')

const building = require('./building')

const buildings = module.exports = window.buildings= new THREE.Object3D
building.rotation.y = Math.PI * 45 / 180

buildings.add(building)
buildings.position.set(0,2500,0)
