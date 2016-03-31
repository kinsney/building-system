const THREE = require('three')
const floor = require('../environment/situation.js').floor
const store = require('../../../store')
const spotLight = Object.assign(new THREE.SpotLight(), {
  castShadow: true,
  onlyShadow: true,
  shadowCameraNear: 1000,
  shadowCameraFar: 20000,
  shadowCameraFov: 90,
  shadowBias: 0.001
})
spotLight.position.set(3500,5000,3800)
spotLight.target.position.set(5000,5000,3800)
// var bulbGeometry = new THREE.SphereGeometry( 30, 30, 30 );
// var bulbLight = new THREE.SpotLight( 0xffee88, 10, 3000, 2 );
// var bulbMat = new THREE.MeshStandardMaterial( {
//           emissive: 0xffffee,
//           emissiveIntensity: 1,
//           color: 0x000000
//         });
// bulbLight.add(new THREE.Mesh(bulbGeometry,bulbMat))
// bulbLight.position.set(3500,3800,4000)
// bulbLight.castShadow = true;

const streetlight = module.exports = window.streetlight =  new THREE.Object3D

/*then load a 3D modle mesh*/
var loader = new THREE.JSONLoader()
var mesh = new THREE.Mesh()
mesh.name = 'streetlight'
mesh.castShadow = true

loader.load('streetlight/streetlight.json',(geometry,materials) =>
{
  const material = new THREE.MeshFaceMaterial(materials)
  Object.assign(mesh,{geometry,material})
})
mesh.position.set(3500,0,3500)
streetlight.add(mesh,spotLight)
