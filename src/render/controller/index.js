const THREE = require('three')

const camera = require('./camera')
const store = require('../../store')
const raycast = require('../zone/area/raycast')
const controls = module.exports = new THREE.OrbitControls(camera)
Object.assign(controls, {

  enableDamping: true,
  dampingFactor: 0.2,

  maxDistance:30000,

  rotateSpeed: 0.2,
  autoRotateSpeed: -0.3,

  // enablePan: false,
  enableKeys: false,

  minPolarAngle: Math.PI / 180 * 20,  //50
  maxPolarAngle: Math.PI / 180 * 180,  //80
  autoRotate:false
})

controls.target.set(0, 1000, 0)

document.addEventListener('mousemove', event => {
  raycast.mouse.x = (event.clientX / window.innerWidth) * 2 - 1
  raycast.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
})

