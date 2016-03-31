const THREE = require('three')
const store = require('../../../store')

const build = exports.build = (name,x=0,y=0,z=0) =>{
    const loader = new THREE.JSONLoader()
    let mesh = new THREE.Mesh()
    let buildingName = store.building.name
    let currentFloor = store.building.currentFloor
    mesh.name = `${buildingName}-${currentFloor}-${name}`
    mesh.castShadow = true
    loader.load(`building/${store.building.name}/${currentFloor}/${name}.json`,(geometry,materials) =>{
      const material = new THREE.MeshFaceMaterial(materials)
      Object.assign(mesh,{geometry,material})
    })
    mesh.position.set(x,y,z)
    return mesh
}

