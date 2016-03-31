const THREE = require('three')

const build = require('./floor').build
const store = require('../../../store')
const floorsObject = module.exports = new THREE.Object3D
floorsObject.name = 'floors'
floorsObject.rotation.y = Math.PI * 45 / 180
const floorHeight = 230
store.$watch('building.floors',(value) =>{
    if(value){
        value.forEach((devices,index) =>{
    let floor = build(`${index}`,index*floorHeight)
    floorsObject.add(floor)
    floorsObject.position.set(0,0,0)
        })
    }
},{deep:true})



// store.$watch('hoverObjectName',(newObject,oldObject) =>{
//     const newBuilding = window.scene.getObjectByName(newObject)
//     const oldBuilding = window.scene.getObjectByName(oldObject)
//     utils.hover(newBuilding,true)
//     utils.hover(oldBuilding,false)
// })
