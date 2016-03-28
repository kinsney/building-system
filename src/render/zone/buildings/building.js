const THREE = require('three')
const store = require('../../../store')

const building = module.exports = new THREE.Object3D
var loader = new THREE.JSONLoader()
var mesh = new THREE.Mesh()
mesh.name = building
mesh.castShadow = true
loader.load('building/building.json',(geometry,materials) =>{
  const material = new THREE.MeshFaceMaterial(materials)
  Object.assign(mesh,{geometry,material})
})
mesh.position.set(0,0,0)


building.add(mesh)
