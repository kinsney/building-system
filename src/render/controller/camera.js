const THREE = require('three')

const camera = module.exports = new THREE.PerspectiveCamera(
  50, // Field of view
  window.innerWidth / window.innerHeight, 1, 1e6)

camera.position.set(0,1000,10000)
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
})
