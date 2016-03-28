const THREE = require('three')

const environment = module.exports = new THREE.Object3D

environment.add(require('./situation').floor,
  require('./lights'))
