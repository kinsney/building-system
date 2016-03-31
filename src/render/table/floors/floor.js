const THREE = require('three')
const store = require('../../../store')


const build = exports.build = (name,y=0) =>{
    const loader = new THREE.JSONLoader()
    let floorLength = store.building.floors.length
    let mesh = new THREE.Mesh()
    let buildingName = store.building.name
    mesh.name = `${buildingName}-${name}`
    mesh.castShadow = true
    loader.load(`building/${store.building.name}/${name}/floor.json`,(geometry,materials) =>{
      const material = new THREE.MeshFaceMaterial(materials)
      Object.assign(mesh,{geometry,material})
    })
    mesh.position.set(0,y,0)
    return mesh
}

