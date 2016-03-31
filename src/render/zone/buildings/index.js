const THREE = require('three')

const build = require('./building').build
const utils = require('../utils')
const store = require('../../../store')
const buildingJson = require('../buildings.json')
const buildings = module.exports = new THREE.Object3D
buildings.name = 'buildings'
buildings.rotation.y = Math.PI * 45 / 180
Object.keys(buildingJson).sort().forEach(buildingName =>{
    let building = build(buildingName)
    buildings.add(building)
})
buildings.position.set(0,0,0)

store.$watch('hoverObjectName',(newObject,oldObject) =>{
    const newBuilding = window.scene.getObjectByName(newObject)
    const oldBuilding = window.scene.getObjectByName(oldObject)
    utils.hover(newBuilding,true)
    utils.hover(oldBuilding,false)
})
