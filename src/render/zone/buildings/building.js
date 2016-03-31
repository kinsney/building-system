const THREE = require('three')
const store = require('../../../store')

const build = exports.build = (name,x=0,y=0,z=0) =>{
    const loader = new THREE.JSONLoader()
    let mesh = new THREE.Mesh()
    mesh.name = name
    mesh.castShadow = true
    loader.load(`building/${name}/building.json`,(geometry,materials) =>{
      const material = new THREE.MeshFaceMaterial(materials)
      Object.assign(mesh,{geometry,material})
    })
    mesh.position.set(x,y,z)
    return mesh
}

