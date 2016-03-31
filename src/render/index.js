const THREE = window.THREE = require('three')
const store = require('../store')
require('./plugins/OrbitControls')
const zoneDom = document.querySelector('#zone')
const tableDom = document.querySelector('#table')
const zoneRender = module.exports = new THREE.WebGLRenderer({
  canvas: zoneDom,
  antialias: true
})
const tableRender  = new THREE.WebGLRenderer({
  canvas: tableDom,
  antialias: true
})
zoneRender.shadowMap.enabled = true
zoneRender.shadowMap.soft = true
zoneRender.shadowMap.type = THREE.PCFSoftShadowMap
zoneRender.physicallyCorrectLights = true
const setSize = () => {
  zoneRender.setSize(window.innerWidth, window.innerHeight)
  tableRender.setSize(window.innerWidth, window.innerHeight)
}

const stats = require('./stats')
const controller = require('./controller')
const camera = require('./controller/camera')
const raycast = require('./zone/area/raycast')
const zone  = require('./zone')

window.addEventListener('resize', setSize)
setSize()


tableRender.shadowMap.enabled = true
tableRender.shadowMap.soft = true
tableRender.shadowMap.type = THREE.PCFSoftShadowMap
tableRender.physicallyCorrectLights = true
const table  = require('./table')

const render = () => {
  stats.begin()
  controller.update()

  if(store.current == 'zone'){
    tableDom.style.display='none'
    raycast(zone)
    window.scene = zone
    zoneRender.render(zone, camera)
    }
    else{
        tableDom.style.display='block'
        raycast(table)
        window.scene = table
        tableRender.render(table,camera)
    }
  stats.end()
  window.requestAnimationFrame(render)
}
window.requestAnimationFrame(render)
