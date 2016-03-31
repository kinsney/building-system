var THREE = require('three')


const area = module.exports = window.area = new THREE.Object3D()
area.position.y = 200
area.rotation.y = Math.PI * 45 / 180
const buildings = require('../buildings')

