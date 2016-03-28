const THREE = require('three')
const controller = require('../../controller')
const store = require('../../../store')

const lights = module.exports = new THREE.Object3D()

const spotLight = Object.assign(new THREE.SpotLight(), {
  castShadow: true,
  onlyShadow: true,
  shadowCameraNear: 1000,
  shadowCameraFar: 20000,
  shadowCameraFov: 90,
  shadowBias: 0.001
})
spotLight.position.set(0, 10000, 0)
var bulbGeometry = new THREE.SphereGeometry( 10, 16, 8 );
var bulbLight = new THREE.PointLight( 0xffee88, 10, 3000, 2 );
var bulbMat = new THREE.MeshStandardMaterial( {
          emissive: 0xffffee,
          emissiveIntensity: 1,
          color: 0x000000
        });
bulbLight.add(new THREE.Mesh(bulbGeometry,bulbMat))
bulbLight.position.set(1500,2000,1500)
bulbLight.castShadow = true;
const downLight = new THREE.DirectionalLight(0xFFFFFF, 0.4)
downLight.position.set(0, 1, 0)
var hemiLight = new THREE.HemisphereLight( 0xddeeff, 0x0f0e0d, 0.6 );
var ambientLight = new THREE.AmbientLight('#0c0c0c')
lights.add(hemiLight,ambientLight,downLight,spotLight)

