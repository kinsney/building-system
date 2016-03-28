const THREE = window.THREE = require('three')

require('./plugins/OrbitControls')

const zoneRender = module.exports = new THREE.WebGLRenderer({
  canvas: document.querySelector('#zone'),
  antialias: true
})
zoneRender.shadowMap.enabled = true
zoneRender.shadowMap.soft = true
zoneRender.shadowMap.type = THREE.PCFSoftShadowMap
zoneRender.physicallyCorrectLights = true
const setSize = () => {
  zoneRender.setSize(window.innerWidth, window.innerHeight)
}

const stats = require('./stats')
const controller = require('./controller')
const camera = require('./controller/camera')
const raycast = require('./zone/area/raycast')
const zone = window.scene = require('./zone')

window.addEventListener('resize', setSize)
setSize()


const render = () => {
  stats.begin()
  controller.update()
  raycast()
  zoneRender.render(zone, camera)
  stats.end()
  window.requestAnimationFrame(render)
}
window.requestAnimationFrame(render)
