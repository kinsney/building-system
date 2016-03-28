const THREE = require('three')

const store = require('../../../store')
var bulbGeometry = new THREE.SphereGeometry( 10, 16, 8 );
var bulbLight = new THREE.PointLight( 0xffee88, 10, 3000, 2 );
var bulbMat = new THREE.MeshStandardMaterial( {
          emissive: 0xffffee,
          emissiveIntensity: 1,
          color: 0x000000
        });
bulbLight.add(new THREE.Mesh(bulbGeometry,bulbMat))
bulbLight.position.set(1500,4000,1500)
bulbLight.castShadow = true;

const streetlight = module.exports = window.streetlight =  new THREE.Object3D
var loader = new THREE.JSONLoader()
var mesh = new THREE.Mesh()
mesh.name = streetlight
mesh.castShadow = true
loader.load('streetlight/streetlight.json',(geometry,materials) =>{
  const material = new THREE.MeshFaceMaterial(materials)
  Object.assign(mesh,{geometry,material})
})
mesh.position.set(1500,2000,1500)
streetlight.add(mesh,bulbLight)
