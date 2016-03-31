const THREE = require('three')
const camera = require('../../controller/camera')
// const area = require('./')
const buildings = require('../buildings')
const store = require('../../../store')
const raycaster = new THREE.Raycaster()
const utils = require('../utils')
let hoverObjectName = store.hoverObjectName

module.exports = (scene) => {
  if (!store.hoverEnabled) {
    store.hoverObjectName = ''
    return
  }
  raycaster.setFromCamera(mouse, camera)
  const nearest = raycaster.intersectObject(scene, true)[0]
  const targetHoverObjectName = nearest != null ? nearest.object.name : ''
  if (hoverObjectName !== targetHoverObjectName) {
    store.hoverObjectName = hoverObjectName = targetHoverObjectName
  }
}


const mouse = module.exports.mouse = new THREE.Vector2()

