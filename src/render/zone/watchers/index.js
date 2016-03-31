const THREE = require('three')

const watcher = require('./building')

const watchers = module.exports = window.watchers= new THREE.Object3D
watcher.rotation.y = Math.PI * 45 / 180

watchers.add(watcher)
watchers.position.set(0,2500,0)
